import { ReleaseDate } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { FrontBuyTogetherResponse } from './front-buy-together-response';

type FilterRulesType = {
  isActive: boolean;
  applyFn: () => void;
};

export class FrontBuyTogetherFilter extends FrontBuyTogetherResponse {
  private filterRules: FilterRulesType[] = [
    {
      isActive: true,
      applyFn: this.filterByBalance.bind(this),
    },
    {
      isActive: true,
      applyFn: this.filterByZeroPrice.bind(this),
    },
    {
      isActive: true,
      applyFn: this.filterByReleaseDate.bind(this),
    },
  ];

  public applyFilters() {
    this.filterRules
      .filter(({ isActive }) => isActive)
      .forEach(({ applyFn }) => {
        applyFn();
      });
    return this;
  }

  protected filterByZeroPrice() {
    const shouldRemoveBuyTogether =
      !this.response?.product?.price || Number(this.response.product?.price) <= 0;
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
      return;
    }
    this.response.productsPivot = this.response.productsPivot.filter(
      ({ variations }) => variations.filter(({ price }) => !!+price).length !== 0,
    );
  }

  protected filterByBalance() {
    const shouldRemoveBuyTogether = !this.response?.product?.balance;
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
      return;
    }
    this.response.productsPivot = this.response.productsPivot.filter(
      ({ variations }) => variations.filter(({ balance }) => !!balance).length !== 0,
    );
  }

  protected filterByReleaseDate() {
    const checkIsInReleaseDate = (releaseDateObj?: ReleaseDate) => {
      if (!releaseDateObj) return false;
      const { now, releaseDate } = releaseDateObj;
      return Number(now) < Number(releaseDate);
    };
    const shouldRemoveBuyTogether = checkIsInReleaseDate(this.response?.product?.releaseDate);
    if (!this.response || shouldRemoveBuyTogether) {
      this.response = null;
      return;
    }
    this.response.productsPivot = this.response.productsPivot.filter(
      ({ variations }) =>
        variations.filter(({ releaseDate }) => !checkIsInReleaseDate(releaseDate)).length !== 0,
    );
  }
}
