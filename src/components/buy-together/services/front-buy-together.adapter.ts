import { IBuyTogetherComponentData } from '../buy-together.type';
import { IProductCard } from '../../../components';
import {
  GqlProduct,
  BuyTogether as IBuyTogether,
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
    console.log({ product });

    // Ver se o atributo estara ativo segundo a cor e attr secondart do produto
    const { color: productColor } = this.getCurrentProductState(product);
    const attributes = this.filterAttributesByUnique(
      product.variations
        .filter(({ attribute, color }) => {
          const hasAttr = !!attribute;
          const hasColor = !!productColor;
          const filterColorAttend = !hasColor || productColor?.id === color?.id;
          return hasAttr && filterColorAttend;
        })
        .map(({ attribute, balance }) => ({ attribute, balance })),
    );
    if (!attributes.length) return null;
    return {
      label: product.attribute?.attributeName,
      options: attributes.map(({ attribute, balance }) => ({
        value: attribute.id,
        name: attribute.name,
        disabled: balance <= 0,
      })),
      selectType: 'attributes',
      currentValue: product.attribute?.id,
    };
  }

  public static generateSelectAttributesSecondary(product: GqlProduct): ISelectVariation {
    const { color: productColor } = this.getCurrentProductState(product);
    const listAttributesSecondary = this.filterAttributesByUnique(
      product.variations
        .filter(({ attributeSecondary, color }) => {
          const hasAttr = !!attributeSecondary;
          const hasColor = !!productColor;
          const filterColorAttend = !hasColor || productColor?.id === color?.id;
          return hasAttr && filterColorAttend;
        })
        .map(({ attributeSecondary, balance }) => ({ attributeSecondary, balance })),
    );
    if (!listAttributesSecondary.length) return null;
    return {
      label: product.attributeSecondary?.attributeName,
      options: listAttributesSecondary.map(({ attribute, balance }) => ({
        value: attribute.id,
        name: attribute.name,
        disabled: balance <= 0,
      })),
      selectType: 'secondaryAttributes',
      currentValue: product.attributeSecondary?.id,
    };
  }

  public static generateSelectColors(product: GqlProduct): ISelectVariation {
    if (!product.colors?.length) return null;
    return {
      label: 'Cor',
      options: product.colors?.map(color => ({ name: color.name, value: color.id })),
      currentValue: product.color?.id,
      selectType: 'color',
    };
  }

  private static filterAttributesByUnique(attributes: Pick<GqlProduct, 'balance' | 'attribute'>[]) {
    return attributes
      .filter(attr => !!attr)
      .reduce(
        (acc, current) => {
          const index = acc.findIndex(attr => attr.attribute.id === current.attribute.id);
          if (index === -1) return [...acc, current];
          return acc;
        },
        [] as Pick<GqlProduct, 'balance' | 'attribute'>[],
      );
  }

  private static getCurrentProductState(product: GqlProduct) {
    const { attribute, color, attributeSecondary } = product;
    return { attribute, color, attributeSecondary };
  }
}
