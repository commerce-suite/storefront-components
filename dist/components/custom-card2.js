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
        return (h(Host, { key: '732ac75941c1cf4a35775ac286de0a74dcb33def' }, h("div", { key: '9fbe399940103764e765dd84563622a5ac9fca29', class: `custom-card ${this.customClass}` }, h("div", { key: 'dca7891aeb907406a97ce9093407ceea1d844d13', class: "custom-card-header" }, h("h2", { key: '8eaefb1c57db1af82c73a2bea7df4dca0c506c90', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (h("p", { key: '1db1caf8f312021121348055880fc67c7b8e4545', class: "custom-card-header-description" }, this.cardDescription))), h("div", { key: 'ea8120c8aa7e11799b5a2e270f49edd3c580bde2', class: "custom-card-content" }, h("slot", { key: 'f793382fc558355fd70659264ec3c69c60f98e31' })))));
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