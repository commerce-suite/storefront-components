import type { Components, JSX } from "../types/components";

interface InfoModal extends Components.InfoModal, HTMLElement {}
export const InfoModal: {
    prototype: InfoModal;
    new (): InfoModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
