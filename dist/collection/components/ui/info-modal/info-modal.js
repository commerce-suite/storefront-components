import { Host, h } from "@stencil/core";
export class InfoModal {
    constructor() {
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
        return (h(Host, { key: '4c656971e7e4972e5cb0648500d627978014697d' }, h("div", { key: '7c4e6623f9cce27d2da9e720c40f6655a26edc5f', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: '099f32650c49a7b1402952e4a8465155dc86f818', class: "info-modal-header" }, h("h2", { key: '3aeade608cf44037b8ad4aff01daf5a9075085aa', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: '84a0feb211a0af41fc69863fa0fa986d770e981d', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: 'fb2b270164591d2d07ab5970f4c5b2433f554ebd', class: "info-modal-buttons" }, h("button", { key: 'bf794d41f664e55010af638c6999f712eded3876', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '31729d24a7346e89ca6c16feffe0b8ef52f7c5fe', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
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
                "defaultValue": "'Venha conferir nossa live cheia de novidades!'"
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
