import { r as registerInstance, a as createEvent, h, e as Host } from './index-9b51ba9f.js';

const liveVideoPlayerCss = ":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";

const LiveVideoPlayer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '1417ff4b4ea1da61d8472f29be4214bacf9bea59' }, h("div", { key: '7efe51c561700a7e4289911c24443be3ac455655', class: "live-video-player" }, h("iframe", { key: '69a994c0a1306c00cdc2f33b6940c42a5e805d8d', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoPlayer.style = liveVideoPlayerCss;

export { LiveVideoPlayer as live_video_player };

//# sourceMappingURL=live-video-player.entry.js.map