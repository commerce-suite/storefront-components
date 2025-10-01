import { h, Host, getAssetPath, } from "@stencil/core";
export class HighlightCard {
    constructor() {
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
        this.selectedColorByProductId = {};
    }
    updateProductItem(currentItem, updatedProduct) {
        const targetList = currentItem.highlight ? this.highlightedItems : this.nonHighlightedItems;
        const updatedList = targetList.map(item => item.type === 'product' && item.id === currentItem.id ? Object.assign(Object.assign({}, item), updatedProduct) : item);
        if (currentItem.highlight)
            this.highlightedItems = [...updatedList];
        else
            this.nonHighlightedItems = [...updatedList];
    }
    handleColorSelected(currentItem, color) {
        var _a, _b, _c;
        const productId = currentItem.id;
        this.selectedColorByProductId = Object.assign(Object.assign({}, this.selectedColorByProductId), { [productId]: color.id });
        const baseName = (_a = currentItem.name.split(' - ')[0]) !== null && _a !== void 0 ? _a : currentItem.name;
        const baseSlug = (_b = currentItem.slug.split('/')[0]) !== null && _b !== void 0 ? _b : currentItem.slug;
        const updatedProduct = Object.assign(Object.assign({}, currentItem), { id: productId, name: `${baseName} - ${color.name}`, slug: `${baseSlug}/${color.slug}`, gridId: `${productId}-${color.id}`, image: ((_c = color.productImage) === null || _c === void 0 ? void 0 : _c.src) ? { src: color.productImage.src } : null, price: color.price, balance: color.balance, priceBase: color.priceCompare });
        this.updateProductItem(currentItem, updatedProduct);
    }
    renderItem(item, isHighlighted) {
        if (!item.show)
            return null;
        return (h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (h("div", { class: "highlight-card-message" }, h("h4", { class: "highlight-card-message-title" }, item.title), h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (h("div", { class: "highlight-card-product" }, h("product-card", { "custom-class": "highlight-custom-style", product: item, basePrice: { price: item.price, priceCompare: item.priceBase }, showStartingFrom: item.showStartingFrom, inline: true }, item.colors && (h("color-selector", { colors: item.colors, selectedId: this.selectedColorByProductId[item.id], onColorSelected: e => this.handleColorSelected(item, e.detail) }))), h("div", { class: "highlight-card-product-cart-icon", onClick: () => this.addItem.emit(item) }, h("img", { src: getAssetPath('./assets/icons/add-to-cart.svg'), alt: "add_to_cart_icon" }))))));
    }
    filterItems(items) {
        const visibleItems = items.filter(item => item.show);
        this.highlightedItems = visibleItems.filter(item => item.highlight);
        this.nonHighlightedItems = visibleItems.filter(item => !item.highlight);
        const selectedMap = {};
        const allProducts = [...this.highlightedItems, ...this.nonHighlightedItems];
        allProducts.forEach(item => {
            var _a;
            if (item.type === 'product') {
                const firstColor = (_a = item.colors) === null || _a === void 0 ? void 0 : _a[0];
                if (firstColor) {
                    selectedMap[item.id] = firstColor.id;
                    this.handleColorSelected(item, firstColor);
                }
            }
        });
        this.selectedColorByProductId = selectedMap;
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
        return (h(Host, { key: '5d2d15679e726cb24d9f474c28f57ef5c0dfed13' }, h("div", { key: '2ffa54e037aa2d9c4dec8d04f4e382b4dcb80e60', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: '0c4460f04bac7c209a554c22d17a9e40c1928edb', class: "highlight-card-container" }, h("div", { key: 'c71d35b5f1bfd0f8b3eaf83006f07eeb0f021afc', class: "highlight-card-header" }, h("span", { key: 'd31268ae9daafc7001fd6a2838ea452a57e3517c', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
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
            "nonHighlightedItems": {},
            "selectedColorByProductId": {}
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
