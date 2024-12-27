import { h, getAssetPath, Host, } from "@stencil/core";
export class HighlightCard {
    constructor() {
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
    }
    renderItem(item, isHighlighted) {
        if (!item.show)
            return null;
        return (h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (h("div", { class: "highlight-card-message" }, h("h4", { class: "highlight-card-message-title" }, item.title), h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (h("div", { class: "highlight-card-product" }, h("product-card", { "custom-class": "highlight-custom-style", product: item, basePrice: {
                price: item.price,
                priceCompare: item.priceBase,
            }, inline: true }), h("div", { class: "highlight-card-product-cart-icon" }, h("img", { onClick: () => this.addItem.emit(item), src: getAssetPath('./assets/icons/add-to-cart.svg'), alt: "add_to_cart_icon" }))))));
    }
    filterItems(items) {
        const visibleItems = items.filter(item => item.show);
        this.highlightedItems = visibleItems.filter(item => item.highlight);
        this.nonHighlightedItems = visibleItems.filter(item => !item.highlight);
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    componentWillLoad() {
        this.filterItems(this.items);
    }
    handleItemsChange(newItems) {
        this.filterItems(newItems);
    }
    render() {
        return (h(Host, { key: '7e2f359858cce941a8d6716035d4d6d39e175c7a' }, h("div", { key: '55210b6faeeea74acabbed2d93f363f6fa70c8e7', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: '6b0ef6ae3e25d69979144996146168ffe480d4a4', class: "highlight-card-container" }, h("div", { key: '65ccf2ce3e9ca96530c56fecd3f00632dd175cde', class: "highlight-card-header" }, h("span", { key: 'd768d8d71b176fa8e6acf55c134db5145705338f', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
    }
    static get is() { return "highlight-card"; }
    static get originalStyleUrls() {
        return {
            "$": ["highlight-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["highlight-card.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IHighlightCardItem[]",
                    "resolved": "IHighlightCardItem[]",
                    "references": {
                        "IHighlightCardItem": {
                            "location": "import",
                            "path": "./highlight-card.type",
                            "id": "src/components/ui/highlight-card/highlight-card.type.ts::IHighlightCardItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "highlightedItems": {},
            "nonHighlightedItems": {}
        };
    }
    static get events() {
        return [{
                "method": "addItem",
                "name": "addItem",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IHighlightCardItem",
                    "resolved": "IMessageItem | IProductItem",
                    "references": {
                        "IHighlightCardItem": {
                            "location": "import",
                            "path": "./highlight-card.type",
                            "id": "src/components/ui/highlight-card/highlight-card.type.ts::IHighlightCardItem"
                        }
                    }
                }
            }, {
                "method": "componentRendered",
                "name": "componentRendered",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "handleItemsChange"
            }];
    }
}
//# sourceMappingURL=highlight-card.js.map
