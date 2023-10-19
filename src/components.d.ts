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
    interface ProductCard {
        "inline": boolean;
        "product": IProductCard;
    }
}
export interface BuyTogetherCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBuyTogetherElement;
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
    interface HTMLProductCardElement extends Components.ProductCard, HTMLStencilElement {
    }
    var HTMLProductCardElement: {
        prototype: HTMLProductCardElement;
        new (): HTMLProductCardElement;
    };
    interface HTMLElementTagNameMap {
        "buy-together": HTMLBuyTogetherElement;
        "front-image": HTMLFrontImageElement;
        "front-select": HTMLFrontSelectElement;
        "product-card": HTMLProductCardElement;
    }
}
declare namespace LocalJSX {
    interface BuyTogether {
        "onOn-buy-together-add-cart"?: (event: BuyTogetherCustomEvent<IProductCard[]>) => void;
        "onOnLoad"?: (event: BuyTogetherCustomEvent<{
    status: EnumBuyTogetherOnLoadStatus;
    data: IBuyTogetherComponentData | null;
  }>) => void;
        "productId"?: number;
        "variationId"?: number;
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
    interface ProductCard {
        "inline"?: boolean;
        "onInputSelect"?: (event: ProductCardCustomEvent<IInputSelectDataEvent>) => void;
        "product"?: IProductCard;
    }
    interface IntrinsicElements {
        "buy-together": BuyTogether;
        "front-image": FrontImage;
        "front-select": FrontSelect;
        "product-card": ProductCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buy-together": LocalJSX.BuyTogether & JSXBase.HTMLAttributes<HTMLBuyTogetherElement>;
            "front-image": LocalJSX.FrontImage & JSXBase.HTMLAttributes<HTMLFrontImageElement>;
            "front-select": LocalJSX.FrontSelect & JSXBase.HTMLAttributes<HTMLFrontSelectElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
        }
    }
}
