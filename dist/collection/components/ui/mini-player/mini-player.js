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
        return (h(Host, { key: 'b142fda4923bc188cf3cd7c57e3420ce5fb523c2' }, this.showMiniPlayer && (h("div", { key: '88493e3f980bd3781446d03fb74aef576bed9674', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: 'c1302d6b6291ee2aac7e3a0af4d90688b7205eac', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("img", { key: 'c84c7aec9d929e1dd529e6c4c6fb4183e0c62af9', src: getAssetPath('./assets/icons/close-icon.svg'), alt: "close-icon" })), h("live-video-player", { key: '508294b7a08ba9797c257877b8ff26a22c1aa604', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: '6a6d2156931c91cf24f06fb553728b6493eaf1b6', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, h("h6", { key: '4c190ec81f53545549fcbf7861e46136e63bcf37', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: '33e4f15bbf816ab913f9d063a9d6b0c000669841', class: "mini-player-bar-button" }, h("button", { key: '5140d7eeb2f7e1b5c7f67857ea61459225408e9d', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
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
