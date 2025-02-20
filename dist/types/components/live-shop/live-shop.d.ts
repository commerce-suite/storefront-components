import { EventEmitter } from '../../stencil-public-runtime';
import { ILiveShop } from './live-shop.type';
import { IHighlightCardItem } from '../../components';
import { LiveShopHandler } from './services/live-shop.service';
import { WebSocketClient } from '../../services/WebSocketClient';
export declare class LiveShop {
    hashRoom: string;
    liveShopNotFound: boolean;
    videoId: string;
    isSmallDevice: boolean;
    isChatOpen: boolean;
    isLoading: boolean;
    liveShopRegister: ILiveShop;
    liveShopItemsService: LiveShopHandler;
    liveShopItems: IHighlightCardItem[];
    liveSocket: WebSocketClient;
    onReturnToHome: EventEmitter<void>;
    componentRendered: EventEmitter<void>;
    private handleResize;
    private isChatOpenHandler;
    private handleMessage;
    disconnectedCallback(): void;
    componentDidLoad(): Promise<void>;
    private renderLoading;
    private renderWarmup;
    private renderInLive;
    private renderFinished;
    render(): any;
}
