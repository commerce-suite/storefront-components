import type { Components, JSX } from "../types/components";

interface LiveVideoChat extends Components.LiveVideoChat, HTMLElement {}
export const LiveVideoChat: {
    prototype: LiveVideoChat;
    new (): LiveVideoChat;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
