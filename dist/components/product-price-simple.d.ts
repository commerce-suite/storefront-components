import type { Components, JSX } from "../types/components";

interface ProductPriceSimple extends Components.ProductPriceSimple, HTMLElement {}
export const ProductPriceSimple: {
    prototype: ProductPriceSimple;
    new (): ProductPriceSimple;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
