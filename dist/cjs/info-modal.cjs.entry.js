'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa0dd42.js');

const infoModalCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.info-modal{position:fixed;width:401px;background-color:#ffffff;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.1607843137);padding:24px;z-index:9999;text-align:center}.info-modal-header{display:flex;flex-direction:column;align-items:center;gap:8px}.info-modal-header-title{font-family:var(--h1-ff);color:var(--menu-items);margin:0;text-transform:uppercase;font-weight:700;font-size:24px}.info-modal-header-description{margin:0 0 24px;font-size:16px}.info-modal-buttons{display:flex;justify-content:space-around;gap:8px}.info-modal-buttons-primary,.info-modal-buttons-secondary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.info-modal-buttons-primary:hover,.info-modal-buttons-secondary:hover{opacity:0.75}.info-modal-buttons-primary:disabled,.info-modal-buttons-secondary:disabled{opacity:0.6;cursor:not-allowed}.info-modal-buttons-primary{background-color:var(--color-secondary)}.info-modal-buttons-secondary{background-color:#ffffff;color:#293b50;border:1px solid #c2cfde}.info-modal.-top{top:5%;bottom:auto;left:50%;transform:translateX(-50%)}.info-modal.-center{top:50%;bottom:auto;left:50%;transform:translate(-50%, -50%)}.info-modal.-bottom{top:auto;bottom:5%;left:50%;transform:translateX(-50%)}.info-modal.-hide-buttons .info-modal-header-description{margin:0}";
const InfoModalStyle0 = infoModalCss;

const InfoModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.onClickPrimaryButton = index.createEvent(this, "on-click-primary-button", 7);
        this.onClickSecondaryButton = index.createEvent(this, "on-click-secondary-button", 7);
        this.modalTitle = 'Estamos ao vivo!';
        this.modalDescription = 'Venha conferir nossa live cheia novidades e promoções imperdíveis para você!';
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
        return (index.h(index.Host, { key: '3762fefe56a0befee908f23b3880ea767c7da53e' }, index.h("div", { key: 'cb77d8dfba9b3f51729b43e753d35c121db9fc1f', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, index.h("div", { key: 'd29b897df8c36e9471e61dafa5dcb428bfa0936a', class: "info-modal-header" }, index.h("h2", { key: 'e2a146e76bc4407073ec3de1c88af25c17892235', class: "info-modal-header-title" }, this.modalTitle), index.h("p", { key: 'fffd14a9ca25dac3943f87f625824de874ea437a', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (index.h("div", { key: '99d7142fce50fd584815a80a3139a4e755692d94', class: "info-modal-buttons" }, index.h("button", { key: 'f00e27a3b904263288be1f17289b45ee55458282', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), index.h("button", { key: 'f8f46ce59079134ad450b3bb7d9341ba0499675b', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
    }
};
InfoModal.style = InfoModalStyle0;

exports.info_modal = InfoModal;

//# sourceMappingURL=info-modal.cjs.entry.js.map