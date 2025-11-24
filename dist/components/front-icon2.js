import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const frontIconCss = "@import url('https://fonts.googleapis.com/icon?family=Material+Icons');";

const FrontIcon = /*@__PURE__*/ proxyCustomElement(class FrontIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (h("span", { key: '59c5c29ff8f8070e8163080e808c5355c118a133', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
    static get style() { return frontIconCss; }
}, [0, "front-icon", {
        "name": [1],
        "size": [1],
        "color": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["front-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "front-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FrontIcon);
            }
            break;
    } });
}

export { FrontIcon as F, defineCustomElement as d };

//# sourceMappingURL=front-icon2.js.map