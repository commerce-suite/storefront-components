import { h, Host } from "@stencil/core";
export class LiveShopNotFound {
    constructor() {
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (h(Host, { key: '49d77b6d709c51891a2447ff5d54870528f25237' }, h("div", { key: '66881b2845774132feaa6029f2f9085e0e3b77dc', class: "live-shop-not-found" }, h("custom-card", { key: 'd2cf4d00bd34984697b4f899ff14bf669bff8ad1', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades!" }, h("button", { key: '8ac991570b3420a43c5aea2b634b10939ecf2bf2', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
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
