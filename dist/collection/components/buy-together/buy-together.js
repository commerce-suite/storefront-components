import { Host, h, getAssetPath, } from "@stencil/core";
import { EnumBuyTogetherOnLoadStatus } from "./buy-together.type";
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
        return (h(Host, { key: 'aa7a2853a237d1db09b78a32ca832a46472f6de7' }, this.isLoading && (h("div", { key: '473a6c004081b218ed3d5390d61b62ce6b032117', class: "loading-container" }, h("span", { key: '65938546005b0fd6f5be88a4f7716bfaede900da', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: '29213e411c2f6b4908ce34501dcfb5152426d274', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: '6b6253536effe07d2d7e5a54b0394d3a894d9b7e', class: "title-wrapper" }, h("h2", { key: 'fb2881cb4d53842d65cd3a03374cd9ba0deb9af1', class: "title" }, this.promotionTitle || 'Compre Junto')), h("section", { key: 'bbc12b2787105792c2cd291d04a91c66d0fbaa63', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: 'a7229d99bdfd38bb2c2070e37eac58576f666167', class: "product-main" }, h("div", { key: '6e97884eb80a51b8d089f4ff6deddab24c3b8b4d', class: "product-wrapper" }, h("product-card", { key: '9b01fc626d254959e996b30d905812c3afe8231c', product: this.buyTogetherData.productMain }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: 'd35303c6ccfc2b9b89d129b91196b3989cd86c88', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: '283d7974c147a70beb87f0461ef273fb781463ed', class: "plus-icon" }, h("img", { key: '10977259f0dbab3acf0f5672d8039705aa9f7b5d', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: 'd557fbe6d06bfe2cb6667939150ad289289ba2a7', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: '7c3ce76d99633818bc02c974940b4bf32ac11451', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: 'c887320e3b3d105ebdb52aa7ee14fc75714e592e', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyButtonText || 'Comprar')))))));
    }
    static get is() { return "buy-together"; }
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
