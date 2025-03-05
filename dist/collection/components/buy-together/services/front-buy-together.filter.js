import { FrontBuyTogetherResponse } from "./front-buy-together-response";
import { checkHasBalance, checkHasPrice, checkIsOutReleaseDate } from "../buy-together.utils";
export class FrontBuyTogetherFilter extends FrontBuyTogetherResponse {
    constructor() {
        super(...arguments);
        this.filterRules = [
            {
                key: 'balance',
                isActive: true,
                applyFn: this.filterByBalance.bind(this),
                checkFn: checkHasBalance,
            },
            {
                key: 'priceless',
                isActive: true,
                applyFn: this.filterByZeroPrice.bind(this),
                checkFn: checkHasPrice,
            },
            {
                key: 'releaseDate',
                isActive: true,
                applyFn: this.filterByReleaseDate.bind(this),
                checkFn: checkIsOutReleaseDate,
            },
        ];
    }
    applyFilters(overrideFilters) {
        if (overrideFilters) {
            this.filterRules = this.filterRules.map(filter => {
                const overrideFilter = overrideFilters.find(({ key }) => key === filter.key);
                if (!overrideFilter)
                    return filter;
                return Object.assign(Object.assign(Object.assign({}, filter), overrideFilter), { applyFn: overrideFilter.applyFn ? overrideFilter.applyFn.bind(this) : filter.applyFn });
            });
        }
        this.filterRules
            .filter(({ isActive }) => isActive)
            .forEach(({ applyFn }) => {
            applyFn();
        });
        this.applyFilterVariations();
        return this;
    }
    filterByZeroPrice() {
        const shouldRemoveBuyTogether = !checkHasPrice(this.response.product);
        if (!this.response || shouldRemoveBuyTogether) {
            this.response = null;
        }
    }
    filterByBalance() {
        var _a, _b;
        const productWithoutBalance = !checkHasBalance((_a = this.response) === null || _a === void 0 ? void 0 : _a.product);
        const noneVariationsHasBalance = !((_b = this.response) === null || _b === void 0 ? void 0 : _b.product.variations.some(checkHasBalance));
        const shouldRemoveBuyTogether = productWithoutBalance || noneVariationsHasBalance;
        if (!this.response || shouldRemoveBuyTogether) {
            this.response = null;
        }
    }
    filterByReleaseDate() {
        var _a;
        const shouldRemoveBuyTogether = !checkIsOutReleaseDate((_a = this.response) === null || _a === void 0 ? void 0 : _a.product);
        if (!this.response || shouldRemoveBuyTogether) {
            this.response = null;
        }
    }
    applyFilterVariations() {
        if (!this.response)
            return;
        const checkFns = this.filterRules
            .filter(({ isActive }) => isActive)
            .map(({ checkFn }) => checkFn);
        this.response.productsPivot = this.response.productsPivot.filter(({ variations }) => this.filterVariations(variations, checkFns));
    }
    filterVariations(variations, checkFns) {
        return (variations.filter(data => {
            const results = checkFns.map(fn => fn(data));
            const shouldAdd = results.reduce((prev, current) => prev && current, true);
            return shouldAdd;
        }).length !== 0);
    }
}
//# sourceMappingURL=front-buy-together.filter.js.map
