import type { Components, JSX } from "../types/components";

interface TabSelector extends Components.TabSelector, HTMLElement {}
export const TabSelector: {
    prototype: TabSelector;
    new (): TabSelector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
