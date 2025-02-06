import { h } from "@stencil/core";
import { currencyFormat } from "../../../../../utils/utils";
export class ProductPriceBillet {
    constructor() {
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '2c6e04d7c0683eb95cff19ac97d3ebfd56fe6173', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: '54c6556aad53fc2cf5ad6e2748ec5cdd2ade142e', class: "price-compare" }, formattedCompare), h("span", { key: 'f3d095b38ae7873ea7a98297c33d9ac0967a2d56', class: "price-current" }, h("span", { key: '647979fe18fcff085c0938617cf3b9c9a5a822aa', class: "highlight" }, formattedPrice), " no boleto")));
    }
    static get is() { return "product-price-billet"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../product-price.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../product-price.css"]
        };
    }
    static get properties() {
        return {
            "price": {
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
                "attribute": "price",
                "reflect": false
            },
            "priceCompare": {
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
                "attribute": "price-compare",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=product-price-billet.js.map
