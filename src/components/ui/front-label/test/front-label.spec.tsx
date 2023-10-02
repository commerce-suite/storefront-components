import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FrontLabel } from '../front-label';

describe('front-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrontLabel],
      template: () => <front-label label="Cor"></front-label>,
    });
    expect(page.root).toEqualHtml(`
      <front-label>
        <label class="front-label">Cor</label>
      </front-label>
    `);
  });

  it('renders with htmlFor', async () => {
    const page = await newSpecPage({
      components: [FrontLabel],
      template: () => <front-label label="Cor" elementFor="color"></front-label>,
    });
    expect(page.root).toEqualHtml(`
      <front-label>
        <label class="front-label" htmlFor="color">Cor</label>
      </front-label>
    `);
  });
});
