import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

function currencyFormat(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
function getClassByProps(classByProps) {
    return Object.keys(classByProps)
        .filter(key => classByProps[key])
        .map(key => key)
        .join(' ');
}

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:cover;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
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
        return (h(Host, { key: '1cfacd61fb116ba438e7fe4531a0d53210c0bac1' }, h("figure", { key: '75816e0e1a214bd2d537a5e083a08446aae0770f', class: this.getImageClassByProps() }, h("img", { key: '2d6e2131ee8e1fa3f0fbeefa7f5d5cfb6fca1528', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: '16a5033cbaa300d24b70493882d2ef42533ae46a' }, this.figCaption))));
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

export { FrontImage as F, currencyFormat as c, defineCustomElement as d, getClassByProps as g };

//# sourceMappingURL=front-image2.js.map