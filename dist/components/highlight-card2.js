import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './front-image2.js';
import { d as defineCustomElement$6 } from './product-card2.js';
import { d as defineCustomElement$5 } from './product-price2.js';
import { d as defineCustomElement$4 } from './product-price-billet2.js';
import { d as defineCustomElement$3 } from './product-price-credit-card2.js';
import { d as defineCustomElement$2 } from './product-price-pix2.js';
import { d as defineCustomElement$1 } from './product-price-simple2.js';

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product:hover{cursor:pointer}.highlight-card-product:hover .highlight-card-product-cart-action a{text-decoration:underline var(--fc-color-primary) 1px solid !important}.highlight-card-product-cart-action{padding:24px;font-weight:bold}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-all}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";
const HighlightCardStyle0 = highlightCardCss;

const HighlightCard = /*@__PURE__*/ proxyCustomElement(class HighlightCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.addItem = createEvent(this, "addItem", 7);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
    }
    renderItem(item, isHighlighted) {
        if (!item.show)
            return null;
        return (h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (h("div", { class: "highlight-card-message" }, h("h4", { class: "highlight-card-message-title" }, item.title), h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (h("div", { class: "highlight-card-product", onClick: () => this.addItem.emit(item) }, h("product-card", { "custom-class": "highlight-custom-style", product: item, basePrice: { price: item.price, priceCompare: item.priceBase }, showStartingFrom: item.showStartingFrom, inline: true }), h("div", { class: "highlight-card-product-cart-action" }, h("a", null, "Ver produto"))))));
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
        return (h(Host, { key: 'dbedc562911a2aa0de8c549ca6e624384462bb43' }, h("div", { key: '0e906d70f4a33ce8a4fa68a0e5f24788aeaf4dd2', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: 'ff07e4f52e37658cc0a01f84da9b867a061bd595', class: "highlight-card-container" }, h("div", { key: '31f09f1551c076a0b96befa406615f3dff4f9f13', class: "highlight-card-header" }, h("span", { key: 'f2726974bf3aa3b4c980dd46badd979a2ee0f342', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
    }
    static get watchers() { return {
        "items": ["handleItemsChange"]
    }; }
    static get style() { return HighlightCardStyle0; }
}, [0, "highlight-card", {
        "items": [16],
        "highlightedItems": [32],
        "nonHighlightedItems": [32]
    }, undefined, {
        "items": ["handleItemsChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["highlight-card", "front-image", "product-card", "product-price", "product-price-billet", "product-price-credit-card", "product-price-pix", "product-price-simple"];
    components.forEach(tagName => { switch (tagName) {
        case "highlight-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HighlightCard);
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