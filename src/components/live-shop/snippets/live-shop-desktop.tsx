import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { ILiveShop } from '../live-shop.type';
import { IHighlightCardItem } from '../../../components';

@Component({
  tag: 'live-shop-desktop',
  styleUrl: 'live-shop-desktop.scss',
  shadow: false,
})
export class LiveShopDesktop {
  @Prop() videoId: string;
  @Prop() liveShopData: ILiveShop;
  @Prop() items: IHighlightCardItem[];
  @Prop() isChatOpen: boolean;
  @Prop() toggleChat: () => void;

  @Event({ bubbles: true, eventName: 'on-click-add' })
  clickAdd: EventEmitter<{
    item: IHighlightCardItem;
    liveShopData: ILiveShop;
  }>;

  private handleAddItem = (event: CustomEvent<IHighlightCardItem>) => {
    const item = event.detail;
    this.clickAdd.emit({
      item,
      liveShopData: this.liveShopData,
    });
  };

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
            {this.items.length > 0 ? (
              <highlight-card items={this.items} onAddItem={this.handleAddItem} />
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
