import { LiveShopService, ProductService } from '@uxshop/storefront-core';
import {
  LiveShop,
  LiveShopProduct,
} from '@uxshop/storefront-core/dist/modules/live-shop/LiveShopTypes';
import { IHighlightCardItem } from '../../../components';
import { IMessageItem, IProductItem } from '../../ui/highlight-card/highlight-card.type';
import { SocketMessage } from '../live-shop.type';
import { Product } from '@uxshop/storefront-core/dist/modules/product/ProductTypes';

export class LiveShopHandler {
  private liveShopData: LiveShop;

  private async getProducts() {
    const productIds = this.liveShopData.products.map(product => product.productId);
    return await ProductService.getList({
      fields: [
        'name',
        'images { src }',
        'price',
        'priceCompare',
        'productId',
        'slug',
        'hasPriceRange',
        'balance',
        'isSellOutOfStock',
        'color { id, name, hexadecimal, slug, image { src } }',
      ],
      filter: { productIds, page: 0, first: 1000 },
      agg: {
        field: ['productId', 'colorId'],
      },
    });
  }

  public async getLiveShop(hashRoom: string): Promise<LiveShop> {
    this.liveShopData = await LiveShopService.getByHash(hashRoom);
    return this.liveShopData;
  }

  private groupByProductId(edges: { node: Product }[]): Record<string, Product[]> {
    return edges.reduce(
      (acc, { node }) => {
        const key = node.productId;
        acc[key] = acc[key] || [];
        acc[key].push(node);
        return acc;
      },
      {} as Record<string, Product[]>,
    );
  }

  private selectBaseNode(nodes: Product[]) {
    return nodes.find(n => n.images?.length) ?? nodes[0];
  }

  private buildProductItem(
    base: Product,
    nodes: Product[],
    liveProduct: LiveShopProduct,
  ): IProductItem {
    const shouldGroup = nodes.length > 1;

    const colors = shouldGroup
      ? nodes.map(node => ({
          id: node.color?.id,
          name: node.color?.name,
          slug: node.color?.slug,
          hexadecimal: node.color?.hexadecimal,
          image: node.color?.image?.src ? { src: node.color.image.src } : null,
          price: node.price,
          productImage: node.images?.[0]?.src ? { src: node.images[0].src } : null,
        }))
      : null;

    const color = base.color;
    const gridId = color ? `${base.productId}-${color.id}` : `${base.productId}`;

    return {
      id: +base.productId,
      name: base.name,
      image: base.images?.[0]?.src ? { src: base.images[0].src } : null,
      price: base.price,
      priceBase: base.priceCompare,
      balance: base.balance,
      isSellOutOfStock: base.isSellOutOfStock,
      gridId,
      slug: base.slug,
      type: 'product',
      show: liveProduct?.status && liveProduct.status !== 'hidden',
      highlight: liveProduct?.status === 'highlighting',
      position: liveProduct?.position ?? 0,
      ...(colors ? { colors } : {}),
      ...(shouldGroup ? {} : { showStartingFrom: base.hasPriceRange }),
    };
  }

  private async productsToItemsAdapter(): Promise<IProductItem[]> {
    const products = await this.getProducts();
    const liveProducts = this.liveShopData?.products;

    const grouped = this.groupByProductId(products.edges);

    return Object.entries(grouped).map(([productId, nodes]) => {
      const baseNode = this.selectBaseNode(nodes);
      const liveProduct = liveProducts.find(p => p.productId === Number(productId));

      return this.buildProductItem(baseNode, nodes, liveProduct);
    });
  }

  private messagesToItemsAdapter(): IMessageItem[] {
    return this.liveShopData.messages.map(message => ({
      id: message.id ?? null,
      title: message.title,
      content: message.content,
      type: 'message',
      show: message.status && message.status !== 'hidden',
      highlight: message.status === 'highlighting',
      position: message.position ?? 0,
    }));
  }

  public updateItems(items: IHighlightCardItem[], message: SocketMessage): IHighlightCardItem[] {
    const maxPosition = Math.max(...items.map(i => i.position ?? 0));

    const updatedItems = items.map(item => {
      if (item.id !== message.id || item.type !== message.type) return item;

      const isHighlightOn = message.status === 'highlighting';
      const wasHighlightOn = !!item.highlight;
      const isHidden = message.status === 'hidden';

      if (isHighlightOn && !wasHighlightOn) {
        return {
          ...item,
          show: !isHidden,
          highlight: true,
          lastPosition: item.lastPosition ?? item.position,
          position: maxPosition + 1,
        };
      }

      if (!isHighlightOn && wasHighlightOn) {
        return {
          ...item,
          show: !isHidden,
          highlight: false,
          position: item.lastPosition ?? item.position,
          lastPosition: undefined,
        };
      }

      return {
        ...item,
        show: !isHidden,
        highlight: isHighlightOn,
        position: maxPosition + 1,
      };
    });

    updatedItems.sort((a, b) => (b.position ?? 0) - (a.position ?? 0));
    return updatedItems;
  }

  public async getItems(): Promise<IHighlightCardItem[]> {
    const productItems = await this.productsToItemsAdapter();
    const messageItems = this.messagesToItemsAdapter();

    const allItems = [...productItems, ...messageItems];

    allItems.sort((a, b) => b.position - a.position);

    return allItems;
  }
}
