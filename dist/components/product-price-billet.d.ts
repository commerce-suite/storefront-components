import type { Components, JSX } from "../types/components";

interface ProductPriceBillet extends Components.ProductPriceBillet, HTMLElement {}
export const ProductPriceBillet: {
    prototype: ProductPriceBillet;
    new (): ProductPriceBillet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
