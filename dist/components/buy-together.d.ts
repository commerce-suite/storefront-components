import type { Components, JSX } from "../types/components";

interface BuyTogether extends Components.BuyTogether, HTMLElement {}
export const BuyTogether: {
    prototype: BuyTogether;
    new (): BuyTogether;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
