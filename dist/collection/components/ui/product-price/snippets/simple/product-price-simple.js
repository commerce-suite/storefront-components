import { h } from "@stencil/core";
import { currencyFormat } from "../../../../../utils/utils";
export class ProductPriceSimple {
    constructor() {
        this.price = undefined;
        this.priceCompare = undefined;
        this.showStartingFrom = false;
    }
    render() {
        const formattedPrice = currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
        return (h("div", { key: '4630ba37bf64b4ac9d33981ab84a2d53e55bc778', class: "payment-option payment-option-simple" }, this.showStartingFrom && h("span", { key: '8768a1234ef4b957fafacfdc0ec20a758a06e77c', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (h("span", { key: 'ebc0066790aa2222525c704fef70946ebb6886c0', class: "price-compare" }, formattedCompare)), h("span", { key: '023b9b659676bb02e7d3745a4f8712f338b40b6f', class: "price-current" }, h("span", { key: '6cdccc631ae83b876b98d03164399d56f13a1b29', class: "highlight" }, formattedPrice))));
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
            },
            "showStartingFrom": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-starting-from",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=product-price-simple.js.map
