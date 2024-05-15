import { Host, getAssetPath, h } from "@stencil/core";
import { getClassByProps } from "../../../utils/utils";
export class FrontImage {
    constructor() {
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
        this.isSrcLoading = true;
    }
    render() {
        return (h(Host, { key: 'daf3ac48a0253f7f196b478ed4a3a1d27fde5511' }, h("figure", { key: 'd8b8ebe533e94ad30136fa9b49c28cea904ff209', class: this.getImageClassByProps() }, h("img", { key: 'ef3d12c21715e533b52c183f2d3d8bdbe0495f5a', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish(), onError: () => this.onSrcLoadError() }), !!this.figCaption && h("figcaption", { key: '365eea8bfca39d16b589a7eca873316945edf187' }, this.figCaption))));
    }
    static get is() { return "front-image"; }
    static get originalStyleUrls() {
        return {
            "$": ["front-image.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["front-image.css"]
        };
    }
    static get properties() {
        return {
            "imageSrc": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "image-src",
                "reflect": false
            },
            "textAlt": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "text-alt",
                "reflect": false
            },
            "figCaption": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "fig-caption",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isSrcLoading": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "imageSrc",
                "methodName": "changeImageSrc"
            }];
    }
}
//# sourceMappingURL=front-image.js.map
