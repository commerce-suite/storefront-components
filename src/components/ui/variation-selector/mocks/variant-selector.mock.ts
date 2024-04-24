import { ISelectVariation } from '../../product-card/product-card.type';

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

export { variations };
