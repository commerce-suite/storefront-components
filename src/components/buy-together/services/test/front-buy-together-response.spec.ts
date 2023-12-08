import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { buyTogetherData } from '../__mocks__/buy-together-data.mock';
import { buyTogetherComponentData } from '../__mocks__/buy-together-component-data.mock';
import { FrontBuyTogetherResponse } from '../front-buy-together-response';

describe('FrontBuyTogetherResponse Class', () => {
  let frontBuyTogetherResponse: FrontBuyTogetherResponse;
  let data: BuyTogether;
  beforeEach(() => {
    data = JSON.parse(JSON.stringify(buyTogetherData)) as BuyTogether;
    frontBuyTogetherResponse = new FrontBuyTogetherResponse(data);
  });

  it('It should change selected variation by variationId', () => {
    const variationId = 9480237;
    const variation = data.product.variations.find(({ id }) => Number(id) === variationId);
    const productWithVariation =
      frontBuyTogetherResponse.changeByVariationSelected(variationId).getResponse.product;
    expect(productWithVariation).toEqual({
      ...variation,
      variations: productWithVariation.variations,
    });
  });

  it('It should adapter to component data for buy-together', () => {
    const componentData = frontBuyTogetherResponse.adapterToComponentData().getComponentData;
    expect(componentData).toEqual(buyTogetherComponentData);
  });

  it('It should return null in adapterToComponentData when no exist pivot product', () => {
    data.productsPivot = [];
    frontBuyTogetherResponse = new FrontBuyTogetherResponse(data);
    const componentData = frontBuyTogetherResponse.adapterToComponentData().getComponentData;
    expect(componentData).toEqual(null);
  });
});
