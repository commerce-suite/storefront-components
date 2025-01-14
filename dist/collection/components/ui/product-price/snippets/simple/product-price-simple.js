import { h } from "@stencil/core";
import { currencyFormat } from "../../../../../utils/utils";
export class ProductPriceSimple {
    constructor() {
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: 'a07bb826dd643b57a5e338dbe4c10570530e6326', class: "payment-option payment-option-simple" }, formattedCompare && h("span", { key: '7d893a78f48cc35b0761f0332c006995f384b52f', class: "price-compare" }, formattedCompare), h("span", { key: '44d023e1ed50598c8ba89b4206dc5621dfcf5d45', class: "price-current" }, h("span", { key: '269f9d3a9643ed80fa697c28a50c8e20d1e27e3e', class: "highlight" }, formattedPrice))));
    }
    static get is() { return "product-price-simple"; }
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
//# sourceMappingURL=product-price-simple.js.map
