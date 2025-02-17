import { CreditCardPrice } from '../../product-price.type';
export declare class ProductPriceCreditCard implements CreditCardPrice {
    price: number;
    priceCompare?: number;
    parcels: number;
    parcelPrice: number;
    hasInterest: boolean;
    render(): any;
}
