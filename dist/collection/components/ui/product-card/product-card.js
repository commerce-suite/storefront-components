import { Host, h } from "@stencil/core";
import { getClassByProps } from "../../../utils/utils";
export class ProductCard {
    constructor() {
        this.inline = false;
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: 'c2849f1f71c31e8988f179311c08f17ddb3abefc' }, h("div", { key: 'ebf9f0f7f4a465cc26aa56f4f5d30f0d8ef65cf9', class: this.getClassWithInline('product-container') }, h("front-image", { key: '7af72f9305a7812f06c473ea9ffe4c8d676d84e3', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '7696f7c41e351128f258e1a5f813221847a4a0c4', class: "info" }, h("span", { key: 'd755574e1486ec77ab2c508d7b6a90657fcfea2f', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: '2374846921c3158924b248f917d82e38793e751a', basePrice: this.basePrice, paymentOptions: this.paymentOptions })))));
    }
    static get is() { return "product-card"; }
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
            },
            "basePrice": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BasePrice",
                    "resolved": "BasePrice",
                    "references": {
                        "BasePrice": {
                            "location": "import",
                            "path": "../product-price/product-price.type",
                            "id": "src/components/ui/product-price/product-price.type.ts::BasePrice"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "paymentOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "PaymentOption[]",
                    "resolved": "PaymentOption[]",
                    "references": {
                        "PaymentOption": {
                            "location": "import",
                            "path": "../product-price/product-price.type",
                            "id": "src/components/ui/product-price/product-price.type.ts::PaymentOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            }
        };
    }
}
//# sourceMappingURL=product-card.js.map
