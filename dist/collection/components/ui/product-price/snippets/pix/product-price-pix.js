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
        return (h("div", { key: 'aa777209ae9b6ef0d346636e72987e008c55cef5', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: '70d9b9afea53d6216ef40bbb335c7efb42a80e81', class: "price-compare" }, formattedCompare), h("span", { key: '8edb40c47a82587aeef1d7a6d0e9f50127703310', class: "price-current" }, h("span", { key: 'e57adef29cef013e19cb64538a0e214db2d19ea7', class: "highlight" }, formattedPrice), " no pix")));
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
