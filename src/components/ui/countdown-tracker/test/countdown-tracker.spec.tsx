import { newSpecPage } from '@stencil/core/testing';
import { CountdownTracker } from '../countdown-tracker';

describe('countdown-tracker', () => {
  it('should render reset countdown tracker when a date in the pas is given', async () => {
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

  // it('renders with option Empty', async () => {
  //   const placeholder: IFrontSelectOption = {
  //     name: 'Selecione a opção',
  //     value: 0,
  //   };
  //   const page = await newSpecPage({
  //     components: [FrontSelect],
  //     template: () => (
  //       <front-select optionsList={optionsList} placeholder={placeholder} value={0}></front-select>
  //     ),
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <front-select>
  //       <div class="front-select-container">
  //         <select>
  //           <option value="0" selected="">Selecione a opção</option>
  //           <option value="1">Opção A</option>
  //           <option value="2">Opção B</option>
  //         </select>
  //       </div>
  //     </front-select>
  //   `);
  // });

  // it('renders with label, name and id', async () => {
  //   const page = await newSpecPage({
  //     components: [FrontSelect],
  //     template: () => (
  //       <front-select
  //         optionsList={optionsList}
  //         label="Cor:"
  //         selectName="select-cor"
  //         selectId="select-cor-1"
  //       ></front-select>
  //     ),
  //   });
  //   expect(page.root).toEqualHtml(`
  //     <front-select>
  //     <label class="select-label" htmlfor="select-cor-1">Cor:</label>
  //       <div class="front-select-container">
  //         <select name="select-cor" id="select-cor-1">
  //           <option selected="">Selecione</option>
  //           <option value="1">Opção A</option>
  //           <option value="2">Opção B</option>
  //         </select>
  //       </div>
  //     </front-select>
  //   `);
  // });
});
