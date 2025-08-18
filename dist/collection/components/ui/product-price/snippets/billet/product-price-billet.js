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
        return (h("div", { key: 'd444f38cce6a4d93990a0fb7f504031a5ae41d9d', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: 'd5a8d7034f2a06abdae96987747fafedcbf3dbba', class: "price-compare" }, formattedCompare), h("span", { key: '71cb31b0778cdf99526910fd70217ea0301016a6', class: "price-current" }, h("span", { key: '4db2215e6be2e31b6b7cbd505d165675c7f399f8', class: "highlight" }, formattedPrice), " no boleto")));
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
