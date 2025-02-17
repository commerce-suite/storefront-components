import type { Components, JSX } from "../types/components";

interface MiniPlayer extends Components.MiniPlayer, HTMLElement {}
export const MiniPlayer: {
    prototype: MiniPlayer;
    new (): MiniPlayer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
