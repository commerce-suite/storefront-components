import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { FrontImage } from "../front-image";
describe('front-image', () => {
    const src = 'teste.png';
    it('renders with skeleton loading', async () => {
        const page = await newSpecPage({
            components: [FrontImage],
            template: () => h("front-image", { imageSrc: src }),
        });
        expect(page.root).toEqualHtml(`
      <front-image>
        <figure class="-is-loading image-container">
          <img alt="Imagem" src="${src}">
        </figure>
      </front-image>
    `);
    });
    it('renders with figcaption', async () => {
        const page = await newSpecPage({
            components: [FrontImage],
            template: () => h("front-image", { imageSrc: src, figCaption: "Legenda da image" }),
        });
        expect(page.root).toEqualHtml(`
      <front-image>
        <figure class="-is-loading image-container">
          <img alt="Imagem" src="${src}">
          <figcaption>Legenda da image</figcaption>
        </figure>
      </front-image>
    `);
    });
});
//# sourceMappingURL=front-image.spec.js.map
