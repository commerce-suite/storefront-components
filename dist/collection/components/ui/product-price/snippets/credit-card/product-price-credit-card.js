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
        return (h("div", { key: '6a9a93ca0ee4bd214fbf382426540f7c2ca59626', class: "payment-option payment-option-creditCard" }, formattedCompare && h("span", { key: '8b6f103b58d6790bad28e4c69e24e1628d576a1b', class: "price-compare" }, formattedCompare), h("span", { key: 'cde6822719072a91a86e51610d21080cc9300830', class: "price-current" }, h("span", { key: '401a7c4d306a06b5c70890dfa69eb0ba5a0043f8', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (h("span", { key: '41d7e71ff72b5b7c9a2c6abff671d0aac4738330', class: "credit-info" }, "em at\u00E9 ", h("span", { key: '853a474d498507ac53106e5a3d597c77210fd264', class: "highlight" }, this.parcels, "x"), " de", ' ', h("span", { key: '152aa9060d4cb070bc7d701beb472a8c100d1b4a', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
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
