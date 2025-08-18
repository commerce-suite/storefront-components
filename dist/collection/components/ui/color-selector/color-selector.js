import { Host, h } from "@stencil/core";
export class ColorSelector {
    constructor() {
        this.colors = [];
        this.selectedId = undefined;
    }
    onSelectColor(color) {
        this.colorSelected.emit(color);
    }
    getColorStyle(color) {
        return color.image
            ? {
                backgroundImage: `url(${color.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
            : {
                backgroundColor: color.hexadecimal,
            };
    }
    render() {
        return (h(Host, { key: 'e237e8b13a2695005c7fa697bc0ec98bc5ea9073' }, h("div", { key: 'e5fb54412f4dc929db6e21ffb5988a8ef26e0546', class: "color-selector" }, this.colors.map(color => (h("button", { key: color.id, class: {
                'color-option': true,
                'active': this.selectedId === color.id,
            }, onClick: () => this.onSelectColor(color), "aria-label": color.name, title: color.name }, h("span", { class: "color-dot", style: this.getColorStyle(color) })))))));
    }
    static get is() { return "color-selector"; }
    static get originalStyleUrls() {
        return {
            "$": ["color-selector.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["color-selector.css"]
        };
    }
    static get properties() {
        return {
            "colors": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IColor[]",
                    "resolved": "IColor[]",
                    "references": {
                        "IColor": {
                            "location": "import",
                            "path": "../product-card/product-card.type",
                            "id": "src/components/ui/product-card/product-card.type.ts::IColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "selectedId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "selected-id",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "colorSelected",
                "name": "colorSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IColor",
                    "resolved": "IColor",
                    "references": {
                        "IColor": {
                            "location": "import",
                            "path": "../product-card/product-card.type",
                            "id": "src/components/ui/product-card/product-card.type.ts::IColor"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=color-selector.js.map
