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
        return (h(Host, { key: '0d7dec8afefd3f1b83a8f4bc699407988667ea3f' }, h("figure", { key: 'bf9cf2be0bcbb311dba4e8998d768bb668452626', class: this.getImageClassByProps() }, h("img", { key: '9c56ad826fbad2456fb35dc4a994213441bd9385', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: 'a88e477440272ec247638e0d8bebe30165f8977c' }, this.figCaption))));
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
