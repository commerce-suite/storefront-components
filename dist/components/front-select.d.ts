import type { Components, JSX } from "../types/components";

interface FrontSelect extends Components.FrontSelect, HTMLElement {}
export const FrontSelect: {
    prototype: FrontSelect;
    new (): FrontSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
