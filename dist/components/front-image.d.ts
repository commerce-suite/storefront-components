import type { Components, JSX } from "../types/components";

interface FrontImage extends Components.FrontImage, HTMLElement {}
export const FrontImage: {
    prototype: FrontImage;
    new (): FrontImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
