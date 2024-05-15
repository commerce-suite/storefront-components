import { Host, h, getAssetPath, } from "@stencil/core";
import { EnumBuyTogetherOnLoadStatus } from "./buy-together.type";
import { FrontBuyTogetherService } from "./services/front-buy-together.service";
export class BuyTogether {
    constructor() {
        this.buyTogetherService = new FrontBuyTogetherService();
        this.productId = undefined;
        this.variationId = undefined;
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
    onInputSelectOrderBump(event) {
        const { productId } = event.detail;
        const { originalData: { productsPivot }, products, } = this.buyTogetherData;
        const productPivotIndex = productsPivot.findIndex(({ id }) => id === productId);
        const productIndex = products.findIndex(({ id }) => id === productId);
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
        return (h(Host, { key: 'af58415b46953918377e013d79e57732cb753b7d' }, this.isLoading && (h("div", { key: 'ac59904a2deaacfabf0552a00533806b381a88ed', class: "loading-container" }, h("span", { key: '659efa5db1b2d82a187d6899938aae0ad35262b9', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: 'a0d17839e97cc20716fbd7d02d48c5c6d76b4270', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: 'd3320ea14518dcf0779983ed3425a1c0ce6f8d3f', class: "title-wrapper" }, h("h2", { key: '592a5274ea95286ef444b81e8858544c934f3933', class: "title" }, this.buyTogetherData.originalData.title || 'Compre Junto')), h("section", { key: '344f038c78d1a748fdf891d3210df904c9030f0d', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: 'bd951ce3e2af4241fb174dbb7b53acc36a3d1821', class: "product-main" }, h("div", { key: 'a87d7fa1eee79ea082029535dfe04127a0cb686a', class: "product-wrapper" }, h("product-card", { key: '35e65e83595805f986b5810df9f24515fdda06f5', product: this.buyTogetherData.productMain }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: '26da9c5b8af63916f33b5b82058c533917bfb674', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: '8d1b01ba012dfb72b3551abec3bddada65837b1e', class: "plus-icon" }, h("img", { key: 'a821be2baf64abef872504bfe5717bca37de969c', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: 'b4bd08667d8f7fc6aa706f9a61a59f5ce5b64faf', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: 'ef4ba8728b7af2edf187159b9cedd6a4bac951df', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: '822afd0adefe1e77b4d3961a0a03a08f275ddecc', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyTogetherData.originalData.buyButtonText || 'Comprar')))))));
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
            "showcaseMode": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
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
                    "original": "IProductCard[]",
                    "resolved": "IProductCard[]",
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
