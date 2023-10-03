import { newSpecPage } from '@stencil/core/testing';
import { BuyTogether } from '../buy-together';

describe('buy-together', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BuyTogether],
      html: `<buy-together></buy-together>`,
    });
    expect(page.root).toEqualHtml(`<buy-together>
    <section class="bagy-buy-together buy-together-container">
      <div class="product-main product-wrapper">
        <product-card></product-card>
      </div>
      <div class="plus-icon">
        <img alt="" src="./assets/icons/icon-plus.svg">
      </div>
      <div class="products-order-bump">
        <div class="product-wrapper">
          <div class="checkbox-wrapper">
            <front-checkbox inputid="299948"></front-checkbox>
          </div>
          <product-card inline=""></product-card>
        </div>
        <div class="product-wrapper">
          <div class="checkbox-wrapper">
            <front-checkbox inputid="299948"></front-checkbox>
          </div>
          <product-card inline=""></product-card>
        </div>
        <div class="product-wrapper">
          <div class="checkbox-wrapper">
            <front-checkbox inputid="299948"></front-checkbox>
          </div>
          <product-card inline=""></product-card>
        </div>
      </div>
      <div class="btn-buy">
        <front-button>
          Comprar
        </front-button>
          </div>
        </section>
      </buy-together>
    `);
  });
});
