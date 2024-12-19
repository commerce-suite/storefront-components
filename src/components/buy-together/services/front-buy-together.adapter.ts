import get from 'lodash/get';
import {
  BuyTogetherPaymentConfig,
  IBuyTogetherComponentData,
  IProductOrderBump,
} from '../buy-together.type';
import { IProductCard, PaymentOption } from '../../../components';
import {
  Attribute,
  Product,
  BuyTogether as IBuyTogether,
  ShowcaseColor,
  Payment,
  PaymentInstallment,
} from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { ISelectVariation } from '../../ui/product-card/product-card.type';
import { checkHasBalance, checkIsOutReleaseDate } from '../buy-together.utils';
import { ReleaseDate } from '@uxshop/storefront-core/dist/types/ReleaseDateTypes';

type AttributesExtraDataType = {
  balance: number;
  releaseDate: ReleaseDate;
  isSellOutOfStock?: boolean;
};

export class FrontBuyTogetherAdapter {
  static isFirstLoad = false;
  static placeholderDisabled = { name: 'Selecione', disabled: true, value: undefined };
  public static adapterIBuyTogetherToComponentData(
    buyTogether: IBuyTogether,
    buyTogetherPaymentConfig: BuyTogetherPaymentConfig[],
    isFirstLoad = false,
  ): IBuyTogetherComponentData {
    this.isFirstLoad = isFirstLoad;
    const componentData = {
      productMain: this.adapterToProductCard(buyTogether.product, buyTogetherPaymentConfig),
      products: buyTogether.productsPivot.map(data =>
        this.adapterPivotToProductCard(data, buyTogetherPaymentConfig),
      ),
      originalData: buyTogether,
    };
    this.isFirstLoad = false;
    return componentData;
  }

  public static adapterPivotToProductCard(
    product: Product,
    buyTogetherPaymentConfig: BuyTogetherPaymentConfig[],
  ): IProductOrderBump {
    return {
      ...this.adapterToProductCard(product, buyTogetherPaymentConfig),
      isCheck: true,
    };
  }

  public static adapterToProductCard(
    product: Product,
    paymentConfig: BuyTogetherPaymentConfig[],
  ): IProductCard {
    const { price, priceCompare, id } = this.getValuesByVariation(product);
    return {
      price,
      priceBase: priceCompare,
      id,
      productId: product.productId,
      image: product.images?.length ? product.images[0] : { src: '' },
      name: product.name,
      slug: product.slug,
      selectVariations: this.adapterAttributes(product),
      paymentOptions: this.adaptPaymentOptions(product, paymentConfig),
    };
  }

  private static adaptPaymentOptions(
    product: Product,
    paymentConfig: BuyTogetherPaymentConfig[],
  ): PaymentOption[] {
    const uniquePayments: Record<string, Payment> = {};

    product.payments.forEach(payment => {
      if (!uniquePayments[payment.method]) {
        uniquePayments[payment.method] = payment;
      }
    });

    const filteredPayments = Object.values(uniquePayments);

    const allInactive = paymentConfig.every(payment => !payment.active);
    if (allInactive) return this.adaptSimplePayment(product);

    return paymentConfig
      .filter(payment => payment.active)
      .sort((a, b) => a.position - b.position)
      .map(payment => {
        const actualPayment = filteredPayments.find(p => p.method === payment.method);
        if (!actualPayment) return null;

        switch (payment.method) {
          case 'creditcard':
            return this.adaptCreditCardPayment(product, payment, actualPayment);
          case 'billet':
            return this.adaptPayment(product, 'billet');
          case 'pix':
            return this.adaptPayment(product, 'pix');
          default:
            return null;
        }
      })
      .filter(Boolean);
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
    const { color, attributeSecondary, isSellOutOfStock } = product;
    const filterToCompare = {
      'color.id': color?.id,
      'attributeSecondary.id': attributeSecondary?.id,
    };
    const productVariations = product.color
      ? this.filterVariations(product.variations, filterToCompare, 'attribute')
      : product.variations;
    const attributes = this.filterAttributesByUnique(productVariations, 'attribute');
    if (!attributes.length) return null;
    return {
      placeholder: this.placeholderDisabled,
      label: product.attribute?.attributeName,
      options: attributes.map(({ balance, id, name, releaseDate }) => ({
        name,
        value: id,
        disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
      })),
      selectType: 'attributes',
      currentValue: this.isFirstLoad ? undefined : product.attribute?.id,
    };
  }

