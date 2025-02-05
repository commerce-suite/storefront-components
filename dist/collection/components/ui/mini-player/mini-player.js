import { Host, h, getAssetPath } from "@stencil/core";
import { DraggableService } from "./services/DraggableService";
export class MiniPlayer {
    constructor() {
        this.handleDragStart = (event) => {
            this.dragDropService.handleDragStart(event, this.positionX, this.positionY);
        };
        this.videoId = undefined;
        this.autoPlay = false;
        this.mainTitle = 'Mini Player Title';
        this.buttonText = 'Return';
        this.showMiniPlayer = true;
        this.positionX = 0;
        this.positionY = 0;
        this.isDragging = false;
    }
    componentWillLoad() {
        this.dragDropService = new DraggableService((x, y) => {
            this.positionX = x;
            this.positionY = y;
        });
        this.dragDropService.onDragStateChange = (isDragging) => {
            this.isDragging = isDragging;
        };
    }
    handleTouchStart(event) {
        const target = event.target;
        if (target.tagName !== 'BUTTON')
            return this.handleDragStart(event);
        event.stopPropagation();
    }
    handleCloseMiniPlayer() {
        this.showMiniPlayer = false;
    }
    getMiniPlayerStyle() {
        return {
            transform: `translate(${this.positionX}px, ${this.positionY}px)`,
        };
    }
    getMiniPlayerBarStyle() {
        return {
            cursor: this.isDragging ? 'grabbing' : 'grab',
        };
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '3fb2df064fcd2015dbbb4e26076b171ea7627e79' }, this.showMiniPlayer && (h("div", { key: 'a2f9a06d54b0cadd54f23ab0196cbf2c58454f13', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: '006aa088577788696293fbcd20076c7b7eed8848', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("img", { key: '911d817a73932d429b48965cc012b128b6774ae1', src: getAssetPath('./assets/icons/close-icon.svg'), alt: "close-icon" })), h("live-video-player", { key: '1cda6b94d502744ba73b560cfa9f8347f51dd9d8', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: '272dbdbfbdbf84247288a7c1fb481ba9fed6ddee', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, h("h6", { key: '8fedd7c9069cc5c9b814f40cba7517cbc754ea89', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: '992d782cd3d9548b434b2ff05530d09a83a570e4', class: "mini-player-bar-button" }, h("button", { key: 'b9f023fca02b5c15a5592d9234b70592a124b53e', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
    }
    static get is() { return "mini-player"; }
    static get originalStyleUrls() {
        return {
            "$": ["mini-player.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["mini-player.css"]
        };
    }
    static get properties() {
        return {
            "videoId": {
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
                "attribute": "video-id",
                "reflect": false
            },
            "autoPlay": {
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
                "attribute": "auto-play",
                "reflect": false,
                "defaultValue": "false"
            },
            "mainTitle": {
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
                "attribute": "main-title",
                "reflect": false,
                "defaultValue": "'Mini Player Title'"
            },
            "buttonText": {
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
                "attribute": "button-text",
                "reflect": false,
                "defaultValue": "'Return'"
            }
        };
    }
    static get states() {
        return {
            "showMiniPlayer": {},
            "positionX": {},
            "positionY": {},
            "isDragging": {}
        };
    }
    static get events() {
        return [{
                "method": "onClickMiniPlayerButton",
                "name": "on-click-miniplayer-button",
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
            }];
    }
}
//# sourceMappingURL=mini-player.js.map
