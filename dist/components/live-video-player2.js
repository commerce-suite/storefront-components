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
        return (h(Host, { key: '942dfcce61872c32a69c77e2af4292ba2b1f1742' }, h("div", { key: '4f66fc6a07ee5cefaf1d28ab140248cb7c0436f8', class: "live-video-player" }, h("iframe", { key: '1fe89746939e6849c7d99797f8e736d8f4df2156', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
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