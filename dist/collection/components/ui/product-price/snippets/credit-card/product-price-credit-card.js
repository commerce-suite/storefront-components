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
        return (h("div", { key: '56a875663ecd813875e362cdea7769ed23236d8d', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: 'ddd49c016c2b181db4173ec9c2c6ab6f787404f8', class: "price-compare" }, formattedCompare), h("span", { key: '9719e2a84fbe76a78f5be522cf1e98789e584fd2', class: "price-current" }, h("span", { key: 'f3a05883142a48722ad8974c0f36b0c014e43732', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (h("span", { key: '83b2e831989ce156cc973d0e1972c3ffac3b6bb7', class: "credit-info" }, "em at\u00E9 ", h("span", { key: 'a4dddd1c63c11c4490b881469535d012a59f40e0', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '1009009ef0873a920cc38a0aceed666523acc2a7', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
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
