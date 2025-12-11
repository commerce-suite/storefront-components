import { Host, h } from "@stencil/core";
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
        return (h(Host, { key: '40b0da23e02621611ff3d7d149cf48446ae1297d' }, this.showMiniPlayer && (h("div", { key: '5d4f43dea7c9c312531a426cbf3a29fe69916539', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: '18f495ecdc874c9d2432336b03a15cd778d22d1f', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("front-icon", { key: '122c131530981259432f438d95c19a113c94813a', name: "close" })), h("live-video-player", { key: 'e9b7697b07a6ceb0bd43e9958b0200b08d65234f', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: '709515a64b48cf99f1a64df2ea066a75e290c090', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, h("h6", { key: '90d862415babe716a2416a92595033c4baff691a', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: 'f2c03994b6ad055d412d6764351a73b3c6c4bd9a', class: "mini-player-bar-button" }, h("button", { key: 'f2b7dbe660aab6e6c44e5c074a3e487bf701038d', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
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
