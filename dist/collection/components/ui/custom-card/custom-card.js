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
        return (h(Host, { key: '16b6c91b4ab7927ac1954b3a5365b6fbb6e7603f' }, h("div", { key: '98bb46c64c48bd37d380a8f337dd66256f630d59', class: `custom-card ${this.customClass}` }, h("div", { key: '93400ea4e003c24c104c9e2b74cf3370185054ab', class: "custom-card-header" }, h("h2", { key: 'e29f084693661cf9479f2b9d1326201cb21bde02', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '2c78641d880ade884516620a49da680c502858d0', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: 'db19d7a2c82005e859552a102cb4807739288f1c', class: "custom-card-content" }, h("slot", { key: 'e8a3962cde3dbc3594eb747b21e55bc19ef6b336' })))));
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
