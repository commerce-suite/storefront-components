import { h, r as registerInstance, a as createEvent } from './index-998c8a8e.js';

const tabs = (videoId, items, handleAddItem, chatVisible) => {
    const baseTabs = [
        {
            name: 'products',
            label: (h("span", null,
                "Produtos",
                (items === null || items === void 0 ? void 0 : items.some(item => item.type === 'product' && item.show)) && (h("span", { class: "product-count" }, items.filter(item => item.type === 'product' && item.show).length)))),
            content: () => {
                return (items === null || items === void 0 ? void 0 : items.length) > 0 && (items === null || items === void 0 ? void 0 : items.some(item => item.show)) ? (h("highlight-card", { items: items, onAddItem: handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-empty", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }));
            },
        },
    ];
    if (chatVisible) {
        baseTabs.push({
            name: 'chat',
            label: 'Chat',
            content: () => h("live-video-chat", { videoId: videoId }),
        });
    }
    return baseTabs;
};

const liveShopMobileCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live{display:flex;flex-direction:column;gap:32px}.live-shop-in-live .live-video-player{height:229px;border-radius:8px;overflow:hidden}.live-shop-in-live-options .in-live-custom-style .custom-card-content{width:100%}.live-shop-in-live-options .in-live-custom-style-empty{padding:40px;border:1px solid var(--color-primary);border-radius:8px}.live-shop-in-live-options .custom-card-content .live-video-chat{height:calc(100vh - 386px);border-radius:8px;overflow:hidden}";

const LiveShopMobile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickAdd = createEvent(this, "on-click-add", 7);
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                liveShopData: this.liveShopData,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
    }
    render() {
        return (h("div", { key: '528b7782f3fc5040d256fac4299312951aa7e5c1', class: "live-shop-in-live" }, h("div", { key: '7820bb481374988eb8de510c4669eb93ad2e406f', class: "live-shop-in-live-player" }, h("live-video-player", { key: '11970b8e9cfaa389ee865dc040c57781d5d9ea26', videoId: this.videoId, autoPlay: true })), h("div", { key: '4bc610f7be52f321e8644f498044cd33a40e39db', class: "live-shop-in-live-options" }, h("custom-card", { key: 'b878361726fb04c08624c3936cfd2d497251c628', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, h("tab-selector", { key: 'e51ec56e35e9c0b38e821ff5067dfa5c17e0c7c2', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
    }
};
LiveShopMobile.style = liveShopMobileCss;

export { LiveShopMobile as live_shop_mobile };

//# sourceMappingURL=live-shop-mobile.entry.js.map