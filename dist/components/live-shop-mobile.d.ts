import type { Components, JSX } from "../types/components";

interface LiveShopMobile extends Components.LiveShopMobile, HTMLElement {}
export const LiveShopMobile: {
    prototype: LiveShopMobile;
    new (): LiveShopMobile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
