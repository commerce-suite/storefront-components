import { IImage } from '../product-card/product-card.type';

interface IItem {
  type: 'message' | 'product';
  highlight: boolean;
}

interface IMessageItem extends IItem {
  type: 'message';
  title: string;
  content: string;
}

interface IProductItem extends IItem {
  type: 'product';
  id: number;
  price: number;
  priceBase: number;
  image: IImage;
  name: string;
  specialPrice?: number;
}

export type IHighlightCardItem = IMessageItem | IProductItem;
