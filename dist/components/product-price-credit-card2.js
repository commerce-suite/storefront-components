import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as currencyFormat } from './utils.js';

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceCreditCardStyle0 = productPriceCss;

const ProductPriceCreditCard = /*@__PURE__*/ proxyCustomElement(class ProductPriceCreditCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.price = undefined;
        this.priceCompare = undefined;
        this.parcels = undefined;
        this.parcelPrice = undefined;
        this.hasInterest = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        const formattedParcelPrice = this.parcelPrice ? currencyFormat(this.parcelPrice) : null;
        const interestText = this.hasInterest ? 'com juros' : 'sem juros';
        return (h("div", { key: '629ce84e525ffb2121a38e7d79e0c34646419d69', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: '3ae7723e398c04ff83a5d4e1ad2b94318bf35888', class: "price-compare" }, formattedCompare), h("span", { key: 'cf822da5252fee8e18e1205b4149803487c1941f', class: "price-current" }, h("span", { key: '563d9ee9b0390724fdcdcc3197232e9e66d1b77d', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (h("span", { key: '6fa6503e27631fc382f495674ac40d18c7d163fe', class: "credit-info" }, "em at\u00E9 ", h("span", { key: '5118dc9c547b689e1a99ab1f608adc24d5f379b2', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '4779350a3dbfc1844ff670c0bc06ecb932838634', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
    }
    static get style() { return ProductPriceCreditCardStyle0; }
}, [0, "product-price-credit-card", {
        "price": [2],
        "priceCompare": [2, "price-compare"],
        "parcels": [2],
        "parcelPrice": [2, "parcel-price"],
        "hasInterest": [4, "has-interest"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-price-credit-card"];
    components.forEach(tagName => { switch (tagName) {
        case "product-price-credit-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductPriceCreditCard);
            }
            break;
    } });
}

export { ProductPriceCreditCard as P, defineCustomElement as d };

//# sourceMappingURL=product-price-credit-card2.js.map