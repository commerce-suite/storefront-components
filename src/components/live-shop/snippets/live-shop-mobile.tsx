import { Component, Prop, h } from '@stencil/core';
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

  render() {
    return (
      <div class="live-shop-in-live">
        <div class="live-shop-in-live-player">
          <live-video-player videoId={this.videoId} autoPlay />
        </div>
        <div class="live-shop-in-live-options">
          <custom-card customClass="in-live-custom-style" cardTitle={this.liveShopData.name}>
            <tab-selector tabs={tabs(this.videoId, this.items)} />
          </custom-card>
        </div>
      </div>
    );
  }
}
