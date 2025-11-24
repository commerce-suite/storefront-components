import { Env } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { MaintenanceMode } from "../maintenance-mode";
describe('maintenance-mode', () => {
    it('should render maintenance-mode', async () => {
        Env.GOOGLE_RECAPTCHA_SITE_KEY = 'mocked_site_key';
        const page = await newSpecPage({
            components: [MaintenanceMode],
            html: `<maintenance-mode></maintenance-mode>`,
        });
        expect(page.root).toEqualHtml(`
    <maintenance-mode style="--maintenance-bg: #FFFFFF; --maintenance-title: #212529; --maintenance-text: #535862; --maintenance-button-bg: #212529; --maintenance-button-color: #FFFFFF;">
      <div class="maintenance-mode maintenance-mode-container">
        <div class="maintenance-mode-content">
          <div class="maintenance-mode-content-label">
            <h1>
              Loja em manutenção
            </h1>
            <p>
              Estamos temporariamente em manutenção. Voltaremos em breve com novidades para você!
            </p>
          </div>

        </div>
        <form class="maintenance-mode-form" name="newsletter">
          <div class="maintenance-mode-form-label">
            <h2>
              Cadastre-se para receber novidades
            </h2>
          </div>
          <div class="maintenance-mode-form-content">
            <div class="maintenance-mode-form-content-input">
              <input name="name" placeholder="Seu nome" required="" type="text">
              <input name="email" placeholder="Seu email" required="" type="email">
            </div>
            <google-recaptcha sitekey="${Env.GOOGLE_RECAPTCHA_SITE_KEY}"></google-recaptcha>
            <button class="maintenance-mode-form-content-button" disabled="" type="submit">
              Quero me inscrever
            </button>
          </div>
        </form>
      </div>
    </maintenance-mode>
    `);
    });
});
//# sourceMappingURL=maintenance-mode.spec.js.map
