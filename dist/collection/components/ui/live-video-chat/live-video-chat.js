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
        return (h(Host, { key: '057f50d5c296db5cf49cec899e13a1afb99b3203' }, h("div", { key: 'c6ca6987679a8486a16f9f99805123d0cb8db8dc', class: "live-video-chat" }, h("iframe", { key: 'd5d2d586e01672a4916436645616c6b2e1c6641c', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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
