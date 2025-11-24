'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ccb6baf7.js');

const variationSelectorCss = ".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";

const VariationSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inputSelect = index.createEvent(this, "inputSelect", 7);
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
        return (index.h("div", { key: 'f4fc504c347097fb24a724825f3676da399477ad', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (index.h("div", { class: "item" }, index.h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
};
VariationSelector.style = variationSelectorCss;

exports.variation_selector = VariationSelector;

//# sourceMappingURL=variation-selector.cjs.entry.js.map