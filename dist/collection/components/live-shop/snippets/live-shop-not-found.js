import { h, Host } from "@stencil/core";
export class LiveShopNotFound {
    constructor() {
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (h(Host, { key: '59dac1f6b8f36d4deb1c8dd2c0afc83267f34917' }, h("div", { key: '241648e20ce99d694b61ec9dfd517ce3694781a5', class: "live-shop-not-found" }, h("custom-card", { key: '20ab423c2133a82a6f825b5d088915bfc10fb296', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades e promo\u00E7\u00F5es imperd\u00EDveis!" }, h("button", { key: 'e25c35d961b6165aab4f88369108b5523dfb0217', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
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
