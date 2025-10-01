import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--fc-color-primary);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}.custom-card-content:empty{display:none}";
const CustomCardStyle0 = customCardCss;

const CustomCard = /*@__PURE__*/ proxyCustomElement(class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: 'dec2d76b0cdf8e2b4c9a996046e6537b586ff674' }, h("div", { key: '8383234a580cce013405c3d4f964e23a9aca3441', class: `custom-card ${this.customClass}` }, h("div", { key: '6637d089be5961bae956f563ec19fa7f2979f8dc', class: "custom-card-header" }, h("h2", { key: '48bd6306e5039a8cce0d74d61db9e1c64573099c', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '1b72d1482c2e9783184198e3955fa4034c9e7dc7', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: 'e6a3cf008c969335ed5a4585acb0f05b6475b1d5', class: "custom-card-content" }, h("slot", { key: '7bdb3c4a38084a496c1df16d66c961bf2c467e0d' })))));
    }
    get el() { return this; }
    static get style() { return CustomCardStyle0; }
}, [4, "custom-card", {
        "cardTitle": [1, "card-title"],
        "cardDescription": [1, "card-description"],
        "customClass": [1, "custom-class"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["custom-card"];
    components.forEach(tagName => { switch (tagName) {
        case "custom-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CustomCard);
            }
            break;
    } });
}

export { CustomCard as C, defineCustomElement as d };

//# sourceMappingURL=custom-card2.js.map