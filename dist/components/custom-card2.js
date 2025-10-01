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
        return (h(Host, { key: '3f69e2b457d3f54fa06fb2a13beaf90ae4c55856' }, h("div", { key: '919d9d1b8c1a99430e3358628ef8e6475ad6a61b', class: `custom-card ${this.customClass}` }, h("div", { key: '2fab4ad5868f806ca140d94a283d91d33edbb5c8', class: "custom-card-header" }, h("h2", { key: '6c3246ae6ae779370eda6d4e50bb5aaa7c2f5a75', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '5900bda0530d8b8e206bdceda4df5297be5b0945', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '26595ab591a46fcdd5f6ae4b02fa53c9f903087b', class: "custom-card-content" }, h("slot", { key: 'e0dc0fd60c76953fc541239952678890af8c857d' })))));
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