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
        return (h(Host, { key: 'e13ad1193d530d9a79f9397107012c7d5a1132b2' }, h("div", { key: '89973da4d163b9fab6ba25dcab34e44043587b2a', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'f0ef2820bd49b0caea40f943f0694bb4207fa07a', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '49551011110ab50c99f2591b3999fb19cbc5a406', class: "info" }, h("span", { key: '1db9b300008cb5560f92f8d2b159895b8dada89e', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '1609936379062330d5cdff50667f92bbc0255971', class: "price" }, this.showPriceBase && (h("span", { key: 'a36c4e3938c1f09ca8e520882fea8da23a79e08d', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: 'be2acde1e0f7115e4a62cb9e22a8aea867fcdc5b', class: "current" }, this.getPrice()))))));
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