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
        return (h(Host, { key: '4fca836fe08716a1c9670fab3600ff25c19ef5c2' }, h("div", { key: '5cc11e1e12dbd71a6e87197fa39088cab475d441', class: "live-video-chat" }, h("iframe", { key: '5dfae10c79c4737e7b0773f854b28a3e9db4a9fd', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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