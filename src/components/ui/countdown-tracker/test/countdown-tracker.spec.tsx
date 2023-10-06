import { newSpecPage } from '@stencil/core/testing';
import { CountdownTracker } from '../countdown-tracker';

describe('countdown-tracker', () => {
  it('should render reset countdown tracker when a date in the past is given', async () => {
    const page = await newSpecPage({
      components: [CountdownTracker],
      html: `<countdown-tracker data-target-date="2020-11-06 13:24:00"></countdown-tracker>`,
    });

    expect(page.root).toEqualHtml(`
    <countdown-tracker data-target-date="2020-11-06 13:24:00">
      <div class="countdown-tracker-header">
        <h3 class="countdown-tracker-title">Agora falta muito pouco!</h3>
        <p class="countdown-tracker-description">O produto que você tanto espera será liberado em breve.</p>
      </div>
        <div class="countdown-tracker">
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">00</p>
            <p class="countdown-tracker-date ">dias</p>
          </div>
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">00</p>
            <p class="countdown-tracker-date ">horas</p>
          </div>
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">00</p>
            <p class="countdown-tracker-date ">minutos</p>
          </div>
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">00</p>
            <p class="countdown-tracker-date ">segundos</p>
          </div>
        </div>
    </countdown-tracker>
    `);
  });
});
