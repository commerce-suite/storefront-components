import { h } from "@stencil/core";
export class LiveShopDesktop {
    constructor() {
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                liveShopData: this.liveShopData,
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
        return (h("div", { key: '0b0e80a706d46319d24bf31f22796f27747f3536', class: "live-shop-in-live-desktop" }, h("div", { key: 'a91d542363fe2f1200fd8938b63fceeda4430d5f', class: "live-shop-in-live-desktop-infos" }, h("div", { key: 'b21d77cc94bbbd045e88b7bf1e94eb5e9a0e82a6', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: '1f3f0e31fda7ba10cd3ba515c9cfbea7a693d143', videoId: this.videoId, autoPlay: true })), h("div", { key: '20a9163a8380a98b19ce8613e4a6dfb51e8f491b', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '3d51977961f1ef2feb0a9f71aefbff5e8992a361', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (h("button", { key: 'd07cdc4ad3c486da0b60f3c35bf5247a63a8047c', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (h("div", { key: 'fcec6f27e38dbadad290d6127ffee3930669d7c5', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '0e3ebfaa8b2c0960158503b3556d8a469990ebc3', videoId: this.videoId })))), h("div", { key: 'f7f486ad5203d7e2a756a95659732c484d054e50', class: "live-shop-in-live-desktop-content" }, h("div", { key: 'a19a7b5bcf531f9f351b8ad6908c174d9c8c21a8', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
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
                    "original": "{\n    item: IHighlightCardItem;\n    liveShopData: ILiveShop;\n  }",
                    "resolved": "{ item: IHighlightCardItem; liveShopData: ILiveShop; }",
                    "references": {
                        "IHighlightCardItem": {
                            "location": "import",
                            "path": "../../../components",
                            "id": "src/components.d.ts::IHighlightCardItem"
                        },
                        "ILiveShop": {
                            "location": "import",
                            "path": "../live-shop.type",
                            "id": "src/components/live-shop/live-shop.type.ts::ILiveShop"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=live-shop-desktop.js.map
