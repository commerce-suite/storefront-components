import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';

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

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative}.image-container img{width:100%;height:100%;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
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
    onSrcLoadError() {
        this.imageSrc = getAssetPath('./assets/images/image-fallback.png');
        setTimeout(() => {
            this.isSrcLoading = false;
        }, 500);
    }
    onSrcLoadFinish() {
        setTimeout(() => {
            this.isSrcLoading = false;
        }, 500);
    }
    changeImageSrc() {
        console.log('this.imageSrc', this.imageSrc);
        this.isSrcLoading = true;
    }
    render() {
        return (h(Host, { key: '3ec6e7d2c2d3892d12ade3a8a1927dcd7acd3e23' }, h("figure", { key: '504d6c93eab3f0937f9c32c68457c5e34798da87', class: this.getImageClassByProps() }, h("img", { key: '3c68fe2c0d75d3848ad7385d49801d0934e65542', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish(), onError: () => this.onSrcLoadError() }), !!this.figCaption && h("figcaption", { key: '4c1116b5128356dd3f695602cfbde3699bc78ec6' }, this.figCaption))));
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