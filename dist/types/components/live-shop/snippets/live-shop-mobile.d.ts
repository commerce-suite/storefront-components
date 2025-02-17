import { EventEmitter } from '../../../stencil-public-runtime';
import { ILiveShop } from '../live-shop.type';
import { IHighlightCardItem } from '../../../components';
export declare class LiveShopMobile {
    videoId: string;
    liveShopData: ILiveShop;
    items: IHighlightCardItem[];
    clickAdd: EventEmitter<{
        item: IHighlightCardItem;
        liveShopData: ILiveShop;
    }>;
    private handleAddItem;
    render(): any;
}
