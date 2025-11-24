import type { Components, JSX } from "../types/components";

interface ProductPricePix extends Components.ProductPricePix, HTMLElement {}
export const ProductPricePix: {
    prototype: ProductPricePix;
    new (): ProductPricePix;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
