import type { Components, JSX } from "../types/components";

interface ProductCard extends Components.ProductCard, HTMLElement {}
export const ProductCard: {
    prototype: ProductCard;
    new (): ProductCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
