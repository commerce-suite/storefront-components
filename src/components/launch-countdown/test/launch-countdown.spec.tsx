import { newSpecPage } from '@stencil/core/testing';
import { LaunchCountdown } from '../launch-countdown';

describe('launch-countdown', () => {
  it('should render reset countdown when a date in the past is given', async () => {
    const page = await newSpecPage({
      components: [LaunchCountdown],
      html: `<launch-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00"></launch-countdown>`,
    });

    expect(page.root).toEqualHtml(`
    <launch-countdown data-initial-date="2024-11-05 13:24:00" data-target-date="2020-11-06 13:24:00">
    <div class="launch-countdown-container">
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
    </launch-countdown>
    </div>
    `);
  });
});
