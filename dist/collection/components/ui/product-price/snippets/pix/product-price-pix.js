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
        return (h("div", { key: '6391de752d7109afcc4270b99ab053c9426a9f04', class: "payment-option payment-option-pix" }, formattedCompare && h("span", { key: '5f1e369308173f90a8c7513b357eb58a95611c4b', class: "price-compare" }, formattedCompare), h("span", { key: '2014e9be0659f0c9fa5181b23811a1f40c38c1a3', class: "price-current" }, h("span", { key: 'c167bf0fba59a1d1c5ef6f8523531b74191204d6', class: "highlight" }, formattedPrice), " no pix")));
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
