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
        return (h("div", { key: '3da59e42467e4d3a56658f52453854640b302708', class: "payment-option payment-option-simple" }, this.showStartingFrom && h("span", { key: '7635df5662b5126422ac34326d689eb5d94d88b3', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (h("span", { key: 'f34c1035e12fd97e5fd7d7521ccd253ded27a0b8', class: "price-compare" }, formattedCompare)), h("span", { key: 'f973fd9504873ce2390600909c87e6bbce0ecf13', class: "price-current" }, h("span", { key: 'd12bcce1bdc465fdd4b4c7f83011696a1cc733c1', class: "highlight" }, formattedPrice))));
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
