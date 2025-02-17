import { h } from "@stencil/core";
export const tabs = () => [
    {
        name: 'products',
        label: 'Products',
        content: () => (h("div", null, h("h1", null, "Products"), h("p", null, "Products content"))),
    },
    {
        name: 'chat',
        label: 'Chat',
        content: () => (h("div", null, h("h1", null, "Chat"), h("p", null, "Chat content"))),
    },
];
//# sourceMappingURL=tab-selector.mock.js.map
