import { h } from "@stencil/core";
export const tabs = (videoId, items, handleAddItem, chatVisible) => {
    const baseTabs = [
        {
            name: 'products',
            label: (h("span", null, "Produtos", (items === null || items === void 0 ? void 0 : items.filter(item => item.type === 'product').length) > 0 ? (h("span", { class: "product-count" }, items === null || items === void 0 ? void 0 : items.filter(item => item.type === 'product').length)) : (''))),
            content: () => {
                return (items === null || items === void 0 ? void 0 : items.length) > 0 ? (h("highlight-card", { items: items, onAddItem: handleAddItem })) : (h("custom-card", { customClass: "in-live-custom-style-empty", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }));
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
//# sourceMappingURL=tabs-config.js.map
