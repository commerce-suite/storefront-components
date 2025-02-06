import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const liveVideoChatCss = ":host{display:inline-block;width:100%}.live-video-chat{display:flex;justify-content:center;align-items:center;width:100%}.live-video-chat iframe{height:100%;width:100%}";
const LiveVideoChatStyle0 = liveVideoChatCss;

const LiveVideoChat = /*@__PURE__*/ proxyCustomElement(class LiveVideoChat extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
    }
    getChatUrl() {
        return `https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: 'de6ab4f2077e8bd98954cab2a1952dc06c70f4a1' }, h("div", { key: '0f311b595d0cef20db63dc68d3e5917b6ac5b30f', class: "live-video-chat" }, h("iframe", { key: '2128c2fa24c2de03682b0e1c6af3ac52e9f1bb30', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
    }
    static get style() { return LiveVideoChatStyle0; }
}, [0, "live-video-chat", {
        "videoId": [1, "video-id"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["live-video-chat"];
    components.forEach(tagName => { switch (tagName) {
        case "live-video-chat":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveVideoChat);
            }
            break;
    } });
}

export { LiveVideoChat as L, defineCustomElement as d };

//# sourceMappingURL=live-video-chat2.js.map