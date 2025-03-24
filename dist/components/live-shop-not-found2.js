import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './custom-card2.js';

const liveShopNotFoundCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-not-found button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-size:14px}.live-shop-not-found button:hover{opacity:0.75}.live-shop-not-found button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopNotFoundStyle0 = liveShopNotFoundCss;

const LiveShopNotFound = /*@__PURE__*/ proxyCustomElement(class LiveShopNotFound extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.returnToHome = createEvent(this, "returnToHome", 7);
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (h(Host, { key: '49d77b6d709c51891a2447ff5d54870528f25237' }, h("div", { key: '66881b2845774132feaa6029f2f9085e0e3b77dc', class: "live-shop-not-found" }, h("custom-card", { key: 'd2cf4d00bd34984697b4f899ff14bf669bff8ad1', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades!" }, h("button", { key: '8ac991570b3420a43c5aea2b634b10939ecf2bf2', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
    }
    static get style() { return LiveShopNotFoundStyle0; }
}, [0, "live-shop-not-found"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["live-shop-not-found", "custom-card"];
    components.forEach(tagName => { switch (tagName) {
        case "live-shop-not-found":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveShopNotFound);
            }
            break;
        case "custom-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { LiveShopNotFound as L, defineCustomElement as d };

//# sourceMappingURL=live-shop-not-found2.js.map