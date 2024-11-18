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
        return (h(Host, { key: '10a2164d26911a02d909fa0adf67c727f0c51589' }, this.label && (h("label", { key: '5c29a06e907efba1145c15f673be276a616005ca', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: '9e69463d1a7e53879148d3d66dcee3b43c075c31', class: "front-select-container" }, h("select", { key: '09eb9cefdb810c237bf2af856c32ed7cf6a07265', name: this.selectName, id: this.selectId }, h("option", { key: '019ab62775a83b6b3f12c3c1758ac09118f26f2e', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
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
