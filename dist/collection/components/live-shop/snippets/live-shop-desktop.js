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
        return (h("div", { key: '96df90cadc361a5160f3cc71740990dda0f18113', class: "live-shop-in-live-desktop" }, h("div", { key: '9b8029ada6a375467b236a6cad3563a3875ec9d4', class: "live-shop-in-live-desktop-infos" }, h("div", { key: '4850fb89073f15ea8e6cfe95226167f040d10788', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: '29fc96d2a68412aeb1da0ed01c7bc8590e23132e', videoId: this.videoId, autoPlay: true })), h("div", { key: '10e3f6cc0d819f5893975f6285b6932e1538a21f', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '867ccd7c7a0f645c7e4e92de0380c166d1f7ae8d', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (h("button", { key: 'ca180b1bb7065465d1763f6c84215a8c4e0fba0e', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (h("div", { key: 'f5a2d3a1c35a0c4cdddc1bde0b1329d5dcf4f81c', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '82d7e877e65f41825c61a41bcfed0ddcbc4e9076', videoId: this.videoId })))), h("div", { key: '6e5a7e740744ad021d5881bd744d7cbd5d42c45b', class: "live-shop-in-live-desktop-content" }, h("div", { key: '5451983b6706ea18d6d900e75d080a852cf523dc', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 && this.items.some(item => item.show) ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
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
                            "location": "global",
                            "id": "global::IHighlightCardItem"
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
                            "location": "global",
                            "id": "global::IHighlightCardItem"
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
