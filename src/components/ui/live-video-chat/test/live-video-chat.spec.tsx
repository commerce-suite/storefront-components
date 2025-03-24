import { newSpecPage } from '@stencil/core/testing';
import { LiveVideoChat } from '../live-video-chat';

describe('live-video-chat', () => {
  it('should render live-video-chat without any props', async () => {
    const page = await newSpecPage({
      components: [LiveVideoChat],
      html: `<live-video-chat></live-video-chat>`,
    });

    expect(page.root).toEqualHtml(`
      <live-video-chat>
        <div class="live-video-chat">
          <iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/live_chat?v=undefined&amp;embed_domain=${window.location.hostname}"></iframe>
        </div>
      </live-video-chat>
    `);
  });

  it('should render live-video-chat by sending video id', async () => {
    const page = await newSpecPage({
      components: [LiveVideoChat],
      html: `<live-video-chat video-id="h5iOu3zAj-Q"></live-video-chat>`,
    });

    expect(page.root).toEqualHtml(`
      <live-video-chat video-id="h5iOu3zAj-Q">
        <div class="live-video-chat">
          <iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/live_chat?v=h5iOu3zAj-Q&amp;embed_domain=${window.location.hostname}"></iframe>
        </div>
      </live-video-chat>
    `);
  });
});
