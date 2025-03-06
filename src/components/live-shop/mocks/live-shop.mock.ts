import { ILiveShop } from '../live-shop.type';

export const liveShopMock: ILiveShop = {
  id: 1,
  hashRoom: 'abc123',
  name: 'Super Live Shop',
  slug: 'super-live-shop',
  status: 'inLive',
  urlLive: 'https://www.youtube.com/watch?v=Tii6ljAdSm0',
  title: 'Não perca! Live hoje às 19 horas.',
  banner: {
    src: 'https://picsum.photos/1920/1080',
    alt: 'Banner Image',
  },
  products: [
    {
      productId: 101,
      discount: {
        type: 'markup',
        value: 10,
      },
      variations: [
        {
          id: 1001,
          discount: {
            type: 'fixed',
            value: 5,
          },
        },
      ],
      position: 1,
    },
  ],
  messages: [
    {
      title: 'Boas vindas!',
      content: 'Bem vindo a primeira live shop!',
      position: 2,
    },
  ],
  alertVisible: true,
  chatVisible: false,
  isActive: true,
  createdAt: '2024-07-03T12:00:00Z',
  updatedAt: '2024-07-03T12:00:00Z',
};
