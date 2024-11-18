import { h, getAssetPath, Host, } from "@stencil/core";
export class HighlightCard {
    constructor() {
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
    }
    renderItem(item, isHighlighted) {
        return (h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (h("div", { class: "highlight-card-message" }, h("h4", { class: "highlight-card-message-title" }, item.title), h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (h("div", { class: "highlight-card-product" }, h("product-card", { "custom-class": "highlight-custom-style", product: item, inline: true }), h("div", { class: "highlight-card-product-cart-icon" }, h("img", { onClick: () => this.addItem.emit(item), src: getAssetPath('./assets/icons/add-to-cart.svg'), alt: "add_to_cart_icon" }))))));
    }
    filterItems() {
        this.highlightedItems = this.items.filter(item => item.highlight);
        this.nonHighlightedItems = this.items.filter(item => !item.highlight);
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    componentWillLoad() {
        this.filterItems();
    }
    filterItemsHandler() {
        this.filterItems();
    }
    render() {
        return (h(Host, { key: '81c35f2eb4ffedbaed094c61e0e00c5c5ffa5290' }, h("div", { key: '4a798edbdede04bee510f6cb1c3635570d0ee7de', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: 'ad4dc2c47315b7a65ec010ba7f0e904bdfda1899', class: "highlight-card-container" }, h("div", { key: 'c73501697d708bdbefa8c982b73604be4ab04fcc', class: "highlight-card-header" }, h("span", { key: '4c9028c801fda1d3d7de4ed2b338bd9116f5847b', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
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
                "methodName": "filterItemsHandler"
            }];
    }
}
//# sourceMappingURL=highlight-card.js.map
