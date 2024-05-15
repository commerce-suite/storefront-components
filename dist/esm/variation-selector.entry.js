import { r as registerInstance, c as createEvent, h } from './index-f45e2507.js';

const variationSelectorCss = ".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";
const VariationSelectorStyle0 = variationSelectorCss;

const VariationSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputSelect = createEvent(this, "inputSelect", 7);
        this.variations = undefined;
        this.productId = undefined;
        this.showcaseMode = undefined;
    }
    onInputSelect(data, eventSelectType) {
        this.inputSelect.emit({
            eventSelectType,
            value: data.target.value,
            productId: this.productId,
        });
    }
    render() {
        return (h("div", { key: '1f8b55c1c1c437097bb16d7656787670e58d0ed9', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (h("div", { class: "item" }, h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
};
VariationSelector.style = VariationSelectorStyle0;

export { VariationSelector as variation_selector };

//# sourceMappingURL=variation-selector.entry.js.map