import { FrontBuyTogetherAdapter } from "./front-buy-together.adapter";
export class FrontBuyTogetherResponse {
    constructor(response) {
        this.response = response;
    }
    adapterToComponentData(buyTogetherPaymentConfig) {
        var _a, _b;
        const canApplyAdapter = this.response && ((_b = (_a = this.response) === null || _a === void 0 ? void 0 : _a.productsPivot) === null || _b === void 0 ? void 0 : _b.length) > 0;
        this.componentData = canApplyAdapter
            ? FrontBuyTogetherAdapter.adapterIBuyTogetherToComponentData(this.response, buyTogetherPaymentConfig, true)
            : null;
        return this;
    }
    changeByVariationSelected(variationId) {
        var _a, _b;
        if (!variationId)
            return this;
        const variation = (_a = this.response.product.variations) === null || _a === void 0 ? void 0 : _a.find(({ id }) => Number(id) === variationId);
        if (!variation)
            return this;
        if ((variation === null || variation === void 0 ? void 0 : variation.balance) > 0) {
            this.response.product = Object.assign(Object.assign({}, variation), { variations: this.response.product.variations });
        }
        const variationWithBalance = (_b = this.response.product.variations) === null || _b === void 0 ? void 0 : _b.find(({ balance, color, isSellOutOfStock }) => {
            if (variation.color) {
                return variation.color.id === color.id && (balance > 0 || isSellOutOfStock);
            }
            return balance > 0 || isSellOutOfStock;
        });
        this.response.product = Object.assign(Object.assign({}, variationWithBalance), { variations: this.response.product.variations });
        return this;
    }
    get getComponentData() {
        return this.componentData;
    }
    get getResponse() {
        return this.response;
    }
}
//# sourceMappingURL=front-buy-together-response.js.map
