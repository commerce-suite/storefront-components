import { Component, Prop, h } from '@stencil/core';
import { items } from '../../ui/highlight-card/mocks/highlight-card.mock';
import { ILiveShop } from '../live-shop.type';

@Component({
  tag: 'live-shop-desktop',
  styleUrl: 'live-shop-desktop.scss',
  shadow: false,
})
export class LiveShopDesktop {
  @Prop() videoId: string;
  @Prop() liveShopData: ILiveShop;
  @Prop() isChatOpen: boolean;
  @Prop() toggleChat: () => void;

  private buttonText() {
    return this.isChatOpen ? 'Ocultar chat da live' : 'Exibir chat da live';
  }

  render() {
    return (
      <div class="live-shop-in-live-desktop">
        <div class="live-shop-in-live-desktop-infos">
          <div class="live-shop-in-live-desktop-infos-player">
            <live-video-player videoId={this.videoId} autoPlay />
          </div>
          <div class="live-shop-in-live-desktop-infos-options">
            <h2 class="live-shop-in-live-desktop-infos-options-title">{this.liveShopData.name}</h2>
            <button
              class="live-shop-in-live-desktop-infos-options-button"
              onClick={this.toggleChat}
            >
              {this.buttonText()}
            </button>
          </div>
          {this.isChatOpen && (
            <div class="live-shop-in-live-desktop-infos-options-chat">
              <live-video-chat videoId={this.videoId} />
            </div>
          )}
        </div>
        <div class="live-shop-in-live-desktop-content">
          <div class="live-shop-in-live-desktop-content-card">
            {items.length > 0 ? (
              <highlight-card items={items} />
            ) : (
              <custom-card
                customClass="in-live-custom-style-desktop"
                cardTitle="produtos a caminho..."
                cardDescription="Em breve, teremos algo especial para você!"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
