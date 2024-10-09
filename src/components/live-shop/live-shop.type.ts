import { IImage } from '../ui/product-card/product-card.type';

export type ILiveShopStatus = 'inLive' | 'finished' | 'warmup' | string;

export interface ILiveShopDiscount {
  type: string;
  value: number;
}

interface ILiveShopMessage {
  title: string;
  content: string;
}

interface ILiveShopVariation {
  id: number;
  discount: ILiveShopDiscount;
}

interface ILiveShopProduct {
  productId: number;
  discount: ILiveShopDiscount;
  variations: ILiveShopVariation[];
}

export interface ILiveShop {
  id: number;
  hashRoom: string;
  name: string;
  slug: string;
  status: ILiveShopStatus;
  urlLive: string;
  title: string;
  banner: IImage;
  products: ILiveShopProduct[];
  messages: ILiveShopMessage[];
  alertVisible: boolean;
  chatVisible: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
