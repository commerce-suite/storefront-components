import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { ILiveShop } from '../live-shop.type';
import { tabs } from '../config/tabs-config';
import { IHighlightCardItem } from '../../../components';

@Component({
  tag: 'live-shop-mobile',
  styleUrl: 'live-shop-mobile.scss',
  shadow: false,
})
export class LiveShopMobile {
  @Prop() videoId: string;
  @Prop() liveShopData: ILiveShop;
  @Prop() items: IHighlightCardItem[];

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

  render() {
    return (
      <div class="live-shop-in-live">
        <div class="live-shop-in-live-player">
          <live-video-player videoId={this.videoId} autoPlay />
        </div>
        <div class="live-shop-in-live-options">
          <custom-card customClass="in-live-custom-style" cardTitle={this.liveShopData.name}>
            <tab-selector
              tabs={tabs(
                this.videoId,
                this.items,
                this.handleAddItem,
                this.liveShopData.chatVisible,
              )}
            />
          </custom-card>
        </div>
      </div>
    );
  }
}
