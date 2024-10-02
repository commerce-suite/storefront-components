/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IInputSelectDataEvent, IProductCard, ISelectVariation } from "./components/ui/product-card/product-card.type";
import { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
import { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
import { IHighlightCardItem } from "./components/ui/highlight-card/highlight-card.type";
export { IInputSelectDataEvent, IProductCard, ISelectVariation } from "./components/ui/product-card/product-card.type";
export { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
export { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export { IHighlightCardItem } from "./components/ui/highlight-card/highlight-card.type";
export namespace Components {
    interface BuyTogether {
        "buyButtonText": string;
        "getBuyTogetherData": () => Promise<IBuyTogetherComponentData>;
        "productId": number;
        "promotionTitle": string;
        "showcaseMode"?: boolean;
        "variationId": number;
    }
    interface BuyTogetherCartModal {
        "buyButtonText"?: string;
        "containerTitle": string;
        "productId": number;
        "promotionTitle"?: string;
        "variationId"?: number;
    }
    interface CustomCard {
        "cardDescription": string;
        "cardTitle": string;
        "customClass": string;
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
    interface HighlightCard {
        "items": IHighlightCardItem[];
    }
    interface InfoModal {
        "hideButtons": boolean;
        "modalDescription": string;
        "modalTitle": string;
        "position": 'bottom' | 'center' | 'top';
        "primaryButtonText": string;
        "secondaryButtonText": string;
    }
    interface LaunchCountdown {
        "dataCountdownTitle": string;
        "dataDescription": string;
        "dataInitialDate": string;
        "dataTargetDate": string;
        "productId": string;
        "variationId": string;
    }
    interface LiveVideoChat {
        "videoId": string;
    }
    interface LiveVideoPlayer {
        "autoPlay": boolean;
        "videoId": string;
    }
    interface MiniPlayer {
        "autoPlay": boolean;
        "buttonText": string;
        "mainTitle": string;
        "videoId": string;
    }
    interface ProductCard {
        "customClass": string;
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
export interface BuyTogetherCartModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBuyTogetherCartModalElement;
}
export interface CustomCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCustomCardElement;
}
export interface FrontCountdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFrontCountdownElement;
}
export interface HighlightCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHighlightCardElement;
}
export interface InfoModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInfoModalElement;
}
export interface LaunchCountdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLaunchCountdownElement;
}
export interface LiveVideoChatCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLiveVideoChatElement;
}
export interface LiveVideoPlayerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLiveVideoPlayerElement;
}
export interface MiniPlayerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMiniPlayerElement;
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
        "on-buy-together-add-cart": { showcaseMode: boolean; productsAdded: IProductCard[] };
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
    interface HTMLBuyTogetherCartModalElementEventMap {
        "on-finish-buy-button": void;
        "on-continue-buy-button": void;
        "componentRendered": void;
    }
    interface HTMLBuyTogetherCartModalElement extends Components.BuyTogetherCartModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLBuyTogetherCartModalElementEventMap>(type: K, listener: (this: HTMLBuyTogetherCartModalElement, ev: BuyTogetherCartModalCustomEvent<HTMLBuyTogetherCartModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLBuyTogetherCartModalElementEventMap>(type: K, listener: (this: HTMLBuyTogetherCartModalElement, ev: BuyTogetherCartModalCustomEvent<HTMLBuyTogetherCartModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLBuyTogetherCartModalElement: {
        prototype: HTMLBuyTogetherCartModalElement;
        new (): HTMLBuyTogetherCartModalElement;
    };
    interface HTMLCustomCardElementEventMap {
        "componentRendered": void;
    }
    interface HTMLCustomCardElement extends Components.CustomCard, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCustomCardElementEventMap>(type: K, listener: (this: HTMLCustomCardElement, ev: CustomCardCustomEvent<HTMLCustomCardElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCustomCardElementEventMap>(type: K, listener: (this: HTMLCustomCardElement, ev: CustomCardCustomEvent<HTMLCustomCardElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCustomCardElement: {
        prototype: HTMLCustomCardElement;
        new (): HTMLCustomCardElement;
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
    interface HTMLHighlightCardElementEventMap {
        "componentRendered": void;
    }
    interface HTMLHighlightCardElement extends Components.HighlightCard, HTMLStencilElement {
        addEventListener<K extends keyof HTMLHighlightCardElementEventMap>(type: K, listener: (this: HTMLHighlightCardElement, ev: HighlightCardCustomEvent<HTMLHighlightCardElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLHighlightCardElementEventMap>(type: K, listener: (this: HTMLHighlightCardElement, ev: HighlightCardCustomEvent<HTMLHighlightCardElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLHighlightCardElement: {
        prototype: HTMLHighlightCardElement;
        new (): HTMLHighlightCardElement;
    };
    interface HTMLInfoModalElementEventMap {
        "componentRendered": void;
        "on-click-primary-button": void;
        "on-click-secondary-button": void;
    }
    interface HTMLInfoModalElement extends Components.InfoModal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInfoModalElementEventMap>(type: K, listener: (this: HTMLInfoModalElement, ev: InfoModalCustomEvent<HTMLInfoModalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInfoModalElementEventMap>(type: K, listener: (this: HTMLInfoModalElement, ev: InfoModalCustomEvent<HTMLInfoModalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInfoModalElement: {
        prototype: HTMLInfoModalElement;
        new (): HTMLInfoModalElement;
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
    interface HTMLLiveVideoChatElementEventMap {
        "componentRendered": void;
    }
    interface HTMLLiveVideoChatElement extends Components.LiveVideoChat, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLiveVideoChatElementEventMap>(type: K, listener: (this: HTMLLiveVideoChatElement, ev: LiveVideoChatCustomEvent<HTMLLiveVideoChatElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLiveVideoChatElementEventMap>(type: K, listener: (this: HTMLLiveVideoChatElement, ev: LiveVideoChatCustomEvent<HTMLLiveVideoChatElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLLiveVideoChatElement: {
        prototype: HTMLLiveVideoChatElement;
        new (): HTMLLiveVideoChatElement;
    };
    interface HTMLLiveVideoPlayerElementEventMap {
        "componentRendered": void;
    }
    interface HTMLLiveVideoPlayerElement extends Components.LiveVideoPlayer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLLiveVideoPlayerElementEventMap>(type: K, listener: (this: HTMLLiveVideoPlayerElement, ev: LiveVideoPlayerCustomEvent<HTMLLiveVideoPlayerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLLiveVideoPlayerElementEventMap>(type: K, listener: (this: HTMLLiveVideoPlayerElement, ev: LiveVideoPlayerCustomEvent<HTMLLiveVideoPlayerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLLiveVideoPlayerElement: {
        prototype: HTMLLiveVideoPlayerElement;
        new (): HTMLLiveVideoPlayerElement;
    };
    interface HTMLMiniPlayerElementEventMap {
        "componentRendered": void;
        "on-click-button": void;
    }
    interface HTMLMiniPlayerElement extends Components.MiniPlayer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMiniPlayerElementEventMap>(type: K, listener: (this: HTMLMiniPlayerElement, ev: MiniPlayerCustomEvent<HTMLMiniPlayerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMiniPlayerElementEventMap>(type: K, listener: (this: HTMLMiniPlayerElement, ev: MiniPlayerCustomEvent<HTMLMiniPlayerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMiniPlayerElement: {
        prototype: HTMLMiniPlayerElement;
        new (): HTMLMiniPlayerElement;
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
        "buy-together-cart-modal": HTMLBuyTogetherCartModalElement;
        "custom-card": HTMLCustomCardElement;
        "front-countdown": HTMLFrontCountdownElement;
        "front-image": HTMLFrontImageElement;
        "front-select": HTMLFrontSelectElement;
        "highlight-card": HTMLHighlightCardElement;
        "info-modal": HTMLInfoModalElement;
        "launch-countdown": HTMLLaunchCountdownElement;
        "live-video-chat": HTMLLiveVideoChatElement;
        "live-video-player": HTMLLiveVideoPlayerElement;
        "mini-player": HTMLMiniPlayerElement;
        "product-card": HTMLProductCardElement;
        "showcase-related": HTMLShowcaseRelatedElement;
        "variation-selector": HTMLVariationSelectorElement;
    }
}
declare namespace LocalJSX {
    interface BuyTogether {
        "buyButtonText"?: string;
        "onLoadBuyTogehter"?: (event: BuyTogetherCustomEvent<{
    status: EnumBuyTogetherOnLoadStatus;
    data: IBuyTogetherComponentData | null;
  }>) => void;
        "onOn-buy-together-add-cart"?: (event: BuyTogetherCustomEvent<{ showcaseMode: boolean; productsAdded: IProductCard[] }>) => void;
        "productId"?: number;
        "promotionTitle"?: string;
        "showcaseMode"?: boolean;
        "variationId"?: number;
    }
    interface BuyTogetherCartModal {
        "buyButtonText"?: string;
        "containerTitle"?: string;
        "onComponentRendered"?: (event: BuyTogetherCartModalCustomEvent<void>) => void;
        "onOn-continue-buy-button"?: (event: BuyTogetherCartModalCustomEvent<void>) => void;
        "onOn-finish-buy-button"?: (event: BuyTogetherCartModalCustomEvent<void>) => void;
        "productId"?: number;
        "promotionTitle"?: string;
        "variationId"?: number;
    }
    interface CustomCard {
        "cardDescription"?: string;
        "cardTitle"?: string;
        "customClass"?: string;
        "onComponentRendered"?: (event: CustomCardCustomEvent<void>) => void;
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
    interface HighlightCard {
        "items"?: IHighlightCardItem[];
        "onComponentRendered"?: (event: HighlightCardCustomEvent<void>) => void;
    }
    interface InfoModal {
        "hideButtons"?: boolean;
        "modalDescription"?: string;
        "modalTitle"?: string;
        "onComponentRendered"?: (event: InfoModalCustomEvent<void>) => void;
        "onOn-click-primary-button"?: (event: InfoModalCustomEvent<void>) => void;
        "onOn-click-secondary-button"?: (event: InfoModalCustomEvent<void>) => void;
        "position"?: 'bottom' | 'center' | 'top';
        "primaryButtonText"?: string;
        "secondaryButtonText"?: string;
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
    interface LiveVideoChat {
        "onComponentRendered"?: (event: LiveVideoChatCustomEvent<void>) => void;
        "videoId"?: string;
    }
    interface LiveVideoPlayer {
        "autoPlay"?: boolean;
        "onComponentRendered"?: (event: LiveVideoPlayerCustomEvent<void>) => void;
        "videoId"?: string;
    }
    interface MiniPlayer {
        "autoPlay"?: boolean;
        "buttonText"?: string;
        "mainTitle"?: string;
        "onComponentRendered"?: (event: MiniPlayerCustomEvent<void>) => void;
        "onOn-click-button"?: (event: MiniPlayerCustomEvent<void>) => void;
        "videoId"?: string;
    }
    interface ProductCard {
        "customClass"?: string;
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
        "buy-together-cart-modal": BuyTogetherCartModal;
        "custom-card": CustomCard;
        "front-countdown": FrontCountdown;
        "front-image": FrontImage;
        "front-select": FrontSelect;
        "highlight-card": HighlightCard;
        "info-modal": InfoModal;
        "launch-countdown": LaunchCountdown;
        "live-video-chat": LiveVideoChat;
        "live-video-player": LiveVideoPlayer;
        "mini-player": MiniPlayer;
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
            "buy-together-cart-modal": LocalJSX.BuyTogetherCartModal & JSXBase.HTMLAttributes<HTMLBuyTogetherCartModalElement>;
            "custom-card": LocalJSX.CustomCard & JSXBase.HTMLAttributes<HTMLCustomCardElement>;
            "front-countdown": LocalJSX.FrontCountdown & JSXBase.HTMLAttributes<HTMLFrontCountdownElement>;
            "front-image": LocalJSX.FrontImage & JSXBase.HTMLAttributes<HTMLFrontImageElement>;
            "front-select": LocalJSX.FrontSelect & JSXBase.HTMLAttributes<HTMLFrontSelectElement>;
            "highlight-card": LocalJSX.HighlightCard & JSXBase.HTMLAttributes<HTMLHighlightCardElement>;
            "info-modal": LocalJSX.InfoModal & JSXBase.HTMLAttributes<HTMLInfoModalElement>;
            "launch-countdown": LocalJSX.LaunchCountdown & JSXBase.HTMLAttributes<HTMLLaunchCountdownElement>;
            "live-video-chat": LocalJSX.LiveVideoChat & JSXBase.HTMLAttributes<HTMLLiveVideoChatElement>;
            "live-video-player": LocalJSX.LiveVideoPlayer & JSXBase.HTMLAttributes<HTMLLiveVideoPlayerElement>;
            "mini-player": LocalJSX.MiniPlayer & JSXBase.HTMLAttributes<HTMLMiniPlayerElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
            "showcase-related": LocalJSX.ShowcaseRelated & JSXBase.HTMLAttributes<HTMLShowcaseRelatedElement>;
            "variation-selector": LocalJSX.VariationSelector & JSXBase.HTMLAttributes<HTMLVariationSelectorElement>;
        }
    }
}
