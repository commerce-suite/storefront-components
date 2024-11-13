import { h } from "@stencil/core";
export class LiveShopDesktop {
    constructor() {
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                video_id: this.videoId,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
        this.isChatOpen = undefined;
        this.toggleChat = undefined;
    }
    buttonText() {
        return this.isChatOpen ? 'Ocultar chat da live' : 'Exibir chat da live';
    }
    render() {
        return (h("div", { key: '0ee2586808270792007716471f5d87369c55c1f9', class: "live-shop-in-live-desktop" }, h("div", { key: 'b63c038433a672c1c8e10504cad1e3d80237d61d', class: "live-shop-in-live-desktop-infos" }, h("div", { key: 'e4679b41470de47afe5514e73dfe06200baf89d7', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: '237354c9f960a2d488729a24ba9b3c02df715ada', videoId: this.videoId, autoPlay: true })), h("div", { key: '53e46b670662037597cc9e25c33bfa3e5d340392', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '44df1331d19fd994555a60ad03db63eacacf3426', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), h("button", { key: '683e1db0dc5b382810e9d0bd343900549ec60398', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText())), this.isChatOpen && (h("div", { key: '65297655fa1e43c02709eb56ab64fff57fb933d5', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '3265a63d913454603a8c8f49b87a03bf3489ffa3', videoId: this.videoId })))), h("div", { key: '84498cf604b9b2aa604bfa249eba4e3782ef72ac', class: "live-shop-in-live-desktop-content" }, h("div", { key: 'd023e218e83062e4b423f644933d13ff579adf77', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
    }
    static get is() { return "live-shop-desktop"; }
    static get originalStyleUrls() {
        return {
            "$": ["live-shop-desktop.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["live-shop-desktop.css"]
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
            "liveShopData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ILiveShop",
                    "resolved": "ILiveShop",
                    "references": {
                        "ILiveShop": {
                            "location": "import",
                            "path": "../live-shop.type",
                            "id": "src/components/live-shop/live-shop.type.ts::ILiveShop"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IHighlightCardItem[]",
                    "resolved": "IHighlightCardItem[]",
                    "references": {
                        "IHighlightCardItem": {
                            "location": "import",
                            "path": "../../../components",
                            "id": "src/components.d.ts::IHighlightCardItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "isChatOpen": {
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
                "attribute": "is-chat-open",
                "reflect": false
            },
            "toggleChat": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get events() {
        return [{
                "method": "clickAdd",
                "name": "on-click-add",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    item: IHighlightCardItem;\n    video_id: string;\n  }",
                    "resolved": "{ item: IHighlightCardItem; video_id: string; }",
                    "references": {
                        "IHighlightCardItem": {
                            "location": "import",
                            "path": "../../../components",
                            "id": "src/components.d.ts::IHighlightCardItem"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=live-shop-desktop.js.map
