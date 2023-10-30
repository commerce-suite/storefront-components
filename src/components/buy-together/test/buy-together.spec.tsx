import { newSpecPage } from '@stencil/core/testing';
import { BuyTogether as IBuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';

jest.mock('../services/front-buy-together.service');

import { BuyTogether } from '../buy-together';
import { buyTogetherData } from '../services/__mocks__/buy-together-data.mock';

describe('buy-together', () => {
  const buyTogetherDataApi = buyTogetherData as IBuyTogether;
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BuyTogether],
      html: `<buy-together></buy-together>`,
    });
    expect(page.root).toEqualHtml(`<buy-together>
    <form>
    <div class="title-wrapper">
        <h2 class="title">${buyTogetherDataApi.title}</h2>
    </div>
    <section class="bagy-buy-together buy-together-container">
      <div class="product-main">
        <div class="product-wrapper">
          <product-card></product-card>
        </div>
      </div>
      <div class="plus-icon">
        <img alt="" src="/assets/icons/icon-plus.svg">
      </div>
      <div class="products-order-bump">
        <div class="product-wrapper">
          <div class="checkbox-wrapper">
            <input checked="" id="9480211" type="checkbox">
          </div>
          <product-card inline=""></product-card>
        </div>
        <div class="product-wrapper">
          <div class="checkbox-wrapper">
            <input checked="" id="9480233" type="checkbox">
          </div>
          <product-card inline=""></product-card>
        </div>
        <div class="product-wrapper">
          <div class="checkbox-wrapper">
            <input checked="" id="9480162" type="checkbox">
          </div>
          <product-card inline=""></product-card>
        </div>
      </div>
      <div class="buy-btn-wrapper">
        <button class="buy-btn" type="submit">
          ${buyTogetherDataApi.buyButtonText}
        </button>
          </div>
      </section>
        </form>
      </buy-together>
    `);
  });

  it('renders loader', async () => {
    const page = await newSpecPage({
      components: [BuyTogether],
      html: `<buy-together></buy-together>`,
    });
    page.rootInstance.isLoading = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`<buy-together>
      <div class="loading-container">
        <span class="spinner" />
      </div>
      </buy-together>
    `);
  });
});
