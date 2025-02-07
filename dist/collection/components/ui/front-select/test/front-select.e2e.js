import { newE2EPage } from "@stencil/core/testing";
describe('front-select', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<front-select></front-select>');
        const element = await page.find('front-select');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=front-select.e2e.js.map
