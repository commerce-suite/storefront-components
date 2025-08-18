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
        return (h(Host, { key: '072e86a2e70052fa044395f1e3dd42ac748ec796' }, this.showMiniPlayer && (h("div", { key: 'd030604176a278317e1c73445bd1e95dd2774d0f', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: '42d7421c947c8e459309d9cb79aabf4ac4c7f945', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("front-icon", { key: 'cd1fa7bb5657c38f050a028e5e3fd028d9388863', name: "close" })), h("live-video-player", { key: 'fa957bdb1ad9d56b29c534a05393179d98a87ec9', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: 'cf79d1259ca938181061edfb1ae07a317a3b14ca', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, h("h6", { key: '3f0c05a388704b7d120751854ff6fee579f8374e', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: '87df5d602e24a94948b0f8bc15b6bc139de2754f', class: "mini-player-bar-button" }, h("button", { key: '5e27c4ad44416195b054183eed073a3e668233c6', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
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
