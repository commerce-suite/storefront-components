import { newSpecPage } from '@stencil/core/testing';
import { FrontButton } from '../front-button';

describe('front-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FrontButton],
      html: `<front-button>Comprar</front-button>`,
    });
    expect(page.root).toEqualHtml(`
      <front-button>
      <button class="front-button-container">Comprar</button>
      </front-button>
    `);
  });

  it('renders disabled button', async () => {
    const page = await newSpecPage({
      components: [FrontButton],
      html: `<front-button disabled>Comprar</front-button>`,
    });
    expect(page.root).toEqualHtml(`
      <front-button  disabled="">
      <button class="-disabled front-button-container">Comprar</button>
      </front-button>
    `);
  });
});
