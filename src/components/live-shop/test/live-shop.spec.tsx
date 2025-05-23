import { newSpecPage } from '@stencil/core/testing';
import { LiveShop } from '../live-shop';

describe('live-shop', () => {
  it('should render live-shop without any props', async () => {
    const page = await newSpecPage({
      components: [LiveShop],
      html: `<live-shop></live-shop>`,
    });

    expect(page.root).toEqualHtml(`
      <live-shop>
        <div class="live-shop"></div>
      </live-shop>
    `);
  });
});
