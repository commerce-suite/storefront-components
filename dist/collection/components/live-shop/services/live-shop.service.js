import { LiveShopService, ProductService } from "@uxshop/storefront-core";
export class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await ProductService.getList({
            fields: [
                'name',
                'images { src }',
                'price',
                'priceCompare',
                'productId',
                'slug',
                'hasPriceRange',
            ],
            filter: { productIds, page: 0, first: productIds.length },
        });
    }
    async getLiveShop(hashRoom) {
        this.liveShopData = await LiveShopService.getByHash(hashRoom);
        return this.liveShopData;
    }
    async productsToItemsAdapter() {
        var _a;
        const products = await this.getProducts();
        const liveProducts = (_a = this.liveShopData) === null || _a === void 0 ? void 0 : _a.products;
        return products.edges.map(({ node }) => {
            var _a, _b, _c;
            const liveProduct = liveProducts.find(product => product.productId === node.productId);
            const status = (_a = liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.status) !== null && _a !== void 0 ? _a : null;
            return {
                id: +node.productId,
                name: node.name,
                image: (_c = (_b = node === null || node === void 0 ? void 0 : node.images) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : null,
                price: node.price,
                priceBase: node.priceCompare,
                title: '',
                content: '',
                type: 'product',
                slug: node.slug,
                show: status && status !== 'hidden',
                highlight: status === 'highlighting',
                showStartingFrom: node.hasPriceRange,
            };
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
                show: message.status && message.status !== 'hidden',
                highlight: message.status === 'highlighting',
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
