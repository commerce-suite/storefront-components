/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BuyTogether {
    }
    interface ProductCard {
    }
}
declare global {
    interface HTMLBuyTogetherElement extends Components.BuyTogether, HTMLStencilElement {
    }
    var HTMLBuyTogetherElement: {
        prototype: HTMLBuyTogetherElement;
        new (): HTMLBuyTogetherElement;
    };
    interface HTMLProductCardElement extends Components.ProductCard, HTMLStencilElement {
    }
    var HTMLProductCardElement: {
        prototype: HTMLProductCardElement;
        new (): HTMLProductCardElement;
    };
    interface HTMLElementTagNameMap {
        "buy-together": HTMLBuyTogetherElement;
        "product-card": HTMLProductCardElement;
    }
}
declare namespace LocalJSX {
    interface BuyTogether {
    }
    interface ProductCard {
    }
    interface IntrinsicElements {
        "buy-together": BuyTogether;
        "product-card": ProductCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buy-together": LocalJSX.BuyTogether & JSXBase.HTMLAttributes<HTMLBuyTogetherElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
        }
    }
}
