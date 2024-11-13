import { Host, getAssetPath, h } from "@stencil/core";
export class FrontSelect {
    constructor() {
        this.optionsList = undefined;
        this.value = undefined;
        this.placeholder = { name: 'Selecione', value: undefined };
        this.selectId = '';
        this.selectName = '';
        this.label = undefined;
    }
    componentWillLoad() {
        document.documentElement.style.setProperty('--arrow-up-image-src', `url(${getAssetPath('../../../assets/images/arrow-up.png')})`);
    }
    render() {
        var _a;
        return (h(Host, { key: '73c2f64c1516983ada544be95f772606b58d598d' }, this.label && (h("label", { key: '7fa12bd705aa91574ea18c296fe0f9249c8e1ede', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: '94133423e639d74a7ff876900696cdc38e0af93f', class: "front-select-container" }, h("select", { key: 'bda5b46685d9e7542a289ce9793e9ae0a719599c', name: this.selectName, id: this.selectId }, h("option", { key: '1ec9aa62a90fdd0d7728ada32b30d471b80b5571', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
            _a.map(({ name, value, disabled }) => (h("option", { value: value, selected: this.value === value, disabled: disabled }, name)))))));
    }
    static get is() { return "front-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["front-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["front-select.css"]
        };
    }
    static get properties() {
        return {
            "optionsList": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IFrontSelectOption[]",
                    "resolved": "IFrontSelectOption[]",
                    "references": {
                        "IFrontSelectOption": {
                            "location": "import",
                            "path": "./front-select.type",
                            "id": "src/components/ui/front-select/front-select.type.ts::IFrontSelectOption"
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
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "value",
                "reflect": false
            },
            "placeholder": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IFrontSelectOption",
                    "resolved": "IFrontSelectOption",
                    "references": {
                        "IFrontSelectOption": {
                            "location": "import",
                            "path": "./front-select.type",
                            "id": "src/components/ui/front-select/front-select.type.ts::IFrontSelectOption"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "{ name: 'Selecione', value: undefined }"
            },
            "selectId": {
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
                "attribute": "select-id",
                "reflect": false,
                "defaultValue": "''"
            },
            "selectName": {
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
                "attribute": "select-name",
                "reflect": false,
                "defaultValue": "''"
            },
            "label": {
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
                "attribute": "label",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=front-select.js.map
