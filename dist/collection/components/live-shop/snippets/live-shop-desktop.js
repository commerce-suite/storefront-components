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
        return (h("div", { key: '7effd5e5056878188a22174117cac9f59a104448', class: "live-shop-in-live-desktop" }, h("div", { key: 'b0e522dbd996132ea436f68cc189c873bd32b426', class: "live-shop-in-live-desktop-infos" }, h("div", { key: '513680509fadb268cbd12b928b2425e6492bd147', class: "live-shop-in-live-desktop-infos-player" }, h("live-video-player", { key: 'f95b5d568a0b8f3390730d0b011c53f40d72c2a4', videoId: this.videoId, autoPlay: true })), h("div", { key: '1bf91d44a1dff664f95d4fb5a6a8aa29b73f433c', class: "live-shop-in-live-desktop-infos-options" }, h("h2", { key: '9c875b4d7ccdeb8e0e0e5da3b6f47426e55cb597', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (h("button", { key: '0b98a66253a410bbe19dae59f7d341a3b6b09b09', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (h("div", { key: '809f4e26270e749a19f69a7a524649595acfc8d6', class: "live-shop-in-live-desktop-infos-options-chat" }, h("live-video-chat", { key: '99755ba8e3ba5eb43e06088f61c2e71ae2c95e44', videoId: this.videoId })))), h("div", { key: 'bd2fcf81a3785dea7f113e4e16e9f04d6b580831', class: "live-shop-in-live-desktop-content" }, h("div", { key: '12285340c2df6121142e6c72c7e9c17a7d56930b', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 && this.items.some(item => item.show) ? (h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
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
