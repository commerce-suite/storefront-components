import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { FrontBuyTogetherAdapter } from './front-buy-together.adapter';
import { IBuyTogetherComponentData } from '../buy-together.type';

export class FrontBuyTogetherResponse {
  protected response: BuyTogether;
  protected componentData: IBuyTogetherComponentData | null;

  constructor(response: BuyTogether) {
    this.response = response;
  }

  public adapterToComponentData(): FrontBuyTogetherResponse {
    const canApplyAdapter = this.response && this.response?.productsPivot?.length > 0;
    this.componentData = canApplyAdapter
      ? FrontBuyTogetherAdapter.adapterIBuyTogetherToComponentData(this.response, true)
      : null;
    return this;
  }

  public changeByVariationSelected(variationId?: number) {
    if (!variationId) return this;
    const variation = this.response.product.variations?.find(
      ({ id }) => Number(id) === variationId,
    );
    if (!variation) return this;

    if (variation?.balance > 0) {
      this.response.product = {
        ...variation,
        variations: this.response.product.variations,
      };
    }

    const variationWithBalance = this.response.product.variations?.find(
      ({ balance, color, isSellOutOfStock }) => {
        if (variation.color) {
          return variation.color.id === color.id && (balance > 0 || isSellOutOfStock);
        }
        return balance > 0 || isSellOutOfStock;
      },
    );

    this.response.product = {
      ...variationWithBalance,
      variations: this.response.product.variations,
    };

    return this;
  }

  get getComponentData() {
    return this.componentData;
  }

  get getResponse() {
    return this.response;
  }
}
