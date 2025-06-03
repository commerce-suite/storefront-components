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
        return (h(Host, { key: '6a2b2fe73845b78e0d02defa6c532468a6a10d3d' }, h("div", { key: 'c6c842531421e52c4bf2ba762b98a42ab6c46201', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: '5097af2b8dfbc751cad64b1e0d9c623292fbe3b7', class: "info-modal-header" }, h("h2", { key: '99a01b5dad12dd69e102b31c244d121a110dcf2c', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: 'd5ce2161c70e1233938f72467365b57486c78b32', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: '0ba2e89c1d99ea3cd9e7acde478b4023d8c2d818', class: "info-modal-buttons" }, h("button", { key: 'c327651261f593781253f942413a052680111ff4', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '887f2e49752d1f966e276ed4f052aa9948443d0a', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
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
