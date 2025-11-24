import { Host, h, Fragment, } from "@stencil/core";
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const splide = new Splide('#splide', {
            pagination: false,
            lazyLoad: true,
            breakpoints: {
                2000: {
                    perPage: this.productsPerPage || ((_a = this.products) === null || _a === void 0 ? void 0 : _a.length) >= 4 ? 4 : (_b = this.products) === null || _b === void 0 ? void 0 : _b.length,
                    gap: '.7rem',
                    arrows: this.showArrows ||
                        ((_c = this.products) === null || _c === void 0 ? void 0 : _c.length) > this.productsPerPage ||
                        ((_d = this.products) === null || _d === void 0 ? void 0 : _d.length) > 4,
                    padding: { left: '5%', right: '5%' },
                },
                768: {
                    perPage: this.productsPerPage || ((_e = this.products) === null || _e === void 0 ? void 0 : _e.length) >= 3 ? 3 : (_f = this.products) === null || _f === void 0 ? void 0 : _f.length,
                    gap: '.7rem',
                    arrows: this.showArrows || ((_g = this.products) === null || _g === void 0 ? void 0 : _g.length) > 3,
                },
                640: {
                    perPage: this.productsPerPage || ((_h = this.products) === null || _h === void 0 ? void 0 : _h.length) >= 2 ? 2 : (_j = this.products) === null || _j === void 0 ? void 0 : _j.length,
                    gap: '.7rem',
                    arrows: this.showArrows || ((_k = this.products) === null || _k === void 0 ? void 0 : _k.length) > 2,
                },
                480: {
                    perPage: 1,
                    arrows: this.showArrows || ((_l = this.products) === null || _l === void 0 ? void 0 : _l.length) > 1,
                    padding: { left: '0', right: '24px' },
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
        if (this.products.length)
            this.mountCarousel();
    }
    render() {
        var _a;
        return (h(Host, { key: '76ca2216fc3cb991e714a565879f6c5bec2a171f' }, this.loading && (h("div", { key: '8fd8b83123e439528ff230a185337aa7ce923e28', class: "loading-container" }, h("span", { key: '2c2136f4fc43dfdcd766b4c50a69285828220c2a', class: "spinner" }))), !this.loading && this.products.length ? (h("div", { class: "showcase-related-products" }, h("h4", { class: "showcase-related-products-title" }, this.showcaseTitle || 'Recomendados para você'), h("div", { class: "splide-container" }, h("div", { id: "splide", class: "splide", style: !this.showArrows ? { padding: '30px 0' } : {} }, h("div", { class: "splide__track" }, h("ul", { class: "splide__list" }, (_a = this.products) === null || _a === void 0 ? void 0 : _a.map(product => {
            return (h("li", { class: "splide__slide" }, h("form", { class: "product-form", onSubmit: evt => this.onClickBuyButtonEmit(evt, product) }, h("div", { class: "product-main-container" }, h("product-card", { product: product, paymentOptions: product.paymentOptions }), h("button", { type: "submit", class: "buy-button" }, this.buttonLabel || 'Comprar')))));
        }))))))) : (h(Fragment, null))));
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
