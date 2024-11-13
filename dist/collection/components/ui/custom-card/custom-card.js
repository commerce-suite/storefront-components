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
        return (h(Host, { key: '53245f10b891d307ae757b2992c3e5127cfdaf56' }, h("div", { key: 'd18493b0cb827d91cf650cf5a139fb791b258fa3', class: `custom-card ${this.customClass}` }, h("div", { key: '66348c1eadf3b516bc15ef074461fd7c77d4822b', class: "custom-card-header" }, h("h2", { key: '1e45189b4de9ae8e94b6300ae90d26b722b5ee21', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: 'ba3abd85c94474d7a24ab119c091b94b0b6f4670', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '08d5f6a130b9123713ec8d26d408fd9f496dbd6c', class: "custom-card-content" }, h("slot", { key: '07d0861be27e9f32fe81fd55eadda597da0cb10a' })))));
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
