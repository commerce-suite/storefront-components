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
        return (h("div", { key: '6a9a93ca0ee4bd214fbf382426540f7c2ca59626', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: '8b6f103b58d6790bad28e4c69e24e1628d576a1b', class: "price-compare" }, formattedCompare), h("span", { key: 'cde6822719072a91a86e51610d21080cc9300830', class: "price-current" }, formattedPrice, ' ', this.parcels && this.parcelPrice && (h("span", { key: 'adfabae6f4fad27b274967cfc72e8a907da4861c', class: "credit-info" }, "em at\u00E9 ", h("span", { key: '6993a89e07169e8ee5178e878820098ff628926c', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '85b0d30d42c7e2449aa3146a31724226c3d5d86e', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
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