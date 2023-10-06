import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { buyTogetherData } from '../__mocks__/buy-together-data.mock';
import { FrontBuyTogetherAdapter } from '../front-buy-together.adapter';

describe('FrontBuyTogetherAdapter', () => {
  it('It should adpter to component ProductCard from GqlProduct - adapterProductToProductCard', () => {
    const data = buyTogetherData as BuyTogether;
    const result = FrontBuyTogetherAdapter.adapterProductToProductCard(data.product);
    const expectObject = {
      price: '309.90',
      priceBase: 349.9,
      id: '9480245',
      image: {
        productId: null,
        src: 'https://optimizer.dchomolog.dooca.store/103779/products/ct23970001-a-107x1-6.jpg?v=1696602535',
        alt: null,
        colorIds: [266424],
        variationIds: [],
        position: 1,
      },
      name: 'Chuck Taylor All Star Lift Glam',
      selectVariations: [
        {
          label: 'Cor',
          options: [
            { name: 'Marinho Escuro', value: 266424, disabled: false },
            { name: 'Lilas Claro', value: 266425, disabled: false },
          ],
          currentValue: 266424,
          selectType: 'color',
        },
        {
          label: 'Tamanho calçados',
          options: [
            { name: '35', value: 462520, disabled: false },
            { name: '36', value: 462521, disabled: false },
            { name: '37', value: 462522, disabled: false },
            { name: '38', value: 462523, disabled: false },
          ],
          selectType: 'attributes',
          currentValue: 462520,
        },
        {
          label: 'Material',
          options: [
            { value: 462516, name: 'Sintético', disabled: false },
            { value: 462515, name: 'Couro', disabled: true },
          ],
          selectType: 'secondaryAttributes',
          currentValue: 462516,
        },
      ],
    };
    expect(result).toEqual(expectObject);
  });
});
