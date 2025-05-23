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
        return (h("div", { key: 'aa7e377b4bacdb6aac7a108a3eb56b4ea1a1ff59', class: "tab-selector" }, h("div", { key: 'a624968d01bcc64975bf5fb3dae9cfb16bede933', class: "tab-selector-tabs" }, (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.map(tab => (h("span", { class: { active: this.activeTab === tab.name }, onClick: () => this.handleTabClick(tab.name) }, tab.label)))), h("div", { key: '4d0cb9491abff1bb74702b0ef67654e794a96056', class: "tab-selector-tabs-content" }, (_b = this.tabs) === null || _b === void 0 ? void 0 : _b.map(tab => (h("div", { class: {
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