import { EventEmitter } from '../../../stencil-public-runtime';
import { IColor } from '../product-card/product-card.type';
export declare class ColorSelector {
    colors: IColor[];
    selectedId?: number;
    colorSelected: EventEmitter<IColor>;
    private onSelectColor;
    private getColorStyle;
    render(): any;
}
