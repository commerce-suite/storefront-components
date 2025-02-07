import { getAssetPath, h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { HighlightCard } from "../highlight-card";
import { items } from "../mocks/highlight-card.mock";
describe('highlight-card', () => {
    it('should render highlight-card without any props', async () => {
        const page = await newSpecPage({
            components: [HighlightCard],
            html: `<highlight-card></highlight-card>`,
        });
        expect(page.root).toEqualHtml(`
      <highlight-card>
        <div class="highlight-card"></div>
      </highlight-card>
    `);
    });
    it('should render highlight-card with items', async () => {
        const page = await newSpecPage({
            components: [HighlightCard],
            template: () => h("highlight-card", { items: items }),
        });
        expect(page.root).toEqualHtml(`
      <highlight-card>
        <div class="highlight-card">
          <div class="highlight-card-container">
            <div class="highlight-card-header">
              <span class="highlight-card-header-title">Destaque</span>
            </div>
            <div>
              <div class="highlight-card-item highlight-card-item-highlighted">
                <div class="highlight-card-message">
                  <h4 class="highlight-card-message-title">Que bom ver vocês por aqui!</h4>
                  <p class="highlight-card-message-content">Estamos animados para compartilhar as melhores ofertas, produtos exclusivos e momentos especiais com vocês. Fiquem ligados e aproveitem ao máximo!</p>
                </div>
              </div>
              <div class="highlight-card-separator"></div>
            </div>
            <div>
              <div class="highlight-card-item highlight-card-item-highlighted">
                <div class="highlight-card-product">
                  <product-card custom-class="highlight-custom-style" inline=""></product-card>
                  <div class="highlight-card-product-cart-icon">
                    <img src=${getAssetPath('./assets/icons/add-to-cart.svg')} alt="add_to_cart_icon">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="highlight-card-item">
            <div class="highlight-card-message">
              <h4 class="highlight-card-message-title">
                Que bom ver vocês por aqui!
              </h4>
              <p class="highlight-card-message-content">
                Estamos animados para compartilhar as melhores ofertas, produtos exclusivos e momentos especiais com vocês. Fiquem ligados e aproveitem ao máximo!
              </p>
            </div>
          </div>
        </div>
      </highlight-card>
    `);
    });
});
//# sourceMappingURL=highlight-card.spec.js.map
