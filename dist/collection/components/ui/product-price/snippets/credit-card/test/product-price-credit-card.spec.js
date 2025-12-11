import { newSpecPage } from "@stencil/core/testing";
import { ProductPriceCreditCard } from "../product-price-credit-card";
describe('product-price-credit-card', () => {
    it('should render product-price-credit-card with price only', async () => {
        const page = await newSpecPage({
            components: [ProductPriceCreditCard],
            html: `<product-price-credit-card price="199.90"></product-price-credit-card>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-credit-card price="199.90">
        <div class="payment-option payment-option-creditCard">
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
          </span>
        </div>
      </product-price-credit-card>
    `);
    });
    it('should render product-price-credit-card with installments without interest', async () => {
        const page = await newSpecPage({
            components: [ProductPriceCreditCard],
            html: `<product-price-credit-card price="199.90" parcels="10" parcel-price="19.99" has-interest="false"></product-price-credit-card>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-credit-card price="199.90" parcels="10" parcel-price="19.99" has-interest="false">
        <div class="payment-option payment-option-creditCard">
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
            <span class="credit-info">
              em até <span class="highlight">10x</span> de <span class="highlight">R$&nbsp;19,99</span> sem juros
            </span>
          </span>
        </div>
      </product-price-credit-card>
    `);
    });
    it('should render product-price-credit-card with installments with interest', async () => {
        const page = await newSpecPage({
            components: [ProductPriceCreditCard],
            html: `<product-price-credit-card price="199.90" parcels="12" parcel-price="21.50" has-interest="true"></product-price-credit-card>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-credit-card price="199.90" parcels="12" parcel-price="21.50" has-interest="true">
        <div class="payment-option payment-option-creditCard">
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
            <span class="credit-info">
              em até <span class="highlight">12x</span> de <span class="highlight">R$&nbsp;21,50</span> com juros
            </span>
          </span>
        </div>
      </product-price-credit-card>
    `);
    });
    it('should render with compare price and installments', async () => {
        const page = await newSpecPage({
            components: [ProductPriceCreditCard],
            html: `<product-price-credit-card price="199.90" price-compare="249.90" parcels="6" parcel-price="33.32" has-interest="false"></product-price-credit-card>`,
        });
        expect(page.root).toEqualHtml(`
      <product-price-credit-card price="199.90" price-compare="249.90" parcels="6" parcel-price="33.32" has-interest="false">
        <div class="payment-option payment-option-creditCard">
          <span class="price-compare">R$&nbsp;249,90</span>
          <span class="price-current">
            <span class="highlight">R$&nbsp;199,90</span>
            <span class="credit-info">
              em até <span class="highlight">6x</span> de <span class="highlight">R$&nbsp;33,32</span> sem juros
            </span>
          </span>
        </div>
      </product-price-credit-card>
    `);
    });
    it('should not render credit info when parcels or parcelPrice is missing', async () => {
        const page = await newSpecPage({
            components: [ProductPriceCreditCard],
            html: `<product-price-credit-card price="199.90" parcels="6"></product-price-credit-card>`,
        });
        const creditInfo = page.root.querySelector('.credit-info');
        expect(creditInfo).toBeFalsy();
    });
    it('should not render compare price when not provided', async () => {
        const page = await newSpecPage({
            components: [ProductPriceCreditCard],
            html: `<product-price-credit-card price="99.99"></product-price-credit-card>`,
        });
        const compareElement = page.root.querySelector('.price-compare');
        expect(compareElement).toBeFalsy();
    });
});
//# sourceMappingURL=product-price-credit-card.spec.js.map
