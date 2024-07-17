import { ILiveShop } from '../live-shop.type';

export const liveShopMock: ILiveShop = {
  id: 1,
  hashRoom: 'abc123',
  name: 'Super Live Shop',
  slug: 'super-live-shop',
  status: 'inLive',
  urlLive: 'https://www.youtube.com/watch?v=4wURebw0QXo',
  title: 'Não perca! Live hoje às 19 horas.',
  banner: {
    src: 'https://picsum.photos/1920/1080',
    alt: 'Banner Image',
  },
  products: [
    {
      id: 101,
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
    },
  ],
  messages: [
    {
      title: 'Boas vindas!',
      content: 'Bem vindo a primeira live shop!',
    },
  ],
  alertVisible: true,
  chatVisible: false,
  isActive: true,
  createdAt: '2024-07-03T12:00:00Z',
  updatedAt: '2024-07-03T12:00:00Z',
};
