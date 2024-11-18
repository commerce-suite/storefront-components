import { proxyCustomElement, HTMLElement, createEvent, h, getAssetPath, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './front-image2.js';
import { d as defineCustomElement$1 } from './product-card2.js';

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product-cart-icon{padding:24px}.highlight-card-product-cart-icon img{cursor:pointer}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";
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
    static get watchers() { return {
        "items": ["filterItemsHandler"]
    }; }
    static get style() { return HighlightCardStyle0; }
}, [0, "highlight-card", {
        "items": [16],
        "highlightedItems": [32],
        "nonHighlightedItems": [32]
    }, undefined, {
        "items": ["filterItemsHandler"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["highlight-card", "front-image", "product-card"];
    components.forEach(tagName => { switch (tagName) {
        case "highlight-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HighlightCard);
            }
            break;
        case "front-image":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "product-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { HighlightCard as H, defineCustomElement as d };

//# sourceMappingURL=highlight-card2.js.map