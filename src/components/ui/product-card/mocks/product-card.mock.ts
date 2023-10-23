import { IProductCard, ISelectVariation } from '../product-card.type';

const product: IProductCard = {
  id: 1234,
  image: {
    src: 'https://cdn.dooca.store/816/products/camiseta-ce-e-fi-de-quem-marrom_1600x2000+fill_ffffff.jpg?v=1686845906',
  },
  name: 'Bolsa Essencial',
  price: 389.9,
  priceBase: 499.99,
};

const variations: ISelectVariation[] = [
  {
    label: 'Cor',
    options: [
      { name: 'branco', value: '12321' },
      { name: 'azul', value: '12321' },
    ],
    currentValue: '12321',
    selectType: 'color',
  },
  {
    label: 'Tamanho',
    options: [
      { name: 'M', value: '789' },
      { name: 'P', value: '456' },
      { name: 'G', value: '123' },
    ],
    currentValue: '456',
    selectType: 'attributes',
  },
];
const productWithVariations: IProductCard = {
  ...product,
  selectVariations: variations,
};

export { product, productWithVariations };
