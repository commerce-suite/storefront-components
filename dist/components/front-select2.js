import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';

const frontSelectCss = "*.sc-front-select{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-front-select-h{display:inline-block;width:100%}.front-select-container.sc-front-select{position:relative}.front-select-container.sc-front-select>select.sc-front-select{appearance:none;width:100%;font-size:14px;color:var(--fc-color-light-text-secondary);padding:10px;padding-right:15px;background-color:#fff;border:1px solid var(--fc-color-light-border-default);cursor:pointer}.front-select-container.sc-front-select::before,.front-select-container.sc-front-select::after{position:absolute;content:\"\";right:5px;pointer-events:none;display:block}.front-select-container.sc-front-select::before{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;bottom:45%}.front-select-container.sc-front-select::after{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;top:45%;transform:rotate(180deg)}.select-label.sc-front-select{display:inline-block;margin-bottom:8px;font-family:inherit}";
const FrontSelectStyle0 = frontSelectCss;

const FrontSelect = /*@__PURE__*/ proxyCustomElement(class FrontSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionsList = undefined;
        this.value = undefined;
        this.placeholder = { name: 'Selecione', value: undefined };
        this.selectId = '';
        this.selectName = '';
        this.label = undefined;
    }
    componentWillLoad() {
        document.documentElement.style.setProperty('--arrow-up-image-src', `url(${getAssetPath('../../../assets/images/arrow-up.png')})`);
    }
    render() {
        var _a;
        return (h(Host, { key: 'f377ef9cc186891230be16f769dbb7a3fc277045' }, this.label && (h("label", { key: '34abf11094df21cc5e2a6a59e9eeecefa4c7ca2a', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: 'd5f7f8e50af04fe7d399b9314be5da70862796d6', class: "front-select-container" }, h("select", { key: '7e6ccb7f3d2286a4e21fc5229b3cafab110bd125', name: this.selectName, id: this.selectId }, h("option", { key: '48e1f35c8c97c49f11edf712e4cfa5b2fcae2705', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
            _a.map(({ name, value, disabled }) => (h("option", { value: value, selected: this.value === value, disabled: disabled }, name)))))));
    }
    static get style() { return FrontSelectStyle0; }
}, [2, "front-select", {
        "optionsList": [16],
        "value": [8],
        "placeholder": [16],
        "selectId": [1, "select-id"],
        "selectName": [1, "select-name"],
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["front-select"];
    components.forEach(tagName => { switch (tagName) {
        case "front-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FrontSelect);
            }
            break;
    } });
}

export { FrontSelect as F, defineCustomElement as d };

//# sourceMappingURL=front-select2.js.map