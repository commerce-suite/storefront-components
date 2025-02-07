import type { Components, JSX } from "../types/components";

interface LiveShopDesktop extends Components.LiveShopDesktop, HTMLElement {}
export const LiveShopDesktop: {
    prototype: LiveShopDesktop;
    new (): LiveShopDesktop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
