import { IProductCard } from './product-card.type';
import { BasePrice, PaymentOption } from '../product-price/product-price.type';
export declare class ProductCard {
    inline: boolean;
    product: IProductCard;
    basePrice: BasePrice;
    paymentOptions?: PaymentOption[];
    getClassWithInline(className: string): string;
    render(): any;
}
