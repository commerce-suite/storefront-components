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
        return (h(Host, { key: '81d8217d99480e79927891d870ee710b2e31dced' }, h("div", { key: '7b29bc775e2f1753e415bdbcdf0243597d33b6ec', class: "live-video-chat" }, h("iframe", { key: 'ffc9fa4017c6bba043b8a8ac588e6537bde7393e', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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
