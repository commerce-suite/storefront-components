import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}";
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
    hasSlot() {
        const slot = this.el.querySelector('slot');
        return !!slot && slot.assignedNodes().length > 0;
    }
    render() {
        return (h(Host, { key: '118b53b69437da947613eaaa2ce7d80e0c04065f' }, h("div", { key: '3cfda6415ea378cfdf1072133483011dcb0f6ece', class: `custom-card ${this.customClass}` }, h("div", { key: '5b2a51d0f715c183e78dacad57fe53339e1a291b', class: "custom-card-header" }, h("h2", { key: '4f7d9134b29fdf9f4f282501a44ce63f473ff0a7', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: 'b81d3a629405ddaeb38ac46b0655803dd67f6e5b', class: "custom-card-header-description" }, this.cardDescription))), this.hasSlot() ? (h("div", { class: "custom-card-content" }, h("slot", null))) : null)));
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