import type { Components, JSX } from "../types/components";

interface FrontCountdown extends Components.FrontCountdown, HTMLElement {}
export const FrontCountdown: {
    prototype: FrontCountdown;
    new (): FrontCountdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
