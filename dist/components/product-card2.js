import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getClassByProps } from './utils.js';
import { d as defineCustomElement$6 } from './front-image2.js';
import { d as defineCustomElement$5 } from './product-price2.js';
import { d as defineCustomElement$4 } from './product-price-billet2.js';
import { d as defineCustomElement$3 } from './product-price-credit-card2.js';
import { d as defineCustomElement$2 } from './product-price-pix2.js';
import { d as defineCustomElement$1 } from './product-price-simple2.js';

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = /*@__PURE__*/ proxyCustomElement(class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3a339c5d1f1cb4391b1ebcc533003e3089c16396' }, h("div", { key: '9b13baed251747646ec700b745f14b87e6737097', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'dcb1692b7410053c7268a221f7b94827b91b2442', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '24dba3a57fc3598d645120976ba2b4d71ffb6f4e', class: "info" }, h("span", { key: 'aa1a09636196b824dd84b5e507c151bfe5ee6e9e', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: '8962192c60889d6664779ceb318c738cc750fe6b', basePrice: this.basePrice, paymentOptions: this.paymentOptions })))));
    }
    static get style() { return ProductCardStyle0; }
}, [0, "product-card", {
        "inline": [4],
        "customClass": [1, "custom-class"],
        "product": [1040],
        "basePrice": [16],
        "paymentOptions": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-card", "front-image", "product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "product-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductCard);
            }
            break;
        case "front-image":
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

export { ProductCard as P, defineCustomElement as d };

//# sourceMappingURL=product-card2.js.map