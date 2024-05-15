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
        return (h(Host, { key: '53fd1470ea185f823ed5150af12dac2498550802' }, this.label && (h("label", { key: '100cf6ad4a278b0494061d97ecad7f264b370b32', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: '639364168599a323341c68adbe0293e1eb927d5e', class: "front-select-container" }, h("select", { key: 'c75152996156f5f9d596c6e29d2d96c7dc8c099d', name: this.selectName, id: this.selectId }, h("option", { key: '8d758bd42a16051624a7c322a407237a7f4cd94b', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
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
