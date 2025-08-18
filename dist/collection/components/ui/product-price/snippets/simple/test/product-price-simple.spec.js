import { newSpecPage } from "@stencil/core/testing";
import { ProductPriceSimple } from "../product-price-simple";
describe('product-price-simple', () => {
    it('should render product-price-simple with price only', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="199.90"></product-price-simple>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-simple price="199.90">
        <div class="payment-option payment-option-simple">
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
          </span>
        </div>
      </product-price-simple>
    `);
    });
    it('should render product-price-simple with price and compare price', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="199.90" price-compare="249.90"></product-price-simple>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-simple price="199.90" price-compare="249.90">
        <div class="payment-option payment-option-simple">
          <span class="price-compare">R$&nbsp;249,90</span>
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
          </span>
        </div>
      </product-price-simple>
    `);
    });
    it('should render product-price-simple with starting from text', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="199.90" show-starting-from="true"></product-price-simple>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-simple price="199.90" show-starting-from="true">
        <div class="payment-option payment-option-simple">
          <span class="starting-from">A partir de</span>
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
          </span>
        </div>
      </product-price-simple>
    `);
    });
    it('should not show compare price when showStartingFrom is true', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="199.90" price-compare="249.90" show-starting-from="true"></product-price-simple>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-simple price="199.90" price-compare="249.90" show-starting-from="true">
        <div class="payment-option payment-option-simple">
          <span class="starting-from">A partir de</span>
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
          </span>
        </div>
      </product-price-simple>
    `);
        const compareElement = page.root.querySelector('.price-compare');
        expect(compareElement).toBeFalsy();
    });
    it('should not render compare price when not provided', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="99.99"></product-price-simple>`,
        });
        const compareElement = page.root.querySelector('.price-compare');
        expect(compareElement).toBeFalsy();
    });
    it('should render with decimal values', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="29.99"></product-price-simple>`,
        });
        const highlightElement = page.root.querySelector('.highlight');
        expect(highlightElement.textContent).toBe('R$\u00A029,99');
    });
    it('should render with high values', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="1299.99"></product-price-simple>`,
        });
        const highlightElement = page.root.querySelector('.highlight');
        expect(highlightElement.textContent).toBe('R$\u00A01.299,99');
    });
    it('should handle showStartingFrom default value', async () => {
        const page = await newSpecPage({
            components: [ProductPriceSimple],
            html: `<product-price-simple price="199.90"></product-price-simple>`,
        });
        expect(page.rootInstance.showStartingFrom).toBe(false);
        const startingFromElement = page.root.querySelector('.starting-from');
        expect(startingFromElement).toBeFalsy();
    });
});
//# sourceMappingURL=product-price-simple.spec.js.map
