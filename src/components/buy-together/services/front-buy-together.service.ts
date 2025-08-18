import { AppService, BuyTogetherService } from '@uxshop/storefront-core';
import {
  BuyTogetherPaymentConfig,
  IBuyTogetherComponentData,
  IProductOrderBump,
} from '../buy-together.type';
import { FrontBuyTogetherAdapter } from './front-buy-together.adapter';
import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent } from '../../../components';
import { IChangeResult, IFrontBuyTogetherService } from './front-buy-together.type';
import { FrontBuyTogetherFilter } from './front-buy-together.filter';

export class FrontBuyTogetherService implements IFrontBuyTogetherService {
  private buyTogetherPaymentConfig: BuyTogetherPaymentConfig[];

  constructor() {
    this.loadBuyTogetherPaymentConfig();
  }

  private async loadBuyTogetherPaymentConfig() {
    const data = await this.getBuyTogetherAppContent();
    this.buyTogetherPaymentConfig = data?.payments || [];
  }

  private filterOutOriginalProducts(products: IProductOrderBump[], productIds: number[]) {
    return products.filter(product => !productIds.includes(+product.productId));
  }

  private getUniqueProducts(products: IProductOrderBump[]) {
    const uniqueProductsMap = new Map();
    for (const product of products) {
      if (!uniqueProductsMap.has(product.id)) {
        uniqueProductsMap.set(product.id, product);
      }
    }
    return Array.from(uniqueProductsMap.values());
  }

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
      .adapterToComponentData(this.buyTogetherPaymentConfig).getComponentData;
  }

  public async getOnlyPivotProducts(productIds: number[]) {
    const responseData = await BuyTogetherService.getByProductIds(productIds);
    const productsPivot = responseData.flatMap(response => {
      const adaptedBuyTogether = new FrontBuyTogetherFilter(response)
        .applyFilters([
          { key: 'priceless', isActive: false },
          { key: 'releaseDate', isActive: false },
          { key: 'balance', isActive: true },
        ])
        .adapterToComponentData(this.buyTogetherPaymentConfig);
      return adaptedBuyTogether?.getComponentData?.products || [];
    });

    const filteredProducts = this.filterOutOriginalProducts(productsPivot, productIds);
    const uniqueProducts = this.getUniqueProducts(filteredProducts);

    return uniqueProducts;
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
    const productCard = FrontBuyTogetherAdapter.adapterToProductCard(
      productTargetUpdated,
      this.buyTogetherPaymentConfig,
    );
    return { productTargetUpdated, productCard };
  }

  public changeAttribute(attributeValue: string, productTarget: Product): IChangeResult {
    const variationByAttribute = productTarget.variations.find(
      ({ attribute }) => attribute?.id === Number(attributeValue),
    );
    const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation({
      ...productTarget,
      attribute: variationByAttribute?.attribute || productTarget.attribute,
    });
    const productTargetUpdated: Product = {
      ...(currentVariation || productTarget),
      variations: productTarget.variations,
    };
    const productCard = FrontBuyTogetherAdapter.adapterToProductCard(
      productTargetUpdated,
      this.buyTogetherPaymentConfig,
    );
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
    const productCard = FrontBuyTogetherAdapter.adapterToProductCard(
      productTargetUpdated,
      this.buyTogetherPaymentConfig,
    );
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

  private async getBuyTogetherAppContent() {
    try {
      const response = await AppService.getBySlug('buy-together');
      if (response?.content) return JSON.parse(response.content);
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
