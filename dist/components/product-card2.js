import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getClassByProps, c as currencyFormat, d as defineCustomElement$1 } from './front-image2.js';

const productCardCss = "*.sc-product-card{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-product-card-h{display:inline-block;font-size:14px;width:100%}.product-container.sc-product-card{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline.sc-product-card{flex-direction:row;gap:var(--fc-gap-grid)}.product-container.sc-product-card>.info.sc-product-card{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container.sc-product-card>.info.sc-product-card>.title.sc-product-card{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card{display:flex;flex-direction:column}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card .base.sc-product-card{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card .current.sc-product-card{font-size:15px;font-weight:700}.product-container.sc-product-card>.image.sc-product-card{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container.sc-product-card>.image.-inline.sc-product-card{width:100px;justify-content:flex-start}";
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
        console.log('this.product?.image', this.product);
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)}`;
    }
    componentWillLoad() {
        var _a, _b, _c;
        this.showPriceBase =
            !!((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceBase) && +((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceBase) !== +((_c = this.product) === null || _c === void 0 ? void 0 : _c.price);
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Host, { key: '1abfd3a7453a9c35487f3b1ec72b59f44c3276ac' }, h("div", { key: '661f629da702844fabd5db4cc4e36358ad947d62', class: this.getClassWithInline('product-container') }, h("front-image", { key: '0cdfc90c3a4aea3cd17fcedc4cf97e3d6cf1143d', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '9e1efd7e24778fa360bca64c884f4ae7eff44a6d', class: "info" }, h("span", { key: 'd1efc1806317fa182f8db72d7abfa37c2e971883', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: 'e8c6540a7d3414aab05f734dfd9b8f42193c1cae', class: "price" }, this.showPriceBase && (h("span", { key: '7396ef3deea8beda3dd7ef20bd2bda5326d6f9e8', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '01cc47d4a1e5897f5a4cda103ec44000bc4bdb16', class: "current" }, currencyFormat((_f = this.product) === null || _f === void 0 ? void 0 : _f.price)))))));
    }
    static get style() { return ProductCardStyle0; }
}, [2, "product-card", {
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