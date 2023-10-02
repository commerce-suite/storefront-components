import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FrontSelect } from '../front-select';
import { IFrontSelectOption } from '../front-select.type';

describe('front-select', () => {
  const optionsList: IFrontSelectOption[] = [
    { name: 'Opção A', value: 1 },
    { name: 'Opção B', value: 2 },
  ];
  it('renders without option Empty', async () => {
    const page = await newSpecPage({
      components: [FrontSelect],
      template: () => <front-select optionsList={optionsList}></front-select>,
    });
    expect(page.root).toEqualHtml(`
      <front-select>
        <div class="front-select-container">
          <select>
            <option selected="">Nenhum opção selecionada</option>
            <option value="1">Opção A</option>
            <option value="2">Opção B</option>
          </select>
        </div>
      </front-select>
    `);
  });

  it('renders with option Empty', async () => {
    const emptyOption: IFrontSelectOption = {
      name: 'Selecione',
      value: 0,
    };
    const page = await newSpecPage({
      components: [FrontSelect],
      template: () => (
        <front-select optionsList={optionsList} emptyOption={emptyOption} value={0}></front-select>
      ),
    });
    expect(page.root).toEqualHtml(`
      <front-select>
        <div class="front-select-container">
          <select>
            <option value="0" selected="">Selecione</option>
            <option value="1">Opção A</option>
            <option value="2">Opção B</option>
          </select>
        </div>
      </front-select>
    `);
  });

  it('renders with label, name and id', async () => {
    const page = await newSpecPage({
      components: [FrontSelect],
      template: () => (
        <front-select
          optionsList={optionsList}
          label="Cor:"
          selectName="select-cor"
          selectId="select-cor-1"
        ></front-select>
      ),
    });
    expect(page.root).toEqualHtml(`
      <front-select>
        <front-label elementfor="select-cor-1" label="Cor:"></front-label>
        <div class="front-select-container">
          <select name="select-cor" id="select-cor-1">
            <option selected="">Nenhum opção selecionada</option>
            <option value="1">Opção A</option>
            <option value="2">Opção B</option>
          </select>
        </div>
      </front-select>
    `);
  });
});
