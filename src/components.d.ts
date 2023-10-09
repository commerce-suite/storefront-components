/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IInputSelectDataEvent, IProductCard } from "./components/ui/product-card/product-card.type";
import { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
import { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export { IInputSelectDataEvent, IProductCard } from "./components/ui/product-card/product-card.type";
export { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
export { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export namespace Components {
    interface BuyTogether {
        "getBuyTogetherData": () => Promise<IBuyTogetherComponentData>;
        "productId": number;
        "variationId": number;
    }
    interface CountdownTracker {
        "dataDescription": string;
        "dataInitialDate": string;
        "dataTargetDate": string;
        "dataTrackerTitle": string;
    }
    interface FrontImage {
        "figCaption": string;
        "imageSrc": string;
        "textAlt": string;
    }
    interface FrontSelect {
        "label": string;
        "optionsList": IFrontSelectOption[];
        "placeholder": IFrontSelectOption;
        "selectId": string;
        "selectName": string;
        "value": any;
    }
    interface LaunchCountdown {
        "backgroundColor"?: string;
        "dataCountdownTitle": string;
        "dataDescription": string;
        "dataInitialDate": string;
        "dataTargetDate": string;
        "textColor"?: string;
    }
    interface ProductCard {
        "inline": boolean;
        "product": IProductCard;
    }
}
export interface BuyTogetherCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBuyTogetherElement;
}
export interface CountdownTrackerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCountdownTrackerElement;
}
export interface LaunchCountdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLaunchCountdownElement;
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
    interface HTMLFrontImageElement extends Components.FrontImage, HTMLStencilElement {
    }
    var HTMLFrontImageElement: {
        prototype: HTMLFrontImageElement;
        new (): HTMLFrontImageElement;
    };
    interface HTMLFrontSelectElement extends Components.FrontSelect, HTMLStencilElement {
    }
    var HTMLFrontSelectElement: {
        prototype: HTMLFrontSelectElement;
        new (): HTMLFrontSelectElement;
    };
    interface HTMLLaunchCountdownElement extends Components.LaunchCountdown, HTMLStencilElement {
    }
    var HTMLLaunchCountdownElement: {
        prototype: HTMLLaunchCountdownElement;
        new (): HTMLLaunchCountdownElement;
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
        "front-image": HTMLFrontImageElement;
        "front-select": HTMLFrontSelectElement;
        "launch-countdown": HTMLLaunchCountdownElement;
        "product-card": HTMLProductCardElement;
    }
}
declare namespace LocalJSX {
    interface BuyTogether {
        "onLoadBuyTogehter"?: (event: BuyTogetherCustomEvent<{
    status: EnumBuyTogetherOnLoadStatus;
    data: IBuyTogetherComponentData | null;
  }>) => void;
        "onOn-buy-together-add-cart"?: (event: BuyTogetherCustomEvent<IProductCard[]>) => void;
        "productId"?: number;
        "variationId"?: number;
    }
    interface CountdownTracker {
        "dataDescription"?: string;
        "dataInitialDate"?: string;
        "dataTargetDate"?: string;
        "dataTrackerTitle"?: string;
        "onCountdownFinished"?: (event: CountdownTrackerCustomEvent<any>) => void;
    }
    interface FrontImage {
        "figCaption"?: string;
        "imageSrc"?: string;
        "textAlt"?: string;
    }
    interface FrontSelect {
        "label"?: string;
        "optionsList"?: IFrontSelectOption[];
        "placeholder"?: IFrontSelectOption;
        "selectId"?: string;
        "selectName"?: string;
        "value"?: any;
    }
    interface LaunchCountdown {
        "backgroundColor"?: string;
        "dataCountdownTitle"?: string;
        "dataDescription"?: string;
        "dataInitialDate"?: string;
        "dataTargetDate"?: string;
        "onCountdownFinished"?: (event: LaunchCountdownCustomEvent<any>) => void;
        "textColor"?: string;
    }
    interface ProductCard {
        "inline"?: boolean;
        "onInputSelect"?: (event: ProductCardCustomEvent<IInputSelectDataEvent>) => void;
        "product"?: IProductCard;
    }
    interface IntrinsicElements {
        "buy-together": BuyTogether;
        "countdown-tracker": CountdownTracker;
        "front-image": FrontImage;
        "front-select": FrontSelect;
        "launch-countdown": LaunchCountdown;
        "product-card": ProductCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buy-together": LocalJSX.BuyTogether & JSXBase.HTMLAttributes<HTMLBuyTogetherElement>;
            "countdown-tracker": LocalJSX.CountdownTracker & JSXBase.HTMLAttributes<HTMLCountdownTrackerElement>;
            "front-image": LocalJSX.FrontImage & JSXBase.HTMLAttributes<HTMLFrontImageElement>;
            "front-select": LocalJSX.FrontSelect & JSXBase.HTMLAttributes<HTMLFrontSelectElement>;
            "launch-countdown": LocalJSX.LaunchCountdown & JSXBase.HTMLAttributes<HTMLLaunchCountdownElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
        }
    }
}
