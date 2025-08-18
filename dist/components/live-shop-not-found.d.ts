import type { Components, JSX } from "../types/components";

interface LiveShopNotFound extends Components.LiveShopNotFound, HTMLElement {}
export const LiveShopNotFound: {
    prototype: LiveShopNotFound;
    new (): LiveShopNotFound;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
