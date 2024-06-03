import { proxyCustomElement, HTMLElement, createEvent, h, Host, getAssetPath } from '@stencil/core/internal/client';
import { F as FrontBuyTogetherService } from './front-buy-together.service.js';
import { d as defineCustomElement$4 } from './front-image2.js';
import { d as defineCustomElement$3 } from './front-select2.js';
import { d as defineCustomElement$2 } from './product-card2.js';
import { d as defineCustomElement$1 } from './variation-selector2.js';

var EnumBuyTogetherOnLoadStatus;
(function (EnumBuyTogetherOnLoadStatus) {
    EnumBuyTogetherOnLoadStatus["SHOULD_HIDDEN"] = "SHOULD_HIDDEN";
    EnumBuyTogetherOnLoadStatus["SHOULD_SHOW"] = "SHOULD_SHOW";
})(EnumBuyTogetherOnLoadStatus || (EnumBuyTogetherOnLoadStatus = {}));

const buyTogetherCss = "*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.sc-buy-together-h{display:inline-block;width:100%}.title-wrapper.sc-buy-together{display:flex;align-items:center;justify-content:center}.title-wrapper.sc-buy-together .title.sc-buy-together{margin:24px 0;font-weight:var(--fc-h2-fw);font-size:var(--fc-h2-fs)}.loading-container.sc-buy-together{display:flex;width:100%;justify-content:center;align-items:center;min-height:450px}.loading-container.sc-buy-together .spinner.sc-buy-together{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container.sc-buy-together .spinner.sc-buy-together:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.buy-together-container.sc-buy-together{display:grid;gap:var(--fc-gap-grid);justify-items:center;grid-template-columns:auto;grid-template-rows:auto auto auto auto;grid-template-areas:\"main\" \"plus\" \"products\" \"btn-buy\"}.buy-together-container.-showcase.sc-buy-together{grid-template-areas:\"products\" \"btn-buy\";grid-template-columns:auto;grid-template-rows:auto auto}@media (min-width: 1024px){.buy-together-container.sc-buy-together{grid-template-columns:auto auto auto;grid-template-rows:auto;align-items:center;grid-template-areas:\"main plus products btn-buy\"}.buy-together-container.-showcase.sc-buy-together{display:flex;flex-direction:column;gap:var(--fc-gap-grid);align-items:center}}.product-wrapper.sc-buy-together{display:flex;width:100%;background-color:var(--fc-color-white);flex-direction:column;padding:calc(var(--fc-margin-width) * 2);border:1px solid var(--fc-color-light-border-default)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together{margin:5px}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together{--form-control-color:var(--fc-color-primary);--form-control-disabled:var(--fc-color-light-text-secondary);appearance:none;background-color:#fff;margin:0;font:inherit;color:var(--form-control-color);width:18px;height:18px;border:1px solid var(--form-control-color);border-radius:var(--fc-border-radius);transform:translateY(-0.075em);display:grid;place-content:center}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:checked{background-color:var(--form-control-color)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together::before{content:\"\";width:0.65em;height:0.65em;transform:scale(0);background-color:var(--fc-color-white);clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:checked::before{transform:scale(1)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:disabled{--form-control-color:var(--form-control-disabled);color:var(--form-control-disabled);cursor:not-allowed}.product-wrapper-pivot.sc-buy-together{display:flex;gap:24px;align-items:center}.product-main.sc-buy-together{display:flex;grid-area:main;width:100%}.products-order-bump.sc-buy-together{display:flex;width:100%;flex-direction:column;justify-content:center;gap:var(--fc-gap-grid);grid-area:products;align-items:center}@media (min-width: 1024px){.products-order-bump.-showcase.sc-buy-together{flex-direction:row;width:auto;align-items:flex-start}}.plus-icon.sc-buy-together{display:inline-block;grid-area:plus;align-self:center}.buy-btn-wrapper.sc-buy-together{display:flex;grid-area:btn-buy;width:100%}@media (min-width: 1024px){.buy-btn-wrapper.-showcase.sc-buy-together{width:auto}}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);--btn-bg-color:var(--color-buy-button);--btn-text-color:var(--color-buy-button-text)}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together:hover{opacity:0.75}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together:disabled{opacity:0.6;cursor:not-allowed}";
const BuyTogetherStyle0 = buyTogetherCss;

