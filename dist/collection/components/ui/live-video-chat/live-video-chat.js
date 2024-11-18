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
        return (h(Host, { key: '4fca836fe08716a1c9670fab3600ff25c19ef5c2' }, h("div", { key: '5cc11e1e12dbd71a6e87197fa39088cab475d441', class: "live-video-chat" }, h("iframe", { key: '5dfae10c79c4737e7b0773f854b28a3e9db4a9fd', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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
