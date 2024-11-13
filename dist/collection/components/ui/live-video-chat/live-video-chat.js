import { Host, h } from "@stencil/core";
export class LiveVideoChat {
    constructor() {
        this.videoId = undefined;
    }
    getChatUrl() {
        return `https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '99f8f1c30bb7c2a3b0c27f5ef0996f339c5e6863' }, h("div", { key: '82ef91119765c8fc529e4fea7f8030c3d9364ca2', class: "live-video-chat" }, h("iframe", { key: 'faeea5447113b0f31be336f6f9b16929d7102e1c', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
    }
    static get is() { return "live-video-chat"; }
    static get originalStyleUrls() {
        return {
            "$": ["live-video-chat.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["live-video-chat.css"]
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
            }
        };
    }
    static get events() {
        return [{
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
//# sourceMappingURL=live-video-chat.js.map
