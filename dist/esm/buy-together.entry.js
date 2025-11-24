import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host } from './index-acabb06e.js';
import { F as FrontBuyTogetherService } from './front-buy-together.service-133bfafa.js';
import './index-27e70230.js';

var EnumBuyTogetherOnLoadStatus;
(function (EnumBuyTogetherOnLoadStatus) {
    EnumBuyTogetherOnLoadStatus["SHOULD_HIDDEN"] = "SHOULD_HIDDEN";
    EnumBuyTogetherOnLoadStatus["SHOULD_SHOW"] = "SHOULD_SHOW";
})(EnumBuyTogetherOnLoadStatus || (EnumBuyTogetherOnLoadStatus = {}));

const buyTogetherCss = "*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}.sc-buy-together-h{display:inline-block;width:100%}.title-wrapper.sc-buy-together{display:flex;align-items:center;justify-content:center}.title-wrapper.sc-buy-together .title.sc-buy-together{font-weight:var(--fc-h2-fw);font-size:var(--fc-h2-fs);margin:56px 0 56px 0}.title-wrapper.sc-buy-together .title.-showcase.sc-buy-together{margin:0 0 24px 0}.loading-container.sc-buy-together{display:flex;width:100%;justify-content:center;align-items:center;min-height:450px}.loading-container.sc-buy-together .spinner.sc-buy-together{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container.sc-buy-together .spinner.sc-buy-together:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.buy-together-container.sc-buy-together{display:grid;gap:var(--fc-gap-grid);justify-items:center;grid-template-columns:auto;grid-template-rows:auto auto auto auto;grid-template-areas:\"main\" \"plus\" \"products\" \"btn-buy\"}.buy-together-container.-showcase.sc-buy-together{grid-template-areas:\"products\" \"btn-buy\";grid-template-columns:auto;grid-template-rows:auto auto}@media (min-width: 1024px){.buy-together-container.sc-buy-together{grid-template-columns:auto auto auto;grid-template-rows:auto;align-items:center;grid-template-areas:\"main plus products btn-buy\"}.buy-together-container.-showcase.sc-buy-together{display:flex;flex-direction:column;gap:var(--fc-gap-grid);align-items:center}}.product-wrapper.sc-buy-together{display:flex;width:100%;background-color:var(--fc-color-white);flex-direction:column;padding:calc(var(--fc-margin-width) * 2);border:1px solid var(--fc-color-light-border-default);gap:16px}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together{margin:5px}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together{--form-control-color:var(--fc-color-primary);--form-control-disabled:var(--fc-color-light-text-secondary);appearance:none;background-color:#fff;margin:0;font:inherit;color:var(--form-control-color);width:18px;height:18px;border:1px solid var(--form-control-color);border-radius:var(--fc-border-radius);transform:translateY(-0.075em);display:grid;place-content:center}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:checked{background-color:var(--form-control-color)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together::before{content:\"\";width:0.65em;height:0.65em;transform:scale(0);background-color:var(--fc-color-white);clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:checked::before{transform:scale(1)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:disabled{--form-control-color:var(--form-control-disabled);color:var(--form-control-disabled);cursor:not-allowed}.product-wrapper-pivot.sc-buy-together{display:flex;gap:24px;align-items:center}@media (min-width: 1024px){.product-wrapper.sc-buy-together{gap:24px}}.product-main.sc-buy-together{display:flex;grid-area:main;width:100%}.products-order-bump.sc-buy-together{display:flex;width:100%;flex-direction:column;justify-content:center;gap:var(--fc-gap-grid);grid-area:products;align-items:center}@media (min-width: 1024px){.products-order-bump.-showcase.sc-buy-together{flex-direction:row;width:auto;align-items:flex-start}}.plus-icon.sc-buy-together{display:inline-block;grid-area:plus;align-self:center}.buy-btn-wrapper.sc-buy-together{display:flex;grid-area:btn-buy;width:100%}@media (min-width: 1024px){.buy-btn-wrapper.-showcase.sc-buy-together{width:auto}}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);--btn-bg-color:var(--color-buy-button);--btn-text-color:var(--color-buy-button-text)}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together:hover{opacity:0.75}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together:disabled{opacity:0.6;cursor:not-allowed}";
const BuyTogetherStyle0 = buyTogetherCss;

const BuyTogether = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onBuyTogetherAddCartEvent = createEvent(this, "on-buy-together-add-cart", 7);
        this.loadBuyTogehter = createEvent(this, "loadBuyTogehter", 7);
        this.buyTogetherService = new FrontBuyTogetherService();
        this.productId = undefined;
        this.variationId = undefined;
        this.promotionTitle = undefined;
        this.buyButtonText = undefined;
        this.showcaseMode = undefined;
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
    resetAttributes(product, attributeTypeChanged) {
        product.selectVariations.forEach(variation => {
            if (attributeTypeChanged === 'color') {
                if (variation.selectType === 'attributes' ||
                    variation.selectType === 'secondaryAttributes') {
                    variation.currentValue = undefined;
                }
            }
            if (attributeTypeChanged === 'attributes') {
                if (variation.selectType !== 'color' && variation.selectType === 'secondaryAttributes') {
                    variation.currentValue = undefined;
                }
            }
        });
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
        if (products[productIndex]) {
            this.resetAttributes(products[productIndex], event.detail.eventSelectType);
        }
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
            this.onBuyTogetherAddCartEvent.emit({
                showcaseMode: !!this.showcaseMode,
                productsAdded: [...checkedProducts, this.buyTogetherData.productMain],
            });
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
        return (h(Host, { key: 'e93bb257d558b5dd86624588b46249f088e4795c' }, this.isLoading && (h("div", { key: '38c1a4fa630b8ab84dcfccdeacd01217e5da003b', class: "loading-container" }, h("span", { key: '16bdf5fb7300be173a6330d39e3fdda065a54f89', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: '21792f53904673fa824a912f5dc7a3e81156a42f', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: 'a239669b9857ff857252beffc076eda548fd8354', class: "title-wrapper" }, h("h2", { key: '919657904f77f2a040f2a34885c8f6e554a0ea70', class: `title ${this.showcaseModeClass()}` }, this.promotionTitle || 'Compre Junto')), h("section", { key: 'b2a5b9ccbd22044228f83ce216f86e75ed234c8c', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: '3a42ed646eef6f59cf3bde40d3a452c6e3406fb7', class: "product-main" }, h("div", { key: '2cb95cc72c4e796d4b7fc1d9652a574fc229cf4b', class: "product-wrapper" }, h("product-card", { key: '73fb1f4a765258edb8235e7d4c07be14f4f7bfd2', product: this.buyTogetherData.productMain, paymentOptions: this.buyTogetherData.productMain.paymentOptions }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: 'cdee4a1b28f10d993f66fe5e2e0ab98ff9c7325c', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: 'e55a96cfb6f5648a6388fa301b2379847389a66a', class: "plus-icon" }, h("img", { key: '670ffd7c815d412e03104e35a7a47e614da7736c', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: '5c3c4822b4d8500c6527df394a8dfe097792c243', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard, paymentOptions: productCard.paymentOptions })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: 'a2be41750ca174b9efccaea6e4072aa8ee656d16', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: '887cefe57bb720b493e11a78a7f0c8b9b81da5dd', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyButtonText || 'Comprar')))))));
    }
    static get watchers() { return {
        "buyTogetherData": ["watchPropHandler"],
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
};
BuyTogether.style = BuyTogetherStyle0;

export { BuyTogether as buy_together };

//# sourceMappingURL=buy-together.entry.js.map