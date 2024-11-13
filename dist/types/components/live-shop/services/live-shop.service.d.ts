import { LiveShop } from '@uxshop/storefront-core/dist/modules/live-shop/LiveShopTypes';
import { IHighlightCardItem } from '../../../components';
import { IMessageItem, IProductItem } from '../../ui/highlight-card/highlight-card.type';
export declare class LiveShopHandler {
    private liveShopData;
    private getProducts;
    getLiveShop(hashRoom: string): Promise<LiveShop>;
    productsToItemsAdapter(): Promise<IProductItem[]>;
    messagesToItemsAdapter(): IMessageItem[];
    getItems(): Promise<IHighlightCardItem[]>;
}
