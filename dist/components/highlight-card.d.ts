import type { Components, JSX } from "../types/components";

interface HighlightCard extends Components.HighlightCard, HTMLElement {}
export const HighlightCard: {
    prototype: HighlightCard;
    new (): HighlightCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
