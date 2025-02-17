import { EventEmitter } from '../../../stencil-public-runtime';
import { IInputSelectDataEvent, ISelectVariation } from '../product-card/product-card.type';
export declare class VariationSelector {
    variations: ISelectVariation[];
    productId: number;
    showcaseMode: boolean;
    inputSelect: EventEmitter<IInputSelectDataEvent>;
    private onInputSelect;
    render(): any;
}
