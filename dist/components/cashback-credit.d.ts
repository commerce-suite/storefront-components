import type { Components, JSX } from "../types/components";

interface CashbackCredit extends Components.CashbackCredit, HTMLElement {}
export const CashbackCredit: {
    prototype: CashbackCredit;
    new (): CashbackCredit;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
