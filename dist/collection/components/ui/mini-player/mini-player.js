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
        return (h(Host, { key: 'afcd293d0b82abbb8076063bf7fe0ea15b6c1381' }, this.showMiniPlayer && (h("div", { key: '51e3f3c27c66fb4bc79107b8a18d7b717cda6588', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: 'cac3d98b9ce61ee82235ff65f78c5a264e16f8c0', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("img", { key: '8e630cd5ae6ee41697ceabe09cc426a256b072cb', src: getAssetPath('./assets/icons/close-icon.svg'), alt: "close-icon" })), h("live-video-player", { key: '643f7dab642799a394e0dcd280c31951f0cb9813', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: 'f718201f59c97cad5fdf45523b92e99986bebbde', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, h("h6", { key: '67f99bbb642e81d0aa83ea2429ee15b3ce4c10c3', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: '08393ccd6bffca59fbd49bee410bf1b8cea98e25', class: "mini-player-bar-button" }, h("button", { key: 'f166a052f7bdb6cb8018ccf6f20c9327890c43dd', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
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
