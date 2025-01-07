import { Host, h } from "@stencil/core";
import { getClassByProps } from "../../../utils/utils";
export class ProductCard {
    constructor() {
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3990e7691e319f4e822f3229395fbd0adc986175' }, h("div", { key: '1cfceba5d9f2ee343f8cc4574e102de5a7f15ab8', class: this.getClassWithInline('product-container') }, h("front-image", { key: '4e409800e65cd3e43d2bbee9059bb89e64202710', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '1755d903905e77f70955c44ebf7c615bde340b8a', class: "info" }, h("span", { key: '37e055b9275f0feb48dfffd387c1a460139561f2', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: '60ff941af33b538d06654ba683764f2a2d5a33a4', basePrice: this.basePrice, paymentOptions: this.paymentOptions })))));
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
            "customClass": {
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
                "attribute": "custom-class",
                "reflect": false,
                "defaultValue": "''"
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
