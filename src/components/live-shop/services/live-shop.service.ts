import { LiveShopService, ProductService } from '@uxshop/storefront-core';
import { LiveShop } from '@uxshop/storefront-core/dist/modules/live-shop/LiveShopTypes';
import { IHighlightCardItem } from '../../../components';
import { IImage } from '../../ui/product-card/product-card.type';
import { IMessageItem, IProductItem } from '../../ui/highlight-card/highlight-card.type';
import { SocketMessage } from '../live-shop.type';

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
        'colors { id, name, hexadecimal, slug }',
      ],
      filter: { productIds, page: 0, first: productIds.length },
    });
  }

  async getLiveShop(hashRoom: string): Promise<LiveShop> {
    this.liveShopData = await LiveShopService.getByHash(hashRoom);
    return this.liveShopData;
  }

  async productsToItemsAdapter(): Promise<IProductItem[]> {
    const products = await this.getProducts();
    const liveProducts = this.liveShopData?.products;

    return products.edges.map(({ node }) => {
      const liveProduct = liveProducts.find(product => product.productId === node.productId);
      const status = liveProduct?.status ?? null;
      const firstColor = node.colors?.[0] ?? null;

      return {
        id: +node.productId,
        name: node.name,
        image: (node?.images?.[0] as IImage) ?? null,
        price: node.price,
        balance: node.balance,
        isSellOutOfStock: node.isSellOutOfStock,
        colors: node.colors,
        gridId: firstColor ? `${node.productId}-${firstColor.id}` : `${node.productId}`,
        priceBase: node.priceCompare,
        title: '',
        content: '',
        type: 'product',
        slug: node.slug,
        show: status && status !== 'hidden',
        highlight: status === 'highlighting',
        position: liveProduct?.position ?? 0,
        showStartingFrom: node.hasPriceRange,
      };
    });
  }

  messagesToItemsAdapter(): IMessageItem[] {
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

  updateItems(items: IHighlightCardItem[], message: SocketMessage): IHighlightCardItem[] {
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

  async getItems(): Promise<IHighlightCardItem[]> {
    const productItems = await this.productsToItemsAdapter();
    const messageItems = this.messagesToItemsAdapter();

    const allItems = [...productItems, ...messageItems];

    allItems.sort((a, b) => b.position - a.position);

    return allItems;
  }
}
