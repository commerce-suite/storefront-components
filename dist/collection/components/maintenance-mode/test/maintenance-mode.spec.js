import { Env } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { MaintenanceMode } from "../maintenance-mode";
describe('maintenance-mode', () => {
    it('should render maintenance-mode', async () => {
        const page = await newSpecPage({
            components: [MaintenanceMode],
            html: `<maintenance-mode></maintenance-mode>`,
        });
        expect(page.root).toEqualHtml(`
    <maintenance-mode style="--maintenance-bg: #212529; --maintenance-title: #FFFFFF; --maintenance-text: #C1C2C3; --maintenance-button-bg: #212529; --maintenance-button-color: #FFFFFF;">
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
          <img alt="maintenance-mode-image" src="https://optimizer.dchomolog.dooca.store/103964/applications/pexels-photo-976853.jpeg">
        </div>
        <form class="maintenance-mode-form" name="newsletter">
          <div class="maintenance-mode-form-label">
            <h2>
              Cadastre-se para receber novidades
            </h2>
          </div>
          <div class="maintenance-mode-form-content">
            <div class="maintenance-mode-form-content-input">
              <input placeholder="Digite seu nome" required="" type="text">
              <input placeholder="Digite seu e-mail" required="" type="email">
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
