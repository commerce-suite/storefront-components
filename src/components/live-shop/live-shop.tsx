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
  @State() isSmallDevice: boolean = window.innerWidth <= 1024;
  @State() isChatOpen: boolean = false;
  @State() isLoading: boolean = true;

  @Event({ bubbles: true, eventName: 'on-return-to-home' })
  onReturnToHome: EventEmitter<void>;

  @Event() componentRendered: EventEmitter<void>;

  private fakeLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  private handleResize = () => {
    this.isSmallDevice = window.innerWidth <= 1024;
  };

  private isChatOpenHandler = () => {
    this.isChatOpen = !this.isChatOpen;
  };

  private buttonText() {
    return this.isChatOpen ? 'Ocultar chat da live' : 'Exibir chat da live';
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidLoad() {
    this.fakeLoading();
    window.addEventListener('resize', this.handleResize);
    this.componentRendered.emit();
  }

  private renderLoading() {
    return (
      <div class="loading-container">
        <span class="spinner" />
      </div>
    );
  }

  private renderWarmup() {
    return (
      <div class="live-shop-warmup">
        <custom-card customClass="banner-custom-style" cardTitle={liveShopMock.title}>
          {liveShopMock.banner ? (
            <img src={liveShopMock.banner.src} alt={liveShopMock.banner.alt} />
          ) : (
            <div class="live-shop-banner" />
          )}
        </custom-card>
      </div>
    );
  }

  private renderInLiveMobile() {
    return (
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
    );
  }

  private renderInLiveDesktop() {
    return (
      <div class="live-shop-in-live-desktop">
        <div class="live-shop-in-live-desktop-infos">
          <div class="live-shop-in-live-desktop-infos-player">
            <live-video-player videoId={this.videoId} autoPlay />
          </div>
          <div class="live-shop-in-live-desktop-infos-options">
            <h2 class="live-shop-in-live-desktop-infos-options-title">{liveShopMock.name}</h2>
            <button
              class="live-shop-in-live-desktop-infos-options-button"
              onClick={() => this.isChatOpenHandler()}
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
              <highlight-card items={items}></highlight-card>
            ) : (
              <custom-card
                customClass="in-live-custom-style-desktop"
                cardTitle="produtos a caminho..."
                cardDescription="Em breve, teremos algo especial para você!"
              ></custom-card>
            )}
          </div>
        </div>
      </div>
    );
  }

  private renderFinished() {
    return (
      <div class="live-shop-finished">
        <custom-card
          customClass="button-custom-style"
          cardTitle="A live chegou ao fim!"
          cardDescription="Fique de olho em nossas próximas lives para mais novidades e promoções imperdíveis!"
        >
          <button onClick={() => this.onReturnToHome.emit()}>Voltar para a página inicial</button>
        </custom-card>
      </div>
    );
  }

  render() {
    if (this.isLoading) {
      return <Host>{this.renderLoading()}</Host>;
    }

    return (
      <Host>
        <div class="live-shop">
          {this.status === 'warmup' && this.renderWarmup()}
          {this.status === 'inLive' &&
            (this.isSmallDevice ? this.renderInLiveMobile() : this.renderInLiveDesktop())}
          {this.status === 'finished' && this.renderFinished()}
        </div>
      </Host>
    );
  }
}
