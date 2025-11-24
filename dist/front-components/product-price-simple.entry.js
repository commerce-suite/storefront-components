import { r as registerInstance, h } from './index-998c8a8e.js';
import { c as currencyFormat } from './utils-6c1691e8.js';

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";

const ProductPriceSimple = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
        this.showStartingFrom = false;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '4630ba37bf64b4ac9d33981ab84a2d53e55bc778', class: "payment-option payment-option-simple" }, this.showStartingFrom && h("span", { key: '8768a1234ef4b957fafacfdc0ec20a758a06e77c', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (h("span", { key: 'ebc0066790aa2222525c704fef70946ebb6886c0', class: "price-compare" }, formattedCompare)), h("span", { key: '023b9b659676bb02e7d3745a4f8712f338b40b6f', class: "price-current" }, h("span", { key: '6cdccc631ae83b876b98d03164399d56f13a1b29', class: "highlight" }, formattedPrice))));
    }
};
ProductPriceSimple.style = productPriceCss;

export { ProductPriceSimple as product_price_simple };

//# sourceMappingURL=product-price-simple.entry.js.map