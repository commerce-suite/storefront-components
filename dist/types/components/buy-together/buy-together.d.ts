import { ComponentWillLoad, EventEmitter } from '../../stencil-public-runtime';
import { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from './buy-together.type';
import { IProductCard } from '../ui/product-card/product-card.type';
export declare class BuyTogether implements ComponentWillLoad {
    productId: number;
    variationId: number;
    showcaseMode: boolean;
    promotionTitle: string;
    buyButtonText: string;
    private buyTogetherService;
    buyTogetherData: IBuyTogetherComponentData;
    onBuyTogetherAddCartEvent: EventEmitter<IProductCard[]>;
    loadBuyTogehter: EventEmitter<{
        status: EnumBuyTogetherOnLoadStatus;
        data: IBuyTogetherComponentData | null;
    }>;
    hasBuyTogether: boolean;
    isLoading: boolean;
    isAddingToCart: boolean;
    formIsValid: boolean;
    getBuyTogetherData(): Promise<IBuyTogetherComponentData>;
    load(): Promise<void>;
    private checkValidForm;
    private emitOnLoad;
    private selectOrderBump;
    private onInputSelectProductMain;
    private onInputSelectOrderBump;
    private onAddItemsToCart;
    private showcaseModeClass;
    onClickBuyButtonHandler(event: CustomEvent<IProductCard>): void;
    watchPropHandler(newValue: IBuyTogetherComponentData): void;
    watchVariationIdChange(): void;
    watchProductIdChange(): void;
    componentWillLoad(): void | Promise<void>;
    render(): any;
}
