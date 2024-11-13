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
        return (h(Host, { key: '8568df856989ba170181dab00d2b2d319beb59e4' }, h("figure", { key: '713d672234f520f6b3c66323662f7570b3f1c300', class: this.getImageClassByProps() }, h("img", { key: 'c592c3b5a18359ae74f491be9be473f08a51fa53', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: 'dd13acd7b63e276d0936ad03f70d469ac00c4792' }, this.figCaption))));
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
