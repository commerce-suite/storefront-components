import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IProductCard } from '../../components';

export interface IProductOrderBump extends IProductCard {
  isCheck?: boolean;
}

export interface IBuyTogetherComponentData {
  productMain: IProductCard;
  products: IProductOrderBump[];
  originalData: BuyTogether;
}
