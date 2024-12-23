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
        return (h("div", { key: '3d806266e456292d2e80d90d202d0b346d70a5d7', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: '15306ea65e7300bd71d1716ee91650e7fd384d86', class: "price-compare" }, formattedCompare), h("span", { key: 'a0a662facb128ad70c1f404ab5c4d4f8152a421e', class: "price-current" }, h("span", { key: '26a2d6933ffcb02f672ff76ea59269f4d4e8749d', class: "highlight" }, formattedPrice), " no boleto")));
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
