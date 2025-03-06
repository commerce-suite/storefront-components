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
            var _a, _b, _c, _d;
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
                position: (_d = liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.position) !== null && _d !== void 0 ? _d : 0,
                showStartingFrom: node.hasPriceRange,
            };
        });
    }
    messagesToItemsAdapter() {
        return this.liveShopData.messages.map(message => {
            var _a, _b;
            return ({
                id: (_a = message.id) !== null && _a !== void 0 ? _a : null,
                title: message.title,
                content: message.content,
                type: 'message',
                show: message.status && message.status !== 'hidden',
                highlight: message.status === 'highlighting',
                position: (_b = message.position) !== null && _b !== void 0 ? _b : 0,
            });
        });
    }
    updateItems(items, message) {
        const maxPosition = Math.max(...items.map(i => { var _a; return (_a = i.position) !== null && _a !== void 0 ? _a : 0; }));
        const updatedItems = items.map(item => {
            var _a, _b;
            if (item.id !== message.id || item.type !== message.type)
                return item;
            const isHighlightOn = message.status === 'highlighting';
            const wasHighlightOn = !!item.highlight;
            const isHidden = message.status === 'hidden';
            if (isHighlightOn && !wasHighlightOn) {
                return Object.assign(Object.assign({}, item), { show: !isHidden, highlight: true, lastPosition: (_a = item.lastPosition) !== null && _a !== void 0 ? _a : item.position, position: maxPosition + 1 });
            }
            if (!isHighlightOn && wasHighlightOn) {
                return Object.assign(Object.assign({}, item), { show: !isHidden, highlight: false, position: (_b = item.lastPosition) !== null && _b !== void 0 ? _b : item.position, lastPosition: undefined });
            }
            return Object.assign(Object.assign({}, item), { show: !isHidden, highlight: isHighlightOn, position: maxPosition + 1 });
        });
        updatedItems.sort((a, b) => { var _a, _b; return ((_a = b.position) !== null && _a !== void 0 ? _a : 0) - ((_b = a.position) !== null && _b !== void 0 ? _b : 0); });
        return updatedItems;
    }
    async getItems() {
        const productItems = await this.productsToItemsAdapter();
        const messageItems = this.messagesToItemsAdapter();
        const allItems = [...productItems, ...messageItems];
        allItems.sort((a, b) => b.position - a.position);
        return allItems;
    }
}
//# sourceMappingURL=live-shop.service.js.map
