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
        return (h(Host, { key: '8145529e661125240df663fe39d324e88ce02655' }, h("div", { key: '87fb2a69796887a1947f76c63c428157158ab50d', class: "live-video-chat" }, h("iframe", { key: '249837b61915bf560df02fd177a72ae29c0ae2b2', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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
