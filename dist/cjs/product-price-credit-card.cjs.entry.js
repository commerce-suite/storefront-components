'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ccb6baf7.js');
const utils = require('./utils-f2fc9e55.js');

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";

const ProductPriceCreditCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
        this.parcels = undefined;
        this.parcelPrice = undefined;
        this.hasInterest = undefined;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        const formattedParcelPrice = this.parcelPrice ? utils.currencyFormat(this.parcelPrice) : null;
        const interestText = this.hasInterest ? 'com juros' : 'sem juros';
        return (index.h("div", { key: 'd62d41f121c8baaa57e38041684a2b0178c5bca1', class: "payment-option payment-option-creditCard" }, formattedCompare && index.h("span", { key: 'aac2669bfacda3b3596f8dbae31cde54b28406c1', class: "price-compare" }, formattedCompare), index.h("span", { key: 'c70a6bea3294aa1d2bc4d1f239374eedcea96425', class: "price-current" }, index.h("span", { key: '43e177d8005ad03cedf1601baabde2e740bc6cbe', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (index.h("span", { key: '2b25ef4ba6906c8625f7453374f31cb57718e0c2', class: "credit-info" }, "em at\u00E9 ", index.h("span", { key: '26a016883639bfdc316feeebe38cfa1b65ab71bd', class: "highlight" }, this.parcels, "x"), " de", ' ', index.h("span", { key: '7c605bd19731c80a264a7fb46cd14dee4352d45d', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
    }
};
ProductPriceCreditCard.style = productPriceCss;

exports.product_price_credit_card = ProductPriceCreditCard;

//# sourceMappingURL=product-price-credit-card.cjs.entry.js.map