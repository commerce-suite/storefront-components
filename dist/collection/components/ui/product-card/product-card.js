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
    getPrice() {
        if (this.product.specialPrice) {
            const price = currencyFormat(this.product.specialPrice);
            return `${price} no pix`;
        }
        return this.product.price;
    }
    componentWillLoad() {
        var _a, _b, _c;
        this.showPriceBase =
            !!((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceBase) && +((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceBase) !== +((_c = this.product) === null || _c === void 0 ? void 0 : _c.price);
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3c4cb06dec292f21c2b4723b78e3fe7a2ab4e93b' }, h("div", { key: 'ae08c5bd3bf2e1d4bf4eaea158933a9fca111065', class: this.getClassWithInline('product-container') }, h("front-image", { key: '2fefd230381546d59cc0f3bc54ada1967e2cc9b4', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '05350e17b8f567d85184279dd6fc2c47d17c4ddc', class: "info" }, h("span", { key: '0dbef840e20fa411555a6c66aa26a4e7ea6b4115', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '72ba1c24e3e438e5b78c114dcfcf2d1eac1369de', class: "price" }, this.showPriceBase && (h("span", { key: '1eefd0078ed287de34ff93e11e7a52348af4f60d', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '315aa571e32450a9b7395459eebe545355148c2b', class: "current" }, this.getPrice()))))));
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
