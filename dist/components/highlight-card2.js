import { proxyCustomElement, HTMLElement, createEvent, h, getAssetPath, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './color-selector2.js';
import { d as defineCustomElement$7 } from './front-image2.js';
import { d as defineCustomElement$6 } from './product-card2.js';
import { d as defineCustomElement$5 } from './product-price2.js';
import { d as defineCustomElement$4 } from './product-price-billet2.js';
import { d as defineCustomElement$3 } from './product-price-credit-card2.js';
import { d as defineCustomElement$2 } from './product-price-pix2.js';
import { d as defineCustomElement$1 } from './product-price-simple2.js';

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--color-primary);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--color-primary)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product-cart-icon{padding:24px;cursor:pointer}.highlight-card .color-selector{max-width:100%;margin-top:12px}.highlight-card .highlight-custom-style.product-container{display:flex;gap:24px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-word;font-size:14px;margin-bottom:0px}.highlight-card .highlight-custom-style.product-container>.info .payment-option-simple{display:flex;flex-direction:row;gap:8px;align-items:baseline}.highlight-card .highlight-custom-style.product-container>.info .payment-option-simple .price-compare,.highlight-card .highlight-custom-style.product-container>.info .payment-option-simple .price-current>.highlight{font-size:14px;font-weight:normal}.highlight-card .highlight-custom-style.product-container>.image{height:58px;width:58px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";

const HighlightCard = /*@__PURE__*/ proxyCustomElement(class HighlightCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.addItem = createEvent(this, "addItem", 7);
        this.componentRendered = createEvent(this, "componentRendered", 7);
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
    static get watchers() { return {
        "items": ["handleItemsChange"]
    }; }
    static get style() { return highlightCardCss; }
}, [0, "highlight-card", {
        "items": [16],
        "highlightedItems": [32],
        "nonHighlightedItems": [32],
        "selectedColorByProductId": [32]
    }, undefined, {
        "items": ["handleItemsChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["highlight-card", "color-selector", "front-image", "product-card", "product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "highlight-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HighlightCard);
            }
            break;
        case "color-selector":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "product-price":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "product-price-billet":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "product-price-credit-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "product-price-pix":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "product-price-simple":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { HighlightCard as H, defineCustomElement as d };

//# sourceMappingURL=highlight-card2.js.map