import{r as o,c as t,h as a,H as r}from"./p-95925ffd.js";const e='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.info-modal{position:fixed;width:401px;background-color:#ffffff;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.1607843137);padding:24px;z-index:9999;text-align:center}.info-modal-header{display:flex;flex-direction:column;align-items:center;gap:8px}.info-modal-header-title{font-family:var(--h1-ff);color:var(--menu-items);margin:0;text-transform:uppercase;font-weight:700;font-size:24px}.info-modal-header-description{margin:0 0 24px;font-size:16px}.info-modal-buttons{display:flex;justify-content:space-around;gap:8px}.info-modal-buttons-primary,.info-modal-buttons-secondary{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, "uppercase");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.info-modal-buttons-primary:hover,.info-modal-buttons-secondary:hover{opacity:0.75}.info-modal-buttons-primary:disabled,.info-modal-buttons-secondary:disabled{opacity:0.6;cursor:not-allowed}.info-modal-buttons-primary{background-color:var(--color-secondary)}.info-modal-buttons-secondary{background-color:#ffffff;color:#293b50;border:1px solid #c2cfde}.info-modal.-top{top:5%;bottom:auto;left:50%;transform:translateX(-50%)}.info-modal.-center{top:50%;bottom:auto;left:50%;transform:translate(-50%, -50%)}.info-modal.-bottom{top:auto;bottom:5%;left:50%;transform:translateX(-50%)}.info-modal.-hide-buttons .info-modal-header-description{margin:0}';const i=e;const n=class{constructor(a){o(this,a);this.componentRendered=t(this,"componentRendered",7);this.onClickPrimaryButton=t(this,"on-click-primary-button",7);this.onClickSecondaryButton=t(this,"on-click-secondary-button",7);this.modalTitle="Estamos ao vivo!";this.modalDescription="Venha conferir nossa live cheia novidades e promoções imperdíveis para você!";this.hideButtons=false;this.primaryButtonText="Assistir agora";this.secondaryButtonText="Não, obrigado";this.position="bottom"}getModalPosition(){const o={top:"-top",center:"-center"};return o[this.position]||"-bottom"}componentDidLoad(){this.componentRendered.emit()}render(){return a(r,{key:"3967fe08516186313c8a6aa676f7563823da9acb"},a("div",{key:"0a16883f2d6277be04bbd071f3568fc1a9567f64",class:`info-modal ${this.getModalPosition()} ${this.hideButtons?"-hide-buttons":""}`},a("div",{key:"b129e1a100fdd61b905b9f42978f03f3b00d35cb",class:"info-modal-header"},a("h2",{key:"71da790acac28a8e845ac42d484a6f9b2356f099",class:"info-modal-header-title"},this.modalTitle),a("p",{key:"1ebe99e7330d8e59fc493880cbbf0c0f6b51efb4",class:"info-modal-header-description"},this.modalDescription)),!this.hideButtons&&a("div",{key:"1db2ea9c89357035039a46460c5769a5df6c248b",class:"info-modal-buttons"},a("button",{key:"07518008ae3a5e8580c8edf72d80afa15bd5b11f",class:"info-modal-buttons-primary",onClick:()=>this.onClickPrimaryButton.emit()},this.primaryButtonText),a("button",{key:"7af7c09f9711de03474ede00f619278df4ed9950",class:"info-modal-buttons-secondary",onClick:()=>this.onClickSecondaryButton.emit()},this.secondaryButtonText))))}};n.style=i;export{n as info_modal};
//# sourceMappingURL=p-54c24519.entry.js.map