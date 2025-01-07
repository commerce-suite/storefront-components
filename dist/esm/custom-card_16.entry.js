import { r as registerInstance, c as createEvent, h, H as Host, g as getAssetPath, E as Env } from './index-a3127836.js';
import { P as ProductService, L as LiveShopService } from './index-998b9210.js';

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}";
const CustomCardStyle0 = customCardCss;

const CustomCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: 'bf02f44cdc6c2da39b0529867a67262758a764bb' }, h("div", { key: '4a0472e9cccced2e7888ceb716280eb424821b27', class: `custom-card ${this.customClass}` }, h("div", { key: 'ffeb567152895df9085959ac4a6fc2bb6588cb90', class: "custom-card-header" }, h("h2", { key: '976d0f0d92f4d6c6e8a77c4622324e762c383cd3', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '17396eac2ca965b1d33a390f372d1a7086735f47', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '1c55813bd7d4d66b04d06794606a38be5d3a1d76', class: "custom-card-content" }, h("slot", { key: 'a0b7326af7ae7b1346e37fb1d2b1ce90bca1d076' })))));
    }
};
CustomCard.style = CustomCardStyle0;

function currencyFormat(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
function getClassByProps(classByProps) {
    return Object.keys(classByProps)
        .filter(key => classByProps[key])
        .map(key => key)
        .join(' ');
}
function extractYouTubeVideoId(url) {
    if (!url)
        return null;
    const regex = /(?:watch\?v=|live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:contain;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
const FrontImageStyle0 = frontImageCss;

const FrontImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imageSrc = undefined;
        this.textAlt = undefined;
        this.figCaption = undefined;
        this.isSrcLoading = true;
    }
    getImageClassByProps() {
        const classProps = {
            '-is-loading': this.isSrcLoading,
        };
        return `image-container ${getClassByProps(classProps)}`;
    }
    // private onSrcLoadError() {
    //   this.imageSrc = getAssetPath('./assets/images/image-fallback.png');
    //   setTimeout(() => {
    //     this.isSrcLoading = false;
    //   }, 500);
    // }
    onSrcLoadFinish() {
        setTimeout(() => {
            this.isSrcLoading = false;
        }, 500);
    }
    changeImageSrc() {
        this.isSrcLoading = true;
    }
    render() {
        return (h(Host, { key: 'bc463968dd294e3a8f7aa279622bba5d72fe8ac6' }, h("figure", { key: 'b71f07405b96ae5685f93de92d032aef312eb779', class: this.getImageClassByProps() }, h("img", { key: 'b5a24103e1c560579c53d9a9eb32630c7500d711', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: 'c3a49858f8e2e02c88a344f9f5fcfc73c86bd79a' }, this.figCaption))));
    }
    static get watchers() { return {
        "imageSrc": ["changeImageSrc"]
    }; }
};
FrontImage.style = FrontImageStyle0;

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product-cart-icon{padding:24px}.highlight-card-product-cart-icon img{cursor:pointer}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-all}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";
const HighlightCardStyle0 = highlightCardCss;

const HighlightCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.addItem = createEvent(this, "addItem", 7);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
    }
    renderItem(item, isHighlighted) {
        if (!item.show)
            return null;
        return (h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (h("div", { class: "highlight-card-message" }, h("h4", { class: "highlight-card-message-title" }, item.title), h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (h("div", { class: "highlight-card-product" }, h("product-card", { "custom-class": "highlight-custom-style", product: item, basePrice: {
                price: item.price,
                priceCompare: item.priceBase,
            }, inline: true }), h("div", { class: "highlight-card-product-cart-icon" }, h("img", { onClick: () => this.addItem.emit(item), src: getAssetPath('./assets/icons/add-to-cart.svg'), alt: "add_to_cart_icon" }))))));
    }
    filterItems(items) {
        const visibleItems = items.filter(item => item.show);
        this.highlightedItems = visibleItems.filter(item => item.highlight);
        this.nonHighlightedItems = visibleItems.filter(item => !item.highlight);
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    componentWillLoad() {
        this.filterItems(this.items);
    }
    handleItemsChange(newItems) {
        this.filterItems(newItems);
    }
    render() {
        return (h(Host, { key: '1bec2619adbb46bcb6ca24333a54eed64e164189' }, h("div", { key: '2131db9a08f0be0905c0cbe2fb2ea0309d75741e', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: '2293dbd85cd2b9295295d86491c8564ede506590', class: "highlight-card-container" }, h("div", { key: '57058ccfde1a9d6ac6d20ad55ba4b3c545592ffe', class: "highlight-card-header" }, h("span", { key: 'd85ada76ac9cd891a62411635aac8e1dd4c5f5ae', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
    }
    static get watchers() { return {
        "items": ["handleItemsChange"]
    }; }
};
HighlightCard.style = HighlightCardStyle0;

class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await ProductService.getList({
            fields: ['name', 'images { src }', 'price', 'priceCompare', 'productId', 'slug'],
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

const liveShopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}:host{display:block;width:100%}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:350px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.live-shop{height:100%}.live-shop-warmup .banner-custom-style{padding:40px}.live-shop-warmup .banner-custom-style>.custom-card-content{width:100%;max-width:720px;height:auto;aspect-ratio:16/9}.live-shop-warmup .banner-custom-style>.custom-card-content img{width:100%;height:100%;object-fit:cover}.live-shop-warmup .banner-custom-style>.custom-card-content .live-shop-banner{background-color:#d9d9d9;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.live-shop-finished .button-custom-style{padding:40px;max-width:410px;margin:0 auto;text-align:center}.live-shop-finished .button-custom-style button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.live-shop-finished .button-custom-style button:hover{opacity:0.75}.live-shop-finished .button-custom-style button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopStyle0 = liveShopCss;

const LiveShop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onReturnToHome = createEvent(this, "on-return-to-home", 7);
        this.componentRendered = createEvent(this, "componentRendered", 7);
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
                this.videoId = extractYouTubeVideoId(this.liveShopRegister.urlLive);
            }
            const wsBaseUrl = Env.WEBSOCKET_URL ;
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
        return (h("div", { class: "loading-container" }, h("span", { class: "spinner" })));
    }
    renderWarmup() {
        return (h("div", { class: "live-shop-warmup" }, h("custom-card", { customClass: "banner-custom-style", cardTitle: this.liveShopRegister.title }, this.liveShopRegister.banner ? (h("img", { src: this.liveShopRegister.banner.src, alt: this.liveShopRegister.banner.alt })) : (h("div", { class: "live-shop-banner" })))));
    }
    renderInLive() {
        return this.isSmallDevice ? (h("live-shop-mobile", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems })) : (h("live-shop-desktop", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems, isChatOpen: this.isChatOpen, toggleChat: () => this.isChatOpenHandler() }));
    }
    renderFinished() {
        return (h("div", { class: "live-shop-finished" }, h("custom-card", { customClass: "button-custom-style", cardTitle: "A live chegou ao fim!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades e promo\u00E7\u00F5es imperd\u00EDveis!" }, h("button", { onClick: () => this.onReturnToHome.emit() }, "Voltar para a p\u00E1gina inicial"))));
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return h(Host, null, this.renderLoading());
        }
        if (this.liveShopNotFound) {
            return h("live-shop-not-found", { onReturnToHome: () => this.onReturnToHome.emit() });
        }
        return (h(Host, null, h("div", { class: "live-shop" }, ((_a = this.liveShopRegister) === null || _a === void 0 ? void 0 : _a.status) === 'warmup' && this.renderWarmup(), ((_b = this.liveShopRegister) === null || _b === void 0 ? void 0 : _b.status) === 'inLive' && this.renderInLive(), ((_c = this.liveShopRegister) === null || _c === void 0 ? void 0 : _c.status) === 'finished' && this.renderFinished())));
    }
};
LiveShop.style = LiveShopStyle0;

const liveShopDesktopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;max-width:550px;word-break:break-word}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card{width:450px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}.live-shop-in-live-desktop .highlight-card{width:450px}";
const LiveShopDesktopStyle0 = liveShopDesktopCss;

const LiveShopDesktop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickAdd = createEvent(this, "on-click-add", 7);
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                liveShopData: this.liveShopData,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
        this.isChatOpen = undefined;
        this.toggleChat = undefined;
    }
    buttonText() {
        return this.isChatOpen ? 'Ocultar chat da live' : 'Exibir chat da live';
    }
    render() {
        return (h("div", { key: '83688007127152e35d37fa214d5d757dc09bd8dc', class: "live-shop-in-live-desktop" }, h("div", { key: '8590bcd8113204cfeb05cf04d082751e6fdde378', class: "live-shop-in-live-desktop-infos" }, h("div", { key: 'c56a9f3355bf340c5a88138743c0d840897c8ea7', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: '836ced4d3feaa823d795a610d7cb9883e51cb823', videoId: this.videoId, autoPlay: true })), h("div", { key: '830a5186917f5ce1545ada8aacbc7d4f5fad2e9a', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '2c83f90c525e1804751ef7ebeb41584d8a07901e', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (h("button", { key: '82ca6cdd8047dfd3648fcdedf93f9f44fddfae7e', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (h("div", { key: 'faef8dce8b2e7e59bd0ede6ee089ff8b3e846893', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: 'a6ac796d0b3be7d74a0b15b5bb65681337b7b8a3', videoId: this.videoId })))), h("div", { key: 'd168ffd8d0765d10abc8036abab2d68652944f70', class: "live-shop-in-live-desktop-content" }, h("div", { key: '5c16659d233eafe133c5e619a628f084431b5146', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 && this.items.some(item => item.show) ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
    }
};
LiveShopDesktop.style = LiveShopDesktopStyle0;

const tabs = (videoId, items, handleAddItem, chatVisible) => {
    const baseTabs = [
        {
            name: 'products',
            label: (h("span", null,
                "Produtos",
                (items === null || items === void 0 ? void 0 : items.some(item => item.type === 'product' && item.show)) && (h("span", { class: "product-count" }, items.filter(item => item.type === 'product' && item.show).length)))),
            content: () => {
                return (items === null || items === void 0 ? void 0 : items.length) > 0 && (items === null || items === void 0 ? void 0 : items.some(item => item.show)) ? (h("highlight-card", { items: items, onAddItem: handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-empty", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }));
            },
        },
    ];
    if (chatVisible) {
        baseTabs.push({
            name: 'chat',
            label: 'Chat',
            content: () => h("live-video-chat", { videoId: videoId }),
        });
    }
    return baseTabs;
};

const liveShopMobileCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live{display:flex;flex-direction:column;gap:32px}.live-shop-in-live .live-video-player{height:229px;border-radius:8px;overflow:hidden}.live-shop-in-live-options .in-live-custom-style .custom-card-content{width:100%}.live-shop-in-live-options .in-live-custom-style-empty{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-options .custom-card-content .live-video-chat{height:calc(100vh - 386px);border-radius:8px;overflow:hidden}";
const LiveShopMobileStyle0 = liveShopMobileCss;

const LiveShopMobile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickAdd = createEvent(this, "on-click-add", 7);
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                liveShopData: this.liveShopData,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
    }
    render() {
        return (h("div", { key: '3bd015899f2bc4fa515693fd7eac3421c8da8595', class: "live-shop-in-live" }, h("div", { key: 'b35e861c895705ae0f4fe5089aed4db265c8fd63', class: "live-shop-in-live-player" }, h("live-video-player", { key: 'de3b46504d7ebfff2d8c5c346e3cbe1f5afe86c1', videoId: this.videoId, autoPlay: true })), h("div", { key: 'ce7b8980f954d1a5acdb0a5ddae6991f0af52e81', class: "live-shop-in-live-options" }, h("custom-card", { key: 'bb0c62f474bc778fc917fbd93ddd5ed1fc4de668', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: '6025af2ee9e65ac7cd0c9fdec8229f458f54029d', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
    }
};
LiveShopMobile.style = LiveShopMobileStyle0;

const liveShopNotFoundCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-not-found button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-size:14px}.live-shop-not-found button:hover{opacity:0.75}.live-shop-not-found button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopNotFoundStyle0 = liveShopNotFoundCss;

const LiveShopNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.returnToHome = createEvent(this, "returnToHome", 7);
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (h(Host, { key: '1f403b5b2af650c1b722d1334e01a520f29c51ac' }, h("div", { key: 'bd76a6b90162f5a8afb6ba6d8ef777e5b3a4c324', class: "live-shop-not-found" }, h("custom-card", { key: 'de9bc6b31df20b18db73e6472ea325a4ffec2e8e', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades e promo\u00E7\u00F5es imperd\u00EDveis!" }, h("button", { key: '992492e601ac1025b555ec7a4cc828f0003e96bd', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
    }
};
LiveShopNotFound.style = LiveShopNotFoundStyle0;

const liveVideoChatCss = ":host{display:inline-block;width:100%}.live-video-chat{display:flex;justify-content:center;align-items:center;width:100%}.live-video-chat iframe{height:100%;width:100%}";
const LiveVideoChatStyle0 = liveVideoChatCss;

const LiveVideoChat = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
    }
    getChatUrl() {
        return `https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '81d8217d99480e79927891d870ee710b2e31dced' }, h("div", { key: '7b29bc775e2f1753e415bdbcdf0243597d33b6ec', class: "live-video-chat" }, h("iframe", { key: 'ffc9fa4017c6bba043b8a8ac588e6537bde7393e', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoChat.style = LiveVideoChatStyle0;

const liveVideoPlayerCss = ":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";
const LiveVideoPlayerStyle0 = liveVideoPlayerCss;

const LiveVideoPlayer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
        this.autoPlay = false;
    }
    getVideoUrl() {
        if (this.autoPlay)
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
        return `https://www.youtube.com/embed/${this.videoId}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '60cab57f22b5b466959f58d15902e2a92367c695' }, h("div", { key: '340dd9a880691532d990181ddfdc3b27bf772bea', class: "live-video-player" }, h("iframe", { key: '1a326a412225a81de6f3368be24925f4111319b4', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoPlayer.style = LiveVideoPlayerStyle0;

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3990e7691e319f4e822f3229395fbd0adc986175' }, h("div", { key: '1cfceba5d9f2ee343f8cc4574e102de5a7f15ab8', class: this.getClassWithInline('product-container') }, h("front-image", { key: '4e409800e65cd3e43d2bbee9059bb89e64202710', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '1755d903905e77f70955c44ebf7c615bde340b8a', class: "info" }, h("span", { key: '37e055b9275f0feb48dfffd387c1a460139561f2', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: '60ff941af33b538d06654ba683764f2a2d5a33a4', basePrice: this.basePrice, paymentOptions: this.paymentOptions })))));
    }
};
ProductCard.style = ProductCardStyle0;

const productPriceCss$4 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceStyle0 = productPriceCss$4;

const ProductPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentMap = {
            simple: (option) => (h("product-price-simple", { price: option.price, priceCompare: option.priceCompare })),
            billet: (option) => (h("product-price-billet", { price: option.price, priceCompare: option.priceCompare })),
            creditCard: (option) => (h("product-price-credit-card", { price: option.price, priceCompare: option.priceCompare, parcels: option.parcels, parcelPrice: option.parcelPrice, hasInterest: option.hasInterest })),
            pix: (option) => (h("product-price-pix", { price: option.price, priceCompare: option.priceCompare })),
        };
        this.basePrice = undefined;
        this.paymentOptions = undefined;
    }
    renderPaymentOption(option) {
        const renderFn = this.componentMap[option.type] || this.componentMap.simple;
        return renderFn(option);
    }
    render() {
        const options = this.paymentOptions || [];
        if (!options.length) {
            return (h(Host, null, h("div", { class: "product-price-container" }, this.componentMap.simple({
                type: 'simple',
                price: this.basePrice.price,
                priceCompare: this.basePrice.priceCompare,
            }))));
        }
        return (h(Host, null, h("div", { class: "product-price-container" }, options.map(option => this.renderPaymentOption(option)))));
    }
};
ProductPrice.style = ProductPriceStyle0;

const productPriceCss$3 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceBilletStyle0 = productPriceCss$3;

const ProductPriceBillet = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '1f1b96c087c1e73cffe988ff06fa1c6580b4ac3a', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: '06a678bb35e1a4c2308113d44f0164aff4fb5297', class: "price-compare" }, formattedCompare), h("span", { key: '2fafb6bc9232ab9e44c0761d94da496d10a7072d', class: "price-current" }, h("span", { key: '7f48612adace109aae38a1247f9019038a0c94fa', class: "highlight" }, formattedPrice), " no boleto")));
    }
};
ProductPriceBillet.style = ProductPriceBilletStyle0;

const productPriceCss$2 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceCreditCardStyle0 = productPriceCss$2;

const ProductPriceCreditCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
        this.parcels = undefined;
        this.parcelPrice = undefined;
        this.hasInterest = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        const formattedParcelPrice = this.parcelPrice ? currencyFormat(this.parcelPrice) : null;
        const interestText = this.hasInterest ? 'com juros' : 'sem juros';
        return (h("div", { key: '629ce84e525ffb2121a38e7d79e0c34646419d69', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: '3ae7723e398c04ff83a5d4e1ad2b94318bf35888', class: "price-compare" }, formattedCompare), h("span", { key: 'cf822da5252fee8e18e1205b4149803487c1941f', class: "price-current" }, h("span", { key: '563d9ee9b0390724fdcdcc3197232e9e66d1b77d', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (h("span", { key: '6fa6503e27631fc382f495674ac40d18c7d163fe', class: "credit-info" }, "em at\u00E9 ", h("span", { key: '5118dc9c547b689e1a99ab1f608adc24d5f379b2', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '4779350a3dbfc1844ff670c0bc06ecb932838634', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
    }
};
ProductPriceCreditCard.style = ProductPriceCreditCardStyle0;

const productPriceCss$1 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPricePixStyle0 = productPriceCss$1;

const ProductPricePix = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '7cfe311cf3a3b6d673ce61bdcddf86ab650f3434', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: 'edcb9c9c3240074e1a8cdf4b9616dd782d11e2f9', class: "price-compare" }, formattedCompare), h("span", { key: 'da3655cdd080fd8ef1a44e05fe38c4bd3adb5c09', class: "price-current" }, h("span", { key: 'e14185061d1cc61cf546c9b9f3e7c741eb9e01aa', class: "highlight" }, formattedPrice), " no pix")));
    }
};
ProductPricePix.style = ProductPricePixStyle0;

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceSimpleStyle0 = productPriceCss;

const ProductPriceSimple = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: 'c9039c471f96bd4511e90ebd9561397592fbd564', class: "payment-option payment-option-simple" }, formattedCompare && h("span", { key: '9a203dd0ee2736d6809c154d518d6d1e3cd65bba', class: "price-compare" }, formattedCompare), h("span", { key: 'fd88ad7365d24ecd5ca6094b8fdaca1b31044ffb', class: "price-current" }, h("span", { key: 'eb2de32d730643b6c73b7c3516be88ca107feffc', class: "highlight" }, formattedPrice))));
    }
};
ProductPriceSimple.style = ProductPriceSimpleStyle0;

const tabSelectorCss = ".tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}";
const TabSelectorStyle0 = tabSelectorCss;

const TabSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabs = undefined;
        this.activeTab = undefined;
    }
    handleTabClick(tabName) {
        this.activeTab = tabName;
    }
    componentWillLoad() {
        var _a;
        if (((_a = this.tabs) === null || _a === void 0 ? void 0 : _a.length) > 0)
            this.activeTab = this.tabs[0].name;
    }
    render() {
        var _a, _b;
        return (h("div", { key: '697ff2e799cc61c170da72d3e8de589ee1706b3e', class: "tab-selector" }, h("div", { key: 'e7b8ea244880f77446af7ca4eee87aac2f85a1d6', class: "tab-selector-tabs" }, (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.map(tab => (h("span", { class: { active: this.activeTab === tab.name }, onClick: () => this.handleTabClick(tab.name) }, tab.label)))), h("div", { key: '87eaa028dc50138bc00649ed024560bd7c4c1102', class: "tab-selector-tabs-content" }, (_b = this.tabs) === null || _b === void 0 ? void 0 : _b.map(tab => (h("div", { class: {
                'tab-selector-tabs-content-item': true,
                'active': this.activeTab === tab.name,
            } }, this.activeTab === tab.name && tab.content()))))));
    }
};
TabSelector.style = TabSelectorStyle0;

export { CustomCard as custom_card, FrontImage as front_image, HighlightCard as highlight_card, LiveShop as live_shop, LiveShopDesktop as live_shop_desktop, LiveShopMobile as live_shop_mobile, LiveShopNotFound as live_shop_not_found, LiveVideoChat as live_video_chat, LiveVideoPlayer as live_video_player, ProductCard as product_card, ProductPrice as product_price, ProductPriceBillet as product_price_billet, ProductPriceCreditCard as product_price_credit_card, ProductPricePix as product_price_pix, ProductPriceSimple as product_price_simple, TabSelector as tab_selector };

//# sourceMappingURL=custom-card_16.entry.js.map