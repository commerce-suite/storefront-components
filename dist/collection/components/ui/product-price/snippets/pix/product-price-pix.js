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
        return (h("div", { key: '3720311c1a2dac60ba14c3df15e36d6e0a233ee8', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: 'e2e7b94839cb4826085912a441e274e32bd6a5fd', class: "price-compare" }, formattedCompare), h("span", { key: '66193afbbe5dd0c47a78d8ac98762da46c89c885', class: "price-current" }, h("span", { key: '15f5acbd8e8c77d89cfdd5df7dfb6693084c18f7', class: "highlight" }, formattedPrice), " no pix")));
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
