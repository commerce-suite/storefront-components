import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { FrontBuyTogetherResponse } from './front-buy-together-response';
import { checkHasBalance, checkHasPrice, checkIsOutReleaseDate } from '../buy-together.utils';

type FilterRulesType = {
  key: 'balance' | 'priceless' | 'releaseDate';
  isActive: boolean;
  applyFn: () => void;
  checkFn: (data?: Partial<Product>) => boolean;
};

export class FrontBuyTogetherFilter extends FrontBuyTogetherResponse {
  private filterRules: FilterRulesType[] = [
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

  public applyFilters(overrideFilters?: Partial<FilterRulesType>[]) {
    if (overrideFilters) {
      this.filterRules = this.filterRules.map(filter => {
        const overrideFilter = overrideFilters.find(({ key }) => key === filter.key);
        if (!overrideFilter) return filter;

        return {
          ...filter,
          ...overrideFilter,
          applyFn: overrideFilter.applyFn ? overrideFilter.applyFn.bind(this) : filter.applyFn,
        };
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

  protected filterByZeroPrice() {
    const shouldRemoveBuyTogether = !checkHasPrice(this.response.product);
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
    }
  }

  protected filterByBalance() {
    const productWithoutBalance = !checkHasBalance(this.response?.product);
    const noneVariationsHasBalance = !this.response?.product.variations.some(checkHasBalance);
    const shouldRemoveBuyTogether = productWithoutBalance || noneVariationsHasBalance;
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
    }
  }

  protected filterByReleaseDate() {
    const shouldRemoveBuyTogether = !checkIsOutReleaseDate(this.response?.product);
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
    }
  }

  protected applyFilterVariations() {
    if (!this.response) return;
    const checkFns = this.filterRules
      .filter(({ isActive }) => isActive)
      .map(({ checkFn }) => checkFn);
    this.response.productsPivot = this.response.productsPivot.filter(({ variations }) =>
      this.filterVariations(variations, checkFns),
    );
  }

  private filterVariations(
    variations: Product[],
    checkFns: ((data?: Partial<Product>) => boolean)[],
  ) {
    return (
      variations.filter(data => {
        const results = checkFns.map(fn => fn(data));
        const shouldAdd = results.reduce((prev, current) => prev && current, true);
        return shouldAdd;
      }).length !== 0
    );
  }
}
