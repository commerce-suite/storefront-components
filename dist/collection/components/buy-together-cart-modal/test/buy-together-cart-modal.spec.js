import { newSpecPage } from "@stencil/core/testing";
import { BuyTogetherCartModal } from "../buy-together-cart-modal";
describe('buy-together-cart-modal', () => {
    it('should render buy-together-cart-modal', async () => {
        const page = await newSpecPage({
            components: [BuyTogetherCartModal],
            html: `<buy-together-cart-modal container-title="teste" product-id="2915659"></buy-together-cart-modal>`,
        });
        expect(page.root).toEqualHtml(`
      <buy-together-cart-modal container-title="teste" product-id="2915659">
      <section class="buy-together-cart">
        <header class="buy-together-cart-header">
          <div class="buy-together-cart-header-text">
            <img alt="add_icon" src="/assets/icons/add.svg">
            <h2>
              teste
            </h2>
          </div>
          <div class="header-buttons">
            <button class="header-buttons-primary">
              Finalizar compra
            </button>
            <button class="header-buttons-secondary">
              Continuar comprando
            </button>
          </div>
        </header>
        <div class="buy-together-wrapper">
          <buy-together id="buy-together" product-id="2915659" showcase-mode=""></buy-together>
        </div>
      </section>
    </buy-together-cart-modal>
    `);
    });
    it('should render buy-together-cart-modal without container-title', async () => {
        const page = await newSpecPage({
            components: [BuyTogetherCartModal],
            html: `<buy-together-cart-modal product-id="2915659"></buy-together-cart-modal>`,
        });
        expect(page.root).toEqualHtml(`
      <buy-together-cart-modal product-id="2915659">
      <section class="buy-together-cart">
        <header class="buy-together-cart-header">
          <div class="buy-together-cart-header-text">
            <img alt="add_icon" src="/assets/icons/add.svg">
            <h2>
              Produto adicionado ao carrinho!
            </h2>
          </div>
          <div class="header-buttons">
            <button class="header-buttons-primary">
              Finalizar compra
            </button>
            <button class="header-buttons-secondary">
              Continuar comprando
            </button>
          </div>
        </header>
        <div class="buy-together-wrapper">
          <buy-together id="buy-together" product-id="2915659" showcase-mode=""></buy-together>
        </div>
      </section>
    </buy-together-cart-modal>
    `);
    });
});
//# sourceMappingURL=buy-together-cart-modal.spec.js.map
