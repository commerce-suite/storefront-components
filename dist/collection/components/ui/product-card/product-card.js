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
        return (h(Host, { key: '4be6f385aece7bd84af8e6ff850d1b0ae4137551' }, h("div", { key: '5025dc6bc66c094cc7f3d5c045c830a332015314', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'a17eb3d268b8f79be8f9ab0d2526817feeaa97b6', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '3dddc0ae0a8bc039a26bcaf97eb564c43bf2cc50', class: "info" }, h("span", { key: '9899da638ba6feefe2448134edff542cb31a21c7', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("product-price", { key: 'dc51308503bb329676f597ba331887576c2fb081', basePrice: this.basePrice, paymentOptions: this.paymentOptions, showStartingFrom: this.showStartingFrom }), h("div", { key: '32ee9606efaa11b996a25305eff2f33fb34d90e2', class: "product-card-content" }, h("slot", { key: '7463e287edf82d5552584270179d9ec76525a704' }))))));
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
