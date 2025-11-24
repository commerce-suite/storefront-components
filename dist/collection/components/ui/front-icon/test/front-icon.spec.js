import { newSpecPage } from "@stencil/core/testing";
import { FrontIcon } from "../front-icon";
describe('front-icon', () => {
    it('should render front-icon with default props', async () => {
        const page = await newSpecPage({
            components: [FrontIcon],
            html: `<front-icon></front-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <front-icon>
        <span class="material-icons" style="color: #000; font-size: 24px;">
          home
        </span>
      </front-icon>
    `);
    });
    it('should render front-icon with custom name', async () => {
        const page = await newSpecPage({
            components: [FrontIcon],
            html: `<front-icon name="close"></front-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <front-icon name="close">
        <span class="material-icons" style="color: #000; font-size: 24px;">
          close
        </span>
      </front-icon>
    `);
    });
    it('should render front-icon with custom size', async () => {
        const page = await newSpecPage({
            components: [FrontIcon],
            html: `<front-icon size="32px"></front-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <front-icon size="32px">
        <span class="material-icons" style="color: #000; font-size: 32px;">
          home
        </span>
      </front-icon>
    `);
    });
    it('should render front-icon with custom color', async () => {
        const page = await newSpecPage({
            components: [FrontIcon],
            html: `<front-icon color="#FF0000"></front-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <front-icon color="#FF0000">
        <span class="material-icons" style="color: #FF0000; font-size: 24px;">
          home
        </span>
      </front-icon>
    `);
    });
    it('should render front-icon with all custom props', async () => {
        const page = await newSpecPage({
            components: [FrontIcon],
            html: `<front-icon name="star" size="16px" color="#FFD700"></front-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <front-icon name="star" size="16px" color="#FFD700">
        <span class="material-icons" style="color: #FFD700; font-size: 16px;">
          star
        </span>
      </front-icon>
    `);
    });
    it('should handle icon names with underscores', async () => {
        const page = await newSpecPage({
            components: [FrontIcon],
            html: `<front-icon name="shopping_cart"></front-icon>`,
        });
        expect(page.root).toEqualHtml(`
      <front-icon name="shopping_cart">
        <span class="material-icons" style="color: #000; font-size: 24px;">
          shopping_cart
        </span>
      </front-icon>
    `);
    });
});
//# sourceMappingURL=front-icon.spec.js.map
