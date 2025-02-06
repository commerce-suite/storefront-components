import { h } from "@stencil/core";
import { currencyFormat } from "../../../../../utils/utils";
export class ProductPricePix {
    constructor() {
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: 'eae4de47a9f3d49a441cf95d5023f3b3cc669429', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: '5f955635fdb269326f1e3a68ff27b5f1cab9770d', class: "price-compare" }, formattedCompare), h("span", { key: '0a3dd8b3c5e74e3b3aa90f13f01c412306d482a8', class: "price-current" }, h("span", { key: '8116651c15c2760e21294d36c5ffa15698c30d2b', class: "highlight" }, formattedPrice), " no pix")));
    }
    static get is() { return "product-price-pix"; }
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
//# sourceMappingURL=product-price-pix.js.map
