import { Component, Event, Host, EventEmitter, h, State } from '@stencil/core';
import { liveShopMock } from './mocks/live-shop.mock';

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

  private renderInLive() {
    return this.isSmallDevice ? (
      <live-shop-mobile videoId={this.videoId} liveShopData={liveShopMock}></live-shop-mobile>
    ) : (
      <live-shop-desktop
        videoId={this.videoId}
        liveShopData={liveShopMock}
        isChatOpen={this.isChatOpen}
        toggleChat={() => this.isChatOpenHandler()}
      />
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
          {this.status === 'inLive' && this.renderInLive()}
          {this.status === 'finished' && this.renderFinished()}
        </div>
      </Host>
    );
  }
}
