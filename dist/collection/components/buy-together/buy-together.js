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
