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
        return (h(Host, { key: '90c483090a460b3c5d9b0a28950fcd64b40b537c' }, this.label && (h("label", { key: 'b54fd7ef0110ba012b6c9a48fffaf00225dfaa28', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: '108f6166323ac7ecee0143ab338ef17f7c1b4d3a', class: "front-select-container" }, h("select", { key: 'b7442d7588d2a06a92d63fce29d303f71f64e360', name: this.selectName, id: this.selectId }, h("option", { key: '026ac706d89f99c5c5c5544dd2336089451060ac', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
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
