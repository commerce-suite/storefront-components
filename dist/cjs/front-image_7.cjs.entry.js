'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9c4b21d6.js');
const utils = require('./utils-da8673ef.js');

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:contain;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
const FrontImageStyle0 = frontImageCss;

const FrontImage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageSrc = undefined;
        this.textAlt = undefined;
        this.figCaption = undefined;
        this.isSrcLoading = true;
    }
    getImageClassByProps() {
        const classProps = {
            '-is-loading': this.isSrcLoading,
        };
        return `image-container ${utils.getClassByProps(classProps)}`;
    }
    // private onSrcLoadError() {
    //   this.imageSrc = getAssetPath('./assets/images/image-fallback.png');
    //   setTimeout(() => {
    //     this.isSrcLoading = false;
    //   }, 500);
    // }
    onSrcLoadFinish() {
        setTimeout(() => {
            this.isSrcLoading = false;
        }, 500);
    }
    changeImageSrc() {
        this.isSrcLoading = true;
    }
    render() {
        return (index.h(index.Host, { key: '17b49aa6ad54af851d52a2ef693ea1200d5638d2' }, index.h("figure", { key: 'e7fe29b6a7144d8debe2476e2ddf9f73ffce0b38', class: this.getImageClassByProps() }, index.h("img", { key: 'dfe738fe075686a94f0ced553d6be883a705f187', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && index.h("figcaption", { key: '313fb28f913ed6d5dc87d9d00c5acd07edcafebe' }, this.figCaption))));
    }
    static get watchers() { return {
        "imageSrc": ["changeImageSrc"]
    }; }
};
FrontImage.style = FrontImageStyle0;

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
        this.showStartingFrom = false;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${utils.getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h(index.Host, { key: '4be6f385aece7bd84af8e6ff850d1b0ae4137551' }, index.h("div", { key: '5025dc6bc66c094cc7f3d5c045c830a332015314', class: this.getClassWithInline('product-container') }, index.h("front-image", { key: 'a17eb3d268b8f79be8f9ab0d2526817feeaa97b6', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), index.h("div", { key: '3dddc0ae0a8bc039a26bcaf97eb564c43bf2cc50', class: "info" }, index.h("span", { key: '9899da638ba6feefe2448134edff542cb31a21c7', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), index.h("product-price", { key: 'dc51308503bb329676f597ba331887576c2fb081', basePrice: this.basePrice, paymentOptions: this.paymentOptions, showStartingFrom: this.showStartingFrom }), index.h("div", { key: '32ee9606efaa11b996a25305eff2f33fb34d90e2', class: "product-card-content" }, index.h("slot", { key: '7463e287edf82d5552584270179d9ec76525a704' }))))));
    }
};
ProductCard.style = ProductCardStyle0;

const productPriceCss$4 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceStyle0 = productPriceCss$4;

const ProductPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentMap = {
            simple: (option) => (index.h("product-price-simple", { price: option.price, priceCompare: option.priceCompare, showStartingFrom: this.showStartingFrom })),
            billet: (option) => (index.h("product-price-billet", { price: option.price, priceCompare: option.priceCompare })),
            creditCard: (option) => (index.h("product-price-credit-card", { price: option.price, priceCompare: option.priceCompare, parcels: option.parcels, parcelPrice: option.parcelPrice, hasInterest: option.hasInterest })),
            pix: (option) => (index.h("product-price-pix", { price: option.price, priceCompare: option.priceCompare })),
        };
        this.basePrice = undefined;
        this.paymentOptions = undefined;
        this.showStartingFrom = false;
    }
    renderPaymentOption(option) {
        if (option.price <= 0)
            return null;
        const renderFn = this.componentMap[option.type] || this.componentMap.simple;
        return renderFn(option);
    }
    render() {
        const options = this.paymentOptions || [];
        if (!options.length) {
            return (index.h(index.Host, null, index.h("div", { class: "product-price-container" }, this.renderPaymentOption({
                type: 'simple',
                price: this.basePrice.price,
                priceCompare: this.basePrice.priceCompare,
            }))));
        }
        return (index.h(index.Host, null, index.h("div", { class: "product-price-container" }, options.map(option => this.renderPaymentOption(option)))));
    }
};
ProductPrice.style = ProductPriceStyle0;

const productPriceCss$3 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceBilletStyle0 = productPriceCss$3;

const ProductPriceBillet = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        return (index.h("div", { key: 'a8ab1454af610dc9ed49a0a70bf185c8095375ab', class: "payment-option payment-option-billet" }, formattedCompare && index.h("span", { key: '172c0eaf5fce75ad29ce372fcc22eecb6935f6ad', class: "price-compare" }, formattedCompare), index.h("span", { key: '7f175acbdb55a4c4d1f309930dba616831d0df43', class: "price-current" }, index.h("span", { key: 'f44acca039dbea2fcdef8676ffabe39e9b3390be', class: "highlight" }, formattedPrice), " no boleto")));
    }
};
ProductPriceBillet.style = ProductPriceBilletStyle0;

const productPriceCss$2 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceCreditCardStyle0 = productPriceCss$2;

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
ProductPriceCreditCard.style = ProductPriceCreditCardStyle0;

const productPriceCss$1 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPricePixStyle0 = productPriceCss$1;

const ProductPricePix = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        return (index.h("div", { key: '38b0b6cc54b70191d730ebc364f5b629d0660745', class: "payment-option payment-option-pix" }, formattedCompare && index.h("span", { key: 'cbd0ed88495a78ea2973aa5931bae2e1ca0745ca', class: "price-compare" }, formattedCompare), index.h("span", { key: 'f1b02fb75407223449d7a82cb215eeca6f1cb54e', class: "price-current" }, index.h("span", { key: 'ddbad15d7031e236fc99b60ef001eb259b1f8e0d', class: "highlight" }, formattedPrice), " no pix")));
    }
};
ProductPricePix.style = ProductPricePixStyle0;

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceSimpleStyle0 = productPriceCss;

const ProductPriceSimple = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
        this.showStartingFrom = false;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        return (index.h("div", { key: '4630ba37bf64b4ac9d33981ab84a2d53e55bc778', class: "payment-option payment-option-simple" }, this.showStartingFrom && index.h("span", { key: '8768a1234ef4b957fafacfdc0ec20a758a06e77c', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (index.h("span", { key: 'ebc0066790aa2222525c704fef70946ebb6886c0', class: "price-compare" }, formattedCompare)), index.h("span", { key: '023b9b659676bb02e7d3745a4f8712f338b40b6f', class: "price-current" }, index.h("span", { key: '6cdccc631ae83b876b98d03164399d56f13a1b29', class: "highlight" }, formattedPrice))));
    }
};
ProductPriceSimple.style = ProductPriceSimpleStyle0;

exports.front_image = FrontImage;
exports.product_card = ProductCard;
exports.product_price = ProductPrice;
exports.product_price_billet = ProductPriceBillet;
exports.product_price_credit_card = ProductPriceCreditCard;
exports.product_price_pix = ProductPricePix;
exports.product_price_simple = ProductPriceSimple;

//# sourceMappingURL=front-image_7.cjs.entry.js.map