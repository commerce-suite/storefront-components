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
        return (h("div", { key: '7cfe311cf3a3b6d673ce61bdcddf86ab650f3434', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: 'edcb9c9c3240074e1a8cdf4b9616dd782d11e2f9', class: "price-compare" }, formattedCompare), h("span", { key: 'da3655cdd080fd8ef1a44e05fe38c4bd3adb5c09', class: "price-current" }, h("span", { key: 'e14185061d1cc61cf546c9b9f3e7c741eb9e01aa', class: "highlight" }, formattedPrice), " no pix")));
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
