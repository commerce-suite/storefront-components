'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed1a22c2.js');

const colorSelectorCss = ".color-selector{display:flex;flex-wrap:wrap;gap:10px}.color-selector .color-option{position:relative;width:25px;height:25px;border:none;background:transparent;border-radius:50%;padding:0;cursor:pointer;outline:none;display:flex;align-items:center;justify-content:center}.color-selector .color-option::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;box-sizing:border-box;border:1px solid #ededed}.color-selector .color-option.active::before{border:2px solid #000000}.color-selector .color-option .color-dot{width:15px;height:15px;border-radius:50%;background-color:currentColor;z-index:1}";
const ColorSelectorStyle0 = colorSelectorCss;

const ColorSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colorSelected = index.createEvent(this, "colorSelected", 7);
        this.colors = [];
        this.selectedId = undefined;
    }
    onSelectColor(color) {
        this.colorSelected.emit(color);
    }
    getColorStyle(color) {
        return color.image
            ? {
                backgroundImage: `url(${color.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
            : {
                backgroundColor: color.hexadecimal,
            };
    }
    render() {
        return (index.h(index.Host, { key: 'c73a483a7cafb6552ee7d9bac1a7a113fe73bf5d' }, index.h("div", { key: '0a6648dda5ecacd6ea206e5b69a08985ac41c840', class: "color-selector" }, this.colors.map(color => (index.h("button", { key: color.id, class: {
                'color-option': true,
                'active': this.selectedId === color.id,
            }, onClick: () => this.onSelectColor(color), "aria-label": color.name, title: color.name }, index.h("span", { class: "color-dot", style: this.getColorStyle(color) })))))));
    }
};
ColorSelector.style = ColorSelectorStyle0;

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--fc-color-primary);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}.custom-card-content:empty{display:none}";
const CustomCardStyle0 = customCardCss;

const CustomCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: '3f69e2b457d3f54fa06fb2a13beaf90ae4c55856' }, index.h("div", { key: '919d9d1b8c1a99430e3358628ef8e6475ad6a61b', class: `custom-card ${this.customClass}` }, index.h("div", { key: '2fab4ad5868f806ca140d94a283d91d33edbb5c8', class: "custom-card-header" }, index.h("h2", { key: '6c3246ae6ae779370eda6d4e50bb5aaa7c2f5a75', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (index.h("p", { key: '5900bda0530d8b8e206bdceda4df5297be5b0945', class: "custom-card-header-description" }, this.cardDescription))), index.h("div", { key: '26595ab591a46fcdd5f6ae4b02fa53c9f903087b', class: "custom-card-content" }, index.h("slot", { key: 'e0dc0fd60c76953fc541239952678890af8c857d' })))));
    }
    get el() { return index.getElement(this); }
};
CustomCard.style = CustomCardStyle0;

const liveVideoPlayerCss = ":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";
const LiveVideoPlayerStyle0 = liveVideoPlayerCss;

const LiveVideoPlayer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
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
        return (index.h(index.Host, { key: '1417ff4b4ea1da61d8472f29be4214bacf9bea59' }, index.h("div", { key: '7efe51c561700a7e4289911c24443be3ac455655', class: "live-video-player" }, index.h("iframe", { key: '69a994c0a1306c00cdc2f33b6940c42a5e805d8d', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoPlayer.style = LiveVideoPlayerStyle0;

exports.color_selector = ColorSelector;
exports.custom_card = CustomCard;
exports.live_video_player = LiveVideoPlayer;

//# sourceMappingURL=color-selector_3.cjs.entry.js.map