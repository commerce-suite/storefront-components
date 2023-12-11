import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { buyTogetherData } from '../__mocks__/buy-together-data.mock';
import { FrontBuyTogetherFilter } from '../front-buy-together.filter';

describe('FrontBuyTogetherFilter Class', () => {
  let data: BuyTogether | null = null;
  beforeEach(() => {
    data = JSON.parse(JSON.stringify(buyTogetherData)) as BuyTogether;
  });

  it('It should filter by pivot product priceless', () => {
    const targetIndex = 0;
    data.productsPivot[targetIndex].variations = data.productsPivot[targetIndex].variations.map(
      variation => ({
        ...variation,
        price: null,
      }),
    );
    const outputExpected = [...data.productsPivot];
    const frontBuyTogetherFilter = new FrontBuyTogetherFilter(data);
    const responseFiltered = frontBuyTogetherFilter.applyFilters([
      { key: 'balance', isActive: false },
      { key: 'releaseDate', isActive: false },
    ]).getResponse;
    outputExpected.splice(targetIndex, 1);
    expect(outputExpected.map(({ id }) => id)).toEqual(
      responseFiltered.productsPivot.map(({ id }) => id),
    );
  });

  it('It should filter by pivot product balance', () => {
    const targetIndex = 1;
    data.productsPivot[targetIndex].variations = data.productsPivot[targetIndex].variations.map(
      variation => ({
        ...variation,
        balance: null,
      }),
    );
    const outputExpected = [...data.productsPivot];
    const frontBuyTogetherFilter = new FrontBuyTogetherFilter(data);
    const responseFiltered = frontBuyTogetherFilter.applyFilters([
      { key: 'priceless', isActive: false },
      { key: 'releaseDate', isActive: false },
    ]).getResponse;
    outputExpected.splice(targetIndex, 1);
    expect(outputExpected.map(({ id }) => id)).toEqual(
      responseFiltered.productsPivot.map(({ id }) => id),
    );
  });

  it('It should filter by pivot product releaseDate', () => {
    const targetIndex = 2;
    data.productsPivot[targetIndex].variations = data.productsPivot[targetIndex].variations.map(
      variation => ({
        ...variation,
        releaseDate: {
          now: '1000',
          releaseDate: '5000',
        },
      }),
    );
    const outputExpected = [...data.productsPivot];
    const frontBuyTogetherFilter = new FrontBuyTogetherFilter(data);
    const responseFiltered = frontBuyTogetherFilter.applyFilters([
      { key: 'priceless', isActive: false },
      { key: 'balance', isActive: false },
    ]).getResponse;
    outputExpected.splice(targetIndex, 1);
    expect(outputExpected.map(({ id }) => id)).toEqual(
      responseFiltered.productsPivot?.map(({ id }) => id),
    );
  });

  it('It should filter by main product releaseDate, returning null in response', () => {
    data.product.releaseDate = {
      now: '1000',
      releaseDate: '5000',
    };
    const outputExpected = null;
    const frontBuyTogetherFilter = new FrontBuyTogetherFilter(data);
    const responseFiltered = frontBuyTogetherFilter.applyFilters([
      { key: 'priceless', isActive: false },
      { key: 'balance', isActive: false },
    ]).getResponse;
    expect(outputExpected).toEqual(responseFiltered);
  });

  it('It should filter by main product balance, returning null in response', () => {
    data.product.balance = null;
    const outputExpected = null;
    const frontBuyTogetherFilter = new FrontBuyTogetherFilter(data);
    const responseFiltered = frontBuyTogetherFilter.applyFilters([
      { key: 'priceless', isActive: false },
      { key: 'releaseDate', isActive: false },
    ]).getResponse;
    expect(outputExpected).toEqual(responseFiltered);
  });

  it('It should filter by main product priceless, returning null in response', () => {
    data.product.price = null;
    const outputExpected = null;
    const frontBuyTogetherFilter = new FrontBuyTogetherFilter(data);
    const responseFiltered = frontBuyTogetherFilter.applyFilters([
      { key: 'balance', isActive: false },
      { key: 'releaseDate', isActive: false },
    ]).getResponse;
    expect(outputExpected).toEqual(responseFiltered);
  });
});
