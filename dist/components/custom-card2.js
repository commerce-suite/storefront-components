import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}.custom-card-content:empty{display:none}";
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
        return (h(Host, { key: '16b6c91b4ab7927ac1954b3a5365b6fbb6e7603f' }, h("div", { key: '98bb46c64c48bd37d380a8f337dd66256f630d59', class: `custom-card ${this.customClass}` }, h("div", { key: '93400ea4e003c24c104c9e2b74cf3370185054ab', class: "custom-card-header" }, h("h2", { key: 'e29f084693661cf9479f2b9d1326201cb21bde02', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '2c78641d880ade884516620a49da680c502858d0', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: 'db19d7a2c82005e859552a102cb4807739288f1c', class: "custom-card-content" }, h("slot", { key: 'e8a3962cde3dbc3594eb747b21e55bc19ef6b336' })))));
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