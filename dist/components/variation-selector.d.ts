import type { Components, JSX } from "../types/components";

interface VariationSelector extends Components.VariationSelector, HTMLElement {}
export const VariationSelector: {
    prototype: VariationSelector;
    new (): VariationSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
