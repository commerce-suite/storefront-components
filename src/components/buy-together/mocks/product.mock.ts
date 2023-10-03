import { IProductCard } from '../../../components';

const productMock: IProductCard = {
  image: {
    src: 'https://blog.myahaas.com.br/wp-content/uploads/2021/08/bolsas-que-combinam-com-tudo-como-comprar-900x900.jpg',
  },
  name: 'Bolsa Essencial',
  price: 389.9,
  priceBase: 499.99,
  selectVariations: [
    {
      label: 'Cor',
      options: [
        { name: 'branco', value: '12321' },
        { name: 'azul', value: '12321' },
      ],
      currentValue: '12321',
      modelKey: 'color_id',
    },
    {
      label: 'Tamanho',
      options: [
        { name: 'M', value: '789' },
        { name: 'P', value: '456' },
        { name: 'G', value: '123' },
      ],
      currentValue: '456',
      modelKey: 'lenght_id',
    },
    {
      label: 'Material',
      options: [
        { name: 'Lã', value: '147' },
        { name: 'Algodão', value: '258' },
        { name: 'Setim', value: '369' },
      ],
      currentValue: null,
      modelKey: 'manufactured_id',
    },
  ],
};

export default productMock;
