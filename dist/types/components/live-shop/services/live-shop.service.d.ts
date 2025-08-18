import { LiveShop } from '@uxshop/storefront-core/dist/modules/live-shop/LiveShopTypes';
import { IHighlightCardItem } from '../../../components';
import { SocketMessage } from '../live-shop.type';
export declare class LiveShopHandler {
    private liveShopData;
    private getProducts;
    getLiveShop(hashRoom: string): Promise<LiveShop>;
    private groupByProductIdWithColorAndVariations;
    private selectBaseNode;
    private buildProductItemGroupedByColor;
    private productsToItemsAdapter;
    private messagesToItemsAdapter;
    updateItems(items: IHighlightCardItem[], message: SocketMessage): IHighlightCardItem[];
    getItems(): Promise<IHighlightCardItem[]>;
}
