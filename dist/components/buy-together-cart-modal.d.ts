import type { Components, JSX } from "../types/components";

interface BuyTogetherCartModal extends Components.BuyTogetherCartModal, HTMLElement {}
export const BuyTogetherCartModal: {
    prototype: BuyTogetherCartModal;
    new (): BuyTogetherCartModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
