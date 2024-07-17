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
        <div class="live-shop">
          <div class="live-shop-in-live">
            <div class="live-shop-in-live-player">
              <live-video-player autoplay="" videoid="4wURebw0QXo"></live-video-player>
            </div>
            <div class="live-shop-in-live-options">
              <custom-card cardtitle="Super Live Shop" customclass="in-live-custom-style">
                <tab-selector></tab-selector>
              </custom-card>
            </div>
          </div>
       </div>
      </live-shop>
    `);
  });
});
