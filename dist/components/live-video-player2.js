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
        this.mute = true;
    }
    getVideoUrl() {
        if (this.autoPlay)
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=${+this.mute}`;
        return `https://www.youtube.com/embed/${this.videoId}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: '7bd45de3c3d3860e0cf31e824d8c303ef88bb45d' }, h("div", { key: 'd269dcd341226de98fb5c7f01cf37795eccecf12', class: "live-video-player" }, h("iframe", { key: '672a6be0643a40f4f4866ccd42a01a54a6bed965', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
    static get style() { return LiveVideoPlayerStyle0; }
}, [0, "live-video-player", {
        "videoId": [1, "video-id"],
        "autoPlay": [4, "auto-play"],
        "mute": [4]
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