import { IColor, IImage } from '../product-card/product-card.type';

interface IItem {
  type: 'message' | 'product';
  highlight: boolean;
  show: boolean;
}

export interface IMessageItem extends IItem {
  type: 'message';
  title: string;
  content: string;
  position: number;
  id?: string;
  lastPosition?: number;
}

export interface IProductItem extends IItem {
  type: 'product';
  price: number;
  priceBase: number;
  image: IImage | null;
  name: string;
  slug: string;
  position: number;
  id?: number;
  specialPrice?: number;
  lastPosition?: number;
  gridId?: string;
  balance?: number;
  isSellOutOfStock?: boolean;
  colors?: IColor[];
  images?: IImage[];
}

export type IHighlightCardItem = IMessageItem | IProductItem;
