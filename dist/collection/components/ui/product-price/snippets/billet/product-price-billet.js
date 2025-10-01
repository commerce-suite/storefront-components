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
        return (h("div", { key: 'a8ab1454af610dc9ed49a0a70bf185c8095375ab', class: "payment-option payment-option-billet" }, formattedCompare && h("span", { key: '172c0eaf5fce75ad29ce372fcc22eecb6935f6ad', class: "price-compare" }, formattedCompare), h("span", { key: '7f175acbdb55a4c4d1f309930dba616831d0df43', class: "price-current" }, h("span", { key: 'f44acca039dbea2fcdef8676ffabe39e9b3390be', class: "highlight" }, formattedPrice), " no boleto")));
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
