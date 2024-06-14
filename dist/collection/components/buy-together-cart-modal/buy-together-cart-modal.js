import { Host, getAssetPath, h } from "@stencil/core";
export class BuyTogetherCartModal {
    constructor() {
        this.containerTitle = undefined;
        this.productId = undefined;
        this.variationId = undefined;
        this.promotionTitle = undefined;
        this.buyButtonText = undefined;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '42b8ba68d240a13d3672c0a1eefcc489c7e83186' }, h("section", { key: '8e6dfc0458c20bbd22b988e74ab7cec49d40caaf', class: "buy-together-cart" }, h("header", { key: 'dbd476cc9ef3264811bfdb4c7864a486567e03cd', class: "buy-together-cart-header" }, h("div", { key: '038d56447b6ac92fbdc7f0dda822e0932dca40f9', class: "buy-together-cart-header-text" }, h("img", { key: 'd072b0db1a067af9c507f6183d26527193218e77', src: getAssetPath('./assets/icons/add.svg'), alt: "add_icon" }), h("h2", { key: '81f92c1031bf03e8e15419e4d05ad54048931b47' }, this.containerTitle || 'Produto adicionado ao carrinho!')), h("div", { key: '545358bab6c8f644cfbaee939450f7b792029d49', class: "header-buttons" }, h("button", { key: 'c6403db810524069bc2645284c0b741f1050342b', onClick: () => this.onFinishBuyButton.emit(), class: "header-buttons-primary" }, "Finalizar compra"), h("button", { key: '535c90890b070d09d8d99504405ff288a364fea4', onClick: () => this.onContinueBuyButton.emit(), class: "header-buttons-secondary" }, "Continuar comprando"))), h("buy-together", { key: '509b323047d790395cfd49d1e0cf6be7a1407124', id: "buy-together", "promotion-title": this.promotionTitle, "buy-button-text": this.buyButtonText, "product-id": this.productId, "variation-id": this.variationId, "showcase-mode": true }))));
    }
    static get is() { return "buy-together-cart-modal"; }
    static get originalStyleUrls() {
        return {
            "$": ["buy-together-cart-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["buy-together-cart-modal.css"]
        };
    }
    static get properties() {
        return {
            "containerTitle": {
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
                "attribute": "container-title",
                "reflect": false
            },
            "productId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "product-id",
                "reflect": false
            },
            "variationId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variation-id",
                "reflect": false
            },
            "promotionTitle": {
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
                "attribute": "promotion-title",
                "reflect": false
            },
            "buyButtonText": {
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
                "attribute": "buy-button-text",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "onFinishBuyButton",
                "name": "on-finish-buy-button",
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
            }, {
                "method": "onContinueBuyButton",
                "name": "on-continue-buy-button",
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
            }, {
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
//# sourceMappingURL=buy-together-cart-modal.js.map
