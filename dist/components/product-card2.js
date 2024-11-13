import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getClassByProps, c as currencyFormat, d as defineCustomElement$1 } from './front-image2.js';

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.info>.price{display:flex;flex-direction:column}.product-container>.info>.price .base{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.product-container>.info>.price .current{font-size:15px;font-weight:700}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = /*@__PURE__*/ proxyCustomElement(class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.showPriceBase = undefined;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
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
        return (h(Host, { key: 'd57a5b480237972e7cb933f4bf18fa3c37b87167' }, h("div", { key: '8ca70bb2579a70389166a16257deff1a808fa0f8', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'ec4a504469423d2f6bb9851faedd91d5c395b867', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '7737a2b0063d1b0a699dc09dd7a1bdf9385c1845', class: "info" }, h("span", { key: '60579bfd64f7f01e67ff991388eadebecb26f9bc', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '1f048caf3c00583e7ec298a010345d211cec1a52', class: "price" }, this.showPriceBase && (h("span", { key: '6fbeabbff19b94cda3da0b94466cd7553ed2e976', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: 'c4e27ce6cba64e7a6e24d5bab4c0ce25ef2737cc', class: "current" }, this.getPrice()))))));
    }
    static get style() { return ProductCardStyle0; }
}, [0, "product-card", {
        "inline": [4],
        "customClass": [1, "custom-class"],
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