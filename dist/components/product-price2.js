import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './product-price-billet2.js';
import { d as defineCustomElement$3 } from './product-price-credit-card2.js';
import { d as defineCustomElement$2 } from './product-price-pix2.js';
import { d as defineCustomElement$1 } from './product-price-simple2.js';

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceStyle0 = productPriceCss;

const ProductPrice = /*@__PURE__*/ proxyCustomElement(class ProductPrice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.componentMap = {
            simple: (option) => (h("product-price-simple", { price: option.price, priceCompare: option.priceCompare })),
            billet: (option) => (h("product-price-billet", { price: option.price, priceCompare: option.priceCompare })),
            creditCard: (option) => (h("product-price-credit-card", { price: option.price, priceCompare: option.priceCompare, parcels: option.parcels, parcelPrice: option.parcelPrice, hasInterest: option.hasInterest })),
            pix: (option) => (h("product-price-pix", { price: option.price, priceCompare: option.priceCompare })),
        };
        this.basePrice = undefined;
        this.paymentOptions = undefined;
    }
    renderPaymentOption(option) {
        const renderFn = this.componentMap[option.type] || this.componentMap.simple;
        return renderFn(option);
    }
    render() {
        const options = this.paymentOptions || [];
        if (!options.length) {
            return (h(Host, null, h("div", { class: "product-price-container" }, this.componentMap.simple({
                type: 'simple',
                price: this.basePrice.price,
                priceCompare: this.basePrice.priceCompare,
            }))));
        }
        return (h(Host, null, h("div", { class: "product-price-container" }, options.map(option => this.renderPaymentOption(option)))));
    }
    static get style() { return ProductPriceStyle0; }
}, [0, "product-price", {
        "basePrice": [16],
        "paymentOptions": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "product-price":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductPrice);
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

export { ProductPrice as P, defineCustomElement as d };

//# sourceMappingURL=product-price2.js.map