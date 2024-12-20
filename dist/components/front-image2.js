import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getClassByProps } from './utils.js';

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:contain;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
const FrontImageStyle0 = frontImageCss;

const FrontImage = /*@__PURE__*/ proxyCustomElement(class FrontImage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.imageSrc = undefined;
        this.textAlt = undefined;
        this.figCaption = undefined;
        this.isSrcLoading = true;
    }
    getImageClassByProps() {
        const classProps = {
            '-is-loading': this.isSrcLoading,
        };
        return `image-container ${getClassByProps(classProps)}`;
    }
    // private onSrcLoadError() {
    //   this.imageSrc = getAssetPath('./assets/images/image-fallback.png');
    //   setTimeout(() => {
    //     this.isSrcLoading = false;
    //   }, 500);
    // }
    onSrcLoadFinish() {
        setTimeout(() => {
            this.isSrcLoading = false;
        }, 500);
    }
    changeImageSrc() {
        this.isSrcLoading = true;
    }
    render() {
        return (h(Host, { key: 'a86cbee4ce7b83af6db0f609c9d50339332ab639' }, h("figure", { key: '1d7ae12ec0cb14648c1bba089f999729338de4b0', class: this.getImageClassByProps() }, h("img", { key: 'fdf4e6f59d6b3014871e74916a8c087d1911cddf', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: '16b68f05ef81fb5c2d76ffef7a236240e8ecc567' }, this.figCaption))));
    }
    static get watchers() { return {
        "imageSrc": ["changeImageSrc"]
    }; }
    static get style() { return FrontImageStyle0; }
}, [0, "front-image", {
        "imageSrc": [1025, "image-src"],
        "textAlt": [1025, "text-alt"],
        "figCaption": [1025, "fig-caption"],
        "isSrcLoading": [32]
    }, undefined, {
        "imageSrc": ["changeImageSrc"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["front-image"];
    components.forEach(tagName => { switch (tagName) {
        case "front-image":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FrontImage);
            }
            break;
    } });
}

export { FrontImage as F, defineCustomElement as d };

//# sourceMappingURL=front-image2.js.map