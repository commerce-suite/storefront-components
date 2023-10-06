/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
import { IInputSelectDataEvent, IProductCard } from "./components/ui/product-card/product-card.type";
export { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export { IInputSelectDataEvent, IProductCard } from "./components/ui/product-card/product-card.type";
export namespace Components {
    interface BuyTogether {
    }
    interface CountdownTracker {
        "dataDescription": string;
        "dataTargetDate": string;
        "dataTrackerTitle": string;
    }
    interface FrontSelect {
        "label": string;
        "optionsList": IFrontSelectOption[];
        "placeholder": IFrontSelectOption;
        "selectId": string;
        "selectName": string;
        "value": any;
    }
    interface ProductCard {
        "inline": boolean;
        "product": IProductCard;
    }
}
export interface CountdownTrackerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCountdownTrackerElement;
}
export interface ProductCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLProductCardElement;
}
declare global {
    interface HTMLBuyTogetherElement extends Components.BuyTogether, HTMLStencilElement {
    }
    var HTMLBuyTogetherElement: {
        prototype: HTMLBuyTogetherElement;
        new (): HTMLBuyTogetherElement;
    };
    interface HTMLCountdownTrackerElement extends Components.CountdownTracker, HTMLStencilElement {
    }
    var HTMLCountdownTrackerElement: {
        prototype: HTMLCountdownTrackerElement;
        new (): HTMLCountdownTrackerElement;
    };
    interface HTMLFrontSelectElement extends Components.FrontSelect, HTMLStencilElement {
    }
    var HTMLFrontSelectElement: {
        prototype: HTMLFrontSelectElement;
        new (): HTMLFrontSelectElement;
    };
    interface HTMLProductCardElement extends Components.ProductCard, HTMLStencilElement {
    }
    var HTMLProductCardElement: {
        prototype: HTMLProductCardElement;
        new (): HTMLProductCardElement;
    };
    interface HTMLElementTagNameMap {
        "buy-together": HTMLBuyTogetherElement;
        "countdown-tracker": HTMLCountdownTrackerElement;
        "front-select": HTMLFrontSelectElement;
        "product-card": HTMLProductCardElement;
    }
}
declare namespace LocalJSX {
    interface BuyTogether {
    }
    interface CountdownTracker {
        "dataDescription"?: string;
        "dataTargetDate"?: string;
        "dataTrackerTitle"?: string;
        "onCountdownFinished"?: (event: CountdownTrackerCustomEvent<any>) => void;
    }
    interface FrontSelect {
        "label"?: string;
        "optionsList"?: IFrontSelectOption[];
        "placeholder"?: IFrontSelectOption;
        "selectId"?: string;
        "selectName"?: string;
        "value"?: any;
    }
    interface ProductCard {
        "inline"?: boolean;
        "onInputSelect"?: (event: ProductCardCustomEvent<IInputSelectDataEvent>) => void;
        "product"?: IProductCard;
    }
    interface IntrinsicElements {
        "buy-together": BuyTogether;
        "countdown-tracker": CountdownTracker;
        "front-select": FrontSelect;
        "product-card": ProductCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buy-together": LocalJSX.BuyTogether & JSXBase.HTMLAttributes<HTMLBuyTogetherElement>;
            "countdown-tracker": LocalJSX.CountdownTracker & JSXBase.HTMLAttributes<HTMLCountdownTrackerElement>;
            "front-select": LocalJSX.FrontSelect & JSXBase.HTMLAttributes<HTMLFrontSelectElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
        }
    }
}
