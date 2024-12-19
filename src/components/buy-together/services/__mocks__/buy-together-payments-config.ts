import { BuyTogetherPaymentConfig } from '../../buy-together.type';

export const buyTogetherPaymentConfig: BuyTogetherPaymentConfig[] = [
  {
    label: 'Pix',
    active: false,
    method: 'pix',
    position: 3,
  },
  {
    label: 'Boleto',
    active: false,
    method: 'billet',
    position: 2,
  },
  {
    label: 'Cartão de crédito',
    active: true,
    method: 'creditcard',
    position: 1,
    parcels_no_interest: true,
  },
];
