import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ProductPrice } from '../product-price';
import { product } from '../../product-card/mocks/product-card.mock';

describe('product-card', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => <product-price product={product}></product-price>,
    });
    expect(page.root).toEqualHtml(`
    <product-price>
     <div class="product-price">
      <span class="product-price-base">
       R$&nbsp;499,99
      </span>
      <span class="product-price-current">
       R$&nbsp;389,90
      </span>
     </div>
    </product-price>
    `);
  });

  it('should render without showSimplePrice', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => <product-price product={product} showSimplePrice={false}></product-price>,
    });
    expect(page.root).toEqualHtml(`
    <product-price>
     <p>
      Outras formas de pagamentos...
     </p>
    </product-price>
    `);
  });
});
