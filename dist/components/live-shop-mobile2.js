import { h, proxyCustomElement, HTMLElement, createEvent } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './custom-card2.js';
import { d as defineCustomElement$b } from './front-image2.js';
import { d as defineCustomElement$a } from './highlight-card2.js';
import { d as defineCustomElement$9 } from './live-video-chat2.js';
import { d as defineCustomElement$8 } from './live-video-player2.js';
import { d as defineCustomElement$7 } from './product-card2.js';
import { d as defineCustomElement$6 } from './product-price2.js';
import { d as defineCustomElement$5 } from './product-price-billet2.js';
import { d as defineCustomElement$4 } from './product-price-credit-card2.js';
import { d as defineCustomElement$3 } from './product-price-pix2.js';
import { d as defineCustomElement$2 } from './product-price-simple2.js';
import { d as defineCustomElement$1 } from './tab-selector2.js';

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

const liveShopMobileCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live{display:flex;flex-direction:column;gap:32px}.live-shop-in-live .live-video-player{height:229px;border-radius:8px;overflow:hidden}.live-shop-in-live-options .in-live-custom-style .custom-card-content{width:100%}.live-shop-in-live-options .in-live-custom-style-empty{padding:40px;border:1px solid var(--color-primary);border-radius:8px}.live-shop-in-live-options .custom-card-content .live-video-chat{height:calc(100vh - 386px);border-radius:8px;overflow:hidden}";
const LiveShopMobileStyle0 = liveShopMobileCss;

const LiveShopMobile = /*@__PURE__*/ proxyCustomElement(class LiveShopMobile extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: 'b57194c7ac87bfc7ca76717bdccd20e74909ee8f', class: "live-shop-in-live" }, h("div", { key: '0725abc5598f295f32934bbc96b36c2d261ca3c4', class: "live-shop-in-live-player" }, h("live-video-player", { key: '2ac3167cf1954f9d6f745eb2632543dd4715a49f', videoId: this.videoId, autoPlay: true })), h("div", { key: '230abc19f8e2844db0bbb9d3d4ffe41908856e8d', class: "live-shop-in-live-options" }, h("custom-card", { key: 'd428654da62065e3675b75e570b32a41d8b34869', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: '12c671d3815960895c67f10371fd4bc232764d23', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
    }
    static get style() { return LiveShopMobileStyle0; }
}, [0, "live-shop-mobile", {
        "videoId": [1, "video-id"],
        "liveShopData": [16],
        "items": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["live-shop-mobile", "custom-card", "front-image", "highlight-card", "live-video-chat", "live-video-player", "product-card", "product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple", "tab-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop-mobile":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShopMobile);
            }
            break;
        case "custom-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "highlight-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "live-video-chat":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "live-video-player":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "product-price":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "product-price-billet":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "product-price-credit-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "product-price-pix":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "product-price-simple":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "tab-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { LiveShopMobile as L, defineCustomElement as d };

//# sourceMappingURL=live-shop-mobile2.js.map