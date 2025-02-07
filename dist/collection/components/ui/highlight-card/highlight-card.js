import { h, Host } from "@stencil/core";
export class HighlightCard {
    constructor() {
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
    }
    renderItem(item, isHighlighted) {
        if (!item.show)
            return null;
        return (h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (h("div", { class: "highlight-card-message" }, h("h4", { class: "highlight-card-message-title" }, item.title), h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (h("div", { class: "highlight-card-product", onClick: () => this.addItem.emit(item) }, h("product-card", { "custom-class": "highlight-custom-style", product: item, basePrice: { price: item.price, priceCompare: item.priceBase }, inline: true }), h("div", { class: "highlight-card-product-cart-action" }, h("a", null, "Ver produto"))))));
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
        return (h(Host, { key: 'a4eeb9347c93f89e847a7eb7eaaac7a8c9ecff68' }, h("div", { key: '2706991fca5d561ffb5038c01e0570d78a877e13', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: 'a64e7d1eae28697a53c73765a98b04f3f4a015b7', class: "highlight-card-container" }, h("div", { key: '35a3071f2a8a9058576caee7092612774128bb1f', class: "highlight-card-header" }, h("span", { key: 'cd71c0969eb81aeca6af362e6e70458138d06e6e', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
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
