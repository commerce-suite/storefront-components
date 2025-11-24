import { newSpecPage } from "@stencil/core/testing";
import { CustomCard } from "../custom-card";
describe('custom-card', () => {
    it('should render custom-card without any props', async () => {
        const page = await newSpecPage({
            components: [CustomCard],
            html: `<custom-card></custom-card>`,
        });
        expect(page.root).toEqualHtml(`
      <custom-card>
        <div class="custom-card">
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">
              Não perca! Live hoje às 19 horas.
            </h2>
          </div>
          <div class="custom-card-content"></div>
        </div>
      </custom-card>
    `);
    });
    it('should render custom-card with custom title', async () => {
        const page = await newSpecPage({
            components: [CustomCard],
            html: `<custom-card card-title="Título customizado"></custom-card>`,
        });
        expect(page.root).toEqualHtml(`
      <custom-card card-title="Título customizado">
        <div class="custom-card">
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">
              Título customizado
            </h2>
          </div>
          <div class="custom-card-content"></div>
        </div>
      </custom-card>
    `);
    });
    it('should render custom-card with custom description', async () => {
        const page = await newSpecPage({
            components: [CustomCard],
            html: `<custom-card card-description="Descrição customizada"></custom-card>`,
        });
        expect(page.root).toEqualHtml(`
      <custom-card card-description="Descrição customizada">
        <div class="custom-card">
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">
              Não perca! Live hoje às 19 horas.
            </h2>
            <p class="custom-card-header-description">
              Descrição customizada
            </p>
          </div>
          <div class="custom-card-content"></div>
        </div>
      </custom-card>
    `);
    });
    it('should render custom-card with custom slot', async () => {
        const page = await newSpecPage({
            components: [CustomCard],
            html: `<custom-card><h1>Slot customizado</h1></custom-card>`,
        });
        expect(page.root).toEqualHtml(`
      <custom-card>
        <div class="custom-card">
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">
              Não perca! Live hoje às 19 horas.
            </h2>
          </div>
          <div class="custom-card-content">
            <h1>Slot customizado</h1>
          </div>
        </div>
      </custom-card>
    `);
    });
    it('should render custom-card with custom class', async () => {
        const page = await newSpecPage({
            components: [CustomCard],
            html: `<custom-card custom-class="custom"></custom-card>`,
        });
        expect(page.root).toEqualHtml(`
      <custom-card custom-class="custom">
        <div class="custom-card custom">
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">
              Não perca! Live hoje às 19 horas.
            </h2>
          </div>
          <div class="custom-card-content"></div>
        </div>
      </custom-card>
    `);
    });
});
//# sourceMappingURL=custom-card.spec.js.map
