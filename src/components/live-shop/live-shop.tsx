import { Component, Event, Host, EventEmitter, h, State, Prop } from '@stencil/core';
import { liveShopMock } from './mocks/live-shop.mock';
import { ILiveShop, ILiveShopStatus } from './live-shop.type';
import { LiveShopItemsService } from './services/live-shop-items.service';
import { IHighlightCardItem } from '../../components';
import { LiveShopServiceRepo } from './services/live-shop.service';

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
