'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-53de1b7a.js');
const index = require('./index-15bfa4ed.js');
const utils = require('./utils-0cb85ee7.js');

class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await index.ProductService.getList({
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
        this.liveShopData = await index.LiveShopService.getByHash(hashRoom);
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

class WebSocketClient {
    constructor(url) {
        this.socket = null;
        this.reconnectAttempts = 0;
        this.reconnectTimeout = null;
        this.messageCallback = null;
        this.onOpen = () => {
            this.reconnectAttempts = 0;
            if (this.messageCallback && this.socket) {
                this.socket.addEventListener('message', this.messageCallback);
            }
        };
        this.onClose = (event) => {
            if (!event.wasClean)
                this.handleReconnect();
        };
        this.onError = () => {
            this.handleReconnect();
        };
        this.url = url;
        this.connect();
    }
    connect() {
        if (this.socket) {
            this.socket.onclose = null;
            this.socket.onerror = null;
            this.socket.onmessage = null;
        }
        this.socket = new WebSocket(this.url);
        this.socket.onopen = this.onOpen;
        this.socket.onclose = this.onClose;
        this.socket.onerror = this.onError;
    }
    handleReconnect() {
        if (this.reconnectTimeout !== null)
            return;
        if (this.reconnectAttempts >= WebSocketClient.MAX_RECONNECT_ATTEMPTS)
            return;
        const delay = this.reconnectAttempts === 0
            ? WebSocketClient.INITIAL_INCREMENT_DELAY
            : Math.min(WebSocketClient.INITIAL_RECONNECT_DELAY * Math.pow(2, this.reconnectAttempts - 1), WebSocketClient.MAX_RECONNECT_DELAY);
        this.reconnectTimeout = window.setTimeout(() => {
            this.reconnectAttempts++;
            this.reconnectTimeout = null;
            this.connect();
        }, delay);
    }
    closeConnection() {
        var _a;
        if (((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === WebSocket.OPEN) {
            this.socket.close();
        }
        if (this.reconnectTimeout !== null) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
    }
    onMessage(callback) {
        this.messageCallback = callback;
        if (this.socket) {
            this.socket.addEventListener('message', callback);
        }
    }
}
WebSocketClient.MAX_RECONNECT_ATTEMPTS = 5;
WebSocketClient.INITIAL_RECONNECT_DELAY = 5000;
WebSocketClient.MAX_RECONNECT_DELAY = 30000;
WebSocketClient.INITIAL_INCREMENT_DELAY = 1000;

const liveShopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}:host{display:block;width:100%}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:350px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.live-shop-warmup .banner-custom-style{padding:40px}.live-shop-warmup .banner-custom-style>.custom-card-content{width:100%;max-width:720px;height:auto;aspect-ratio:16/9}.live-shop-warmup .banner-custom-style>.custom-card-content img{width:100%;height:100%;object-fit:cover}.live-shop-warmup .banner-custom-style>.custom-card-content .live-shop-banner{background-color:#d9d9d9;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.live-shop-finished .button-custom-style{padding:40px;max-width:410px;margin:0 auto;text-align:center}.live-shop-finished .button-custom-style button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.live-shop-finished .button-custom-style button:hover{opacity:0.75}.live-shop-finished .button-custom-style button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopStyle0 = liveShopCss;

const LiveShop = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.onReturnToHome = index$1.createEvent(this, "on-return-to-home", 7);
        this.componentRendered = index$1.createEvent(this, "componentRendered", 7);
        this.handleResize = () => {
            this.isSmallDevice = window.innerWidth <= 1024;
        };
        this.isChatOpenHandler = () => {
            this.isChatOpen = !this.isChatOpen;
        };
        this.handleMessage = (event) => {
            try {
                if (!event.data)
                    return;
                const message = JSON.parse(event.data);
                const statusMap = {
                    liveOn: 'inLive',
                    liveOff: 'finished',
                };
                if (statusMap[message.type]) {
                    this.liveShopRegister = Object.assign(Object.assign({}, this.liveShopRegister), { status: statusMap[message.type] });
                    return;
                }
                this.liveShopItems = this.liveShopItemsService.updateItems(this.liveShopItems, message);
            }
            catch (error) {
                console.error(error);
            }
        };
        this.hashRoom = undefined;
        this.liveShopNotFound = false;
        this.videoId = undefined;
        this.isSmallDevice = window.innerWidth <= 1024;
        this.isChatOpen = false;
        this.isLoading = true;
        this.liveShopRegister = undefined;
        this.liveShopItemsService = undefined;
        this.liveShopItems = undefined;
        this.liveSocket = undefined;
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
        if (this.liveSocket)
            this.liveSocket.closeConnection();
    }
    async componentDidLoad() {
        var _a;
        try {
            if (!this.hashRoom)
                throw new Error('Hash Room is required');
            this.isLoading = true;
            window.addEventListener('resize', this.handleResize);
            this.componentRendered.emit();
            this.liveShopItemsService = new LiveShopHandler();
            this.liveShopRegister = await this.liveShopItemsService.getLiveShop(this.hashRoom);
            if (!this.liveShopRegister)
                throw new Error('live-shop_not_found');
            this.liveShopItems = await this.liveShopItemsService.getItems();
            if (this.liveShopRegister) {
                this.videoId = utils.extractYouTubeVideoId(this.liveShopRegister.urlLive);
            }
            const wsBaseUrl = 'ws://localhost:3001';
            this.liveSocket = new WebSocketClient(`${wsBaseUrl}?hashRoom=${this.hashRoom}`);
            this.liveSocket.onMessage(this.handleMessage);
        }
        catch (error) {
            if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('live-shop_not_found')) {
                this.liveShopNotFound = true;
                console.error('Live Shop not found', { error });
                return;
            }
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    renderLoading() {
        return (index$1.h("div", { class: "loading-container" }, index$1.h("span", { class: "spinner" })));
    }
    renderWarmup() {
        var _a;
        return (index$1.h("div", { class: "live-shop-warmup" }, index$1.h("custom-card", { customClass: "banner-custom-style", cardTitle: this.liveShopRegister.title }, ((_a = this.liveShopRegister.banner) === null || _a === void 0 ? void 0 : _a.src) ? (index$1.h("img", { src: this.liveShopRegister.banner.src, alt: this.liveShopRegister.banner.alt })) : null)));
    }
    renderInLive() {
        return this.isSmallDevice ? (index$1.h("live-shop-mobile", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems })) : (index$1.h("live-shop-desktop", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems, isChatOpen: this.isChatOpen, toggleChat: () => this.isChatOpenHandler() }));
    }
    renderFinished() {
        return (index$1.h("div", { class: "live-shop-finished" }, index$1.h("custom-card", { customClass: "button-custom-style", cardTitle: "A live chegou ao fim!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades!" }, index$1.h("button", { onClick: () => this.onReturnToHome.emit() }, "Voltar para a p\u00E1gina inicial"))));
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return index$1.h(index$1.Host, null, this.renderLoading());
        }
        if (this.liveShopNotFound) {
            return index$1.h("live-shop-not-found", { onReturnToHome: () => this.onReturnToHome.emit() });
        }
        return (index$1.h(index$1.Host, null, index$1.h("div", { class: "live-shop" }, ((_a = this.liveShopRegister) === null || _a === void 0 ? void 0 : _a.status) === 'warmup' && this.renderWarmup(), ((_b = this.liveShopRegister) === null || _b === void 0 ? void 0 : _b.status) === 'inLive' && this.renderInLive(), ((_c = this.liveShopRegister) === null || _c === void 0 ? void 0 : _c.status) === 'finished' && this.renderFinished())));
    }
};
LiveShop.style = LiveShopStyle0;

exports.live_shop = LiveShop;

//# sourceMappingURL=live-shop.cjs.entry.js.map