import { Host, h } from "@stencil/core";
import { getClassByProps } from "../../../utils/utils";
export class ProductCard {
    constructor() {
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
        this.showStartingFrom = false;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '0c4ad2a7762896b056747a149a2ce59fc5d15b35' }, h("div", { key: '849efaded16f137d360a4962206e518572cb74be', class: this.getClassWithInline('product-container') }, h("front-image", { key: '6dc99b8115c654a6ba94d447c4484aeeb7cc2adc', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: 'ec60a6fe203c8ccaf3b310e99dd62133fab3165d', class: "info" }, h("span", { key: '18f9fa95d434d2620df7ee0cca65b2dc7a78c89d', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: '5a27e86ec858c67f83edb72244faf1c22dc37e12', basePrice: this.basePrice, paymentOptions: this.paymentOptions, showStartingFrom: this.showStartingFrom }), h("div", { key: '0e6056904820387dc40cc1300e5891b94e9f20f6', class: "product-card-content" }, h("slot", { key: '39c8180d5ae125093aa2f879be426fdf0805410c' }))))));
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
            },
            "showStartingFrom": {
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
                "attribute": "show-starting-from",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=product-card.js.map
