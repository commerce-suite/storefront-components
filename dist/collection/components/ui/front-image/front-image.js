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
        return (h(Host, { key: '1cfacd61fb116ba438e7fe4531a0d53210c0bac1' }, h("figure", { key: '75816e0e1a214bd2d537a5e083a08446aae0770f', class: this.getImageClassByProps() }, h("img", { key: '2d6e2131ee8e1fa3f0fbeefa7f5d5cfb6fca1528', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: '16a5033cbaa300d24b70493882d2ef42533ae46a' }, this.figCaption))));
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
