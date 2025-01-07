import { h, Host } from "@stencil/core";
export class LiveShopNotFound {
    constructor() {
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (h(Host, { key: '1f403b5b2af650c1b722d1334e01a520f29c51ac' }, h("div", { key: 'bd76a6b90162f5a8afb6ba6d8ef777e5b3a4c324', class: "live-shop-not-found" }, h("custom-card", { key: 'de9bc6b31df20b18db73e6472ea325a4ffec2e8e', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades e promo\u00E7\u00F5es imperd\u00EDveis!" }, h("button", { key: '992492e601ac1025b555ec7a4cc828f0003e96bd', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
    }
    static get is() { return "live-shop-not-found"; }
    static get originalStyleUrls() {
        return {
            "$": ["live-shop-not-found.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["live-shop-not-found.css"]
        };
    }
    static get events() {
        return [{
                "method": "returnToHome",
                "name": "returnToHome",
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
//# sourceMappingURL=live-shop-not-found.js.map
