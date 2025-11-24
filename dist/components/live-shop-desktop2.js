import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './color-selector2.js';
import { d as defineCustomElement$b } from './custom-card2.js';
import { d as defineCustomElement$a } from './front-image2.js';
import { d as defineCustomElement$9 } from './highlight-card2.js';
import { d as defineCustomElement$8 } from './live-video-chat2.js';
import { d as defineCustomElement$7 } from './live-video-player2.js';
import { d as defineCustomElement$6 } from './product-card2.js';
import { d as defineCustomElement$5 } from './product-price2.js';
import { d as defineCustomElement$4 } from './product-price-billet2.js';
import { d as defineCustomElement$3 } from './product-price-credit-card2.js';
import { d as defineCustomElement$2 } from './product-price-pix2.js';
import { d as defineCustomElement$1 } from './product-price-simple2.js';

const liveShopDesktopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--fc-color-primary);font-weight:700;font-size:24px;text-transform:uppercase;max-width:550px;word-break:break-word}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card{width:450px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--color-primary);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}.live-shop-in-live-desktop .highlight-card{width:450px;max-height:573px;overflow-y:auto;overflow-x:hidden}";

const LiveShopDesktop = /*@__PURE__*/ proxyCustomElement(class LiveShopDesktop extends HTMLElement {
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
        this.isChatOpen = undefined;
        this.toggleChat = undefined;
    }
    buttonText() {
        return this.isChatOpen ? 'Ocultar chat da live' : 'Exibir chat da live';
    }
    render() {
        return (h("div", { key: '7effd5e5056878188a22174117cac9f59a104448', class: "live-shop-in-live-desktop" }, h("div", { key: 'b0e522dbd996132ea436f68cc189c873bd32b426', class: "live-shop-in-live-desktop-infos" }, h("div", { key: '513680509fadb268cbd12b928b2425e6492bd147', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: 'f95b5d568a0b8f3390730d0b011c53f40d72c2a4', videoId: this.videoId, autoPlay: true })), h("div", { key: '1bf91d44a1dff664f95d4fb5a6a8aa29b73f433c', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '9c875b4d7ccdeb8e0e0e5da3b6f47426e55cb597', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (h("button", { key: '0b98a66253a410bbe19dae59f7d341a3b6b09b09', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (h("div", { key: '809f4e26270e749a19f69a7a524649595acfc8d6', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '99755ba8e3ba5eb43e06088f61c2e71ae2c95e44', videoId: this.videoId })))), h("div", { key: 'bd2fcf81a3785dea7f113e4e16e9f04d6b580831', class: "live-shop-in-live-desktop-content" }, h("div", { key: '12285340c2df6121142e6c72c7e9c17a7d56930b', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 && this.items.some(item => item.show) ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
    }
    static get style() { return liveShopDesktopCss; }
}, [0, "live-shop-desktop", {
        "videoId": [1, "video-id"],
        "liveShopData": [16],
        "items": [16],
        "isChatOpen": [4, "is-chat-open"],
        "toggleChat": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["live-shop-desktop", "color-selector", "custom-card", "front-image", "highlight-card", "live-video-chat", "live-video-player", "product-card", "product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop-desktop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShopDesktop);
            }
            break;
        case "color-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
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
        case "live-video-chat":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "live-video-player":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "product-price":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "product-price-billet":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "product-price-credit-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "product-price-pix":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "product-price-simple":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { LiveShopDesktop as L, defineCustomElement as d };

//# sourceMappingURL=live-shop-desktop2.js.map