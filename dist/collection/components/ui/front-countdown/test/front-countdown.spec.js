import { newSpecPage } from "@stencil/core/testing";
import { FrontCountdown } from "../front-countdown";
describe('front-countdown', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [FrontCountdown],
            html: `<front-countdown start-date="1698412223559" end-date="1698412224000"></front-countdown>`,
        });
        expect(page.root).toEqualHtml(`
    <front-countdown class="timer" start-date="1698412223559" end-date="1698412224000">
      <div class="cell">
        <p class="time">00</p>
        <p class="unit ">dias</p>
      </div>
      <div class="cell">
        <p class="time">00</p>
        <p class="unit ">horas</p>
      </div>
      <div class="cell">
        <p class="time">00</p>
        <p class="unit ">minutos</p>
      </div>
      <div class="cell">
        <p class="time">00</p>
        <p class="unit ">segundos</p>
      </div>
    </front-countdown>
    `);
    });
});
//# sourceMappingURL=front-countdown.spec.js.map
