import { IImage } from '../product-card/product-card.type';

interface IItem {
  type: 'message' | 'product';
  highlight: boolean;
}

interface IMessageItem extends IItem {
  type: 'message';
  title: string;
  content: string;
  id?: number;
}

interface IProductItem extends IItem {
  type: 'product';
  price: number;
  priceBase: number;
  image: IImage | null;
  name: string;
  id?: number;
  specialPrice?: number;
}

export type IHighlightCardItem = IMessageItem | IProductItem;
