import { Host, h } from "@stencil/core";
import { currencyFormat, getClassByProps } from "../../../utils/utils";
export class ProductCard {
    constructor() {
        this.inline = false;
        this.product = undefined;
        this.showPriceBase = undefined;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)}`;
    }
    componentWillLoad() {
        var _a, _b, _c;
        this.showPriceBase =
            !!((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceBase) && +((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceBase) !== +((_c = this.product) === null || _c === void 0 ? void 0 : _c.price);
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Host, { key: '3bf48464c79089527f486f316b19c8e19f1bbcea' }, h("div", { key: 'a3cfa9de0a68586978ff8cb04d2140ecfaa3be24', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'a3e74a6034eb32c858c34be5390724d895bf9d82', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '5d04b49a7e3d74310d56b2528ca9475b919a1f44', class: "info" }, h("span", { key: '7a944adbf6bd2d8c7d5315d46c8d307bc434c3c0', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '14a77353836f8437c76627f1ef0bf7ee907376ca', class: "price" }, this.showPriceBase && (h("span", { key: '99a840c197078d24ad632043f39a43a3ea4b4940', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '3e78a45606b8d378c6dc0a29c11a75b18ec7add5', class: "current" }, currencyFormat((_f = this.product) === null || _f === void 0 ? void 0 : _f.price)))))));
    }
    static get is() { return "product-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["product-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["product-card.css"]
        };
    }
    static get properties() {
        return {
            "inline": {
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
                "attribute": "inline",
                "reflect": false,
                "defaultValue": "false"
            },
            "product": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "IProductCard",
                    "resolved": "IProductCard",
                    "references": {
                        "IProductCard": {
                            "location": "import",
                            "path": "./product-card.type",
                            "id": "src/components/ui/product-card/product-card.type.ts::IProductCard"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "showPriceBase": {}
        };
    }
}
//# sourceMappingURL=product-card.js.map
