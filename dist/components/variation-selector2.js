import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './front-select2.js';

const variationSelectorCss = ".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";
const VariationSelectorStyle0 = variationSelectorCss;

const VariationSelector = /*@__PURE__*/ proxyCustomElement(class VariationSelector extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: '160a00d7e6c7d9dc599c406c0cd9f8e9ca4c31f5', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (h("div", { class: "item" }, h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
    static get style() { return VariationSelectorStyle0; }
}, [2, "variation-selector", {
        "variations": [16],
        "productId": [2, "product-id"],
        "showcaseMode": [4, "showcase-mode"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["variation-selector", "front-select"];
    components.forEach(tagName => { switch (tagName) {
        case "variation-selector":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VariationSelector);
            }
            break;
        case "front-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { VariationSelector as V, defineCustomElement as d };

//# sourceMappingURL=variation-selector2.js.map