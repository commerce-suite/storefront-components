import { IFrontSelectOption } from '../front-select/front-select.type';

interface IImage {
  src: string;
  alt?: string;
}

interface ISelectVariation {
  placeholder?: IFrontSelectOption;
  label: string;
  options: IFrontSelectOption[];
  modelKey: string;
  currentValue: any;
  selectId?: string;
}

export interface IInputSelectDataEvent {
  modelKey: string;
  value: any;
}

export interface IProductCard {
  name: string;
  image: IImage;
  price: number;
  priceBase?: number;
  selectVariations?: ISelectVariation[];
}
