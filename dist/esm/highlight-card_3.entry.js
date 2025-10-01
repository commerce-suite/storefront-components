import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host } from './index-eeb6481f.js';

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--color-primary);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--color-primary)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product-cart-icon{padding:24px;cursor:pointer}.highlight-card .color-selector{max-width:100%;margin-top:12px}.highlight-card .highlight-custom-style.product-container{display:flex;gap:24px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-word;font-size:14px;margin-bottom:0px}.highlight-card .highlight-custom-style.product-container>.info .payment-option-simple{display:flex;flex-direction:row;gap:8px;align-items:baseline}.highlight-card .highlight-custom-style.product-container>.info .payment-option-simple .price-compare,.highlight-card .highlight-custom-style.product-container>.info .payment-option-simple .price-current>.highlight{font-size:14px;font-weight:normal}.highlight-card .highlight-custom-style.product-container>.image{height:58px;width:58px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";
const HighlightCardStyle0 = highlightCardCss;

const HighlightCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '7fb5d8fe59cc322662a93df09b890a26821045d5' }, h("div", { key: '638e58fe254063991bda4a8934bf9269d749460e', class: "highlight-card" }, this.highlightedItems.length > 0 && (h("div", { key: '83a73cb2ce003173e238536425e1f9fe420c17ba', class: "highlight-card-container" }, h("div", { key: 'a5a398681f54f4424ad162f06c5b66422ed6bfa6', class: "highlight-card-header" }, h("span", { key: 'e1419c83c4bcbb434f01c4f261ab19b3165c07ae', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index) => (h("div", null, this.renderItem(item, true), index < this.highlightedItems.length - 1 && (h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
    }
    static get watchers() { return {
        "items": ["handleItemsChange"]
    }; }
};
HighlightCard.style = HighlightCardStyle0;

const liveVideoChatCss = ":host{display:inline-block;width:100%}.live-video-chat{display:flex;justify-content:center;align-items:center;width:100%}.live-video-chat iframe{height:100%;width:100%}";
const LiveVideoChatStyle0 = liveVideoChatCss;

const LiveVideoChat = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
    }
    getChatUrl() {
        return `https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '8145529e661125240df663fe39d324e88ce02655' }, h("div", { key: '87fb2a69796887a1947f76c63c428157158ab50d', class: "live-video-chat" }, h("iframe", { key: '249837b61915bf560df02fd177a72ae29c0ae2b2', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoChat.style = LiveVideoChatStyle0;

const tabSelectorCss = ".tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}";
const TabSelectorStyle0 = tabSelectorCss;

const TabSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabs = undefined;
        this.activeTab = undefined;
    }
    handleTabClick(tabName) {
        this.activeTab = tabName;
    }
    componentWillLoad() {
        var _a;
        if (((_a = this.tabs) === null || _a === void 0 ? void 0 : _a.length) > 0)
            this.activeTab = this.tabs[0].name;
    }
    render() {
        var _a, _b;
        return (h("div", { key: '960263fb2aa24cb72b6861ab81448c1826e04b4b', class: "tab-selector" }, h("div", { key: 'bf9c2ffdd11f1b90fdcfdd15aced01fbbd42d917', class: "tab-selector-tabs" }, (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.map(tab => (h("span", { class: { active: this.activeTab === tab.name }, onClick: () => this.handleTabClick(tab.name) }, tab.label)))), h("div", { key: '5a817d931e53738bbcea58b521adf6a919254e8c', class: "tab-selector-tabs-content" }, (_b = this.tabs) === null || _b === void 0 ? void 0 : _b.map(tab => (h("div", { class: {
                'tab-selector-tabs-content-item': true,
                'active': this.activeTab === tab.name,
            } }, this.activeTab === tab.name && tab.content()))))));
    }
};
TabSelector.style = TabSelectorStyle0;

export { HighlightCard as highlight_card, LiveVideoChat as live_video_chat, TabSelector as tab_selector };

//# sourceMappingURL=highlight-card_3.entry.js.map