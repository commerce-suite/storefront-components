import { IFrontSelectOption } from '../front-select/front-select.type';

export type SelectAttributesType = 'color' | 'attributes' | 'secondaryAttributes';

interface IImage {
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

export interface IProductCard {
  id: number;
  name: string;
  image: IImage;
  price: number;
  productId?: number;
  slug?: string;
  priceBase?: number;
  selectVariations?: ISelectVariation[];
  specialPrice?: number | null;
}
