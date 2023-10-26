import { BuyTogetherService } from '@uxshop/storefront-core';
import { IBuyTogetherComponentData } from '../buy-together.type';
import { FrontBuyTogetherAdapter } from './front-buy-together.adapter';
import {
  BuyTogether,
  Product,
} from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent } from '../../../components';
import { IChangeResult, IFrontBuyTogetherService } from './front-buy-together.type';

export class FrontBuyTogetherService implements IFrontBuyTogetherService {
  public async getBuyTogetherByProductId(
    productId: number,
    variationId?: number,
  ): Promise<IBuyTogetherComponentData> {
    const responseData = await BuyTogetherService.getByProductIdWithValidPromotionDate(productId);
    if (responseData && variationId) {
      responseData.product = this.changeByVariationSelected(variationId, responseData.product);
    }
    return this.applyFilterRulesToBuyTogether(responseData);
  }

  public filterByRules(buyTogether: BuyTogether, filter?: 'price' | 'balance' | 'all') {
    const filters = {
      price: this.removePivotProductsByPrice,
      balance: this.removePivotProductsByBalance,
    };

    if (!filter) return buyTogether;

    return (
      (filters[filter] && filters[filter](buyTogether)) ??
      this.removePivotProductsByPrice(this.removePivotProductsByBalance(buyTogether))
    );
  }

  public applyFilterRulesToBuyTogether(response: BuyTogether) {
    const hasPrice = +response?.product?.price;
    if (!response?.product?.balance || !hasPrice) return null;
    const responseHandle = this.filterByRules(response, 'all');
    const hasProductPivot = !!responseHandle.productsPivot.length;
    if (!hasProductPivot) return null;
    return FrontBuyTogetherAdapter.adapterIBuyTogetherToComponentData(responseHandle);
  }

  public removePivotProductsByBalance(response: BuyTogether): BuyTogether {
    return {
      ...response,
      productsPivot: (response.productsPivot = response.productsPivot.filter(
        ({ variations }) => variations.filter(({ balance }) => !!balance).length !== 0,
      )),
    };
  }

  public removePivotProductsByPrice(response: BuyTogether): BuyTogether {
    return {
      ...response,
      productsPivot: (response.productsPivot = response.productsPivot.filter(
        ({ variations }) => variations.filter(({ price }) => +price).length !== 0,
      )),
    };
  }

  public changeByVariationSelected(variationId: number, product: Product) {
    const variation = product.variations?.find(({ id }) => Number(id) === variationId);
    if (!variation) return product;
    return {
      ...variation,
      variations: product.variations,
    };
  }

  public changeProductOptions(
    data: IInputSelectDataEvent,
    productTarget: Product,
  ): IChangeResult | null {
    switch (data.eventSelectType) {
      case 'color':
        return this.changeColor(data.value, productTarget);
      case 'attributes':
        return this.changeAttribute(data.value, productTarget);
      case 'secondaryAttributes':
        return this.changeAttributeSecondary(data.value, productTarget);
      default:
        return null;
    }
  }

  public changeColor(colorValue: string, productTarget: Product): IChangeResult {
    const variationByColor = productTarget.variations.find(
      ({ color }) => color?.id === Number(colorValue),
    );
    const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation({
      ...productTarget,
      color: variationByColor.color,
    });
    const productTargetUpdated = {
      ...currentVariation,
      variations: productTarget.variations,
    };
    const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
    return { productTargetUpdated, productCard };
  }

  public changeAttribute(attributeValue: string, productTarget: Product): IChangeResult {
    const variationByAttribute = productTarget.variations.find(
      ({ attribute }) => attribute?.id === Number(attributeValue),
    );
    const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation({
      ...productTarget,
      attribute: variationByAttribute.attribute,
    });
    const productTargetUpdated: Product = {
      ...currentVariation,
      variations: productTarget.variations,
    };
    const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
    return { productTargetUpdated, productCard };
  }

  public changeAttributeSecondary(attributeValue: string, productTarget: Product): IChangeResult {
    const variationByAttributeSecondary = productTarget.variations.find(
      ({ attributeSecondary }) => attributeSecondary?.id === Number(attributeValue),
    );
    const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation({
      ...productTarget,
      attributeSecondary: variationByAttributeSecondary.attributeSecondary,
    });
    const productTargetUpdated: Product = {
      ...currentVariation,
      variations: productTarget.variations,
    };
    const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
    return { productTargetUpdated, productCard };
  }

  public async addToCart(variantIds: number[]) {
    return new Promise((resolve, reject) => {
      const urlBase = window.dooca.base_url;
      const route = '/action/cart/add';
      const body = new FormData();
      const items = variantIds.map(variationId => ({
        variation_id: variationId,
        quantity: 1,
      }));

      body.append('items', JSON.stringify(items));

      const request = new XMLHttpRequest();
      request.open('POST', `${urlBase}${route}`, true);
      request.setRequestHeader('X-Ajax', 'true');
      request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
          resolve(request.responseText);
        } else {
          reject(request.status);
        }
      };
      request.send(body);
    });
  }
}
