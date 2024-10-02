import { newSpecPage } from '@stencil/core/testing';
import { MiniPlayer } from '../mini-player';

describe('mini-player', () => {
  it('should render mini-player without any props', async () => {
    const page = await newSpecPage({
      components: [],
      html: `<mini-player></mini-player>`,
    });

    expect(page.root).toEqualHtml(`
      <mini-player></mini-player>
    `);
  });

  it('should display the mini-player with the video id', async () => {
    const page = await newSpecPage({
      components: [MiniPlayer],
      html: `<mini-player video-id="h5iOu3zAj-Q"></mini-player>`,
    });

    expect(page.root).toEqualHtml(`
      <mini-player video-id="h5iOu3zAj-Q">
          <div class="mini-player" style="transform: translate(0px, 0px);">
            <button class="mini-player-close-button">
              <img alt="close-icon" src="/assets/icons/close-icon.svg">
            </button>
         <live-video-player videoid="h5iOu3zAj-Q"></live-video-player>
         <div class="mini-player-bar" style="cursor: grab;">
           <h6 class="mini-player-bar-title">
             Mini Player Title
           </h6>
           <div class="mini-player-bar-button">
             <button>
               Return
             </button>
           </div>
         </div>
      </mini-player>
    `);
  });

  it('should display the mini-player with the video id and auto play', async () => {
    const page = await newSpecPage({
      components: [MiniPlayer],
      html: `<mini-player video-id="h5iOu3zAj-Q" auto-play=true></mini-player>`,
    });

    expect(page.root).toEqualHtml(`
      <mini-player video-id="h5iOu3zAj-Q" auto-play=true>
          <div class="mini-player" style="transform: translate(0px, 0px);">
            <button class="mini-player-close-button">
              <img alt="close-icon" src="/assets/icons/close-icon.svg">
            </button>
         <live-video-player videoid="h5iOu3zAj-Q" autoplay=""></live-video-player>
         <div class="mini-player-bar" style="cursor: grab;">
           <h6 class="mini-player-bar-title">
             Mini Player Title
           </h6>
           <div class="mini-player-bar-button">
             <button>
               Return
             </button>
           </div>
         </div>
      </mini-player>
    `);
  });

  it('should display the mini-player with title', async () => {
    const page = await newSpecPage({
      components: [MiniPlayer],
      html: `<mini-player video-id="h5iOu3zAj-Q" main-title="Live Title"></mini-player>`,
    });

    expect(page.root).toEqualHtml(`
      <mini-player video-id="h5iOu3zAj-Q" main-title="Live Title">
          <div class="mini-player" style="transform: translate(0px, 0px);">
            <button class="mini-player-close-button">
              <img alt="close-icon" src="/assets/icons/close-icon.svg">
            </button>
         <live-video-player videoid="h5iOu3zAj-Q"></live-video-player>
         <div class="mini-player-bar" style="cursor: grab;">
           <h6 class="mini-player-bar-title">
             Live Title
           </h6>
           <div class="mini-player-bar-button">
             <button>
               Return
             </button>
           </div>
         </div>
      </mini-player>
    `);
  });

  it('should display the mini-player with button text', async () => {
    const page = await newSpecPage({
      components: [MiniPlayer],
      html: `<mini-player video-id="h5iOu3zAj-Q" button-text="Back Button"></mini-player>`,
    });

    expect(page.root).toEqualHtml(`
      <mini-player video-id="h5iOu3zAj-Q" button-text="Back Button">
          <div class="mini-player" style="transform: translate(0px, 0px);">
            <button class="mini-player-close-button">
              <img alt="close-icon" src="/assets/icons/close-icon.svg">
            </button>
         <live-video-player videoid="h5iOu3zAj-Q"></live-video-player>
         <div class="mini-player-bar" style="cursor: grab;">
           <h6 class="mini-player-bar-title">
             Mini Player Title
           </h6>
           <div class="mini-player-bar-button">
             <button>
               Back Button
             </button>
           </div>
         </div>
      </mini-player>
    `);
  });
});
