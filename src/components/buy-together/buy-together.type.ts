import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IProductCard } from '../../components';

export enum EnumBuyTogetherOnLoadStatus {
  SHOULD_HIDDEN = 'SHOULD_HIDDEN',
  SHOULD_SHOW = 'SHOULD_SHOW',
}

export interface IProductOrderBump extends IProductCard {
  isCheck?: boolean;
}

export interface IBuyTogetherComponentData {
  productMain: IProductCard;
  products: IProductOrderBump[];
  originalData: BuyTogether;
}
