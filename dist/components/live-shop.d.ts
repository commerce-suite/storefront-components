import type { Components, JSX } from "../types/components";

interface LiveShop extends Components.LiveShop, HTMLElement {}
export const LiveShop: {
    prototype: LiveShop;
    new (): LiveShop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
