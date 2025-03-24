import { newSpecPage } from '@stencil/core/testing';
import { LiveVideoPlayer } from '../live-video-player';

describe('live-video-player', () => {
  it('should render live-video-player without any props', async () => {
    const page = await newSpecPage({
      components: [LiveVideoPlayer],
      html: `<live-video-player></live-video-player>`,
    });

    expect(page.root).toEqualHtml(`
      <live-video-player>
        <div class="live-video-player">
          <iframe allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/undefined"></iframe>
        </div>
      </live-video-player>
    `);
  });

  it('should render live video player by sending video id', async () => {
    const page = await newSpecPage({
      components: [LiveVideoPlayer],
      html: `<live-video-player video-id="h5iOu3zAj-Q"></live-video-player>`,
    });

    expect(page.root).toEqualHtml(`
      <live-video-player video-id="h5iOu3zAj-Q">
        <div class="live-video-player">
          <iframe allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/h5iOu3zAj-Q"></iframe>
        </div>
      </live-video-player>
    `);
  });

  it('should render live video player by sending video id and autoplay', async () => {
    const page = await newSpecPage({
      components: [LiveVideoPlayer],
      html: `<live-video-player video-id="h5iOu3zAj-Q" auto-play></live-video-player>`,
    });

    expect(page.root).toEqualHtml(`
      <live-video-player video-id="h5iOu3zAj-Q" auto-play>
        <div class="live-video-player">
          <iframe allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/h5iOu3zAj-Q?autoplay=1&amp;mute=1"></iframe>
        </div>
      </live-video-player>
    `);
  });
});
