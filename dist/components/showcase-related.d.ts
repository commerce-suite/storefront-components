import type { Components, JSX } from "../types/components";

interface ShowcaseRelated extends Components.ShowcaseRelated, HTMLElement {}
export const ShowcaseRelated: {
    prototype: ShowcaseRelated;
    new (): ShowcaseRelated;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
