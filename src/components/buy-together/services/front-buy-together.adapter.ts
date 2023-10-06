import get from 'lodash/get';
import { IBuyTogetherComponentData } from '../buy-together.type';
import { IProductCard } from '../../../components';
import {
  Attribute,
  GqlProduct,
  BuyTogether as IBuyTogether,
  ShowcaseColor,
} from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { ISelectVariation } from '../../ui/product-card/product-card.type';

export class FrontBuyTogetherAdapter {
  public static adapterIBuyTogehterToComponentData(
    buyTogether: IBuyTogether,
  ): IBuyTogetherComponentData {
    return {
      productMain: this.adapterProductToProductCard(buyTogether.product),
      products: buyTogether.productsPivot.map(data => {
        return this.adapterProductToProductCard(data);
      }),
      originalData: buyTogether,
    };
  }

  public static adapterProductToProductCard(product: GqlProduct): IProductCard {
    return {
      id: product.id,
      image: product.images[0],
      name: product.name,
      price: product.price,
      priceBase: product.priceCompare,
      selectVariations: this.adapterAttributes(product),
    };
  }

  public static adapterAttributes(product: GqlProduct): ISelectVariation[] {
    const colors: ISelectVariation = this.generateSelectColors(product);
    const attributes = this.generateSelectAttributes(product);
    const attributesSecondary = this.generateSelectAttributesSecondary(product);
    return [colors, attributes, attributesSecondary].filter(attr => !!attr);
  }

  public static generateSelectAttributes(product: GqlProduct): ISelectVariation {
    const { color, attributeSecondary } = product;
    const filterToCompare = {
      'color.id': color?.id,
      'attributeSecondary.id': attributeSecondary?.id,
    };
    const attributes = this.filterAttributesByUnique(
      this.filterVariations(product.variations, filterToCompare, 'attribute'),
      'attribute',
    );
    if (!attributes.length) return null;
    return {
      label: product.attribute?.attributeName,
      options: attributes.map(({ balance, id, name }) => ({
        name,
        value: id,
        disabled: balance <= 0,
      })),
      selectType: 'attributes',
      currentValue: product.attribute?.id,
    };
  }

  public static generateSelectAttributesSecondary(product: GqlProduct): ISelectVariation {
    const { color, attribute } = product;
    const filterToCompare = { 'color.id': color?.id, 'attribute.id': attribute?.id };
    const listAttributesSecondary = this.filterAttributesByUnique(
      this.filterVariations(product.variations, filterToCompare, 'attributeSecondary'),
      'attributeSecondary',
    );
    if (!listAttributesSecondary.length) return null;
    return {
      label: product.attributeSecondary?.attributeName,
      options: listAttributesSecondary.map(({ name, balance, id }) => ({
        value: id,
        name,
        disabled: balance <= 0,
      })),
      selectType: 'secondaryAttributes',
      currentValue: product.attributeSecondary?.id,
    };
  }

  public static generateSelectColors(product: GqlProduct): ISelectVariation {
    const { attribute, attributeSecondary } = product;
    const filterToCompare = {
      'attribute.id': attribute?.id,
      'attributeSecondary.id': attributeSecondary?.id,
    };
    const listColors = this.filterAttributesByUnique(
      this.filterVariations(product.variations, filterToCompare, 'color'),
      'color',
    );
    if (!listColors?.length) return null;
    return {
      label: 'Cor',
      options: listColors?.map(({ balance, id, name }) => ({
        name,
        value: id,
        disabled: balance <= 0,
      })),
      currentValue: product.color?.id,
      selectType: 'color',
    };
  }

  private static filterVariations(
    variations: GqlProduct[],
    filter: { [key: string]: any },
    attributeTarget: keyof GqlProduct,
  ) {
    const filterKeys = Object.keys(filter);
    return variations.filter(objVariation => {
      const hasAttr = !!objVariation[attributeTarget];
      if (!hasAttr) return false;
      return filterKeys.reduce((acc, currentKey) => {
        const valueForCompare = filter[currentKey];
        const value = get(objVariation, currentKey);
        return acc && value === valueForCompare;
      }, true);
    });
  }

  private static filterAttributesByUnique(
    attributesGeneric: GqlProduct[],
    attributeTarget: keyof GqlProduct,
  ) {
    return attributesGeneric
      .filter(attr => !!attr[attributeTarget])
      .reduce(
        (acc, current) => {
          const objItem = current[attributeTarget] as Attribute | ShowcaseColor;
          const index = acc.findIndex(attrAcc => attrAcc.id === objItem.id);
          if (index === -1) return [...acc, { ...objItem, balance: current.balance }];
          return acc;
        },
        [] as ((Attribute | ShowcaseColor) & { balance: number })[],
      );
  }
}
