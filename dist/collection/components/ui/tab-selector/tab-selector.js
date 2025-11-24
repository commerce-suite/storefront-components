import { h } from "@stencil/core";
export class TabSelector {
    constructor() {
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
    static get is() { return "tab-selector"; }
    static get originalStyleUrls() {
        return {
            "$": ["tab-selector.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tab-selector.css"]
        };
    }
    static get properties() {
        return {
            "tabs": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ name: string; label: string | any; content: () => any }[]",
                    "resolved": "{ name: string; label: any; content: () => any; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "activeTab": {}
        };
    }
}
//# sourceMappingURL=tab-selector.js.map
