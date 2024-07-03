import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getClassByProps, c as currencyFormat, d as defineCustomElement$1 } from './front-image2.js';

const productCardCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.info>.price{display:flex;flex-direction:column}.product-container>.info>.price .base{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.product-container>.info>.price .current{font-size:15px;font-weight:700}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = /*@__PURE__*/ proxyCustomElement(class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.inline = false;
        this.product = undefined;
        this.showPriceBase = undefined;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)}`;
    }
    getPrice() {
        if (this.product.specialPrice) {
            const price = currencyFormat(this.product.specialPrice);
            return `${price} no pix`;
        }
        return currencyFormat(this.product.price);
    }
    componentWillLoad() {
        var _a, _b, _c;
        this.showPriceBase =
            !!((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceBase) && +((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceBase) !== +((_c = this.product) === null || _c === void 0 ? void 0 : _c.price);
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3186b4f9bbc34d64d26b0bf9aa50667cdb1923a4' }, h("div", { key: 'a5ea8e400feb43638a7155576dab2b1d0d3e2a7d', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'fa7c2e423e2a25773366144198cea804981fc185', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: 'ef49c018c82a0b19a0a11d8cf54c65c077e22e74', class: "info" }, h("span", { key: 'f2e36d52bc00d9e1a0493310f4c4d10c4e11ab5f', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '324a9c7efb0968b7ccd9133416bec8757ac606ec', class: "price" }, this.showPriceBase && (h("span", { key: '68a1f75bdfecbad9849d0970756ac404c216ae48', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '8a16a384372a6597d75f055931276f3956ab1330', class: "current" }, this.getPrice()))))));
    }
    static get style() { return ProductCardStyle0; }
}, [0, "product-card", {
        "inline": [4],
        "product": [1040],
        "showPriceBase": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-card", "front-image"];
    components.forEach(tagName => { switch (tagName) {
        case "product-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductCard);
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ProductCard as P, defineCustomElement as d };

//# sourceMappingURL=product-card2.js.map