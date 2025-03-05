import { h } from "@stencil/core";
export class FrontIcon {
    constructor() {
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (h("span", { key: 'c250591eef5668047e5c35868343449e48161761', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
    static get is() { return "front-icon"; }
    static get originalStyleUrls() {
        return {
            "$": ["front-icon.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["front-icon.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                "attribute": "name",
                "reflect": false,
                "defaultValue": "'home'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'24px'"
            },
            "color": {
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
                "attribute": "color",
                "reflect": false,
                "defaultValue": "'#000'"
            }
        };
    }
}
//# sourceMappingURL=front-icon.js.map
