import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
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

const liveShopDesktopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;max-width:550px;word-break:break-word}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card{width:450px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}.live-shop-in-live-desktop .highlight-card{width:450px}";
const LiveShopDesktopStyle0 = liveShopDesktopCss;

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
        return (h("div", { key: '0b0e80a706d46319d24bf31f22796f27747f3536', class: "live-shop-in-live-desktop" }, h("div", { key: 'a91d542363fe2f1200fd8938b63fceeda4430d5f', class: "live-shop-in-live-desktop-infos" }, h("div", { key: 'b21d77cc94bbbd045e88b7bf1e94eb5e9a0e82a6', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: '1f3f0e31fda7ba10cd3ba515c9cfbea7a693d143', videoId: this.videoId, autoPlay: true })), h("div", { key: '20a9163a8380a98b19ce8613e4a6dfb51e8f491b', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '3d51977961f1ef2feb0a9f71aefbff5e8992a361', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (h("button", { key: 'd07cdc4ad3c486da0b60f3c35bf5247a63a8047c', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (h("div", { key: 'fcec6f27e38dbadad290d6127ffee3930669d7c5', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '0e3ebfaa8b2c0960158503b3556d8a469990ebc3', videoId: this.videoId })))), h("div", { key: 'f7f486ad5203d7e2a756a95659732c484d054e50', class: "live-shop-in-live-desktop-content" }, h("div", { key: 'a19a7b5bcf531f9f351b8ad6908c174d9c8c21a8', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 && this.items.some(item => item.show) ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
    }
    static get style() { return LiveShopDesktopStyle0; }
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
    const components = ["live-shop-desktop", "custom-card", "front-image", "highlight-card", "live-video-chat", "live-video-player", "product-card", "product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop-desktop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShopDesktop);
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