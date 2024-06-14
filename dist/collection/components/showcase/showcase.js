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
        this.loading = undefined;
    }
    async load() {
        var _a;
        try {
            this.loading = true;
            this.products = await new FrontBuyTogetherService().getOnlyPivotProducts(this.productIds);
        }
        catch (error) {
            if (!((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('buy_together_not_found'))) {
                console.error('BuyTogether - load', { error });
            }
        }
        finally {
            this.loading = false;
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
                    padding: { right: '24px' },
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
        return (h(Host, { key: '3337f758ffec76c3f09aab4501daba3238873252' }, this.loading && (h("div", { key: 'cefdc13a8b3d98a49a85c6480a933f6f84ddb13e', class: "loading-container" }, h("span", { key: 'a7fad4b3f33e0f27d276d467e0d54e78aaa7674e', class: "spinner" }))), !this.loading && this.products.length && (h("div", { key: '119f978dc72dde278cc77af0b5d11005ac269c0c', class: "showcase-related-products" }, h("h4", { key: 'cb0bada80a168a8e17506595ecdf2262b1da141e', class: "showcase-related-products-title" }, this.showcaseTitle || 'Recomendados para você'), h("div", { key: '591b9a21d62cf706a80295e3061f9b5f277290ba', id: "splide", class: "splide", style: !this.showArrows ? { padding: '30px 0' } : {} }, h("div", { key: '23e925596f90b59ca17004ddbd46c42b73d806b8', class: "splide__track" }, h("ul", { key: '79f5abe3309fd1337149448a4efeef85f15af8d3', class: "splide__list" }, (_a = this.products) === null || _a === void 0 ? void 0 : _a.map(product => {
            return (h("li", { class: "splide__slide" }, h("form", { class: "product-form", onSubmit: evt => this.onClickBuyButtonEmit(evt, product) }, h("div", { class: "product-main-container" }, h("product-card", { product: product }), h("button", { type: "submit", class: "buy-button" }, this.buttonLabel || 'Comprar')))));
        }))))))));
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
            "products": {},
            "loading": {}
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
