import { r as registerInstance, h, e as Host } from './index-02e5006d.js';
import { g as getClassByProps } from './utils-596665f8.js';

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";

const ProductCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
        this.showStartingFrom = false;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '4be6f385aece7bd84af8e6ff850d1b0ae4137551' }, h("div", { key: '5025dc6bc66c094cc7f3d5c045c830a332015314', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'a17eb3d268b8f79be8f9ab0d2526817feeaa97b6', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '3dddc0ae0a8bc039a26bcaf97eb564c43bf2cc50', class: "info" }, h("span", { key: '9899da638ba6feefe2448134edff542cb31a21c7', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: 'dc51308503bb329676f597ba331887576c2fb081', basePrice: this.basePrice, paymentOptions: this.paymentOptions, showStartingFrom: this.showStartingFrom }), h("div", { key: '32ee9606efaa11b996a25305eff2f33fb34d90e2', class: "product-card-content" }, h("slot", { key: '7463e287edf82d5552584270179d9ec76525a704' }))))));
    }
};
ProductCard.style = productCardCss;

export { ProductCard as product_card };

//# sourceMappingURL=product-card.entry.js.map