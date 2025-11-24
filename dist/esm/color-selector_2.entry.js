import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-f50d7c2c.js';

const colorSelectorCss = ".color-selector{display:flex;flex-wrap:wrap;gap:10px}.color-selector .color-option{position:relative;width:25px;height:25px;border:none;background:transparent;border-radius:50%;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}.color-selector .color-option::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;box-sizing:border-box;border:1px solid #ededed}.color-selector .color-option.active::before{border:2px solid #000000}.color-selector .color-option .color-dot{width:15px;height:15px;border-radius:50%;background-color:currentColor;z-index:1}";
const ColorSelectorStyle0 = colorSelectorCss;

const ColorSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'c73a483a7cafb6552ee7d9bac1a7a113fe73bf5d' }, h("div", { key: '0a6648dda5ecacd6ea206e5b69a08985ac41c840', class: "color-selector" }, this.colors.map(color => (h("button", { key: color.id, class: {
                'color-option': true,
                'active': this.selectedId === color.id,
            }, onClick: () => this.onSelectColor(color), "aria-label": color.name, title: color.name }, h("span", { class: "color-dot", style: this.getColorStyle(color) })))))));
    }
};
ColorSelector.style = ColorSelectorStyle0;

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--fc-color-primary);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}.custom-card-content:empty{display:none}";
const CustomCardStyle0 = customCardCss;

const CustomCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '3f69e2b457d3f54fa06fb2a13beaf90ae4c55856' }, h("div", { key: '919d9d1b8c1a99430e3358628ef8e6475ad6a61b', class: `custom-card ${this.customClass}` }, h("div", { key: '2fab4ad5868f806ca140d94a283d91d33edbb5c8', class: "custom-card-header" }, h("h2", { key: '6c3246ae6ae779370eda6d4e50bb5aaa7c2f5a75', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '5900bda0530d8b8e206bdceda4df5297be5b0945', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '26595ab591a46fcdd5f6ae4b02fa53c9f903087b', class: "custom-card-content" }, h("slot", { key: 'e0dc0fd60c76953fc541239952678890af8c857d' })))));
    }
    get el() { return getElement(this); }
};
CustomCard.style = CustomCardStyle0;

export { ColorSelector as color_selector, CustomCard as custom_card };

//# sourceMappingURL=color-selector_2.entry.js.map