  public static generateSelectAttributesSecondary(product: Product): ISelectVariation {
    const { color, attribute, isSellOutOfStock } = product;
    const filterToCompare = { 'color.id': color?.id, 'attribute.id': attribute?.id };
    const listAttributesSecondary = this.filterAttributesByUnique(
      this.filterVariations(product.variations, filterToCompare, 'attributeSecondary'),
      'attributeSecondary',
    );
    if (!listAttributesSecondary.length) return null;
    return {
      placeholder: this.placeholderDisabled,
      label: product.attributeSecondary?.attributeName,
      options: listAttributesSecondary.map(({ name, balance, id, releaseDate }) => ({
        value: id,
        name,
        disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
      })),
      selectType: 'secondaryAttributes',
      currentValue: this.isFirstLoad ? undefined : product.attributeSecondary?.id,
    };
  }

  public static generateSelectColors(product: Product): ISelectVariation {
    const listColors = this.filterAttributesByUnique(product.variations, 'color');
    if (!listColors?.length) return null;
    return {
      label: 'Cor',
      placeholder: this.placeholderDisabled,
      options: listColors?.map(({ balance, id, name, releaseDate, isSellOutOfStock }) => ({
        name,
        value: id,
        disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
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
          if (index === -1)
            return [
              ...acc,
              {
                ...objItem,
                balance: current.balance,
                releaseDate: current.releaseDate,
                isSellOutOfStock: current.isSellOutOfStock,
              },
            ];
          return acc;
        },
        [] as ((Attribute | ShowcaseColor) & AttributesExtraDataType)[],
      );
  }

  private static checkAttributeOptionDisabled(data: AttributesExtraDataType) {
    const { balance, releaseDate, isSellOutOfStock } = data;
    return (
      !checkHasBalance({ balance, isSellOutOfStock }) || !checkIsOutReleaseDate({ releaseDate })
    );
  }

  private static getInstallmentsWithoutInterest(installments: PaymentInstallment[]) {
    return installments.filter(installment => installment.markup <= 1);
  }

  private static getTotalInstallments(installments: PaymentInstallment[]) {
    return installments;
  }

  private static adaptCreditCardPayment(
    product: Product,
    paymentConfig: BuyTogetherPaymentConfig,
    actualPayment: Payment,
  ): PaymentOption {
    const installmentsNoInterest = this.getInstallmentsWithoutInterest(actualPayment.installments);
    const totalInstallments = this.getTotalInstallments(actualPayment.installments);

    const selectedInstallments = paymentConfig.parcels_no_interest
      ? installmentsNoInterest
      : totalInstallments;

    const lastInstallment = selectedInstallments[selectedInstallments.length - 1];

    return {
      type: 'creditCard',
      price: Number(lastInstallment?.total) || 0,
      priceCompare: product.priceCompare,
      parcels: selectedInstallments.length,
      parcelPrice: Number(lastInstallment?.parcelPrice) || 0,
      hasInterest: !paymentConfig.parcels_no_interest,
    };
  }

  private static adaptPayment(product: Product, methodType: 'billet' | 'pix'): PaymentOption {
    const paymentMethod = product.payments.find(method => method.method === methodType);

    return {
      type: methodType,
      price: Number(paymentMethod?.installment.total || 0),
      priceCompare: product.priceCompare,
    };
  }

  private static adaptSimplePayment(product: Product): PaymentOption[] {
    return [
      {
        type: 'simple',
        price: product.price,
        priceCompare: product.priceCompare,
      },
    ];
  }
}
