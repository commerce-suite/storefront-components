import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const liveVideoPlayerCss = ":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";
const LiveVideoPlayerStyle0 = liveVideoPlayerCss;

const LiveVideoPlayer = /*@__PURE__*/ proxyCustomElement(class LiveVideoPlayer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
        this.autoPlay = false;
    }
    getVideoUrl() {
        if (this.autoPlay)
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
        return `https://www.youtube.com/embed/${this.videoId}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: 'ea49692f04dbd19dc053c03b4c02db756b63708d' }, h("div", { key: 'ae9a2a5718358bd7986a5891ea233953e6e8bd41', class: "live-video-player" }, h("iframe", { key: '99845be4a05c5b6250f2f15cd1c5b44abbf80131', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
    static get style() { return LiveVideoPlayerStyle0; }
}, [0, "live-video-player", {
        "videoId": [1, "video-id"],
        "autoPlay": [4, "auto-play"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["live-video-player"];
    components.forEach(tagName => { switch (tagName) {
        case "live-video-player":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LiveVideoPlayer);
            }
            break;
    } });
}

export { LiveVideoPlayer as L, defineCustomElement as d };

//# sourceMappingURL=live-video-player2.js.map