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
        return (h(Host, { key: 'eff28a07e749991e4da15dcc83011f39ff7248a8' }, h("div", { key: 'eda472f712bb5c07ce63854b0d991ff8863156c2', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'a032d4029195102c9969f5ea389e983168ba83e2', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '3c56d54ba801596588a171808aca6d2e172b8741', class: "info" }, h("span", { key: 'd75c29e6f3b7589fc7fd3b9afcda83b628a4d89e', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '139612215b6083a9ba18a4108e61e4c32a45923a', class: "price" }, this.showPriceBase && (h("span", { key: '13b6e747cef66c10637ad79e2b884a770763598b', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '6941dea9b7a75c18f50750dd05d46b784cfaf94c', class: "current" }, currencyFormat((_f = this.product) === null || _f === void 0 ? void 0 : _f.price)))))));
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
