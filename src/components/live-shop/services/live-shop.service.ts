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
        'id',
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
        field: ['productId', 'colorId', 'id'],
      },
    });
  }

  public async getLiveShop(hashRoom: string): Promise<LiveShop> {
    this.liveShopData = await LiveShopService.getByHash(hashRoom);
    return this.liveShopData;
  }

  private groupByProductIdWithColorAndVariations(
    edges: { node: Product }[],
  ): Record<number, Product[][]> {
    const grouped: Record<number, Record<number, Product[]>> = {};

    for (const { node } of edges) {
      const productId = node.productId;
      const colorId = node.color?.id ?? 0;

      if (!grouped[productId]) grouped[productId] = {};
      if (!grouped[productId][colorId]) grouped[productId][colorId] = [];

      grouped[productId][colorId].push(node);
    }

    return Object.fromEntries(
      Object.entries(grouped).map(([productId, colorGroups]) => [
        +productId,
        Object.values(colorGroups),
      ]),
    );
  }

  private selectBaseNode(nodes: Product[]) {
    return nodes.find(n => n.images?.length) ?? nodes[0];
  }

  private buildProductItemGroupedByColor(
    base: Product,
    colorGroups: Product[][],
    liveProduct: LiveShopProduct,
  ): IProductItem {
    const validColorGroups = colorGroups.filter(group => group[0]?.color?.id);

    const shouldGroup = validColorGroups.length > 1;

    const colors = shouldGroup
      ? validColorGroups.map(group => {
          const variation = group[0];
          return {
            id: variation.color?.id,
            name: variation.color?.name,
            slug: variation.color?.slug,
            hexadecimal: variation.color?.hexadecimal,
            image: variation.color?.image?.src ? { src: variation.color.image.src } : null,
            price: variation.price,
            productImage: variation.images?.[0]?.src ? { src: variation.images[0].src } : null,
            balance: group.reduce((sum, v) => sum + (v.balance ?? 0), 0),
            priceCompare: variation.priceCompare,
            variations: group.map(v => ({
              id: v.id,
              price: v.price,
              balance: v.balance,
              image: v.images?.[0]?.src ? { src: v.images[0].src } : null,
            })),
          };
        })
      : null;

    const color = base.color;
    const gridId = color ? `${base.productId}-${color.id}` : `${base.productId}`;

    return {
      id: +base.productId,
      name: base.name,
      image: base.images?.[0]?.src ? { src: base.images[0].src } : null,
      images: (() => {
        const seenSrcs = new Set<string>();
        const result: { src: string; variationId: string }[] = [];

        for (const variation of colorGroups.flat()) {
          const variationId = variation.id;
          const images = variation.images ?? [];

          for (const image of images) {
            if (image?.src && !seenSrcs.has(image.src)) {
              seenSrcs.add(image.src);
              result.push({
                src: image.src,
                variationId,
              });
            }
          }
        }

        return result;
      })(),
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
      colors,
      ...(shouldGroup ? {} : { showStartingFrom: base.hasPriceRange }),
    };
  }

  private async productsToItemsAdapter(): Promise<IProductItem[]> {
    const products = await this.getProducts();
    const liveProducts = this.liveShopData?.products;

    const grouped = this.groupByProductIdWithColorAndVariations(products.edges);

    return Object.entries(grouped).map(([productId, colorGroups]) => {
      const allNodes = colorGroups.flat();
      const baseNode = this.selectBaseNode(allNodes);
      const liveProduct = liveProducts.find(p => p.productId === Number(productId));

      return this.buildProductItemGroupedByColor(baseNode, colorGroups, liveProduct);
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
