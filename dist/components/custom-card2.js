import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}";
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
        return (h(Host, { key: '53245f10b891d307ae757b2992c3e5127cfdaf56' }, h("div", { key: 'd18493b0cb827d91cf650cf5a139fb791b258fa3', class: `custom-card ${this.customClass}` }, h("div", { key: '66348c1eadf3b516bc15ef074461fd7c77d4822b', class: "custom-card-header" }, h("h2", { key: '1e45189b4de9ae8e94b6300ae90d26b722b5ee21', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: 'ba3abd85c94474d7a24ab119c091b94b0b6f4670', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: '08d5f6a130b9123713ec8d26d408fd9f496dbd6c', class: "custom-card-content" }, h("slot", { key: '07d0861be27e9f32fe81fd55eadda597da0cb10a' })))));
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