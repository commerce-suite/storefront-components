'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ccb6baf7.js');

const colorSelectorCss = ".color-selector{display:flex;flex-wrap:wrap;gap:10px}.color-selector .color-option{position:relative;width:25px;height:25px;border:none;background:transparent;border-radius:50%;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}.color-selector .color-option::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;box-sizing:border-box;border:1px solid #ededed}.color-selector .color-option.active::before{border:2px solid #000000}.color-selector .color-option .color-dot{width:15px;height:15px;border-radius:50%;background-color:currentColor;z-index:1}";

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
        return (index.h(index.Host, { key: 'c73a483a7cafb6552ee7d9bac1a7a113fe73bf5d' }, index.h("div", { key: '0a6648dda5ecacd6ea206e5b69a08985ac41c840', class: "color-selector" }, this.colors.map(color => (index.h("button", { key: color.id, class: {
                'color-option': true,
                'active': this.selectedId === color.id,
            }, onClick: () => this.onSelectColor(color), "aria-label": color.name, title: color.name }, index.h("span", { class: "color-dot", style: this.getColorStyle(color) })))))));
    }
};
ColorSelector.style = colorSelectorCss;

exports.color_selector = ColorSelector;

//# sourceMappingURL=color-selector.cjs.entry.js.map