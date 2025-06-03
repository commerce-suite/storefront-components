import { BasePrice } from '../../product-price.type';
export declare class ProductPriceSimple implements BasePrice {
    price: number;
    priceCompare?: number;
    showStartingFrom?: boolean;
    render(): any;
}
