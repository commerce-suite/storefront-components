import { r as registerInstance, c as createEvent, h, H as Host } from './index-cb0223a2.js';

const infoModalCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.info-modal{position:fixed;width:401px;background-color:#ffffff;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.1607843137);padding:24px;z-index:9999;text-align:center}.info-modal-header{display:flex;flex-direction:column;align-items:center;gap:8px}.info-modal-header-title{font-family:var(--h1-ff);color:var(--menu-items);margin:0;text-transform:uppercase;font-weight:700;font-size:24px}.info-modal-header-description{margin:0 0 24px;font-size:16px}.info-modal-buttons{display:flex;justify-content:space-around;gap:8px}.info-modal-buttons-primary,.info-modal-buttons-secondary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;text-transform:capitalize;font-size:14px}.info-modal-buttons-primary:hover,.info-modal-buttons-secondary:hover{opacity:0.75}.info-modal-buttons-primary:disabled,.info-modal-buttons-secondary:disabled{opacity:0.6;cursor:not-allowed}.info-modal-buttons-primary{background-color:var(--color-buy-button)}.info-modal-buttons-secondary{background-color:#ffffff;color:#293b50;border:1px solid #c2cfde}.info-modal.-top{top:5%;bottom:auto;left:50%;transform:translateX(-50%)}.info-modal.-center{top:50%;bottom:auto;left:50%;transform:translate(-50%, -50%)}.info-modal.-bottom{top:auto;bottom:5%;left:50%;transform:translateX(-50%)}.info-modal.-hide-buttons .info-modal-header-description{margin:0}";
const InfoModalStyle0 = infoModalCss;

const InfoModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.onClickPrimaryButton = createEvent(this, "on-click-primary-button", 7);
        this.onClickSecondaryButton = createEvent(this, "on-click-secondary-button", 7);
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
        return (h(Host, { key: '7d720100debd5d0f878dab2f522598b69658fc54' }, h("div", { key: '3409a10062518538148aba763beebdcdf397e9d9', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: 'bb7118c13582a92bc58e9d195c2a0f463168688e', class: "info-modal-header" }, h("h2", { key: 'a5f836ee048bd17023bed9974e492b71863ed1b2', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: '90c235fef9a4c20b70c154051591176765330a44', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: '5f441f4949b80f38d8fb6d4f561fe833530b4820', class: "info-modal-buttons" }, h("button", { key: 'ee70e11002235ecfa9ecc673068be02134ed1db5', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '1e1f30a462517922b3985f1c92f3c4373a3dab3e', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
    }
};
InfoModal.style = InfoModalStyle0;

export { InfoModal as info_modal };

//# sourceMappingURL=info-modal.entry.js.map