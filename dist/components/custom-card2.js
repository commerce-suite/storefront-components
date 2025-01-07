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
    render() {
        return (h(Host, { key: 'bf02f44cdc6c2da39b0529867a67262758a764bb' }, h("div", { key: '4a0472e9cccced2e7888ceb716280eb424821b27', class: `custom-card ${this.customClass}` }, h("div", { key: 'ffeb567152895df9085959ac4a6fc2bb6588cb90', class: "custom-card-header" }, h("h2", { key: '976d0f0d92f4d6c6e8a77c4622324e762c383cd3', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '17396eac2ca965b1d33a390f372d1a7086735f47', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '1c55813bd7d4d66b04d06794606a38be5d3a1d76', class: "custom-card-content" }, h("slot", { key: 'a0b7326af7ae7b1346e37fb1d2b1ce90bca1d076' })))));
    }
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