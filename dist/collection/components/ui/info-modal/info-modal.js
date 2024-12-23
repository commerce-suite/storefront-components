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
        return (h(Host, { key: '3967fe08516186313c8a6aa676f7563823da9acb' }, h("div", { key: '0a16883f2d6277be04bbd071f3568fc1a9567f64', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: 'b129e1a100fdd61b905b9f42978f03f3b00d35cb', class: "info-modal-header" }, h("h2", { key: '71da790acac28a8e845ac42d484a6f9b2356f099', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: '1ebe99e7330d8e59fc493880cbbf0c0f6b51efb4', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: '1db2ea9c89357035039a46460c5769a5df6c248b', class: "info-modal-buttons" }, h("button", { key: '07518008ae3a5e8580c8edf72d80afa15bd5b11f', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '7af7c09f9711de03474ede00f619278df4ed9950', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
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
