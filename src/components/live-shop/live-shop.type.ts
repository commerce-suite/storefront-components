import { IImage } from '../ui/product-card/product-card.type';

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
  id: number;
  discount: ILiveShopDiscount;
  variations: ILiveShopVariation[];
}

export interface ILiveShop {
  id: number;
  hashRoom: string;
  name: string;
  slug: string;
  status: 'inLive' | 'finished' | 'warmup';
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
