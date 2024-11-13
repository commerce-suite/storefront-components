import { Host, h } from "@stencil/core";
export class InfoModal {
    constructor() {
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
    static get is() { return "info-modal"; }
    static get originalStyleUrls() {
        return {
            "$": ["info-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["info-modal.css"]
        };
    }
    static get properties() {
        return {
            "modalTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "modal-title",
                "reflect": false,
                "defaultValue": "'Estamos ao vivo!'"
            },
            "modalDescription": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "modal-description",
                "reflect": false,
                "defaultValue": "'Venha conferir nossa live cheia novidades e promo\u00E7\u00F5es imperd\u00EDveis para voc\u00EA!'"
            },
            "hideButtons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "hide-buttons",
                "reflect": false,
                "defaultValue": "false"
            },
            "primaryButtonText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "primary-button-text",
                "reflect": false,
                "defaultValue": "'Assistir agora'"
            },
            "secondaryButtonText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "secondary-button-text",
                "reflect": false,
                "defaultValue": "'N\u00E3o, obrigado'"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'bottom' | 'center' | 'top'",
                    "resolved": "\"bottom\" | \"center\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'bottom'"
            }
        };
    }
    static get events() {
        return [{
                "method": "componentRendered",
                "name": "componentRendered",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "onClickPrimaryButton",
                "name": "on-click-primary-button",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "onClickSecondaryButton",
                "name": "on-click-secondary-button",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=info-modal.js.map
