import { IBuyTogetherComponentData } from '../buy-together.type';
import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent } from '../../../components';
import { IChangeResult, IFrontBuyTogetherService } from './front-buy-together.type';
export declare class FrontBuyTogetherService implements IFrontBuyTogetherService {
    private buyTogetherPaymentConfig;
    constructor();
    private loadBuyTogetherPaymentConfig;
    private filterOutOriginalProducts;
    private getUniqueProducts;
    getBuyTogetherByProductId(productId: number, variationId?: number): Promise<IBuyTogetherComponentData>;
    getOnlyPivotProducts(productIds: number[]): Promise<any[]>;
    changeProductOptions(data: IInputSelectDataEvent, productTarget: Product): IChangeResult | null;
    changeColor(colorValue: string, productTarget: Product): IChangeResult;
    changeAttribute(attributeValue: string, productTarget: Product): IChangeResult;
    changeAttributeSecondary(attributeValue: string, productTarget: Product): IChangeResult;
    addToCart(variantIds: number[]): Promise<unknown>;
    private getBuyTogetherAppContent;
}
