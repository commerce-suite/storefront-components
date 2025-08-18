import { Host, h, getAssetPath, } from "@stencil/core";
import { EnumBuyTogetherOnLoadStatus, } from "./buy-together.type";
import { FrontBuyTogetherService } from "./services/front-buy-together.service";
export class BuyTogether {
    constructor() {
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
        var _a, _b;
        const checkSelectedVariations = (variations) => variations === null || variations === void 0 ? void 0 : variations.every(({ currentValue }) => currentValue !== undefined && currentValue !== null);
        const isValidProductMain = checkSelectedVariations((_a = this.buyTogetherData) === null || _a === void 0 ? void 0 : _a.productMain.selectVariations);
        const productsPivotSelected = (_b = this.buyTogetherData) === null || _b === void 0 ? void 0 : _b.products.map(({ selectVariations, isCheck }) => ({ selectVariations, isCheck })).filter(({ isCheck }) => isCheck);
        const isValidPivotProducts = productsPivotSelected === null || productsPivotSelected === void 0 ? void 0 : productsPivotSelected.every(({ selectVariations }) => checkSelectedVariations(selectVariations));
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
        return (h(Host, { key: '50d0577a7bae71964d87c0fba49add6027bdc1f9' }, this.isLoading && (h("div", { key: 'ea2bb5013e6ed9f7c099288b7ef459c542ebc00b', class: "loading-container" }, h("span", { key: 'fd5b91847f76da5ebda1a4933aea65c5e3783e2f', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: 'af8349bed74fb8c7bba35089ccc1cc66584ba9eb', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: '2822538a4a0d28fced907e94c0c23b7ac1684439', class: "title-wrapper" }, h("h2", { key: 'd6b8c3e81a7a31fde0f20dc65f47a68d530301f9', class: `title ${this.showcaseModeClass()}` }, this.promotionTitle || 'Compre Junto')), h("section", { key: '24ff30029ceb36fd66f705827ea5cd17fbc19460', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: '69681b0b617cfb65dbe04beeae7f87bf8f63cae1', class: "product-main" }, h("div", { key: '85d34d30c3c6b1ee53f5d000ec222cffadc19819', class: "product-wrapper" }, h("product-card", { key: '74c3143d77db36527669a85b7d1f8530c5f0ca67', product: this.buyTogetherData.productMain, paymentOptions: this.buyTogetherData.productMain.paymentOptions }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: '266bdf9a13b2286efe046b02780af8ac66bedb59', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: '47ba67f467c95d11ab27e8bd26c882a2cde5e093', class: "plus-icon" }, h("img", { key: 'aedda567295263226b32cc14da035f2e0202aa26', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: '7f9bfff55456a61c8d4d3ac063c637dfd2ec74ca', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard, paymentOptions: productCard.paymentOptions })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: 'a78d4903e53653446acc8ebd5f74de5de6b39b43', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: '4ed9fcb85eae4641d8ad2b99ab8bab305e0a6124', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyButtonText || 'Comprar')))))));
    }
    static get is() { return "buy-together"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["buy-together.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["buy-together.css"]
        };
    }
    static get properties() {
        return {
            "productId": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "product-id",
                "reflect": false
            },
            "variationId": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variation-id",
                "reflect": false
            },
            "promotionTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "promotion-title",
                "reflect": false
            },
            "buyButtonText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "buy-button-text",
                "reflect": false
            },
            "showcaseMode": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "showcase-mode",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "buyTogetherData": {},
            "hasBuyTogether": {},
            "isLoading": {},
            "isAddingToCart": {},
            "formIsValid": {}
        };
    }
    static get events() {
        return [{
                "method": "onBuyTogetherAddCartEvent",
                "name": "on-buy-together-add-cart",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ showcaseMode: boolean; productsAdded: IProductCard[] }",
                    "resolved": "{ showcaseMode: boolean; productsAdded: IProductCard[]; }",
                    "references": {
                        "IProductCard": {
                            "location": "import",
                            "path": "../ui/product-card/product-card.type",
                            "id": "src/components/ui/product-card/product-card.type.ts::IProductCard"
                        }
                    }
                }
            }, {
                "method": "loadBuyTogehter",
                "name": "loadBuyTogehter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    status: EnumBuyTogetherOnLoadStatus;\n    data: IBuyTogetherComponentData | null;\n  }",
                    "resolved": "{ status: EnumBuyTogetherOnLoadStatus; data: IBuyTogetherComponentData; }",
                    "references": {
                        "EnumBuyTogetherOnLoadStatus": {
                            "location": "import",
                            "path": "./buy-together.type",
                            "id": "src/components/buy-together/buy-together.type.ts::EnumBuyTogetherOnLoadStatus"
                        },
                        "IBuyTogetherComponentData": {
                            "location": "import",
                            "path": "./buy-together.type",
                            "id": "src/components/buy-together/buy-together.type.ts::IBuyTogetherComponentData"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "getBuyTogetherData": {
                "complexType": {
                    "signature": "() => Promise<IBuyTogetherComponentData>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "IBuyTogetherComponentData": {
                            "location": "import",
                            "path": "./buy-together.type",
                            "id": "src/components/buy-together/buy-together.type.ts::IBuyTogetherComponentData"
                        }
                    },
                    "return": "Promise<IBuyTogetherComponentData>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "buyTogetherData",
                "methodName": "watchPropHandler"
            }, {
                "propName": "variationId",
                "methodName": "watchVariationIdChange"
            }, {
                "propName": "productId",
                "methodName": "watchProductIdChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "clickBuyButton",
                "method": "onClickBuyButtonHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=buy-together.js.map
