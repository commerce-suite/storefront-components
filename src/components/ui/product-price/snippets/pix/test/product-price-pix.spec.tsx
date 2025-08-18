import { newSpecPage } from '@stencil/core/testing';
import { ProductPricePix } from '../product-price-pix';

describe('product-price-pix', () => {
  it('should render product-price-pix with price only', async () => {
    const page = await newSpecPage({
      components: [ProductPricePix],
      html: `<product-price-pix price="199.90"></product-price-pix>`,
    });

    expect(page.root).toEqualHtml(`
      <product-price-pix price="199.90">
        <div class="payment-option payment-option-pix">
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span> no pix
          </span>
        </div>
      </product-price-pix>
    `);
  });

  it('should render product-price-pix with price and compare price', async () => {
    const page = await newSpecPage({
      components: [ProductPricePix],
      html: `<product-price-pix price="199.90" price-compare="249.90"></product-price-pix>`,
    });

    expect(page.root).toEqualHtml(`
      <product-price-pix price="199.90" price-compare="249.90">
        <div class="payment-option payment-option-pix">
          <span class="price-compare">R$&nbsp;249,90</span>
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span> no pix
          </span>
        </div>
      </product-price-pix>
    `);
  });

  it('should not render compare price when not provided', async () => {
    const page = await newSpecPage({
      components: [ProductPricePix],
      html: `<product-price-pix price="99.99"></product-price-pix>`,
    });

    const compareElement = page.root.querySelector('.price-compare');
    expect(compareElement).toBeFalsy();
  });

  it('should render with decimal values', async () => {
    const page = await newSpecPage({
      components: [ProductPricePix],
      html: `<product-price-pix price="29.99"></product-price-pix>`,
    });

    const highlightElement = page.root.querySelector('.highlight');
    expect(highlightElement.textContent).toBe('R$\u00A029,99');
  });

  it('should render with high values', async () => {
    const page = await newSpecPage({
      components: [ProductPricePix],
      html: `<product-price-pix price="1299.99"></product-price-pix>`,
    });

    const highlightElement = page.root.querySelector('.highlight');
    expect(highlightElement.textContent).toBe('R$\u00A01.299,99');
  });
});
