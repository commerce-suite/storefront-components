import { Component, Event, Host, EventEmitter, h, State, Prop } from '@stencil/core';
import { liveShopMock } from './mocks/live-shop.mock';
import { tabs } from './config/tabs-config';
import { items } from '../ui/highlight-card/mocks/highlight-card.mock';
import { LiveShopServiceRepo } from './services/live-shop.service';
import { ILiveShop, ILiveShopStatus } from './live-shop.type';
import { LiveShopItemsService } from './services/live-shop-items.service';
import { IHighlightCardItem } from '../../components';

@Component({
  tag: 'live-shop',
  styleUrl: 'live-shop.scss',
  shadow: false,
})
export class LiveShop {
  @Prop() hashRoom: string = 'abc123';
  @State() status: ILiveShopStatus = liveShopMock.status;
  @State() videoId: string;
  @State() isSmallDevice: boolean = window.innerWidth <= 1024;
  @State() isChatOpen: boolean = false;
  @State() isLoading: boolean = true;
  @State() liveShopRegister: ILiveShop;
  @State() liveShopItemsService: LiveShopItemsService;
  @State() liveShopProducts: IHighlightCardItem[];

  @Event({ bubbles: true, eventName: 'on-return-to-home' })
  onReturnToHome: EventEmitter<void>;

  @Event() componentRendered: EventEmitter<void>;

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

  setCardHighlighted() {
    this.liveShopItemsService.setHighlightedItem(this.liveShopProducts[0]);
    this.liveShopProducts = { ...this.liveShopItemsService.adaptProducts(this.liveShopProducts) };
    console.log(this.liveShopProducts);
  }

  async componentDidLoad() {
    try {
      this.isLoading = true;
      window.addEventListener('resize', this.handleResize);
      this.componentRendered.emit();
      this.liveShopRegister = await LiveShopServiceRepo.getLiveShop(this.hashRoom);
      const products = await LiveShopServiceRepo.getLiveShopProducts(
        this.liveShopRegister.products.map(product => product.id),
      );
      this.liveShopItemsService = new LiveShopItemsService(products);
      this.liveShopProducts = this.liveShopItemsService.getItems();
      if (this.liveShopRegister) this.videoId = this.liveShopRegister.urlLive.split('v=')[1];
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
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
        <custom-card customClass="banner-custom-style" cardTitle={this.liveShopRegister.title}>
          {this.liveShopRegister.banner ? (
            <img src={this.liveShopRegister.banner.src} alt={this.liveShopRegister.banner.alt} />
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
          <custom-card customClass="in-live-custom-style" cardTitle={this.liveShopRegister.name}>
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
            <h2 class="live-shop-in-live-desktop-infos-options-title">
              {this.liveShopRegister.name}
            </h2>
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
              <highlight-card items={this.liveShopProducts}></highlight-card>
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
        {this.liveShopRegister && (
          <div class="live-shop">
            {this.liveShopRegister.status === 'warmup' && this.renderWarmup()}
            {this.liveShopRegister.status === 'inLive' &&
              (this.isSmallDevice ? this.renderInLiveMobile() : this.renderInLiveDesktop())}
            {this.liveShopRegister.status === 'finished' && this.renderFinished()}
            <button onClick={() => this.setCardHighlighted()}>teste de promoção</button>
          </div>
        )}
      </Host>
    );
  }
}
