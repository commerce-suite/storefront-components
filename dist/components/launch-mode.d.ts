import type { Components, JSX } from "../types/components";

interface LaunchMode extends Components.LaunchMode, HTMLElement {}
export const LaunchMode: {
    prototype: LaunchMode;
    new (): LaunchMode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
