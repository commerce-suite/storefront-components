import { h } from "@stencil/core";
import { tabs } from "../config/tabs-config";
export class LiveShopMobile {
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
    }
    render() {
        return (h("div", { key: 'a2e8b7fd69e2bc3c338462bf26c79dd720b8d970', class: "live-shop-in-live" }, h("div", { key: 'b106572b3f90afc8a0d869f6f445dbf4a4002e7f', class: "live-shop-in-live-player" }, h("live-video-player", { key: '48eef803501fe992949786060724d26921d597a5', videoId: this.videoId, autoPlay: true })), h("div", { key: 'a64becef8dfbd80c18e41dbd0d9438d67ad4b216', class: "live-shop-in-live-options" }, h("custom-card", { key: '8d8745427174f8e0934964fc854a591a0e8177ae', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: 'b86e66ada9c27627f9343c6eae555e583d25967f', tabs: tabs(this.videoId, this.items, this.handleAddItem) })))));
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
//# sourceMappingURL=live-shop-mobile.js.map
