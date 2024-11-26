import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as ProductService, L as LiveShopService } from './index2.js';
import { d as defineCustomElement$b } from './custom-card2.js';
import { d as defineCustomElement$a } from './front-image2.js';
import { d as defineCustomElement$9 } from './highlight-card2.js';
import { d as defineCustomElement$8 } from './live-shop-desktop2.js';
import { d as defineCustomElement$7 } from './live-shop-mobile2.js';
import { d as defineCustomElement$6 } from './live-shop-not-found2.js';
import { d as defineCustomElement$5 } from './live-video-chat2.js';
import { d as defineCustomElement$4 } from './live-video-player2.js';
import { d as defineCustomElement$3 } from './product-card2.js';
import { d as defineCustomElement$2 } from './tab-selector2.js';

class LiveShopHandler {
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

class WebSocketClient {
    constructor(url) {
        this.onOpen = () => {
            console.log('Conectado à sala.');
        };
        this.onClose = () => {
            console.log('Conexão fechada.');
        };
        this.onError = (error) => {
            console.error('Erro na conexão:', error);
        };
        this.url = url;
        this.socket = new WebSocket(this.url);
        this.socket.onopen = this.onOpen;
        this.socket.onmessage = (event) => event.data;
        this.socket.onclose = this.onClose;
        this.socket.onerror = this.onError;
    }
    onMessage(callback) {
        this.socket.onmessage = callback;
    }
    closeConnection() {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close();
        }
    }
}

const liveShopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}:host{display:block;width:100%}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:350px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.live-shop{height:100%}.live-shop-warmup .banner-custom-style{padding:40px}.live-shop-warmup .banner-custom-style>.custom-card-content{width:100%;max-width:720px;height:auto;aspect-ratio:16/9}.live-shop-warmup .banner-custom-style>.custom-card-content img{width:100%;height:100%;object-fit:cover}.live-shop-warmup .banner-custom-style>.custom-card-content .live-shop-banner{background-color:#d9d9d9;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.live-shop-finished .button-custom-style{padding:40px;max-width:410px;margin:0 auto;text-align:center}.live-shop-finished .button-custom-style button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;text-transform:capitalize;font-size:14px}.live-shop-finished .button-custom-style button:hover{opacity:0.75}.live-shop-finished .button-custom-style button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopStyle0 = liveShopCss;

const LiveShop$1 = /*@__PURE__*/ proxyCustomElement(class LiveShop extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
                if (event.data) {
                    const message = JSON.parse(event.data);
                    this.liveShopItems = this.liveShopItemsService.updateItems(this.liveShopItems, message);
                }
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
    }
    async componentWillLoad() {
        var _a;
        try {
            if (!this.hashRoom)
                throw new Error('Hash Room is required');
            this.isLoading = true;
            window.addEventListener('resize', this.handleResize);
            this.componentRendered.emit();
            this.liveShopItemsService = new LiveShopHandler();
            this.liveShopRegister = await this.liveShopItemsService.getLiveShop(this.hashRoom);
            this.liveShopItems = await this.liveShopItemsService.getItems();
            if (this.liveShopRegister)
                this.videoId = this.liveShopRegister.urlLive.split('v=')[1];
            this.liveSocket = new WebSocketClient(`ws://localhost:3001?hashRoom=${this.hashRoom}`);
            this.liveSocket.onMessage(this.handleMessage);
        }
        catch (error) {
            if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('live-shop_not_found')) {
                this.liveShopNotFound = true;
                console.error('Live Shop not found', { error });
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
    static get style() { return LiveShopStyle0; }
}, [0, "live-shop", {
        "hashRoom": [1, "hash-room"],
        "liveShopNotFound": [32],
        "videoId": [32],
        "isSmallDevice": [32],
        "isChatOpen": [32],
        "isLoading": [32],
        "liveShopRegister": [32],
        "liveShopItemsService": [32],
        "liveShopItems": [32],
        "liveSocket": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["live-shop", "custom-card", "front-image", "highlight-card", "live-shop-desktop", "live-shop-mobile", "live-shop-not-found", "live-video-chat", "live-video-player", "product-card", "tab-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShop$1);
            }
            break;
        case "custom-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "highlight-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "live-shop-desktop":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "live-shop-mobile":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "live-shop-not-found":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "live-video-chat":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "live-video-player":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tab-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const LiveShop = LiveShop$1;
const defineCustomElement = defineCustomElement$1;

export { LiveShop, defineCustomElement };

//# sourceMappingURL=live-shop.js.map