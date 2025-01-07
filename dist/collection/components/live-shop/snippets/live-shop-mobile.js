import { h } from "@stencil/core";
import { tabs } from "../config/tabs-config";
export class LiveShopMobile {
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
    }
    render() {
        return (h("div", { key: '3bd015899f2bc4fa515693fd7eac3421c8da8595', class: "live-shop-in-live" }, h("div", { key: 'b35e861c895705ae0f4fe5089aed4db265c8fd63', class: "live-shop-in-live-player" }, h("live-video-player", { key: 'de3b46504d7ebfff2d8c5c346e3cbe1f5afe86c1', videoId: this.videoId, autoPlay: true })), h("div", { key: 'ce7b8980f954d1a5acdb0a5ddae6991f0af52e81', class: "live-shop-in-live-options" }, h("custom-card", { key: 'bb0c62f474bc778fc917fbd93ddd5ed1fc4de668', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: '6025af2ee9e65ac7cd0c9fdec8229f458f54029d', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
    }
    static get is() { return "live-shop-mobile"; }
    static get originalStyleUrls() {
        return {
            "$": ["live-shop-mobile.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["live-shop-mobile.css"]
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
//# sourceMappingURL=live-shop-mobile.js.map
