import { newSpecPage } from '@stencil/core/testing';
import { ProductCard } from '../product-card';

describe('product-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductCard],
      html: `<product-card></product-card>`,
    });
    expect(page.root).toEqualHtml(`
    <product-card>
    <div class="bagy-product-card">
      <figure class="product-thumb">
        <img alt="" class="thumb" src="">
      </figure>
      <div class="product-info">
        <h3 class="title">
          Nome do produto
        </h3>
      </div>
    </div>
  </product-card>
    `);
  });
});
