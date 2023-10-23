import get from 'lodash/get';
import { IBuyTogetherComponentData, IProductOrderBump } from '../buy-together.type';
import { IProductCard } from '../../../components';
import {
  Attribute,
  Product,
  BuyTogether as IBuyTogether,
  ShowcaseColor,
} from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { ISelectVariation } from '../../ui/product-card/product-card.type';

export class FrontBuyTogetherAdapter {
  public static adapterIBuyTogetherToComponentData(
    buyTogether: IBuyTogether,
  ): IBuyTogetherComponentData {
    return {
      productMain: this.adapterToProductCard(buyTogether.product),
      products: buyTogether.productsPivot.map(data => this.adapterPivotToProductCard(data)),
      originalData: buyTogether,
    };
  }

  public static adapterPivotToProductCard(product: Product): IProductOrderBump {
    return {
      ...this.adapterToProductCard(product),
      isCheck: true,
    };
  }

  public static adapterToProductCard(product: Product): IProductCard {
    const { price, priceCompare, id } = this.getValuesByVariation(product);
    return {
      price,
      priceBase: priceCompare,
      id,
      image: product.images?.length ? product.images[0] : { src: '' },
      name: product.name,
      selectVariations: this.adapterAttributes(product),
    };
  }

  public static getValuesByVariation(product: Product) {
    const { attribute, attributeSecondary, color } = product;
    const filter = {
      'attribute.id': attribute?.id,
      'attributeSecondary.id': attributeSecondary?.id,
      'color.id': color?.id,
    };
    const variationsFiltered = this.filterVariations(product.variations, filter);
    return variationsFiltered[0] || product;
  }

  public static adapterAttributes(product: Product): ISelectVariation[] {
    const colors: ISelectVariation = this.generateSelectColors(product);
    const attributes = this.generateSelectAttributes(product);
    const attributesSecondary = this.generateSelectAttributesSecondary(product);
    return [colors, attributes, attributesSecondary].filter(attr => !!attr);
  }

  public static generateSelectAttributes(product: Product): ISelectVariation {
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

  public static generateSelectAttributesSecondary(product: Product): ISelectVariation {
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

  public static generateSelectColors(product: Product): ISelectVariation {
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
    variations: Product[],
    filter: { [key: string]: any },
    attributeTarget?: keyof Product,
  ) {
    const filterKeys = Object.keys(filter);
    return variations.filter(objVariation => {
      const hasAttr = !attributeTarget || !!objVariation[attributeTarget];
      if (!hasAttr) return false;
      return filterKeys.reduce((acc, currentKey) => {
        const valueForCompare = filter[currentKey];
        const value = get(objVariation, currentKey);
        return acc && value === valueForCompare;
      }, true);
    });
  }

  public static filterAttributesByUnique(
    attributesGeneric: Product[],
    attributeTarget: keyof Product,
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
