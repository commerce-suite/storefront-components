import { h, proxyCustomElement, HTMLElement, createEvent } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './custom-card2.js';
import { d as defineCustomElement$6 } from './front-image2.js';
import { d as defineCustomElement$5 } from './highlight-card2.js';
import { d as defineCustomElement$4 } from './live-video-chat2.js';
import { d as defineCustomElement$3 } from './live-video-player2.js';
import { d as defineCustomElement$2 } from './product-card2.js';
import { d as defineCustomElement$1 } from './tab-selector2.js';

const tabs = (videoId, items, handleAddItem) => [
    {
        name: 'products',
        label: (h("span", null,
            "Produtos",
            (items === null || items === void 0 ? void 0 : items.filter(item => item.type === 'product').length) > 0 ? (h("span", { class: "product-count" }, items === null || items === void 0 ? void 0 : items.filter(item => item.type === 'product').length)) : (''))),
        content: () => {
            return (items === null || items === void 0 ? void 0 : items.length) > 0 ? (h("highlight-card", { items: items, onAddItem: handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-empty", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }));
        },
    },
    {
        name: 'chat',
        label: 'Chat',
        content: () => h("live-video-chat", { videoId: videoId }),
    },
];

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
                video_id: this.videoId,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
    }
    render() {
        return (h("div", { key: 'a2e8b7fd69e2bc3c338462bf26c79dd720b8d970', class: "live-shop-in-live" }, h("div", { key: 'b106572b3f90afc8a0d869f6f445dbf4a4002e7f', class: "live-shop-in-live-player" }, h("live-video-player", { key: '48eef803501fe992949786060724d26921d597a5', videoId: this.videoId, autoPlay: true })), h("div", { key: 'a64becef8dfbd80c18e41dbd0d9438d67ad4b216', class: "live-shop-in-live-options" }, h("custom-card", { key: '8d8745427174f8e0934964fc854a591a0e8177ae', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: 'b86e66ada9c27627f9343c6eae555e583d25967f', tabs: tabs(this.videoId, this.items, this.handleAddItem) })))));
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
    const components = ["live-shop-mobile", "custom-card", "front-image", "highlight-card", "live-video-chat", "live-video-player", "product-card", "tab-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop-mobile":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShopMobile);
            }
            break;
        case "custom-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "highlight-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "live-video-chat":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "live-video-player":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "product-card":
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