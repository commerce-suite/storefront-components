import { Component, Event, Host, EventEmitter, h, State } from '@stencil/core';
import { liveShopMock } from './mocks/live-shop.mock';
import { tabs } from './config/tabs-config';
import { items } from '../ui/highlight-card/mocks/highlight-card.mock';

@Component({
  tag: 'live-shop',
  styleUrl: 'live-shop.scss',
  shadow: false,
})
export class LiveShop {
  @State() status: 'inLive' | 'finished' | 'warmup' = liveShopMock.status;
  @State() videoId: string = liveShopMock.urlLive.split('v=')[1];

  @Event({ bubbles: true, eventName: 'on-return-to-home' })
  onReturnToHome: EventEmitter<void>;

  @Event() componentRendered: EventEmitter<void>;

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        <div class="live-shop">
          {this.status === 'warmup' && (
            <div class="live-shop-warmup">
              <custom-card customClass="banner-custom-style" cardTitle={liveShopMock.title}>
                {liveShopMock.banner ? (
                  <img src={liveShopMock.banner.src} alt={liveShopMock.banner.alt} />
                ) : (
                  <div class="live-shop-banner" />
                )}
              </custom-card>
            </div>
          )}
          {this.status === 'inLive' && (
            <div class="live-shop-in-live">
              <div class="live-shop-in-live-player">
                <live-video-player videoId={this.videoId} autoPlay />
              </div>
              <div class="live-shop-in-live-options">
                <custom-card customClass="in-live-custom-style" cardTitle={liveShopMock.name}>
                  <tab-selector tabs={tabs(this.videoId, items)}></tab-selector>
                </custom-card>
              </div>
            </div>
          )}
          {this.status === 'finished' && (
            <div class="live-shop-finished">
              <custom-card
                customClass="button-custom-style"
                cardTitle="A live chegou ao fim!"
                cardDescription="Fique de olho em nossas próximas lives para mais novidades e promoções imperdíveis!"
              >
                <button onClick={() => this.onReturnToHome.emit()}>
                  Voltar para a página inicial
                </button>
              </custom-card>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
