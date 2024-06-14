import { Host, h } from "@stencil/core";
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
        return (h(Host, { key: '02f31a7d523ad529da5221f97fadc4b16e5d3b5e' }, h("figure", { key: '45cde14b0a9eedc571d6f6d759a10ea4ee9d0c8f', class: this.getImageClassByProps() }, h("img", { key: '196981269af260a6d30fd90c4ddb7b88af552c62', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: '3c101926b00fee2462142ed2de0e59df3a214d95' }, this.figCaption))));
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
