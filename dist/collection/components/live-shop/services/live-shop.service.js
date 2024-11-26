import { LiveShopService, ProductService } from "@uxshop/storefront-core";
export class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await ProductService.getList({
            fields: ['name', 'images { src }', 'price', 'priceCompare', 'productId', 'slug'],
            filter: { productIds },
        });
    }
    async getLiveShop(hashRoom) {
        this.liveShopData = await LiveShopService.getByHash(hashRoom);
        return this.liveShopData;
    }
    async productsToItemsAdapter() {
        const products = await this.getProducts();
        return products.edges.map(({ node }) => {
            var _a;
            return ({
                id: +node.productId,
                name: node.name,
                image: (_a = node.images[0]) !== null && _a !== void 0 ? _a : null,
                price: node.price,
                priceBase: node.priceCompare,
                title: '',
                content: '',
                type: 'product',
                highlight: false,
                slug: node.slug,
                show: true,
            });
        });
    }
    messagesToItemsAdapter() {
        return this.liveShopData.messages.map(message => {
            var _a;
            return ({
                id: (_a = message.id) !== null && _a !== void 0 ? _a : null,
                title: message.title,
                content: message.content,
                type: 'message',
                highlight: false,
                show: true,
            });
        });
    }
    updateItems(items, message) {
        const updatedItems = items.map(item => {
            if (item.id === message.id && item.type === message.type) {
                return Object.assign(Object.assign({}, item), { show: message.status !== 'hidden', highlight: message.status === 'highlighting' });
            }
            return item;
        });
        return updatedItems;
    }
    async getItems() {
        const productItems = await this.productsToItemsAdapter();
        const messageItems = this.messagesToItemsAdapter();
        return [...productItems, ...messageItems];
    }
}
//# sourceMappingURL=live-shop.service.js.map
