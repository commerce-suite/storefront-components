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
        return (h(Host, { key: 'bf02f44cdc6c2da39b0529867a67262758a764bb' }, h("div", { key: '4a0472e9cccced2e7888ceb716280eb424821b27', class: `custom-card ${this.customClass}` }, h("div", { key: 'ffeb567152895df9085959ac4a6fc2bb6588cb90', class: "custom-card-header" }, h("h2", { key: '976d0f0d92f4d6c6e8a77c4622324e762c383cd3', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '17396eac2ca965b1d33a390f372d1a7086735f47', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '1c55813bd7d4d66b04d06794606a38be5d3a1d76', class: "custom-card-content" }, h("slot", { key: 'a0b7326af7ae7b1346e37fb1d2b1ce90bca1d076' })))));
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
}
//# sourceMappingURL=custom-card.js.map
