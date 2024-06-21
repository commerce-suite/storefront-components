import type { Components, JSX } from "../types/components";

interface LaunchCountdown extends Components.LaunchCountdown, HTMLElement {}
export const LaunchCountdown: {
    prototype: LaunchCountdown;
    new (): LaunchCountdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
