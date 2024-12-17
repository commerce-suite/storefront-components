import { IProductCard } from './product-card.type';
import { IPaymentOption } from '../product-price/product-price.type';
export declare class ProductCard {
    inline: boolean;
    product: IProductCard;
    paymentOptions: IPaymentOption[];
    getClassWithInline(className: string): string;
    render(): any;
}
