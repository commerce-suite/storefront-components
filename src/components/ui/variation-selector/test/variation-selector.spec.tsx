import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { variations } from '../mocks/variant-selector.mock';
import { VariationSelector } from '../variation-selector';

it('renders with variations', async () => {
  const page = await newSpecPage({
    components: [VariationSelector],
    template: () => <variation-selector variations={variations}></variation-selector>,
  });
  expect(page.root).toEqualHtml(`
    <variation-selector>
      <div class="variations">
        <div class="item">
          <front-select label="Cor" value="12321"></front-select>
        </div>
        <div class="item">
          <front-select label="Tamanho" value="456"></front-select>
        </div>
      </div>
    </variation-selector>
    `);
});
