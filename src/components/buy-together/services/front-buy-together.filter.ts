import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { FrontBuyTogetherResponse } from './front-buy-together-response';

type FilterRulesType = {
  key: 'balance' | 'priceless' | 'releaseDate';
  isActive: boolean;
  applyFn: () => void;
};

export class FrontBuyTogetherFilter extends FrontBuyTogetherResponse {
  private filterRules: FilterRulesType[] = [
    {
      key: 'balance',
      isActive: true,
      applyFn: this.filterByBalance.bind(this),
    },
    {
      key: 'priceless',
      isActive: true,
      applyFn: this.filterByZeroPrice.bind(this),
    },
    {
      key: 'releaseDate',
      isActive: true,
      applyFn: this.filterByReleaseDate.bind(this),
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
    return this;
  }

  protected filterByZeroPrice() {
    const checkHasPrice = (data?: Product) => {
      const { price } = data || {};
      return price && !!Number(price);
    };
    const shouldRemoveBuyTogether = !checkHasPrice(this.response.product);
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
      return;
    }
    this.response.productsPivot = this.response.productsPivot.filter(({ variations }) =>
      this.filterVariations(variations, checkHasPrice),
    );
  }

  protected filterByBalance() {
    const checkHasBalance = (data?: Product) => {
      const { balance } = data || {};
      return !!balance;
    };
    const shouldRemoveBuyTogether = !checkHasBalance(this.response?.product);
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
      return;
    }
    this.response.productsPivot = this.response.productsPivot.filter(({ variations }) =>
      this.filterVariations(variations, checkHasBalance),
    );
  }

  protected filterByReleaseDate() {
    const checkIsOutReleaseDate = (data?: Product) => {
      const { releaseDate: releaseDateObj } = data || {};
      if (!releaseDateObj) return true;
      const { now, releaseDate } = releaseDateObj;
      return Number(now) >= Number(releaseDate);
    };
    const shouldRemoveBuyTogether = !checkIsOutReleaseDate(this.response?.product);
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
      return;
    }
    this.response.productsPivot = this.response.productsPivot.filter(({ variations }) =>
      this.filterVariations(variations, checkIsOutReleaseDate),
    );
  }

  private filterVariations(variations: Product[], checkFn: (data: Product) => boolean) {
    return variations.filter(data => checkFn(data)).length !== 0;
  }
}
