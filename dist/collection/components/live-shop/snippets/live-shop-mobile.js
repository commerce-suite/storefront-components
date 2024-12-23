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
        return (h("div", { key: '1abb54a525fa61685d562217ab00c6c0159cfadd', class: "live-shop-in-live" }, h("div", { key: '3d664a342fb4617d18e5db88e8a49c3f2bfe3e0d', class: "live-shop-in-live-player" }, h("live-video-player", { key: '14a3df758d6159a71e1f6cb01acfda6a991571b6', videoId: this.videoId, autoPlay: true })), h("div", { key: 'ac70850384d726f4e139a54c6eb1f43c1474f8be', class: "live-shop-in-live-options" }, h("custom-card", { key: 'dee7d588370cbd6f9860107597ba2a9a7c219d4e', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: 'a122cdcccc5e6546e90498659b91e1a1f0af6768', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
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
