import { Component, Prop, h } from '@stencil/core';
import { ILiveShop } from '../live-shop.type';
import { items } from '../../ui/highlight-card/mocks/highlight-card.mock';
import { tabs } from '../config/tabs-config';

@Component({
  tag: 'live-shop-mobile',
  styleUrl: 'live-shop-mobile.scss',
  shadow: false,
})
export class LiveShopMobile {
  @Prop() videoId: string;
  @Prop() liveShopData: ILiveShop;

  render() {
    return (
      <div class="live-shop-in-live">
        <div class="live-shop-in-live-player">
          <live-video-player videoId={this.videoId} autoPlay />
        </div>
        <div class="live-shop-in-live-options">
          <custom-card customClass="in-live-custom-style" cardTitle={this.liveShopData.name}>
            <tab-selector tabs={tabs(this.videoId, items)} />
          </custom-card>
        </div>
      </div>
    );
  }
}
