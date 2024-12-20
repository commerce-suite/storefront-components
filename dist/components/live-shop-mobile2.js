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

const liveShopMobileCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live{display:flex;flex-direction:column;gap:32px}.live-shop-in-live .live-video-player{height:229px;border-radius:8px;overflow:hidden}.live-shop-in-live-options .in-live-custom-style .custom-card-content{width:100%}.live-shop-in-live-options .in-live-custom-style-empty{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-options .custom-card-content .live-video-chat{height:calc(100vh - 386px);border-radius:8px;overflow:hidden}";
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
        return (h("div", { key: '1abb54a525fa61685d562217ab00c6c0159cfadd', class: "live-shop-in-live" }, h("div", { key: '3d664a342fb4617d18e5db88e8a49c3f2bfe3e0d', class: "live-shop-in-live-player" }, h("live-video-player", { key: '14a3df758d6159a71e1f6cb01acfda6a991571b6', videoId: this.videoId, autoPlay: true })), h("div", { key: 'ac70850384d726f4e139a54c6eb1f43c1474f8be', class: "live-shop-in-live-options" }, h("custom-card", { key: 'dee7d588370cbd6f9860107597ba2a9a7c219d4e', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: 'a122cdcccc5e6546e90498659b91e1a1f0af6768', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
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