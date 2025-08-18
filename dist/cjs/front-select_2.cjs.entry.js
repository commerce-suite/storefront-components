'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed1a22c2.js');

const frontSelectCss = "*.sc-front-select{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-front-select-h{display:inline-block;width:100%}.front-select-container.sc-front-select{position:relative}.front-select-container.sc-front-select>select.sc-front-select{appearance:none;width:100%;font-size:14px;color:var(--fc-color-light-text-secondary);padding:10px;padding-right:15px;background-color:#fff;border:1px solid var(--fc-color-light-border-default);cursor:pointer}.front-select-container.sc-front-select::before,.front-select-container.sc-front-select::after{position:absolute;content:\"\";right:5px;pointer-events:none;display:block}.front-select-container.sc-front-select::before{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;bottom:45%}.front-select-container.sc-front-select::after{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;top:45%;transform:rotate(180deg)}.select-label.sc-front-select{display:inline-block;margin-bottom:8px;font-family:inherit}";
const FrontSelectStyle0 = frontSelectCss;

const FrontSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionsList = undefined;
        this.value = undefined;
        this.placeholder = { name: 'Selecione', value: undefined };
        this.selectId = '';
        this.selectName = '';
        this.label = undefined;
    }
    componentWillLoad() {
        document.documentElement.style.setProperty('--arrow-up-image-src', `url(${index.getAssetPath('../../../assets/images/arrow-up.png')})`);
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '686d3b8bef4e43e34f49ad5859bb19794ffd61af' }, this.label && (index.h("label", { key: '174711bf2bee07a7c7ad6aa2b66afede69dcbeec', class: "select-label", htmlFor: this.selectId }, this.label)), index.h("div", { key: 'cc3c1b6ca7326099ad598d934f38cdd411671721', class: "front-select-container" }, index.h("select", { key: '6ca8c7a6e1c718a9b158ffa61005e5d3ebab94e0', name: this.selectName, id: this.selectId }, index.h("option", { key: '269d71fac0bf9995ad237dc57ca24afbc8160b35', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
            _a.map(({ name, value, disabled }) => (index.h("option", { value: value, selected: this.value === value, disabled: disabled }, name)))))));
    }
};
FrontSelect.style = FrontSelectStyle0;

const variationSelectorCss = ".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";
const VariationSelectorStyle0 = variationSelectorCss;

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
        return (index.h("div", { key: '7ef666eed4f440e439c7295d1bba9acfa4e13048', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (index.h("div", { class: "item" }, index.h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
};
VariationSelector.style = VariationSelectorStyle0;

exports.front_select = FrontSelect;
exports.variation_selector = VariationSelector;

//# sourceMappingURL=front-select_2.cjs.entry.js.map