export interface IPaymentOption {
  type: 'simple' | 'billet' | 'creditCard' | 'pix';
  price: number;
  priceCompare?: number;
  parcels?: number;
  parcelPrice?: number;
  hasInterest?: boolean;
}
