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
import { BasePrice, PaymentOption } from "./components/ui/product-price/product-price.type";
export { IInputSelectDataEvent, IProductCard, ISelectVariation } from "./components/ui/product-card/product-card.type";
export { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from "./components/buy-together/buy-together.type";
export { IFrontSelectOption } from "./components/ui/front-select/front-select.type";
export { BasePrice, PaymentOption } from "./components/ui/product-price/product-price.type";
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
    interface CashbackCredit {
        "customer_id": number;
        "product": Record<string, any>;
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
        "basePrice": BasePrice;
        "inline": boolean;
        "paymentOptions"?: PaymentOption[];
        "product": IProductCard;
    }
    interface ProductPrice {
        "basePrice": BasePrice;
        "paymentOptions"?: PaymentOption[];
    }
    interface ProductPriceBillet {
        "price": number;
        "priceCompare"?: number;
    }
    interface ProductPriceCreditCard {
        "hasInterest": boolean;
        "parcelPrice": number;
        "parcels": number;
        "price": number;
        "priceCompare"?: number;
    }
    interface ProductPricePix {
        "price": number;
        "priceCompare"?: number;
    }
    interface ProductPriceSimple {
        "price": number;
        "priceCompare"?: number;
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
    interface HTMLCashbackCreditElement extends Components.CashbackCredit, HTMLStencilElement {
    }
    var HTMLCashbackCreditElement: {
        prototype: HTMLCashbackCreditElement;
        new (): HTMLCashbackCreditElement;
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
    interface HTMLProductPriceElement extends Components.ProductPrice, HTMLStencilElement {
    }
    var HTMLProductPriceElement: {
        prototype: HTMLProductPriceElement;
        new (): HTMLProductPriceElement;
    };
    interface HTMLProductPriceBilletElement extends Components.ProductPriceBillet, HTMLStencilElement {
    }
    var HTMLProductPriceBilletElement: {
        prototype: HTMLProductPriceBilletElement;
        new (): HTMLProductPriceBilletElement;
    };
    interface HTMLProductPriceCreditCardElement extends Components.ProductPriceCreditCard, HTMLStencilElement {
    }
    var HTMLProductPriceCreditCardElement: {
        prototype: HTMLProductPriceCreditCardElement;
        new (): HTMLProductPriceCreditCardElement;
    };
    interface HTMLProductPricePixElement extends Components.ProductPricePix, HTMLStencilElement {
    }
    var HTMLProductPricePixElement: {
        prototype: HTMLProductPricePixElement;
        new (): HTMLProductPricePixElement;
    };
    interface HTMLProductPriceSimpleElement extends Components.ProductPriceSimple, HTMLStencilElement {
    }
    var HTMLProductPriceSimpleElement: {
        prototype: HTMLProductPriceSimpleElement;
        new (): HTMLProductPriceSimpleElement;
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
        "cashback-credit": HTMLCashbackCreditElement;
        "front-countdown": HTMLFrontCountdownElement;
        "front-image": HTMLFrontImageElement;
        "front-select": HTMLFrontSelectElement;
        "launch-countdown": HTMLLaunchCountdownElement;
        "product-card": HTMLProductCardElement;
        "product-price": HTMLProductPriceElement;
        "product-price-billet": HTMLProductPriceBilletElement;
        "product-price-credit-card": HTMLProductPriceCreditCardElement;
        "product-price-pix": HTMLProductPricePixElement;
        "product-price-simple": HTMLProductPriceSimpleElement;
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
    interface CashbackCredit {
        "customer_id"?: number;
        "product"?: Record<string, any>;
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
        "basePrice"?: BasePrice;
        "inline"?: boolean;
        "paymentOptions"?: PaymentOption[];
        "product"?: IProductCard;
    }
    interface ProductPrice {
        "basePrice"?: BasePrice;
        "paymentOptions"?: PaymentOption[];
    }
    interface ProductPriceBillet {
        "price"?: number;
        "priceCompare"?: number;
    }
    interface ProductPriceCreditCard {
        "hasInterest"?: boolean;
        "parcelPrice"?: number;
        "parcels"?: number;
        "price"?: number;
        "priceCompare"?: number;
    }
    interface ProductPricePix {
        "price"?: number;
        "priceCompare"?: number;
    }
    interface ProductPriceSimple {
        "price"?: number;
        "priceCompare"?: number;
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
        "cashback-credit": CashbackCredit;
        "front-countdown": FrontCountdown;
        "front-image": FrontImage;
        "front-select": FrontSelect;
        "launch-countdown": LaunchCountdown;
        "product-card": ProductCard;
        "product-price": ProductPrice;
        "product-price-billet": ProductPriceBillet;
        "product-price-credit-card": ProductPriceCreditCard;
        "product-price-pix": ProductPricePix;
        "product-price-simple": ProductPriceSimple;
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
            "cashback-credit": LocalJSX.CashbackCredit & JSXBase.HTMLAttributes<HTMLCashbackCreditElement>;
            "front-countdown": LocalJSX.FrontCountdown & JSXBase.HTMLAttributes<HTMLFrontCountdownElement>;
            "front-image": LocalJSX.FrontImage & JSXBase.HTMLAttributes<HTMLFrontImageElement>;
            "front-select": LocalJSX.FrontSelect & JSXBase.HTMLAttributes<HTMLFrontSelectElement>;
            "launch-countdown": LocalJSX.LaunchCountdown & JSXBase.HTMLAttributes<HTMLLaunchCountdownElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
            "product-price": LocalJSX.ProductPrice & JSXBase.HTMLAttributes<HTMLProductPriceElement>;
            "product-price-billet": LocalJSX.ProductPriceBillet & JSXBase.HTMLAttributes<HTMLProductPriceBilletElement>;
            "product-price-credit-card": LocalJSX.ProductPriceCreditCard & JSXBase.HTMLAttributes<HTMLProductPriceCreditCardElement>;
            "product-price-pix": LocalJSX.ProductPricePix & JSXBase.HTMLAttributes<HTMLProductPricePixElement>;
            "product-price-simple": LocalJSX.ProductPriceSimple & JSXBase.HTMLAttributes<HTMLProductPriceSimpleElement>;
            "showcase-related": LocalJSX.ShowcaseRelated & JSXBase.HTMLAttributes<HTMLShowcaseRelatedElement>;
            "variation-selector": LocalJSX.VariationSelector & JSXBase.HTMLAttributes<HTMLVariationSelectorElement>;
        }
    }
}
