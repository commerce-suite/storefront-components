import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as currencyFormat } from './utils.js';

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceSimpleStyle0 = productPriceCss;

const ProductPriceSimple = /*@__PURE__*/ proxyCustomElement(class ProductPriceSimple extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.price = undefined;
        this.priceCompare = undefined;
        this.showStartingFrom = false;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '742d65e24510131f255dc105b5d491a139b43edc', class: "payment-option payment-option-simple" }, this.showStartingFrom && h("span", { key: 'f65dfd20e1add28b170e73bb1e28e145bb4a27df', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (h("span", { key: '1ca46bdc98689a5b1e44e6bfab64daf4460d26cd', class: "price-compare" }, formattedCompare)), h("span", { key: 'a8f4467da2e65fea621521b5f0bbefab3479bc39', class: "price-current" }, h("span", { key: '9cf82d389efed234dd351cced3ddbbce54d100b4', class: "highlight" }, formattedPrice))));
    }
    static get style() { return ProductPriceSimpleStyle0; }
}, [0, "product-price-simple", {
        "price": [2],
        "priceCompare": [2, "price-compare"],
        "showStartingFrom": [4, "show-starting-from"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "product-price-simple":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ProductPriceSimple);
            }
            break;
    } });
}

export { ProductPriceSimple as P, defineCustomElement as d };

//# sourceMappingURL=product-price-simple2.js.map