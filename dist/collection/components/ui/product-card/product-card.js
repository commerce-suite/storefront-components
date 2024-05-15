import { Host, h } from "@stencil/core";
import { currencyFormat, getClassByProps } from "../../../utils/utils";
export class ProductCard {
    constructor() {
        this.inline = false;
        this.product = undefined;
        this.showPriceBase = undefined;
    }
    getClassWithInline(className) {
        console.log('this.product?.image', this.product);
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
        return (h(Host, { key: '1abfd3a7453a9c35487f3b1ec72b59f44c3276ac' }, h("div", { key: '661f629da702844fabd5db4cc4e36358ad947d62', class: this.getClassWithInline('product-container') }, h("front-image", { key: '0cdfc90c3a4aea3cd17fcedc4cf97e3d6cf1143d', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '9e1efd7e24778fa360bca64c884f4ae7eff44a6d', class: "info" }, h("span", { key: 'd1efc1806317fa182f8db72d7abfa37c2e971883', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: 'e8c6540a7d3414aab05f734dfd9b8f42193c1cae', class: "price" }, this.showPriceBase && (h("span", { key: '7396ef3deea8beda3dd7ef20bd2bda5326d6f9e8', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '01cc47d4a1e5897f5a4cda103ec44000bc4bdb16', class: "current" }, currencyFormat((_f = this.product) === null || _f === void 0 ? void 0 : _f.price)))))));
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
