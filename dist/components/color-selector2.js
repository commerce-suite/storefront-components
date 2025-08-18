import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const colorSelectorCss = ".color-selector{display:flex;flex-wrap:wrap;gap:10px}.color-selector .color-option{position:relative;width:25px;height:25px;border:none;background:transparent;border-radius:50%;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}.color-selector .color-option::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;box-sizing:border-box;border:1px solid #ededed}.color-selector .color-option.active::before{border:2px solid #000000}.color-selector .color-option .color-dot{width:15px;height:15px;border-radius:50%;background-color:currentColor;z-index:1}";
const ColorSelectorStyle0 = colorSelectorCss;

const ColorSelector = /*@__PURE__*/ proxyCustomElement(class ColorSelector extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.colorSelected = createEvent(this, "colorSelected", 7);
        this.colors = [];
        this.selectedId = undefined;
    }
    onSelectColor(color) {
        this.colorSelected.emit(color);
    }
    getColorStyle(color) {
        return color.image
            ? {
                backgroundImage: `url(${color.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
            : {
                backgroundColor: color.hexadecimal,
            };
    }
    render() {
        return (h(Host, { key: 'e237e8b13a2695005c7fa697bc0ec98bc5ea9073' }, h("div", { key: 'e5fb54412f4dc929db6e21ffb5988a8ef26e0546', class: "color-selector" }, this.colors.map(color => (h("button", { key: color.id, class: {
                'color-option': true,
                'active': this.selectedId === color.id,
            }, onClick: () => this.onSelectColor(color), "aria-label": color.name, title: color.name }, h("span", { class: "color-dot", style: this.getColorStyle(color) })))))));
    }
    static get style() { return ColorSelectorStyle0; }
}, [0, "color-selector", {
        "colors": [16],
        "selectedId": [2, "selected-id"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["color-selector"];
    components.forEach(tagName => { switch (tagName) {
        case "color-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ColorSelector);
            }
            break;
    } });
}

export { ColorSelector as C, defineCustomElement as d };

//# sourceMappingURL=color-selector2.js.map