import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IProductCard } from '../../components';
export declare enum EnumBuyTogetherOnLoadStatus {
    SHOULD_HIDDEN = "SHOULD_HIDDEN",
    SHOULD_SHOW = "SHOULD_SHOW"
}
export interface IProductOrderBump extends IProductCard {
    isCheck?: boolean;
}
export interface IBuyTogetherComponentData {
    productMain: IProductCard;
    products: IProductOrderBump[];
    originalData: BuyTogether;
}
export interface BuyTogetherContentPayment {
    label: string;
    active: boolean;
    method: 'billet' | 'creditcard' | 'pix';
    position: number;
    parcels_no_interest?: boolean;
}
