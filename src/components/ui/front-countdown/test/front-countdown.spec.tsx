import { newSpecPage } from '@stencil/core/testing';
import { FrontCountdown } from '../front-countdown';

describe('front-countdown', () => {
  it('should render reset countdown when a date in the past is given', async () => {
    const page = await newSpecPage({
      components: [FrontCountdown],
      html: `<front-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00"></front-countdown>`,
    });

    expect(page.root).toEqualHtml(`
    <front-countdown class="front-countdown" data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00">
      <div class="header">
        <h3 class="title">Agora falta muito pouco!</h3>
        <p class="description">O produto que você tanto espera será liberado em breve.</p>
      </div>
        <div class="timer">
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
        </div>
    </front-countdown>
    `);
  });
});
