import { newE2EPage } from "@stencil/core/testing";
describe('front-image', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<front-image></front-image>');
        const element = await page.find('front-image');
        expect(element).toHaveClass('hydrated');
    });
});
//# sourceMappingURL=front-image.e2e.js.map
