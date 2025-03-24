import type { Components, JSX } from "../types/components";

interface MaintenanceMode extends Components.MaintenanceMode, HTMLElement {}
export const MaintenanceMode: {
    prototype: MaintenanceMode;
    new (): MaintenanceMode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
