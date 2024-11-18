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
        return (h(Host, { key: '732ac75941c1cf4a35775ac286de0a74dcb33def' }, h("div", { key: '9fbe399940103764e765dd84563622a5ac9fca29', class: `custom-card ${this.customClass}` }, h("div", { key: 'dca7891aeb907406a97ce9093407ceea1d844d13', class: "custom-card-header" }, h("h2", { key: '8eaefb1c57db1af82c73a2bea7df4dca0c506c90', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '1db1caf8f312021121348055880fc67c7b8e4545', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: 'ea8120c8aa7e11799b5a2e270f49edd3c580bde2', class: "custom-card-content" }, h("slot", { key: 'f793382fc558355fd70659264ec3c69c60f98e31' })))));
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
