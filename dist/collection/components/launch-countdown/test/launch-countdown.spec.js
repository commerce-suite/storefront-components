import { newSpecPage } from "@stencil/core/testing";
jest.mock('./../launch-countdown.service');
import { LaunchCountdown } from "../launch-countdown";
describe('launch-countdown', () => {
    it('should render reset countdown when a date in the past is given', async () => {
        const page = await newSpecPage({
            components: [LaunchCountdown],
            html: `<launch-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00"></launch-countdown>`,
        });
        expect(page.root).toEqualHtml(`
      <launch-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00">
        <div class="launch-countdown-container">
          <div class="launch-countdown-container-header">
            <h3 class="launch-countdown-container-title">Agora falta muito pouco!</h3>
            <p class="launch-countdown-container-description">O produto que você tanto espera será liberado em breve.</p>
          </div>
          <front-countdown end-date="2020-11-06 13:24:00" start-date="2024-11-05 13:24:00"></front-countdown>
        </div>
      </launch-countdown>
    `);
    });
});
//# sourceMappingURL=launch-countdown.spec.js.map
