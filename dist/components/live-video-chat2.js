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
        return (h(Host, { key: '81d8217d99480e79927891d870ee710b2e31dced' }, h("div", { key: '7b29bc775e2f1753e415bdbcdf0243597d33b6ec', class: "live-video-chat" }, h("iframe", { key: 'ffc9fa4017c6bba043b8a8ac588e6537bde7393e', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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