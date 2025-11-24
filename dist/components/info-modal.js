import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const infoModalCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.info-modal{position:fixed;width:401px;background-color:#ffffff;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.1607843137);padding:24px;z-index:9999;text-align:center}.info-modal-header{display:flex;flex-direction:column;align-items:center;gap:8px}.info-modal-header-title{font-family:var(--h1-ff);color:var(--fc-color-primary);margin:0;text-transform:uppercase;font-weight:700;font-size:24px}.info-modal-header-description{margin:0 0 24px;font-size:16px}.info-modal-buttons{display:flex;justify-content:space-around;gap:8px}.info-modal-buttons-primary,.info-modal-buttons-secondary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.info-modal-buttons-primary:hover,.info-modal-buttons-secondary:hover{opacity:0.75}.info-modal-buttons-primary:disabled,.info-modal-buttons-secondary:disabled{opacity:0.6;cursor:not-allowed}.info-modal-buttons-primary{background-color:var(--color-secondary)}.info-modal-buttons-secondary{background-color:#ffffff;color:#293b50;border:1px solid #c2cfde}.info-modal.-top{top:5%;bottom:auto;left:50%;transform:translateX(-50%)}.info-modal.-center{top:50%;bottom:auto;left:50%;transform:translate(-50%, -50%)}.info-modal.-bottom{top:auto;bottom:5%;left:50%;transform:translateX(-50%)}.info-modal.-hide-buttons .info-modal-header-description{margin:0}";
const InfoModalStyle0 = infoModalCss;

const InfoModal$1 = /*@__PURE__*/ proxyCustomElement(class InfoModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.onClickPrimaryButton = createEvent(this, "on-click-primary-button", 7);
        this.onClickSecondaryButton = createEvent(this, "on-click-secondary-button", 7);
        this.modalTitle = 'Estamos ao vivo!';
        this.modalDescription = 'Venha conferir nossa live cheia de novidades!';
        this.hideButtons = false;
        this.primaryButtonText = 'Assistir agora';
        this.secondaryButtonText = 'Não, obrigado';
        this.position = 'bottom';
    }
    getModalPosition() {
        const positionMap = {
            top: '-top',
            center: '-center',
        };
        return positionMap[this.position] || '-bottom';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '792ba0e8da80f4bff032309ed2867bd362dd44b9' }, h("div", { key: '022b2ef6aed138f9c8fe9566ee3f416596ddfb32', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: 'a56dbdf56b6635dddfb7dfd10a6d0fe30309ec55', class: "info-modal-header" }, h("h2", { key: '9a88109404295aa68a2e815fbfa00be310505b40', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: '91269d8c8177eb0308b301de7c082e3c740b318e', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: 'f7c1b9b7ea48607c4fbceb87d37447b795c0bbca', class: "info-modal-buttons" }, h("button", { key: '3bc9d2b145f835bfe0978e7e12f25830fd679599', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '6a4ca0dbac4a71d76c63370ec8a746b9c6f90280', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
    }
    static get style() { return InfoModalStyle0; }
}, [0, "info-modal", {
        "modalTitle": [1, "modal-title"],
        "modalDescription": [1, "modal-description"],
        "hideButtons": [4, "hide-buttons"],
        "primaryButtonText": [1, "primary-button-text"],
        "secondaryButtonText": [1, "secondary-button-text"],
        "position": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["info-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "info-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InfoModal$1);
            }
            break;
    } });
}

const InfoModal = InfoModal$1;
const defineCustomElement = defineCustomElement$1;

export { InfoModal, defineCustomElement };

//# sourceMappingURL=info-modal.js.map