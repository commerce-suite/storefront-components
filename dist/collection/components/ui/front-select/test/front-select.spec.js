import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { FrontSelect } from "../front-select";
describe('front-select', () => {
    const optionsList = [
        { name: 'Opção A', value: 1 },
        { name: 'Opção B', value: 2 },
        { name: 'Opção C', value: 3, disabled: true },
    ];
    it('renders without option Empty', async () => {
        const page = await newSpecPage({
            components: [FrontSelect],
            template: () => h("front-select", { optionsList: optionsList }),
        });
        expect(page.root).toEqualHtml(`
      <front-select>
        <div class="front-select-container">
          <select>
            <option selected="">Selecione</option>
            <option value="1">Opção A</option>
            <option value="2">Opção B</option>
            <option value="3" disabled>Opção C</option>
          </select>
        </div>
      </front-select>
    `);
    });
    it('renders with option Empty', async () => {
        const placeholder = {
            name: 'Selecione a opção',
            value: 0,
        };
        const page = await newSpecPage({
            components: [FrontSelect],
            template: () => (h("front-select", { optionsList: optionsList, placeholder: placeholder, value: 0 })),
        });
        expect(page.root).toEqualHtml(`
      <front-select>
        <div class="front-select-container">
          <select>
            <option value="0" selected="">Selecione a opção</option>
            <option value="1">Opção A</option>
            <option value="2">Opção B</option>
            <option value="3" disabled>Opção C</option>
          </select>
        </div>
      </front-select>
    `);
    });
    it('renders with label, name and id', async () => {
        const page = await newSpecPage({
            components: [FrontSelect],
            template: () => (h("front-select", { optionsList: optionsList, label: "Cor:", selectName: "select-cor", selectId: "select-cor-1" })),
        });
        expect(page.root).toEqualHtml(`
      <front-select>
      <label class="select-label" htmlfor="select-cor-1">Cor:</label>
        <div class="front-select-container">
          <select name="select-cor" id="select-cor-1">
            <option selected="">Selecione</option>
            <option value="1">Opção A</option>
            <option value="2">Opção B</option>
            <option value="3" disabled>Opção C</option>
          </select>
        </div>
      </front-select>
    `);
    });
});
//# sourceMappingURL=front-select.spec.js.map
