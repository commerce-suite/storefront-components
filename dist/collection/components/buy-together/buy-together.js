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
        return (h(Host, { key: '0cd89a1cb4b53563e3c5a0d9d72e4017a03a2e64' }, this.isLoading && (h("div", { key: '3028bdb6fd11ed7b555025762692bad5cd717ea0', class: "loading-container" }, h("span", { key: '78c0bd38d64e684c1cb65139adb0f99f10244b04', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: '03e16547cbee88b110102c8e2a035e4e15e3b966', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: '04be75be85be01ff1f40552cb7055dd8d9d9aef5', class: "title-wrapper" }, h("h2", { key: 'a832dbf440e9c6cc19095bd6d8de981f2c214e45', class: "title" }, this.buyTogetherData.originalData.title || 'Compre Junto')), h("section", { key: '0ee545481c05e1133bb1bb5d836a1adfad91b52b', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: 'c2204ccb90b82eb71622970a03a1610e68e3695a', class: "product-main" }, h("div", { key: '85dbaefa729c50f7a82475aa797e50d909415c1f', class: "product-wrapper" }, h("product-card", { key: '496821bf6e13f1333a5d14d941e17bd5944889b8', product: this.buyTogetherData.productMain }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: '425f7d3ff20ced4d020abf95700616fd1708fd60', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: 'cdf8f5f9fa139b1037f4d59d4f13c4cfa0bf3207', class: "plus-icon" }, h("img", { key: '1bbbfbc8395aca8503f4305a25469fbfed08e790', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: '7b92d837dee9089ec65a759ae0553576d4cff9e8', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: '342f206c1fbfbece08426a4f6caa497bba1a341c', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: '7d6042af2514596d5a27173327dd0f6706439a1d', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyTogetherData.originalData.buyButtonText || 'Comprar')))))));
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
