import { LiveShopService, ProductService } from "@uxshop/storefront-core";
export class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await ProductService.getList({
            fields: [
                'id',
                'name',
                'images { src }',
                'price',
                'priceCompare',
                'productId',
                'slug',
                'hasPriceRange',
                'balance',
                'isSellOutOfStock',
                'color { id, name, hexadecimal, slug, image { src } }',
            ],
            filter: { productIds, page: 0, first: 1000 },
            agg: {
                field: ['productId', 'colorId', 'id'],
            },
        });
    }
    async getLiveShop(hashRoom) {
        this.liveShopData = await LiveShopService.getByHash(hashRoom);
        return this.liveShopData;
    }
    groupByProductIdWithColorAndVariations(edges) {
        var _a, _b;
        const grouped = {};
        for (const { node } of edges) {
            const productId = node.productId;
            const colorId = (_b = (_a = node.color) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 0;
            if (!grouped[productId])
                grouped[productId] = {};
            if (!grouped[productId][colorId])
                grouped[productId][colorId] = [];
            grouped[productId][colorId].push(node);
        }
        return Object.fromEntries(Object.entries(grouped).map(([productId, colorGroups]) => [
            +productId,
            Object.values(colorGroups),
        ]));
    }
    selectBaseNode(nodes) {
        var _a;
        return (_a = nodes.find(n => { var _a; return (_a = n.images) === null || _a === void 0 ? void 0 : _a.length; })) !== null && _a !== void 0 ? _a : nodes[0];
    }
    buildProductItemGroupedByColor(base, colorGroups, liveProduct) {
        var _a, _b, _c;
        const validColorGroups = colorGroups.filter(group => { var _a, _b; return (_b = (_a = group[0]) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.id; });
        const shouldGroup = validColorGroups.length > 1;
        const colors = shouldGroup
            ? validColorGroups.map(group => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                const variation = group[0];
                return {
                    id: (_a = variation.color) === null || _a === void 0 ? void 0 : _a.id,
                    name: (_b = variation.color) === null || _b === void 0 ? void 0 : _b.name,
                    slug: (_c = variation.color) === null || _c === void 0 ? void 0 : _c.slug,
                    hexadecimal: (_d = variation.color) === null || _d === void 0 ? void 0 : _d.hexadecimal,
                    image: ((_f = (_e = variation.color) === null || _e === void 0 ? void 0 : _e.image) === null || _f === void 0 ? void 0 : _f.src) ? { src: variation.color.image.src } : null,
                    price: variation.price,
                    productImage: ((_h = (_g = variation.images) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.src) ? { src: variation.images[0].src } : null,
                    balance: group.reduce((sum, v) => { var _a; return sum + ((_a = v.balance) !== null && _a !== void 0 ? _a : 0); }, 0),
                    priceCompare: variation.priceCompare,
                    variations: group.map(v => {
                        var _a, _b;
                        return ({
                            id: v.id,
                            price: v.price,
                            balance: v.balance,
                            image: ((_b = (_a = v.images) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.src) ? { src: v.images[0].src } : null,
                        });
                    }),
                };
            })
            : null;
        const color = base.color;
        const gridId = color ? `${base.productId}-${color.id}` : `${base.productId}`;
        return Object.assign({ id: +base.productId, name: base.name, image: ((_b = (_a = base.images) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.src) ? { src: base.images[0].src } : null, images: (() => {
                var _a;
                const seenSrcs = new Set();
                const result = [];
                for (const variation of colorGroups.flat()) {
                    const variationId = variation.id;
                    const images = (_a = variation.images) !== null && _a !== void 0 ? _a : [];
                    for (const image of images) {
                        if ((image === null || image === void 0 ? void 0 : image.src) && !seenSrcs.has(image.src)) {
                            seenSrcs.add(image.src);
                            result.push({
                                src: image.src,
                                variationId,
                            });
                        }
                    }
                }
                return result;
            })(), price: base.price, priceBase: base.priceCompare, balance: base.balance, isSellOutOfStock: base.isSellOutOfStock, gridId, slug: base.slug, type: 'product', show: (liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.status) && liveProduct.status !== 'hidden', highlight: (liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.status) === 'highlighting', position: (_c = liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.position) !== null && _c !== void 0 ? _c : 0, colors }, (shouldGroup ? {} : { showStartingFrom: base.hasPriceRange }));
    }
    async productsToItemsAdapter() {
        var _a;
        const products = await this.getProducts();
        const liveProducts = (_a = this.liveShopData) === null || _a === void 0 ? void 0 : _a.products;
        const grouped = this.groupByProductIdWithColorAndVariations(products.edges);
        return Object.entries(grouped).map(([productId, colorGroups]) => {
            const allNodes = colorGroups.flat();
            const baseNode = this.selectBaseNode(allNodes);
            const liveProduct = liveProducts.find(p => p.productId === Number(productId));
            return this.buildProductItemGroupedByColor(baseNode, colorGroups, liveProduct);
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
