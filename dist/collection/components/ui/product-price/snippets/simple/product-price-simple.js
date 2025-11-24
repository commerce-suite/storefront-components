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
        return (h("div", { key: '742d65e24510131f255dc105b5d491a139b43edc', class: "payment-option payment-option-simple" }, this.showStartingFrom && h("span", { key: 'f65dfd20e1add28b170e73bb1e28e145bb4a27df', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (h("span", { key: '1ca46bdc98689a5b1e44e6bfab64daf4460d26cd', class: "price-compare" }, formattedCompare)), h("span", { key: 'a8f4467da2e65fea621521b5f0bbefab3479bc39', class: "price-current" }, h("span", { key: '9cf82d389efed234dd351cced3ddbbce54d100b4', class: "highlight" }, formattedPrice))));
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
