import { IProductCard } from '../../../components';

const productMock: IProductCard = {
  id: 1234,
  image: {
    src: 'https://cdn.dooca.store/816/products/camiseta-ce-e-fi-de-quem-marrom_1600x2000+fill_ffffff.jpg?v=1686845906',
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
