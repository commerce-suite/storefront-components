import { newSpecPage } from '@stencil/core/testing';
import { FrontCheckbox } from '../front-checkbox';

describe('front-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrontCheckbox],
      html: `<front-checkbox></front-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <front-checkbox>
        <label class="front-checkbox-container">
          <input type="checkbox"></input>
          <span></span>
        </label>
      </front-checkbox>
    `);
  });
});
