import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host } from './index-cb0223a2.js';

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

const miniPlayerCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.mini-player{position:fixed;bottom:10%;left:10px;display:flex;flex-direction:column;z-index:1000;border-radius:8px;overflow:hidden;background-color:#000000}@media (min-width: 1024px){.mini-player{bottom:10px;width:372px}}.mini-player live-video-player{width:100%;aspect-ratio:16/9}.mini-player live-video-player iframe{width:100%;height:100%;border:none;object-fit:cover}.mini-player-bar{display:flex;align-items:center;justify-content:space-between;padding:16px;background-color:var(--color-secondary);width:100%}@media (min-width: 1024px){.mini-player-bar{padding:8px 16px}}.mini-player-bar-title{font-family:var(--h1-ff);font-size:12px;text-transform:uppercase;font-weight:bold;color:var(--menu-background);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin:0}.mini-player-bar-button{display:flex;align-items:center}.mini-player-bar-button button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);text-transform:none;font-size:8px;padding:8px 16px;color:var(--color-buy-button);background-color:#ffffff}.mini-player-bar-button button:hover{opacity:0.75}.mini-player-bar-button button:disabled{opacity:0.6;cursor:not-allowed}@media (min-width: 1024px){.mini-player-bar-button button{padding:12px 24px}}.mini-player-close-button{position:absolute;top:10px;right:10px;z-index:1001;background:#ffffff;border:none;border-radius:4px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer}.mini-player-close-button:hover{background:#c0c0c0}";
const MiniPlayerStyle0 = miniPlayerCss;

const MiniPlayer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
        this.onClickButton = createEvent(this, "on-click-button", 7);
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
        return (h(Host, { key: 'c4c405775853ebbba9b5976ca94ee22823646772' }, this.showMiniPlayer && (h("div", { key: '039b0accc787250a0cf7b6904a8eeb2fbe7d600a', class: "mini-player", style: this.getMiniPlayerStyle() }, h("button", { key: '209d26ea8883ab81303de40d609c52db0c0ff916', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, h("img", { key: 'b5bd05674c660d729fb163dce53d42b945467c8b', src: getAssetPath('./assets/icons/close-icon.svg'), alt: "close-icon" })), h("live-video-player", { key: '06fe503027cd79fa3f89f7029b74e168778e249d', videoId: this.videoId, autoPlay: this.autoPlay }), h("div", { key: 'bd8ab99ad4ee9de31c3548984de84207a2faadd5', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: this.handleDragStart }, h("h6", { key: 'd83f9a01936a283073dde0d9099e9cfe703def4a', class: "mini-player-bar-title" }, this.mainTitle), h("div", { key: '789fc5d38005852c4fa53ece15c05372ad7e9955', class: "mini-player-bar-button" }, h("button", { key: '724f7e6b196f8d14882764b3f308bfa6939b652c', onClick: () => this.onClickButton.emit() }, this.buttonText)))))));
    }
};
MiniPlayer.style = MiniPlayerStyle0;

export { MiniPlayer as mini_player };

//# sourceMappingURL=mini-player.entry.js.map