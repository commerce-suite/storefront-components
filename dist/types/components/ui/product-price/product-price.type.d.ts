export interface PaymentOption {
    type: 'simple' | 'billet' | 'creditCard' | 'pix';
    price: number;
    priceCompare?: number;
    parcels?: number;
    parcelPrice?: number;
    hasInterest?: boolean;
}
export interface BasePrice {
    price: number;
    priceCompare?: number;
}
export interface CreditCardPrice extends BasePrice {
    parcels: number;
    parcelPrice: number;
    hasInterest: boolean;
}
