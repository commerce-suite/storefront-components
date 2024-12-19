import { BuyTogetherContentPayment } from '../../buy-together.type';

export const buyTogetherPaymentContent: BuyTogetherContentPayment[] = [
  {
    label: 'Pix',
    active: true,
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
