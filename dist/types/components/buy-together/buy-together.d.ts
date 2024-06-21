import { ComponentWillLoad, EventEmitter } from '../../stencil-public-runtime';
import { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from './buy-together.type';
import { IProductCard } from '../ui/product-card/product-card.type';
export declare class BuyTogether implements ComponentWillLoad {
    productId: number;
    variationId: number;
    promotionTitle: string;
    buyButtonText: string;
    showcaseMode?: boolean;
    private buyTogetherService;
    buyTogetherData: IBuyTogetherComponentData;
    onBuyTogetherAddCartEvent: EventEmitter<{
        showcaseMode: boolean;
        productsAdded: IProductCard[];
    }>;
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
    private resetAttributes;
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
