import { Host, h } from "@stencil/core";
import { LiveShopHandler } from "./services/live-shop.service";
export class LiveShop {
    constructor() {
        this.handleResize = () => {
            this.isSmallDevice = window.innerWidth <= 1024;
        };
        this.isChatOpenHandler = () => {
            this.isChatOpen = !this.isChatOpen;
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
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
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
            this.liveShopItems = await this.liveShopItemsService.getItems();
            if (this.liveShopRegister)
                this.videoId = this.liveShopRegister.urlLive.split('v=')[1];
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
        if (this.isLoading) {
            return h(Host, null, this.renderLoading());
        }
        if (this.liveShopNotFound) {
            return h("live-shop-not-found", { onReturnToHome: () => this.onReturnToHome.emit() });
        }
        return (h(Host, null, h("div", { class: "live-shop" }, this.liveShopRegister.status === 'warmup' && this.renderWarmup(), this.liveShopRegister.status === 'inLive' && this.renderInLive(), this.liveShopRegister.status === 'finished' && this.renderFinished())));
    }
    static get is() { return "live-shop"; }
    static get originalStyleUrls() {
        return {
            "$": ["live-shop.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["live-shop.css"]
        };
    }
    static get properties() {
        return {
            "hashRoom": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hash-room",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "liveShopNotFound": {},
            "videoId": {},
            "isSmallDevice": {},
            "isChatOpen": {},
            "isLoading": {},
            "liveShopRegister": {},
            "liveShopItemsService": {},
            "liveShopItems": {}
        };
    }
    static get events() {
        return [{
                "method": "onReturnToHome",
                "name": "on-return-to-home",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "componentRendered",
                "name": "componentRendered",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=live-shop.js.map
