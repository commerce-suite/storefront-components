import { IFrontSelectOption } from '../front-select/front-select.type';
import { PaymentOption } from '../product-price/product-price.type';

export type SelectAttributesType = 'color' | 'attributes' | 'secondaryAttributes';

export interface IImage {
  src: string;
  alt?: string;
}

export interface ISelectVariation {
  placeholder?: IFrontSelectOption;
  label: string;
  options: IFrontSelectOption[];
  selectType: SelectAttributesType;
  currentValue: any;
  selectId?: string;
}

export interface IInputSelectDataEvent {
  eventSelectType: SelectAttributesType;
  value: any;
  productId: number;
}

export interface IColor {
  id: number;
  name: string;
  slug: string;
  price: number;
  hexadecimal?: string | null;
  image?: IImage | null;
  productImage?: IImage | null;
  balance?: number;
  priceCompare?: number;
}

export interface IProductCard {
  id: number;
  name: string;
  image: IImage;
  price: number;
  productId?: number;
  slug?: string;
  priceBase?: number;
  selectVariations?: ISelectVariation[];
  paymentOptions?: PaymentOption[];
  gridId?: string;
  balance?: number;
}
