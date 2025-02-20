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
        return (h(Host, { key: 'b7e494530efeba855077e59604d69f797816cc68' }, h("div", { key: 'b907509b06ad0cb953b4879d80cf57905ea85b3f', class: "live-video-player" }, h("iframe", { key: '05d3efbeff57386cb30447de2550ba2ad38d4a55', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
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