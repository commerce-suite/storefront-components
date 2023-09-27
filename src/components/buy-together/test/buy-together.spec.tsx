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
      <product-card></product-card>
    </section>
  </buy-together>
    `);
  });
});
