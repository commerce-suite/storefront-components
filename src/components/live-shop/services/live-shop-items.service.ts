import { ProductImage } from '@uxshop/storefront-core/dist/modules/product/ProductTypes';
import { IHighlightCardItem } from '../../../components';

export class LiveShopItemsService {
  items: any;

  constructor(items: any) {
    const products = items.edges.map((item: any) => item.node);
    this.items = this.adaptProducts(products);
  }

  getItems() {
    return this.items;
  }

  adaptProducts(items: any[]): IHighlightCardItem[] {
    const getImage = (item: ProductImage[] | null) => {
      return item?.length > 0 ? { src: item[0].src } : null;
    };

    return items.map(item => ({
      id: +item.id,
      type: 'product',
      price: item.price,
      priceBase: item.priceCompare,
      image: getImage(item.images),
      name: item.name,
      specialPrice: item.price,
      highlight: false,
    }));
  }

  adaptMessages(items: any): IHighlightCardItem[] {
    return items.map((item: any) => ({
      type: 'message',
      id: item.id,
      title: item.title,
      content: item.content,
      highlight: false,
    }));
  }

  setHighlightedItem(highlightedItem: IHighlightCardItem) {
    this.items.forEach((item: any) => {
      if (item.id === highlightedItem.id) {
        item.highlight = true;
      } else {
        item.highlight = false;
      }
    });
  }
}
