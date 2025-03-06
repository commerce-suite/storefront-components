import type { Components, JSX } from "../types/components";

interface FrontIcon extends Components.FrontIcon, HTMLElement {}
export const FrontIcon: {
    prototype: FrontIcon;
    new (): FrontIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
