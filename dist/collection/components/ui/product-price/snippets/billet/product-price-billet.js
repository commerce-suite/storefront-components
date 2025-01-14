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
        return (h("div", { key: '7e4f59d482cd44d2c2141be0de16f7912df04121', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: 'a029bec9efeaf46fdc3f94dbdb6f5559587001b8', class: "price-compare" }, formattedCompare), h("span", { key: 'a642eefada8171c903cd345e7d11999c7932f889', class: "price-current" }, h("span", { key: 'e02f7ada59c4d70762dfda819f636881d73c92b5', class: "highlight" }, formattedPrice), " no boleto")));
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
