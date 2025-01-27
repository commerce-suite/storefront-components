import { ComponentWillLoad } from '../../../stencil-public-runtime';
import { IProductCard } from './product-card.type';
export declare class ProductCard implements ComponentWillLoad {
    inline: boolean;
    product: IProductCard;
    showPriceBase: boolean;
    getClassWithInline(className: string): string;
    getPrice(): string;
    componentWillLoad(): void | Promise<void>;
    render(): any;
}
