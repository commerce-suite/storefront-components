import { proxyCustomElement, HTMLElement, createEvent, h, Host, getAssetPath } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './buy-together2.js';
import { d as defineCustomElement$5 } from './front-image2.js';
import { d as defineCustomElement$4 } from './front-select2.js';
import { d as defineCustomElement$3 } from './product-card2.js';
import { d as defineCustomElement$2 } from './variation-selector2.js';

const buyTogetherCartModalCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.buy-together-cart{display:flex;flex-direction:column;gap:24px}.buy-together-cart-header{display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:8px;border-bottom:1px solid #dee2e6;padding:24px}.buy-together-cart-header-text{display:flex;flex-direction:column;align-items:center;gap:8px}@media (min-width: 1024px){.buy-together-cart-header-text{flex-direction:row}}.buy-together-cart-header-text img{width:24px;height:24px;color:var(--fc-color-light-text-default)}.buy-together-cart-header-text h2{margin:0;font-size:var(--fc-h2-fs);font-weight:600;color:var(--fc-color-light-text-default)}@media (min-width: 1024px){.buy-together-cart-header{flex-direction:row}}.header-buttons{display:flex;flex-direction:column;gap:8px}@media (min-width: 1024px){.header-buttons{flex-direction:row}}.header-buttons-primary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-buy-button);white-space:nowrap}.header-buttons-primary:hover{opacity:0.75}.header-buttons-primary:disabled{opacity:0.6;cursor:not-allowed}.header-buttons-secondary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);white-space:nowrap}.header-buttons-secondary:hover{opacity:0.75}.header-buttons-secondary:disabled{opacity:0.6;cursor:not-allowed}@media (min-width: 1024px){.buy-together-wrapper{padding:0 24px 24px}}.title-wrapper .title{margin:0 0 24px 0}";
const BuyTogetherCartModalStyle0 = buyTogetherCartModalCss;

const BuyTogetherCartModal$1 = /*@__PURE__*/ proxyCustomElement(class BuyTogetherCartModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.onFinishBuyButton = createEvent(this, "on-finish-buy-button", 7);
        this.onContinueBuyButton = createEvent(this, "on-continue-buy-button", 7);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.containerTitle = undefined;
        this.productId = undefined;
        this.variationId = undefined;
        this.promotionTitle = undefined;
        this.buyButtonText = undefined;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '42b8ba68d240a13d3672c0a1eefcc489c7e83186' }, h("section", { key: '8e6dfc0458c20bbd22b988e74ab7cec49d40caaf', class: "buy-together-cart" }, h("header", { key: 'dbd476cc9ef3264811bfdb4c7864a486567e03cd', class: "buy-together-cart-header" }, h("div", { key: '038d56447b6ac92fbdc7f0dda822e0932dca40f9', class: "buy-together-cart-header-text" }, h("img", { key: 'd072b0db1a067af9c507f6183d26527193218e77', src: getAssetPath('./assets/icons/add.svg'), alt: "add_icon" }), h("h2", { key: '81f92c1031bf03e8e15419e4d05ad54048931b47' }, this.containerTitle || 'Produto adicionado ao carrinho!')), h("div", { key: '545358bab6c8f644cfbaee939450f7b792029d49', class: "header-buttons" }, h("button", { key: 'c6403db810524069bc2645284c0b741f1050342b', onClick: () => this.onFinishBuyButton.emit(), class: "header-buttons-primary" }, "Finalizar compra"), h("button", { key: '535c90890b070d09d8d99504405ff288a364fea4', onClick: () => this.onContinueBuyButton.emit(), class: "header-buttons-secondary" }, "Continuar comprando"))), h("div", { key: 'd4cc06d4f3588fb26326be5bfe5b7ea03f264f37', class: "buy-together-wrapper" }, h("buy-together", { key: '7d8b5ab769e46c1507b0e5f8d54b32379fc6dbe3', id: "buy-together", "promotion-title": this.promotionTitle, "buy-button-text": this.buyButtonText, "product-id": this.productId, "variation-id": this.variationId, "showcase-mode": true })))));
    }
    static get style() { return BuyTogetherCartModalStyle0; }
}, [0, "buy-together-cart-modal", {
        "containerTitle": [1, "container-title"],
        "productId": [2, "product-id"],
        "variationId": [2, "variation-id"],
        "promotionTitle": [1, "promotion-title"],
        "buyButtonText": [1, "buy-button-text"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["buy-together-cart-modal", "buy-together", "front-image", "front-select", "product-card", "variation-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "buy-together-cart-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BuyTogetherCartModal$1);
            }
            break;
        case "buy-together":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "front-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "variation-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BuyTogetherCartModal = BuyTogetherCartModal$1;
const defineCustomElement = defineCustomElement$1;

export { BuyTogetherCartModal, defineCustomElement };

//# sourceMappingURL=buy-together-cart-modal.js.map