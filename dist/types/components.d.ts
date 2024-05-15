/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { IInputSelectDataEvent, IProductCard, ISelectVariation } from "./components/ui/product-card/product-card.type";
import { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
import { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export { IInputSelectDataEvent, IProductCard, ISelectVariation } from "./components/ui/product-card/product-card.type";
export { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
export { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export namespace Components {
    interface BuyTogether {
        "getBuyTogetherData": () => Promise<IBuyTogetherComponentData>;
        "productId": number;
        "showcaseMode": boolean;
        "variationId": number;
    }
    interface FrontCountdown {
        "endDate": string;
        "startDate": string;
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
        "dataCountdownTitle": string;
        "dataDescription": string;
        "dataInitialDate": string;
        "dataTargetDate": string;
        "productId": string;
        "variationId": string;
    }
    interface ProductCard {
        "inline": boolean;
        "product": IProductCard;
    }
    interface ShowcaseRelated {
        "buttonLabel": string;
        "buyTogetherProductIds": string;
        "load": () => Promise<void>;
        "productsPerPage": number;
        "showArrows": boolean;
        "showcaseTitle": string;
    }
    interface VariationSelector {
        "productId": number;
        "showcaseMode": boolean;
        "variations": ISelectVariation[];
    }
}
export interface BuyTogetherCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBuyTogetherElement;
}
export interface FrontCountdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFrontCountdownElement;
}
export interface LaunchCountdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLaunchCountdownElement;
}
export interface ShowcaseRelatedCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLShowcaseRelatedElement;
}
export interface VariationSelectorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLVariationSelectorElement;
}
declare global {
    interface HTMLBuyTogetherElementEventMap {
        "on-buy-together-add-cart": IProductCard[];
        "loadBuyTogehter": {
    status: EnumBuyTogetherOnLoadStatus;
    data: IBuyTogetherComponentData | null;
  };
    }
    interface HTMLBuyTogetherElement extends Components.BuyTogether, HTMLStencilElement {
        addEventListener<K extends keyof HTMLBuyTogetherElementEventMap>(type: K, listener: (this: HTMLBuyTogetherElement, ev: BuyTogetherCustomEvent<HTMLBuyTogetherElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLBuyTogetherElementEventMap>(type: K, listener: (this: HTMLBuyTogetherElement, ev: BuyTogetherCustomEvent<HTMLBuyTogetherElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLBuyTogetherElement: {
        prototype: HTMLBuyTogetherElement;
        new (): HTMLBuyTogetherElement;
    };
    interface HTMLFrontCountdownElementEventMap {
        "countdownFinished": any;
    }
    interface HTMLFrontCountdownElement extends Components.FrontCountdown, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFrontCountdownElementEventMap>(type: K, listener: (this: HTMLFrontCountdownElement, ev: FrontCountdownCustomEvent<HTMLFrontCountdownElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFrontCountdownElementEventMap>(type: K, listener: (this: HTMLFrontCountdownElement, ev: FrontCountdownCustomEvent<HTMLFrontCountdownElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFrontCountdownElement: {
        prototype: HTMLFrontCountdownElement;
        new (): HTMLFrontCountdownElement;
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
    interface HTMLLaunchCountdownElementEventMap {
        "countdownLoaded": { releaseDateActive: boolean };
    }
    interface HTMLLaunchCountdownElement extends Components.LaunchCountdown, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLaunchCountdownElementEventMap>(type: K, listener: (this: HTMLLaunchCountdownElement, ev: LaunchCountdownCustomEvent<HTMLLaunchCountdownElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLaunchCountdownElementEventMap>(type: K, listener: (this: HTMLLaunchCountdownElement, ev: LaunchCountdownCustomEvent<HTMLLaunchCountdownElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
    interface HTMLShowcaseRelatedElementEventMap {
        "clickBuyButton": any;
    }
    interface HTMLShowcaseRelatedElement extends Components.ShowcaseRelated, HTMLStencilElement {
        addEventListener<K extends keyof HTMLShowcaseRelatedElementEventMap>(type: K, listener: (this: HTMLShowcaseRelatedElement, ev: ShowcaseRelatedCustomEvent<HTMLShowcaseRelatedElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLShowcaseRelatedElementEventMap>(type: K, listener: (this: HTMLShowcaseRelatedElement, ev: ShowcaseRelatedCustomEvent<HTMLShowcaseRelatedElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLShowcaseRelatedElement: {
        prototype: HTMLShowcaseRelatedElement;
        new (): HTMLShowcaseRelatedElement;
    };
    interface HTMLVariationSelectorElementEventMap {
        "inputSelect": IInputSelectDataEvent;
    }
    interface HTMLVariationSelectorElement extends Components.VariationSelector, HTMLStencilElement {
        addEventListener<K extends keyof HTMLVariationSelectorElementEventMap>(type: K, listener: (this: HTMLVariationSelectorElement, ev: VariationSelectorCustomEvent<HTMLVariationSelectorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLVariationSelectorElementEventMap>(type: K, listener: (this: HTMLVariationSelectorElement, ev: VariationSelectorCustomEvent<HTMLVariationSelectorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLVariationSelectorElement: {
        prototype: HTMLVariationSelectorElement;
        new (): HTMLVariationSelectorElement;
    };
    interface HTMLElementTagNameMap {
        "buy-together": HTMLBuyTogetherElement;
        "front-countdown": HTMLFrontCountdownElement;
        "front-image": HTMLFrontImageElement;
        "front-select": HTMLFrontSelectElement;
        "launch-countdown": HTMLLaunchCountdownElement;
        "product-card": HTMLProductCardElement;
        "showcase-related": HTMLShowcaseRelatedElement;
        "variation-selector": HTMLVariationSelectorElement;
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
        "showcaseMode"?: boolean;
        "variationId"?: number;
    }
    interface FrontCountdown {
        "endDate"?: string;
        "onCountdownFinished"?: (event: FrontCountdownCustomEvent<any>) => void;
        "startDate"?: string;
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
        "dataCountdownTitle"?: string;
        "dataDescription"?: string;
        "dataInitialDate"?: string;
        "dataTargetDate"?: string;
        "onCountdownLoaded"?: (event: LaunchCountdownCustomEvent<{ releaseDateActive: boolean }>) => void;
        "productId"?: string;
        "variationId"?: string;
    }
    interface ProductCard {
        "inline"?: boolean;
        "product"?: IProductCard;
    }
    interface ShowcaseRelated {
        "buttonLabel"?: string;
        "buyTogetherProductIds"?: string;
        "onClickBuyButton"?: (event: ShowcaseRelatedCustomEvent<any>) => void;
        "productsPerPage"?: number;
        "showArrows"?: boolean;
        "showcaseTitle"?: string;
    }
    interface VariationSelector {
        "onInputSelect"?: (event: VariationSelectorCustomEvent<IInputSelectDataEvent>) => void;
        "productId"?: number;
        "showcaseMode"?: boolean;
        "variations"?: ISelectVariation[];
    }
    interface IntrinsicElements {
        "buy-together": BuyTogether;
        "front-countdown": FrontCountdown;
        "front-image": FrontImage;
        "front-select": FrontSelect;
        "launch-countdown": LaunchCountdown;
        "product-card": ProductCard;
        "showcase-related": ShowcaseRelated;
        "variation-selector": VariationSelector;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buy-together": LocalJSX.BuyTogether & JSXBase.HTMLAttributes<HTMLBuyTogetherElement>;
            "front-countdown": LocalJSX.FrontCountdown & JSXBase.HTMLAttributes<HTMLFrontCountdownElement>;
            "front-image": LocalJSX.FrontImage & JSXBase.HTMLAttributes<HTMLFrontImageElement>;
            "front-select": LocalJSX.FrontSelect & JSXBase.HTMLAttributes<HTMLFrontSelectElement>;
            "launch-countdown": LocalJSX.LaunchCountdown & JSXBase.HTMLAttributes<HTMLLaunchCountdownElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
            "showcase-related": LocalJSX.ShowcaseRelated & JSXBase.HTMLAttributes<HTMLShowcaseRelatedElement>;
            "variation-selector": LocalJSX.VariationSelector & JSXBase.HTMLAttributes<HTMLVariationSelectorElement>;
        }
    }
}