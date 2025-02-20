import type { Components, JSX } from "../types/components";

interface ProductPriceCreditCard extends Components.ProductPriceCreditCard, HTMLElement {}
export const ProductPriceCreditCard: {
    prototype: ProductPriceCreditCard;
    new (): ProductPriceCreditCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
