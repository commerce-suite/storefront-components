import { IProductCard } from './product-card.type';
export declare class ProductCard {
    inline: boolean;
    product: IProductCard;
    showSimplePrice: boolean;
    getClassWithInline(className: string): string;
    render(): any;
}
