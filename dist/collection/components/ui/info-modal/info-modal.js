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
        return (h(Host, { key: '792ba0e8da80f4bff032309ed2867bd362dd44b9' }, h("div", { key: '022b2ef6aed138f9c8fe9566ee3f416596ddfb32', class: `info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}` }, h("div", { key: 'a56dbdf56b6635dddfb7dfd10a6d0fe30309ec55', class: "info-modal-header" }, h("h2", { key: '9a88109404295aa68a2e815fbfa00be310505b40', class: "info-modal-header-title" }, this.modalTitle), h("p", { key: '91269d8c8177eb0308b301de7c082e3c740b318e', class: "info-modal-header-description" }, this.modalDescription)), !this.hideButtons && (h("div", { key: 'f7c1b9b7ea48607c4fbceb87d37447b795c0bbca', class: "info-modal-buttons" }, h("button", { key: '3bc9d2b145f835bfe0978e7e12f25830fd679599', class: "info-modal-buttons-primary", onClick: () => this.onClickPrimaryButton.emit() }, this.primaryButtonText), h("button", { key: '6a4ca0dbac4a71d76c63370ec8a746b9c6f90280', class: "info-modal-buttons-secondary", onClick: () => this.onClickSecondaryButton.emit() }, this.secondaryButtonText))))));
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
