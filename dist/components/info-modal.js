import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const infoModalCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.info-modal{position:fixed;width:401px;background-color:#ffffff;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.1607843137);padding:24px;z-index:9999;text-align:center}.info-modal-header{display:flex;flex-direction:column;align-items:center;gap:8px}.info-modal-header-title{font-family:var(--h1-ff);color:var(--menu-items);margin:0;text-transform:uppercase;font-weight:700;font-size:24px}.info-modal-header-description{margin:0 0 24px;font-size:16px}.info-modal-buttons{display:flex;justify-content:space-around;gap:8px}.info-modal-buttons-primary,.info-modal-buttons-secondary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.info-modal-buttons-primary:hover,.info-modal-buttons-secondary:hover{opacity:0.75}.info-modal-buttons-primary:disabled,.info-modal-buttons-secondary:disabled{opacity:0.6;cursor:not-allowed}.info-modal-buttons-primary{background-color:var(--color-secondary)}.info-modal-buttons-secondary{background-color:#ffffff;color:#293b50;border:1px solid #c2cfde}.info-modal.-top{top:5%;bottom:auto;left:50%;transform:translateX(-50%)}.info-modal.-center{top:50%;bottom:auto;left:50%;transform:translate(-50%, -50%)}.info-modal.-bottom{top:auto;bottom:5%;left:50%;transform:translateX(-50%)}.info-modal.-hide-buttons .info-modal-header-description{margin:0}";
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
        return (h(Host, { key: '6a2b2fe73845b78e0d02defa6c532468a6a10d3d' }, h("div", { key: 'c6c842531421e52c4bf2ba762b98a42ab6c46201', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: '5097af2b8dfbc751cad64b1e0d9c623292fbe3b7', class: "info-modal-header" }, h("h2", { key: '99a01b5dad12dd69e102b31c244d121a110dcf2c', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: 'd5ce2161c70e1233938f72467365b57486c78b32', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: '0ba2e89c1d99ea3cd9e7acde478b4023d8c2d818', class: "info-modal-buttons" }, h("button", { key: 'c327651261f593781253f942413a052680111ff4', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '887f2e49752d1f966e276ed4f052aa9948443d0a', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
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