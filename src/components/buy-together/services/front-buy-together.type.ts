import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent, IProductCard } from '../../../components';
import { IBuyTogetherComponentData } from '../buy-together.type';

export interface IChangeResult {
  productTargetUpdated: Product;
  productCard: IProductCard;
}

export interface IFrontBuyTogetherService {
  getBuyTogetherByProductId(productId: number): Promise<IBuyTogetherComponentData>;
  changeProductOptions(data: IInputSelectDataEvent, productTarget: Product): IChangeResult | null;
  changeColor(colorValue: string, productTarget: Product): IChangeResult;
  changeAttribute(colorValue: string, productTarget: Product): IChangeResult;
  changeAttributeSecondary(colorValue: string, productTarget: Product): IChangeResult;
}
