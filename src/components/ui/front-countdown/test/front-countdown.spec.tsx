import { newSpecPage } from '@stencil/core/testing';
import { FrontCountdown } from '../front-countdown';

describe('front-countdown', () => {
  it('should render reset countdown when a date in the past is given', async () => {
    const page = await newSpecPage({
      components: [FrontCountdown],
      html: `<front-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00"></front-countdown>`,
    });

    expect(page.root).toEqualHtml(`
    <front-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00">
      <div class="front-countdown__header">
        <h3 class="front-countdown__title">Agora falta muito pouco!</h3>
        <p class="front-countdown__description">O produto que você tanto espera será liberado em breve.</p>
      </div>
        <div class="front-countdown">
          <div class="front-countdown__cell">
            <p class="front-countdown__time">00</p>
            <p class="front-countdown__unit ">dias</p>
          </div>
          <div class="front-countdown__cell">
            <p class="front-countdown__time">00</p>
            <p class="front-countdown__unit ">horas</p>
          </div>
          <div class="front-countdown__cell">
            <p class="front-countdown__time">00</p>
            <p class="front-countdown__unit ">minutos</p>
          </div>
          <div class="front-countdown__cell">
            <p class="front-countdown__time">00</p>
            <p class="front-countdown__unit ">segundos</p>
          </div>
        </div>
    </front-countdown>
    `);
  });
});
