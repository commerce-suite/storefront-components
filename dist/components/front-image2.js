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
        return (h(Host, { key: 'bc463968dd294e3a8f7aa279622bba5d72fe8ac6' }, h("figure", { key: 'b71f07405b96ae5685f93de92d032aef312eb779', class: this.getImageClassByProps() }, h("img", { key: 'b5a24103e1c560579c53d9a9eb32630c7500d711', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: 'c3a49858f8e2e02c88a344f9f5fcfc73c86bd79a' }, this.figCaption))));
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