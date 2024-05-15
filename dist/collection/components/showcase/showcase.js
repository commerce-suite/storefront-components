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
        return (h(Host, { key: 'e660e02f42898ccc8e517486da503c72f1025ce2' }, this.loading && (h("div", { key: '484c080703f51bcb8ec5d275329ad3a696f9cf8b', class: "loading-container" }, h("span", { key: '0b8e278b68b8ef8e6a5d9c8a00f29a9e143fe06a', class: "spinner" }))), !this.loading && this.products && (h("div", { key: 'cbe9322baa9571bd8eabb51e4e375a7ac8b2b6b1', class: "showcase-related-products" }, h("h4", { key: 'd298802147283a7005e43435e940607bb66cce49', class: "showcase-related-products-title" }, this.showcaseTitle), h("div", { key: 'f3b2320dd5b7ec88404edbd983c2c3e64a46dda4', id: "splide", class: "splide", style: !this.showArrows ? { padding: '30px 0' } : {} }, h("div", { key: 'd54e1fbea541b0a829e3f3443d36522881103884', class: "splide__track" }, h("ul", { key: '32e75223ebdfc8d4de61ecf59b36bcbbbb91b371', class: "splide__list" }, (_a = this.products) === null || _a === void 0 ? void 0 : _a.map(product => {
            return (h("li", { class: "splide__slide" }, h("form", { class: "product-form", onSubmit: evt => this.onClickBuyButtonEmit(evt, product) }, h("div", { class: "product-main-container" }, h("product-card", { product: product }), h("button", { type: "submit", class: "buy-button" }, "Comprar")))));
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
