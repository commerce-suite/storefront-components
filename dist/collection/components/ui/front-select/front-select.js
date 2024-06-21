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
        return (h(Host, { key: '9c28e7df16d8486f95f60fae619c9100a00dc4ae' }, this.label && (h("label", { key: '8a98185e686648c4be3c991a56b7ea6d80c40c2c', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: 'b89103e2f0c67bc364359076401992c9b1d60c29', class: "front-select-container" }, h("select", { key: '71fd70b929ee8c097f9e2af9d6718a45d7ca9106', name: this.selectName, id: this.selectId }, h("option", { key: '39f6512bff6ea7384577572f01354875dce707ec', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
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
