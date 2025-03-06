import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { BuyTogetherPaymentConfig, IBuyTogetherComponentData } from '../buy-together.type';
export declare class FrontBuyTogetherResponse {
    protected response: BuyTogether;
    protected componentData: IBuyTogetherComponentData | null;
    constructor(response: BuyTogether);
    adapterToComponentData(buyTogetherPaymentConfig: BuyTogetherPaymentConfig[]): FrontBuyTogetherResponse;
    changeByVariationSelected(variationId?: number): this;
    get getComponentData(): IBuyTogetherComponentData;
    get getResponse(): BuyTogether;
}
