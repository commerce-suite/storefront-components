import { h } from "@stencil/core";
export class VariationSelector {
    constructor() {
        this.variations = undefined;
        this.productId = undefined;
        this.showcaseMode = undefined;
    }
    onInputSelect(data, eventSelectType) {
        this.inputSelect.emit({
            eventSelectType,
            value: data.target.value,
            productId: this.productId,
        });
    }
    render() {
        return (h("div", { key: '557465d1120cad8e23e02f894718a7294d09ceab', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (h("div", { class: "item" }, h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
    static get is() { return "variation-selector"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["variation-selector.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["variation-selector.css"]
        };
    }
    static get properties() {
        return {
            "variations": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ISelectVariation[]",
                    "resolved": "ISelectVariation[]",
                    "references": {
                        "ISelectVariation": {
                            "location": "import",
                            "path": "../product-card/product-card.type",
                            "id": "src/components/ui/product-card/product-card.type.ts::ISelectVariation"
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
            "productId": {
                "type": "number",
                "mutable": false,
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
    static get events() {
        return [{
                "method": "inputSelect",
                "name": "inputSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IInputSelectDataEvent",
                    "resolved": "IInputSelectDataEvent",
                    "references": {
                        "IInputSelectDataEvent": {
                            "location": "import",
                            "path": "../product-card/product-card.type",
                            "id": "src/components/ui/product-card/product-card.type.ts::IInputSelectDataEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=variation-selector.js.map
