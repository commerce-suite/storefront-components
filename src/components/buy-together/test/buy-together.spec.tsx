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
    expect(page.root).toEqualHtml(`
    <buy-together>
      <form>
        <div class="title-wrapper">
          <h2 class="title">${buyTogetherDataApi.title}</h2>
        </div>
        <section class="bagy-buy-together buy-together-container">
          <div class="product-main">
            <div class="product-wrapper">
              <product-card></product-card>
              <variation-selector productid="${buyTogetherDataApi.product.id}"></variation-selector>
            </div>
          </div>
          <div class="plus-icon">
            <img alt="" src="/assets/icons/icon-plus.svg" />
          </div>
          <div class="products-order-bump">
            <div class="product-wrapper">
              <div class="product-wrapper-pivot">
                <div class="checkbox-wrapper">
                  <input checked="" id="9480211" type="checkbox" />
                </div>
                <product-card inline=""></product-card>
              </div>
              <variation-selector productid="9480211"></variation-selector>
            </div>
            <div class="product-wrapper">
              <div class="product-wrapper-pivot">
                <div class="checkbox-wrapper">
                  <input checked="" id="9480233" type="checkbox" />
                </div>
                <product-card inline=""></product-card>
              </div>
              <variation-selector productid="9480233"></variation-selector>
            </div>
            <div class="product-wrapper">
              <div class="product-wrapper-pivot">
                <div class="checkbox-wrapper">
                  <input checked="" id="9480162" type="checkbox" />
                </div>
                <product-card inline=""></product-card>
              </div>
              <variation-selector productid="9480162"></variation-selector>
            </div>
          </div>
          <div class="buy-btn-wrapper">
            <button class="buy-btn" type="submit">${buyTogetherDataApi.buyButtonText}</button>
          </div>
        </section>
      </form>
    </buy-together>
    `);
  });
  it('renders as showcase', async () => {
    const page = await newSpecPage({
      components: [BuyTogether],
      html: `<buy-together showcase-mode></buy-together>`,
    });
    expect(page.root).toEqualHtml(`
    <buy-together showcase-mode>
      <form>
        <div class="title-wrapper">
          <h2 class="title">${buyTogetherDataApi.title}</h2>
        </div>
        <section class="bagy-buy-together buy-together-container -showcase">
          <div class="products-order-bump -showcase">
            <div class="product-wrapper">
              <div class="product-wrapper-pivot">
                <div class="checkbox-wrapper">
                  <input checked="" id="9480211" type="checkbox" />
                </div>
                <product-card inline=""></product-card>
              </div>
              <variation-selector productid="9480211" showcasemode=""></variation-selector>
            </div>
            <div class="product-wrapper">
              <div class="product-wrapper-pivot">
                <div class="checkbox-wrapper">
                  <input checked="" id="9480233" type="checkbox" />
                </div>
                <product-card inline=""></product-card>
              </div>
              <variation-selector productid="9480233" showcasemode=""></variation-selector>
            </div>
            <div class="product-wrapper">
              <div class="product-wrapper-pivot">
                <div class="checkbox-wrapper">
                  <input checked="" id="9480162" type="checkbox" />
                </div>
                <product-card inline=""></product-card>
              </div>
              <variation-selector productid="9480162" showcasemode=""></variation-selector>
            </div>
          </div>
          <div class="buy-btn-wrapper -showcase">
            <button class="buy-btn" type="submit">${buyTogetherDataApi.buyButtonText}</button>
          </div>
        </section>
      </form>
    </buy-together>
    `);
  });
  it('renders as simple showcase', async () => {
    const page = await newSpecPage({
      components: [BuyTogether],
      html: `<buy-together simple-showcase-mode></buy-together>`,
    });
    expect(page.root).toEqualHtml(`
      <buy-together simple-showcase-mode="">
        <showcase-related></showcase-related>
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
