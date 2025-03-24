import type { Components, JSX } from "../types/components";

interface GoogleRecaptcha extends Components.GoogleRecaptcha, HTMLElement {}
export const GoogleRecaptcha: {
    prototype: GoogleRecaptcha;
    new (): GoogleRecaptcha;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
