import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as currencyFormat } from './utils.js';

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPricePixStyle0 = productPriceCss;

const ProductPricePix = /*@__PURE__*/ proxyCustomElement(class ProductPricePix extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: 'eae4de47a9f3d49a441cf95d5023f3b3cc669429', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: '5f955635fdb269326f1e3a68ff27b5f1cab9770d', class: "price-compare" }, formattedCompare), h("span", { key: '0a3dd8b3c5e74e3b3aa90f13f01c412306d482a8', class: "price-current" }, h("span", { key: '8116651c15c2760e21294d36c5ffa15698c30d2b', class: "highlight" }, formattedPrice), " no pix")));
    }
    static get style() { return ProductPricePixStyle0; }
}, [0, "product-price-pix", {
        "price": [2],
        "priceCompare": [2, "price-compare"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-price-pix"];
    components.forEach(tagName => { switch (tagName) {
        case "product-price-pix":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductPricePix);
            }
            break;
    } });
}

export { ProductPricePix as P, defineCustomElement as d };

//# sourceMappingURL=product-price-pix2.js.map