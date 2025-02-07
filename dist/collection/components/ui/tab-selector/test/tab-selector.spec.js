import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { TabSelector } from "../tab-selector";
import { tabs } from "../mocks/tab-selector.mock";
describe('tab-selector', () => {
    it('should render tab-selector without any props', async () => {
        const page = await newSpecPage({
            components: [TabSelector],
            html: `<tab-selector></tab-selector>`,
        });
        expect(page.root).toEqualHtml(`
      <tab-selector>
        <div class="tab-selector">
          <div class="tab-selector-tabs"></div>
          <div class="tab-selector-tabs-content"></div>
        </div>
      </tab-selector>
    `);
    });
    it('should render tab-selector with tabs', async () => {
        const page = await newSpecPage({
            components: [TabSelector],
            template: () => h("tab-selector", { tabs: tabs() }),
        });
        expect(page.root).toEqualHtml(`
      <tab-selector>
        <div class="tab-selector">
          <div class="tab-selector-tabs">
            <span class="active">
              Products
            </span>
            <span>
              Chat
            </span>
          </div>
          <div class="tab-selector-tabs-content">
            <div class="active tab-selector-tabs-content-item">
              <div>
                <h1>
                  Products
                </h1>
                <p>
                  Products content
                </p>
              </div>
            </div>
            <div class="tab-selector-tabs-content-item"></div>
          </div>
        </div>
      </tab-selector>
    `);
    });
});
//# sourceMappingURL=tab-selector.spec.js.map
