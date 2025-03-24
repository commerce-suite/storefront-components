import { r as registerInstance, h, c as createEvent, H as Host } from './index-acabb06e.js';

const frontIconCss = "@import url('https://fonts.googleapis.com/icon?family=Material+Icons');";
const FrontIconStyle0 = frontIconCss;

const FrontIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (h("span", { key: 'c250591eef5668047e5c35868343449e48161761', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
};
FrontIcon.style = FrontIconStyle0;

const liveVideoPlayerCss = ":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";
const LiveVideoPlayerStyle0 = liveVideoPlayerCss;

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
        return (h(Host, { key: 'b7e494530efeba855077e59604d69f797816cc68' }, h("div", { key: 'b907509b06ad0cb953b4879d80cf57905ea85b3f', class: "live-video-player" }, h("iframe", { key: '05d3efbeff57386cb30447de2550ba2ad38d4a55', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoPlayer.style = LiveVideoPlayerStyle0;

class DraggableService {
    constructor(onUpdatePosition) {
        this._isDragging = false;
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.onDragStateChange = () => { };
        this.handleDragMove = (event) => {
            if (!this._isDragging)
                return;
            const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
            const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
            this.currentX = clientX - this.initialX;
            this.currentY = clientY - this.initialY;
            this.positionX = this.currentX;
            this.positionY = this.currentY;
            this.onUpdatePosition(this.positionX, this.positionY);
        };
        this.handleDragEnd = () => {
            this._isDragging = false;
            this.onDragStateChange(this._isDragging);
            this.removeDragEventListeners();
        };
        this.onUpdatePosition = onUpdatePosition;
    }
    get isDragging() {
        return this._isDragging;
    }
    handleDragStart(event, positionX, positionY) {
        event.preventDefault();
        this._isDragging = true;
        this.onDragStateChange(this._isDragging);
        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        this.initialX = clientX - positionX;
        this.initialY = clientY - positionY;
        this.positionX = positionX;
        this.positionY = positionY;
        this.addDragEventListeners();
    }
    addDragEventListeners() {
        window.addEventListener('mousemove', this.handleDragMove);
        window.addEventListener('mouseup', this.handleDragEnd);
        window.addEventListener('touchmove', this.handleDragMove);
        window.addEventListener('touchend', this.handleDragEnd);
    }
    removeDragEventListeners() {
        window.removeEventListener('mousemove', this.handleDragMove);
        window.removeEventListener('mouseup', this.handleDragEnd);
        window.removeEventListener('touchmove', this.handleDragMove);
        window.removeEventListener('touchend', this.handleDragEnd);
    }
}

const miniPlayerCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.mini-player{position:fixed;bottom:10%;left:10px;display:flex;flex-direction:column;z-index:1000;border-radius:8px;overflow:hidden;background-color:#000000}@media (min-width: 1024px){.mini-player{bottom:10px;width:372px}}.mini-player live-video-player{width:100%;aspect-ratio:16/9}.mini-player live-video-player iframe{width:100%;height:100%;border:none;object-fit:cover}.mini-player-bar{display:flex;align-items:center;justify-content:space-between;padding:16px;background-color:var(--color-secondary);width:100%}@media (min-width: 1024px){.mini-player-bar{padding:8px 16px}}.mini-player-bar-title{font-family:var(--h1-ff);font-size:16px;text-transform:uppercase;font-weight:bold;color:var(--menu-background);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin:0}.mini-player-bar-button{display:flex;align-items:center}.mini-player-bar-button button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);text-transform:none;font-size:12px;padding:8px 16px;color:var(--color-secondary);background-color:#ffffff}.mini-player-bar-button button:hover{opacity:0.75}.mini-player-bar-button button:disabled{opacity:0.6;cursor:not-allowed}@media (min-width: 1024px){.mini-player-bar-button button{padding:12px 24px}}.mini-player-close-button{position:absolute;top:10px;right:10px;z-index:1001;background:#ffffff;border:none;border-radius:4px;width:28px;height:28px;display:flex;justify-content:center;cursor:pointer}.mini-player-close-button:hover{background:#c0c0c0}";
const MiniPlayerStyle0 = miniPlayerCss;

const MiniPlayer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onClickMiniPlayerButton = createEvent(this, "on-click-miniplayer-button", 7);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.handleDragStart = (event) => {
            this.dragDropService.handleDragStart(event, this.positionX, this.positionY);
        };
        this.videoId = undefined;
        this.autoPlay = false;
        this.mainTitle = 'Mini Player Title';
        this.buttonText = 'Return';
        this.showMiniPlayer = true;
        this.positionX = 0;
        this.positionY = 0;
        this.isDragging = false;
    }
    componentWillLoad() {
        this.dragDropService = new DraggableService((x, y) => {
            this.positionX = x;
            this.positionY = y;
        });
        this.dragDropService.onDragStateChange = (isDragging) => {
            this.isDragging = isDragging;
        };
    }
    handleTouchStart(event) {
        const target = event.target;
        if (target.tagName !== 'BUTTON')
            return this.handleDragStart(event);
        event.stopPropagation();
    }
    handleCloseMiniPlayer() {
        this.showMiniPlayer = false;
    }
    getMiniPlayerStyle() {
        return {
            transform: `translate(${this.positionX}px, ${this.positionY}px)`,
        };
    }
    getMiniPlayerBarStyle() {
        return {
            cursor: this.isDragging ? 'grabbing' : 'grab',
        };
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (h(Host, { key: 'c32258823bf14cf833de8ba8409909a2e8f0e850' }, this.showMiniPlayer && (h("div", { key: '120e243b384be6150c1021a783c1b1286927fdf8', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: 'f917d0f2889ed83497185ea69c4258e681e27763', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("front-icon", { key: '943e3f9637e71cd257d781cee08c19f8c227fb72', name: "close" })), h("live-video-player", { key: '86ed72a773e4066811f1e1b8cd2a4a81947214a4', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: 'd3ccdc66d548c68dc07e96fa749b6902c2678719', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, h("h6", { key: '29c033ca808ac737394595e101a32580f31e143d', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: '28a3f4afc2ae283877bde72e86690a88d9aa1cc0', class: "mini-player-bar-button" }, h("button", { key: '669c20160294449096c802801540bf82c94399cc', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
    }
};
MiniPlayer.style = MiniPlayerStyle0;

export { FrontIcon as front_icon, LiveVideoPlayer as live_video_player, MiniPlayer as mini_player };

//# sourceMappingURL=front-icon_3.entry.js.map