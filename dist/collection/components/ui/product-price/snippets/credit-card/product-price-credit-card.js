import { h } from "@stencil/core";
import { currencyFormat } from "../../../../../utils/utils";
export class ProductPriceCreditCard {
    constructor() {
        this.price = undefined;
        this.priceCompare = undefined;
        this.parcels = undefined;
        this.parcelPrice = undefined;
        this.hasInterest = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        const formattedParcelPrice = this.parcelPrice ? currencyFormat(this.parcelPrice) : null;
        const interestText = this.hasInterest ? 'com juros' : 'sem juros';
        return (h("div", { key: 'fcaf98a966d4b303278f56286c3e02328bf594ef', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: '801b7a20846ff20e86b34c84ce09cc7a4959400c', class: "price-compare" }, formattedCompare), h("span", { key: '1983277e72b9298a1204235437d400d0d6827dcc', class: "price-current" }, h("span", { key: 'b7303f78a5054b62e1935abac75b2fb27a030e73', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (h("span", { key: '622941089d0a1443a59f643f9e16a273115fcac6', class: "credit-info" }, "em at\u00E9 ", h("span", { key: '5f329b94d862f3261ce190208e115789227d035c', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '822204a9a1b67f47d00735aa7707288695ef80b4', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
    }
    static get is() { return "product-price-credit-card"; }
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
            },
            "parcels": {
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
                "attribute": "parcels",
                "reflect": false
            },
            "parcelPrice": {
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
                "attribute": "parcel-price",
                "reflect": false
            },
            "hasInterest": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "has-interest",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=product-price-credit-card.js.map
