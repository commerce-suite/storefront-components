import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { ProductCard } from "../product-card";
import { product } from "../mocks/product-card.mock";
describe('product-card', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [ProductCard],
            template: () => h("product-card", { product: product }),
        });
        expect(page.root).toEqualHtml(`
    <product-card>
      <div class="product-container">
        <front-image class="image" imagesrc="${product.image.src}" textalt="Imagem do produto"></front-image>
        <div class="info">
          <span class="title">
            Bolsa Essencial
          </span>
          <div class="price">
            <span class="base">
              R$&nbsp;499,99
            </span>
            <span class="current">
              R$&nbsp;389,90
            </span>
          </div>
        </div>
      </div>
     </product-card>
    `);
    });
    it('renders with inline', async () => {
        const page = await newSpecPage({
            components: [ProductCard],
            template: () => h("product-card", { inline: true, product: product }),
        });
        expect(page.root).toEqualHtml(`
    <product-card>
      <div class="-inline  product-container">
        <front-image class="-inline image" imagesrc="${product.image.src}" textalt="Imagem do produto"></front-image>
        <div class="info">
          <span class="title">
            Bolsa Essencial
          </span>
          <div class="price">
            <span class="base">
              R$&nbsp;499,99
            </span>
            <span class="current">
              R$&nbsp;389,90
            </span>
          </div>
        </div>
      </div>
     </product-card>
    `);
    });
    it('renders without priceBase', async () => {
        const productWithoutPriceBase = Object.assign(Object.assign({}, product), { priceBase: null });
        const page = await newSpecPage({
            components: [ProductCard],
            template: () => h("product-card", { inline: true, product: productWithoutPriceBase }),
        });
        expect(page.root).toEqualHtml(`
    <product-card>
      <div class="-inline  product-container">
        <front-image class="-inline image" imagesrc="${product.image.src}" textalt="Imagem do produto"></front-image>
        <div class="info">
          <span class="title">
            Bolsa Essencial
          </span>
          <div class="price">
            <span class="current">
              R$&nbsp;389,90
            </span>
          </div>
        </div>
      </div>
     </product-card>
    `);
    });
});
//# sourceMappingURL=product-card.spec.js.map
