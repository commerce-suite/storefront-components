import { newSpecPage } from "@stencil/core/testing";
import { ProductPriceBillet } from "../product-price-billet";
describe('product-price-billet', () => {
    it('should render product-price-billet with price only', async () => {
        const page = await newSpecPage({
            components: [ProductPriceBillet],
            html: `<product-price-billet price="199.90"></product-price-billet>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-billet price="199.90">
        <div class="payment-option payment-option-billet">
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span> no boleto
          </span>
        </div>
      </product-price-billet>
    `);
    });
    it('should render product-price-billet with price and compare price', async () => {
        const page = await newSpecPage({
            components: [ProductPriceBillet],
            html: `<product-price-billet price="199.90" price-compare="249.90"></product-price-billet>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-billet price="199.90" price-compare="249.90">
        <div class="payment-option payment-option-billet">
          <span class="price-compare">R$&nbsp;249,90</span>
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span> no boleto
          </span>
        </div>
      </product-price-billet>
    `);
    });
    it('should not render compare price when not provided', async () => {
        const page = await newSpecPage({
            components: [ProductPriceBillet],
            html: `<product-price-billet price="99.99"></product-price-billet>`,
        });
        const compareElement = page.root.querySelector('.price-compare');
        expect(compareElement).toBeFalsy();
    });
    it('should render with decimal values', async () => {
        const page = await newSpecPage({
            components: [ProductPriceBillet],
            html: `<product-price-billet price="29.99"></product-price-billet>`,
        });
        const highlightElement = page.root.querySelector('.highlight');
        expect(highlightElement.textContent).toBe('R$\u00A029,99');
    });
    it('should render with high values', async () => {
        const page = await newSpecPage({
            components: [ProductPriceBillet],
            html: `<product-price-billet price="1299.99"></product-price-billet>`,
        });
        const highlightElement = page.root.querySelector('.highlight');
        expect(highlightElement.textContent).toBe('R$\u00A01.299,99');
    });
});
//# sourceMappingURL=product-price-billet.spec.js.map
