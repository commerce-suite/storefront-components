'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed1a22c2.js');

const colorSelectorCss = ".color-selector{display:flex;flex-wrap:wrap;gap:10px}.color-selector .color-option{position:relative;width:25px;height:25px;border:none;background:transparent;border-radius:50%;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}.color-selector .color-option::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;box-sizing:border-box;border:1px solid #ededed}.color-selector .color-option.active::before{border:2px solid #000000}.color-selector .color-option .color-dot{width:15px;height:15px;border-radius:50%;background-color:currentColor;z-index:1}";
const ColorSelectorStyle0 = colorSelectorCss;

const ColorSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colorSelected = index.createEvent(this, "colorSelected", 7);
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
        return (index.h(index.Host, { key: 'e237e8b13a2695005c7fa697bc0ec98bc5ea9073' }, index.h("div", { key: 'e5fb54412f4dc929db6e21ffb5988a8ef26e0546', class: "color-selector" }, this.colors.map(color => (index.h("button", { key: color.id, class: {
                'color-option': true,
                'active': this.selectedId === color.id,
            }, onClick: () => this.onSelectColor(color), "aria-label": color.name, title: color.name }, index.h("span", { class: "color-dot", style: this.getColorStyle(color) })))))));
    }
};
ColorSelector.style = ColorSelectorStyle0;

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--fc-color-primary);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}.custom-card-content:empty{display:none}";
const CustomCardStyle0 = customCardCss;

const CustomCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: 'dec2d76b0cdf8e2b4c9a996046e6537b586ff674' }, index.h("div", { key: '8383234a580cce013405c3d4f964e23a9aca3441', class: `custom-card ${this.customClass}` }, index.h("div", { key: '6637d089be5961bae956f563ec19fa7f2979f8dc', class: "custom-card-header" }, index.h("h2", { key: '48bd6306e5039a8cce0d74d61db9e1c64573099c', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (index.h("p", { key: '1b72d1482c2e9783184198e3955fa4034c9e7dc7', class: "custom-card-header-description" }, this.cardDescription))), index.h("div", { key: 'e6a3cf008c969335ed5a4585acb0f05b6475b1d5', class: "custom-card-content" }, index.h("slot", { key: '7bdb3c4a38084a496c1df16d66c961bf2c467e0d' })))));
    }
    get el() { return index.getElement(this); }
};
CustomCard.style = CustomCardStyle0;

exports.color_selector = ColorSelector;
exports.custom_card = CustomCard;

//# sourceMappingURL=color-selector_2.cjs.entry.js.map