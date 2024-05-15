import { Host, h } from "@stencil/core";
import Splide from "@splidejs/splide";
import { FrontBuyTogetherService } from "../buy-together/services/front-buy-together.service";
export class Showcase {
    constructor() {
        this.productsPerPage = undefined;
        this.showcaseTitle = undefined;
        this.buttonLabel = undefined;
        this.buyTogetherProductIds = undefined;
        this.showArrows = true;
        this.productIds = undefined;
        this.products = undefined;
    }
    async load() {
        var _a;
        try {
            this.products = await new FrontBuyTogetherService().getOnlyPivotProducts(this.productIds);
        }
        catch (error) {
            if (!((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('buy_together_not_found'))) {
                console.error('BuyTogether - load', { error });
            }
        }
    }
    mountCarousel() {
        var _a, _b;
        const splide = new Splide('#splide', {
            pagination: false,
            lazyLoad: true,
            breakpoints: {
                2000: {
                    perPage: this.productsPerPage || ((_a = this.products) === null || _a === void 0 ? void 0 : _a.length) >= 4 ? 4 : (_b = this.products) === null || _b === void 0 ? void 0 : _b.length,
                    gap: '.7rem',
                    arrows: this.showArrows,
                },
                768: {
                    perPage: 3,
                    gap: '.7rem',
                    arrows: this.showArrows,
                },
                640: {
                    perPage: 2,
                    gap: '.7rem',
                    arrows: this.showArrows,
                },
                480: {
                    perPage: 1,
                    arrows: this.showArrows,
                },
            },
        });
        splide.mount();
    }
    parseProductIds() {
        if (this.buyTogetherProductIds) {
            this.productIds = JSON.parse(this.buyTogetherProductIds);
        }
    }
    onClickBuyButtonEmit(event, product) {
        event.preventDefault();
        this.clickBuyButton.emit(product);
    }
    async componentWillLoad() {
        this.parseProductIds();
        await this.load();
    }
    componentDidLoad() {
        this.mountCarousel();
    }
    render() {
        var _a;
        return (h(Host, { key: '874d85640961bffe3dc7c9f20f0dd8b6f0e450ba' }, h("div", { key: '794f2c1abcce9865743d4b3bf7d434cbf7f347d4', class: "showcase-related-products" }, h("h4", { key: '98eb61743cdc114a6d7126ecefa3e07b80321cf2', class: "showcase-related-products-title" }, this.showcaseTitle), h("div", { key: 'e0d0a20281e6e79075355b2fb16bc75858fd3ccd', id: "splide", class: "splide", style: !this.showArrows ? { padding: '30px 0' } : {} }, h("div", { key: '6085373868c1ae8f9e6fcc3b0fb8198b72620722', class: "splide__track" }, h("ul", { key: '30754f1595bf68483a560035ff0a7a03d120c3d3', class: "splide__list" }, (_a = this.products) === null || _a === void 0 ? void 0 : _a.map(product => {
            return (h("li", { class: "splide__slide" }, h("form", { class: "product-form", onSubmit: evt => this.onClickBuyButtonEmit(evt, product) }, h("div", { class: "product-main-container" }, h("product-card", { product: product }), h("button", { type: "submit", class: "buy-button" }, "Comprar")))));
        })))))));
    }
    static get is() { return "showcase-related"; }
    static get originalStyleUrls() {
        return {
            "$": ["showcase.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["showcase.css"]
        };
    }
    static get properties() {
        return {
            "productsPerPage": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "products-per-page",
                "reflect": false
            },
            "showcaseTitle": {
                "type": "string",
                "mutable": false,
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
                "attribute": "showcase-title",
                "reflect": false
            },
            "buttonLabel": {
                "type": "string",
                "mutable": false,
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
                "attribute": "button-label",
                "reflect": false
            },
            "buyTogetherProductIds": {
                "type": "string",
                "mutable": false,
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
                "attribute": "buy-together-product-ids",
                "reflect": false
            },
            "showArrows": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "show-arrows",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "productIds": {},
            "products": {}
        };
    }
    static get events() {
        return [{
                "method": "clickBuyButton",
                "name": "clickBuyButton",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "load": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=showcase.js.map
