import { h, Host } from "@stencil/core";
export class LiveShopNotFound {
    constructor() {
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (h(Host, { key: '13d445804b733489f04429561582f5e743a0aa0c' }, h("div", { key: '8a1ed75b26be912fc7c4d6161bc29d4bdc5937ca', class: "live-shop-not-found" }, h("custom-card", { key: '7a545796f0627a13f5a46827df9311cc24b059a8', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades!" }, h("button", { key: 'd435e382e9a704356e28087672015eeedd710a7e', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
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