const BuyTogether = /*@__PURE__*/ proxyCustomElement(class BuyTogether extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.onBuyTogetherAddCartEvent = createEvent(this, "on-buy-together-add-cart", 7);
        this.loadBuyTogehter = createEvent(this, "loadBuyTogehter", 7);
        this.buyTogetherService = new FrontBuyTogetherService();
        this.productId = undefined;
        this.variationId = undefined;
        this.showcaseMode = undefined;
        this.promotionTitle = undefined;
        this.buyButtonText = undefined;
        this.buyTogetherData = undefined;
        this.hasBuyTogether = undefined;
        this.isLoading = undefined;
        this.isAddingToCart = undefined;
        this.formIsValid = undefined;
    }
    async getBuyTogetherData() {
        return this.buyTogetherData;
    }
    async load() {
        var _a;
        this.isLoading = true;
        try {
            this.buyTogetherData = await this.buyTogetherService.getBuyTogetherByProductId(this.productId, this.variationId);
        }
        catch (error) {
            if (!((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('buy_together_not_found'))) {
                console.error('BuyTogether - load', { error });
            }
        }
        finally {
            this.isLoading = false;
            this.emitOnLoad();
        }
    }
    checkValidForm() {
        const checkSelectedVariations = (variations) => variations.every(({ currentValue }) => currentValue !== undefined && currentValue !== null);
        const isValidProductMain = checkSelectedVariations(this.buyTogetherData.productMain.selectVariations);
        const productsPivotSelected = this.buyTogetherData.products
            .map(({ selectVariations, isCheck }) => ({ selectVariations, isCheck }))
            .filter(({ isCheck }) => isCheck);
        const isValidPivotProducts = productsPivotSelected.every(({ selectVariations }) => checkSelectedVariations(selectVariations));
        if (this.showcaseMode) {
            this.formIsValid = isValidPivotProducts && productsPivotSelected.length > 0;
        }
        else {
            this.formIsValid =
                isValidProductMain && isValidPivotProducts && productsPivotSelected.length > 0;
        }
    }
    emitOnLoad() {
        let status = EnumBuyTogetherOnLoadStatus.SHOULD_SHOW;
        if (!this.buyTogetherData) {
            status = EnumBuyTogetherOnLoadStatus.SHOULD_HIDDEN;
        }
        this.loadBuyTogehter.emit({ status, data: this.buyTogetherData });
    }
    selectOrderBump(event, productOrderBumpId) {
        const { products } = this.buyTogetherData;
        this.buyTogetherData = Object.assign(Object.assign({}, this.buyTogetherData), { products: products.map(prod => {
                if (productOrderBumpId === prod.id) {
                    return Object.assign(Object.assign({}, prod), { isCheck: event.target.checked });
                }
                return prod;
            }) });
    }
    onInputSelectProductMain(event) {
        const { productCard, productTargetUpdated } = this.buyTogetherService.changeProductOptions(event.detail, this.buyTogetherData.originalData.product);
        if (!productCard)
            return;
        this.buyTogetherData = Object.assign(Object.assign({}, this.buyTogetherData), { productMain: productCard, originalData: Object.assign(Object.assign({}, this.buyTogetherData.originalData), { product: productTargetUpdated }) });
    }
    onInputSelectOrderBump(event) {
        const { productId } = event.detail;
        const { originalData: { productsPivot }, products, } = this.buyTogetherData;
        const productPivotIndex = productsPivot.findIndex(({ id }) => +id === productId);
        const productIndex = products.findIndex(({ id }) => +id === productId);
        if (productPivotIndex === -1 || productIndex === -1)
            return;
        const { productCard, productTargetUpdated } = this.buyTogetherService.changeProductOptions(event.detail, productsPivot[productPivotIndex]);
        productsPivot[productPivotIndex] = productTargetUpdated;
        products[productIndex] = Object.assign(Object.assign({}, productCard), { isCheck: products[productIndex].isCheck });
        this.buyTogetherData = Object.assign(Object.assign({}, this.buyTogetherData), { products, originalData: Object.assign(Object.assign({}, this.buyTogetherData.originalData), { productsPivot }) });
    }
    async onAddItemsToCart(event) {
        try {
            this.isAddingToCart = true;
            event.preventDefault();
            const variationsIds = [];
            const checkedProducts = this.buyTogetherData.products.filter(product => product.isCheck);
            if (!this.showcaseMode)
                variationsIds.push(this.buyTogetherData.productMain.id);
            checkedProducts.forEach(product => variationsIds.push(product.id));
            await this.buyTogetherService.addToCart(variationsIds);
            this.onBuyTogetherAddCartEvent.emit([...checkedProducts, this.buyTogetherData.productMain]);
        }
        finally {
            this.isAddingToCart = false;
        }
    }
    showcaseModeClass() {
        if (this.showcaseMode)
            return '-showcase';
        else
            return '';
    }
    onClickBuyButtonHandler(event) {
        window.open(`${window.location.origin}/${event.detail.slug}`, '_blank');
    }
    watchPropHandler(newValue) {
        this.hasBuyTogether = !!(newValue === null || newValue === void 0 ? void 0 : newValue.originalData);
        this.checkValidForm();
    }
    watchVariationIdChange() {
        this.load();
    }
    watchProductIdChange() {
        this.load();
    }
    componentWillLoad() {
        this.load();
    }
    render() {
        return (h(Host, { key: '57766c0376fb05e0a0cfc8f26df9523936561127' }, this.isLoading && (h("div", { key: 'c59b571ec5a505a1d07d01e3b82fd28b22982045', class: "loading-container" }, h("span", { key: '83aeb352cc002a6f319d286086a4bb71db726bfe', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: 'd4fce1bf45cf01a1b44c18346f045b8d9a252c58', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: '3de00cda8142435d453071344ec3202bb97418f6', class: "title-wrapper" }, h("h2", { key: '2eeb41e7f7f03f7fb20305ab2da5c160178c9d4a', class: "title" }, this.promotionTitle || 'Compre Junto')), h("section", { key: '4be8ebdb8203ac124690ef28aa0dd3b0ff55684b', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: '6e3fe94079bf0fada469b2d5509395c503906bd9', class: "product-main" }, h("div", { key: '117ad4aa6d370ea7a7390208218961c250c99aeb', class: "product-wrapper" }, h("product-card", { key: '7afa39cbd3ba1d0fd3ff9db90bef534d1dacf25c', product: this.buyTogetherData.productMain }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: '3a0a7ce957433b21fb390b82f0585097bc89468b', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: '5267f3c3a9fa5b4d4b79a6af48c081ed5d10605d', class: "plus-icon" }, h("img", { key: 'd392fe6f9535862d4b7694382823fbc1591ef77a', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: '061fe3ea7c85e4d37e3e12df4d7a122f834d95e2', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: '4c488ad413bf8b15197adcbe6cf16dc00720bfd6', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: 'a4cea3a5ecb9a228ea88098a42cb7f196f60de29', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyButtonText || 'Comprar')))))));
    }
    static get watchers() { return {
        "buyTogetherData": ["watchPropHandler"],
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
    static get style() { return BuyTogetherStyle0; }
}, [2, "buy-together", {
        "productId": [1026, "product-id"],
        "variationId": [1026, "variation-id"],
        "showcaseMode": [4, "showcase-mode"],
        "promotionTitle": [1, "promotion-title"],
        "buyButtonText": [1, "buy-button-text"],
        "buyTogetherData": [32],
        "hasBuyTogether": [32],
        "isLoading": [32],
        "isAddingToCart": [32],
        "formIsValid": [32],
        "getBuyTogetherData": [64]
    }, [[0, "clickBuyButton", "onClickBuyButtonHandler"]], {
        "buyTogetherData": ["watchPropHandler"],
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["buy-together", "front-image", "front-select", "product-card", "variation-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "buy-together":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BuyTogether);
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "front-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "variation-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { BuyTogether as B, defineCustomElement as d };

//# sourceMappingURL=buy-together2.js.map