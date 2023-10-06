import { BuyTogetherService } from '@uxshop/storefront-core';
import { IBuyTogetherComponentData } from '../buy-together.type';
import { FrontBuyTogetherAdapter } from './front-buy-together.adapter';
import { GqlProduct } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { IInputSelectDataEvent } from '../../../components';
import { IChangeResult, IFrontBuyTogetherService } from './front-buy-together.type';

export class FrontBuyTogetherService implements IFrontBuyTogetherService {
  public async getBuyTogetherByProductId(productId: number): Promise<IBuyTogetherComponentData> {
    const responseData = await BuyTogetherService.getByProductId(productId);
    return FrontBuyTogetherAdapter.adapterIBuyTogehterToComponentData(responseData);
  }

  public changeProductOptions(
    data: IInputSelectDataEvent,
    productTarget: GqlProduct,
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

  public changeColor(colorValue: string, productTarget: GqlProduct): IChangeResult {
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
    const productCard = FrontBuyTogetherAdapter.adapterProductToProductCard(productTargetUpdated);
    return { productTargetUpdated, productCard };
  }

  public changeAttribute(attributeValue: string, productTarget: GqlProduct): IChangeResult {
    const variationByAttribute = productTarget.variations.find(
      ({ attribute }) => attribute?.id === Number(attributeValue),
    );
    const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation({
      ...productTarget,
      attribute: variationByAttribute.attribute,
    });
    const productTargetUpdated: GqlProduct = {
      ...currentVariation,
      variations: productTarget.variations,
    };
    const productCard = FrontBuyTogetherAdapter.adapterProductToProductCard(productTargetUpdated);
    return { productTargetUpdated, productCard };
  }

  public changeAttributeSecondary(
    attributeValue: string,
    productTarget: GqlProduct,
  ): IChangeResult {
    const variationByAttributeSecondary = productTarget.variations.find(
      ({ attributeSecondary }) => attributeSecondary?.id === Number(attributeValue),
    );
    const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation({
      ...productTarget,
      attributeSecondary: variationByAttributeSecondary.attributeSecondary,
    });
    const productTargetUpdated: GqlProduct = {
      ...currentVariation,
      variations: productTarget.variations,
    };
    const productCard = FrontBuyTogetherAdapter.adapterProductToProductCard(productTargetUpdated);
    return { productTargetUpdated, productCard };
  }
}
