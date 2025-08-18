import { Host, h } from "@stencil/core";
export class CustomCard {
    constructor() {
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: 'dec2d76b0cdf8e2b4c9a996046e6537b586ff674' }, h("div", { key: '8383234a580cce013405c3d4f964e23a9aca3441', class: `custom-card ${this.customClass}` }, h("div", { key: '6637d089be5961bae956f563ec19fa7f2979f8dc', class: "custom-card-header" }, h("h2", { key: '48bd6306e5039a8cce0d74d61db9e1c64573099c', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '1b72d1482c2e9783184198e3955fa4034c9e7dc7', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: 'e6a3cf008c969335ed5a4585acb0f05b6475b1d5', class: "custom-card-content" }, h("slot", { key: '7bdb3c4a38084a496c1df16d66c961bf2c467e0d' })))));
    }
    static get is() { return "custom-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["custom-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["custom-card.css"]
        };
    }
    static get properties() {
        return {
            "cardTitle": {
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
                "attribute": "card-title",
                "reflect": false,
                "defaultValue": "'N\u00E3o perca! Live hoje \u00E0s 19 horas.'"
            },
            "cardDescription": {
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
                "attribute": "card-description",
                "reflect": false
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
            }
        };
    }
    static get events() {
        return [{
                "method": "componentRendered",
                "name": "componentRendered",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=custom-card.js.map
