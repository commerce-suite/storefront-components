import { IImage } from '../product-card/product-card.type';

interface IMessageItem {
  type: 'message';
  title: string;
  content: string;
  highlight: boolean;
}

interface IProductItem {
  type: 'product';
  id: number;
  price: number;
  priceBase: number;
  image: IImage;
  name: string;
  specialPrice: number;
  highlight: boolean;
}

export type IHighlightCardItem = IMessageItem | IProductItem;
