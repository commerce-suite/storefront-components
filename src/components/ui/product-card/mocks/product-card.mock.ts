import { IProductCard } from '../product-card.type';

const product: IProductCard = {
  image: {
    src: 'https://cdn.dooca.store/816/products/camiseta-ce-e-fi-de-quem-marrom_1600x2000+fill_ffffff.jpg?v=1686845906',
  },
  name: 'Bolsa Essencial',
  price: 389.9,
  priceBase: 499.99,
};

const variations = [
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
];
const productWithVariations: IProductCard = {
  ...product,
  selectVariations: variations,
};

export { product, productWithVariations };
