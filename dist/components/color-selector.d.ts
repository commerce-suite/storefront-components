import type { Components, JSX } from "../types/components";

interface ColorSelector extends Components.ColorSelector, HTMLElement {}
export const ColorSelector: {
    prototype: ColorSelector;
    new (): ColorSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
