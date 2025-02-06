import type { Components, JSX } from "../types/components";

interface CustomCard extends Components.CustomCard, HTMLElement {}
export const CustomCard: {
    prototype: CustomCard;
    new (): CustomCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
