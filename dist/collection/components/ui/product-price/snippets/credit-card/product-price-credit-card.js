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
        return (h("div", { key: 'd62d41f121c8baaa57e38041684a2b0178c5bca1', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: 'aac2669bfacda3b3596f8dbae31cde54b28406c1', class: "price-compare" }, formattedCompare), h("span", { key: 'c70a6bea3294aa1d2bc4d1f239374eedcea96425', class: "price-current" }, h("span", { key: '43e177d8005ad03cedf1601baabde2e740bc6cbe', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (h("span", { key: '2b25ef4ba6906c8625f7453374f31cb57718e0c2', class: "credit-info" }, "em at\u00E9 ", h("span", { key: '26a016883639bfdc316feeebe38cfa1b65ab71bd', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '7c605bd19731c80a264a7fb46cd14dee4352d45d', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
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
