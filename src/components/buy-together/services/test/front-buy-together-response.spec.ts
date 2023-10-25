import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { buyTogetherData } from '../__mocks__/buy-together-data.mock';
import { FrontBuyTogetherResponse } from '../front-buy-together-response';

describe('FrontBuyTogetherResponse Class', () => {
  const data = buyTogetherData as BuyTogether;
  const frontBuyTogetherResponse = new FrontBuyTogetherResponse(data);
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
});
