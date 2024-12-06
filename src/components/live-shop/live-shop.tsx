import { Component, Event, Host, EventEmitter, h, State, Prop, Env } from '@stencil/core';
import { ILiveShop, SocketMessage } from './live-shop.type';
import { IHighlightCardItem } from '../../components';
import { LiveShopHandler } from './services/live-shop.service';
import { WebSocketClient } from '../../services/WebSocketClient';
import { extractYouTubeVideoId } from '../../utils/utils';

@Component({
  tag: 'live-shop',
  styleUrl: 'live-shop.scss',
  shadow: false,
})
export class LiveShop {
  @Prop() hashRoom: string;
  @State() liveShopNotFound: boolean = false;
  @State() videoId: string;
  @State() isSmallDevice: boolean = window.innerWidth <= 1024;
  @State() isChatOpen: boolean = false;
  @State() isLoading: boolean = true;
  @State() liveShopRegister: ILiveShop;
  @State() liveShopItemsService: LiveShopHandler;
  @State() liveShopItems: IHighlightCardItem[];
  @State() liveSocket: WebSocketClient;

  @Event({ bubbles: true, eventName: 'on-return-to-home' })
  onReturnToHome: EventEmitter<void>;

  @Event() componentRendered: EventEmitter<void>;

  private handleResize = () => {
    this.isSmallDevice = window.innerWidth <= 1024;
  };

  private isChatOpenHandler = () => {
    this.isChatOpen = !this.isChatOpen;
  };

  private handleMessage = (event: MessageEvent<string>) => {
    try {
      if (event.data) {
        const message: SocketMessage = JSON.parse(event.data);
        this.liveShopItems = this.liveShopItemsService.updateItems(this.liveShopItems, message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
  }

  async componentDidLoad() {
    try {
      if (!this.hashRoom) throw new Error('Hash Room is required');
      this.isLoading = true;
      window.addEventListener('resize', this.handleResize);
      this.componentRendered.emit();
      this.liveShopItemsService = new LiveShopHandler();
      this.liveShopRegister = await this.liveShopItemsService.getLiveShop(this.hashRoom);
      this.liveShopItems = await this.liveShopItemsService.getItems();
      if (this.liveShopRegister) {
        this.videoId = extractYouTubeVideoId(this.liveShopRegister.urlLive);
      }
      const wsBaseUrl = Env.WEBSOCKET_URL;
      this.liveSocket = new WebSocketClient(`${wsBaseUrl}?hashRoom=${this.hashRoom}`);
      this.liveSocket.onMessage(this.handleMessage);
    } catch (error) {
      if (error?.message?.includes('live-shop_not_found')) {
        this.liveShopNotFound = true;
        console.error('Live Shop not found', { error });
      }
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
      <live-shop-mobile
        videoId={this.videoId}
        liveShopData={this.liveShopRegister}
        items={this.liveShopItems}
      ></live-shop-mobile>
    ) : (
      <live-shop-desktop
        videoId={this.videoId}
        liveShopData={this.liveShopRegister}
        items={this.liveShopItems}
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

    if (this.liveShopNotFound) {
      return <live-shop-not-found onReturnToHome={() => this.onReturnToHome.emit()} />;
    }

    return (
      <Host>
        <div class="live-shop">
          {this.liveShopRegister?.status === 'warmup' && this.renderWarmup()}
          {this.liveShopRegister?.status === 'inLive' && this.renderInLive()}
          {this.liveShopRegister?.status === 'finished' && this.renderFinished()}
        </div>
      </Host>
    );
  }
}
