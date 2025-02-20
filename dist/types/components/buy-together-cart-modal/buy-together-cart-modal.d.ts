import { EventEmitter } from '../../stencil-public-runtime';
export declare class BuyTogetherCartModal {
    containerTitle: string;
    productId: number;
    variationId?: number;
    promotionTitle?: string;
    buyButtonText?: string;
    onFinishBuyButton: EventEmitter<void>;
    onContinueBuyButton: EventEmitter<void>;
    componentRendered: EventEmitter<void>;
    componentDidLoad(): void;
    render(): any;
}
