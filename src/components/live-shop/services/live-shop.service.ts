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
      fields: ['name', 'images { src }', 'price', 'priceCompare', 'productId', 'slug'],
      filter: { productIds },
    });
  }

  async getLiveShop(hashRoom: string): Promise<LiveShop> {
    this.liveShopData = await LiveShopService.getByHash(hashRoom);
    return this.liveShopData;
  }

  async productsToItemsAdapter(): Promise<IProductItem[]> {
    const products = await this.getProducts();
    return products.edges.map(({ node }) => ({
      id: +node.productId,
      name: node.name,
      image: (node.images[0] as IImage) ?? null,
      price: node.price,
      priceBase: node.priceCompare,
      title: '',
      content: '',
      type: 'product',
      highlight: false,
      slug: node.slug,
      show: true,
    }));
  }

  messagesToItemsAdapter(): IMessageItem[] {
    return this.liveShopData.messages.map(message => ({
      id: message.id ?? null,
      title: message.title,
      content: message.content,
      type: 'message',
      highlight: false,
      show: true,
    }));
  }

  updateItems(items: IHighlightCardItem[], message: SocketMessage): IHighlightCardItem[] {
    const updatedItems = items.map(item => {
      if (item.id === message.id && item.type === message.type) {
        return {
          ...item,
          show: message.status !== 'hidden',
          highlight: message.status === 'highlighting',
        };
      }
      return item;
    });

    return updatedItems;
  }

  async getItems(): Promise<IHighlightCardItem[]> {
    const productItems = await this.productsToItemsAdapter();
    const messageItems = this.messagesToItemsAdapter();
    return [...productItems, ...messageItems];
  }
}
