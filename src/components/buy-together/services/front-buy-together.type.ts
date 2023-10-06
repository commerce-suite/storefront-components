import { GqlProduct } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent, IProductCard } from '../../../components';
import { IBuyTogetherComponentData } from '../buy-together.type';

export interface IChangeResult {
  productTargetUpdated: GqlProduct;
  productCard: IProductCard;
}

export interface IFrontBuyTogetherService {
  getBuyTogetherByProductId(productId: number): Promise<IBuyTogetherComponentData>;
  changeProductOptions(
    data: IInputSelectDataEvent,
    productTarget: GqlProduct,
  ): IChangeResult | null;
  changeColor(colorValue: string, productTarget: GqlProduct): IChangeResult;
  changeAttribute(colorValue: string, productTarget: GqlProduct): IChangeResult;
  changeAttributeSecondary(colorValue: string, productTarget: GqlProduct): IChangeResult;
}
