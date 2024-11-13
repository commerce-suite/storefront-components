import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './custom-card2.js';
import { d as defineCustomElement$5 } from './front-image2.js';
import { d as defineCustomElement$4 } from './highlight-card2.js';
import { d as defineCustomElement$3 } from './live-video-chat2.js';
import { d as defineCustomElement$2 } from './live-video-player2.js';
import { d as defineCustomElement$1 } from './product-card2.js';

const liveShopDesktopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}";
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
                video_id: this.videoId,
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
        return (h("div", { key: '0ee2586808270792007716471f5d87369c55c1f9', class: "live-shop-in-live-desktop" }, h("div", { key: 'b63c038433a672c1c8e10504cad1e3d80237d61d', class: "live-shop-in-live-desktop-infos" }, h("div", { key: 'e4679b41470de47afe5514e73dfe06200baf89d7', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: '237354c9f960a2d488729a24ba9b3c02df715ada', videoId: this.videoId, autoPlay: true })), h("div", { key: '53e46b670662037597cc9e25c33bfa3e5d340392', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '44df1331d19fd994555a60ad03db63eacacf3426', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), h("button", { key: '683e1db0dc5b382810e9d0bd343900549ec60398', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText())), this.isChatOpen && (h("div", { key: '65297655fa1e43c02709eb56ab64fff57fb933d5', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '3265a63d913454603a8c8f49b87a03bf3489ffa3', videoId: this.videoId })))), h("div", { key: '84498cf604b9b2aa604bfa249eba4e3782ef72ac', class: "live-shop-in-live-desktop-content" }, h("div", { key: 'd023e218e83062e4b423f644933d13ff579adf77', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
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
    const components = ["live-shop-desktop", "custom-card", "front-image", "highlight-card", "live-video-chat", "live-video-player", "product-card"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop-desktop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShopDesktop);
            }
            break;
        case "custom-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "highlight-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "live-video-chat":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "live-video-player":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { LiveShopDesktop as L, defineCustomElement as d };

//# sourceMappingURL=live-shop-desktop2.js.map