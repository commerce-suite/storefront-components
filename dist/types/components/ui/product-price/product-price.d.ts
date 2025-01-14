import { BasePrice, PaymentOption } from './product-price.type';
export declare class ProductPrice {
    basePrice: BasePrice;
    paymentOptions?: PaymentOption[];
    private componentMap;
    private renderPaymentOption;
    render(): any;
}
