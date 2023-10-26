import { BuyTogetherService } from '@uxshop/storefront-core';
import { IBuyTogetherComponentData } from '../buy-together.type';
import { FrontBuyTogetherAdapter } from './front-buy-together.adapter';
import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent } from '../../../components';
import { IChangeResult, IFrontBuyTogetherService } from './front-buy-together.type';
import { FrontBuyTogetherFilter } from './front-buy-together.filter';

export class FrontBuyTogetherService implements IFrontBuyTogetherService {
  public async getBuyTogetherByProductId(
    productId: number,
    variationId?: number,
  ): Promise<IBuyTogetherComponentData> {
    const responseData = await BuyTogetherService.getByProductIdWithValidPromotionDate(productId);
    if (!responseData) return null;
    const buyTogetherData = new FrontBuyTogetherFilter(responseData);
    return buyTogetherData
      .changeByVariationSelected(variationId)
      .applyFilters()
      .adapterToComponentData().getComponentData;
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
