import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const tabSelectorCss = ".tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}";
const TabSelectorStyle0 = tabSelectorCss;

const TabSelector = /*@__PURE__*/ proxyCustomElement(class TabSelector extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: '260c50e4e923a7fdfdf1a225b8cd37aa7bf342ea', class: "tab-selector" }, h("div", { key: 'c4c39da8b9946c1ab818f1a9d810c4d6c38f7a80', class: "tab-selector-tabs" }, (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.map(tab => (h("span", { class: { active: this.activeTab === tab.name }, onClick: () => this.handleTabClick(tab.name) }, tab.label)))), h("div", { key: 'e571fa23fe8aa7285e9b97ca24f6e09a246ff775', class: "tab-selector-tabs-content" }, (_b = this.tabs) === null || _b === void 0 ? void 0 : _b.map(tab => (h("div", { class: {
                'tab-selector-tabs-content-item': true,
                'active': this.activeTab === tab.name,
            } }, this.activeTab === tab.name && tab.content()))))));
    }
    static get style() { return TabSelectorStyle0; }
}, [0, "tab-selector", {
        "tabs": [16],
        "activeTab": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tab-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "tab-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TabSelector);
            }
            break;
    } });
}

export { TabSelector as T, defineCustomElement as d };

//# sourceMappingURL=tab-selector2.js.map