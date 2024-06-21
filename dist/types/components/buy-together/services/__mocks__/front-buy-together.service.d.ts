import { IChangeResult, IFrontBuyTogetherService } from '../front-buy-together.type';
import { IBuyTogetherComponentData } from '../../buy-together.type';
import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent } from '../../../../components';
declare class FrontBuyTogetherServiceMock implements IFrontBuyTogetherService {
    changeProductOptions(data: IInputSelectDataEvent, productTarget: Product): IChangeResult;
    changeColor(colorValue: string, productTarget: Product): IChangeResult;
    changeAttribute(colorValue: string, productTarget: Product): IChangeResult;
    changeAttributeSecondary(colorValue: string, productTarget: Product): IChangeResult;
    getBuyTogetherByProductId(): Promise<IBuyTogetherComponentData>;
}
export { FrontBuyTogetherServiceMock as FrontBuyTogetherService };
