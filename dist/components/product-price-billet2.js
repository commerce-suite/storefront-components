import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as currencyFormat } from './utils.js';

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceBilletStyle0 = productPriceCss;

const ProductPriceBillet = /*@__PURE__*/ proxyCustomElement(class ProductPriceBillet extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '1f1b96c087c1e73cffe988ff06fa1c6580b4ac3a', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: '06a678bb35e1a4c2308113d44f0164aff4fb5297', class: "price-compare" }, formattedCompare), h("span", { key: '2fafb6bc9232ab9e44c0761d94da496d10a7072d', class: "price-current" }, h("span", { key: '7f48612adace109aae38a1247f9019038a0c94fa', class: "highlight" }, formattedPrice), " no boleto")));
    }
    static get style() { return ProductPriceBilletStyle0; }
}, [0, "product-price-billet", {
        "price": [2],
        "priceCompare": [2, "price-compare"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-price-billet"];
    components.forEach(tagName => { switch (tagName) {
        case "product-price-billet":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductPriceBillet);
            }
            break;
    } });
}

export { ProductPriceBillet as P, defineCustomElement as d };

//# sourceMappingURL=product-price-billet2.js.map