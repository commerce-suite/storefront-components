import { newSpecPage } from '@stencil/core/testing';
import { BuyTogether } from '../buy-together';

describe('buy-together', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BuyTogether],
      html: `<buy-together></buy-together>`,
    });
    expect(page.root).toEqualHtml(`<buy-together>
    <section class="bagy-buy-together">
      <div class="product-box">
        <product-card></product-card>
      </div>
    </section>
  </buy-together>
    `);
  });
});
