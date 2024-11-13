import { EventEmitter } from '../../../stencil-public-runtime';
import { ILiveShop } from '../live-shop.type';
import { IHighlightCardItem } from '../../../components';
export declare class LiveShopDesktop {
    videoId: string;
    liveShopData: ILiveShop;
    items: IHighlightCardItem[];
    isChatOpen: boolean;
    toggleChat: () => void;
    clickAdd: EventEmitter<{
        item: IHighlightCardItem;
        video_id: string;
    }>;
    private handleAddItem;
    private buttonText;
    render(): any;
}
