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
        return (h(Host, { key: '3a339c5d1f1cb4391b1ebcc533003e3089c16396' }, h("div", { key: '9b13baed251747646ec700b745f14b87e6737097', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'dcb1692b7410053c7268a221f7b94827b91b2442', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '24dba3a57fc3598d645120976ba2b4d71ffb6f4e', class: "info" }, h("span", { key: 'aa1a09636196b824dd84b5e507c151bfe5ee6e9e', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: '8962192c60889d6664779ceb318c738cc750fe6b', basePrice: this.basePrice, paymentOptions: this.paymentOptions })))));
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
