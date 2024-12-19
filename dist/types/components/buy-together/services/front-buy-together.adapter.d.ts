import { BuyTogetherContentPayment, IBuyTogetherComponentData, IProductOrderBump } from '../buy-together.type';
import { IProductCard } from '../../../components';
import { Attribute, Product, BuyTogether as IBuyTogether, ShowcaseColor } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { ISelectVariation } from '../../ui/product-card/product-card.type';
import { ReleaseDate } from '@uxshop/storefront-core/dist/types/ReleaseDateTypes';
type AttributesExtraDataType = {
    balance: number;
    releaseDate: ReleaseDate;
    isSellOutOfStock?: boolean;
};
export declare class FrontBuyTogetherAdapter {
    static isFirstLoad: boolean;
    static placeholderDisabled: {
        name: string;
        disabled: boolean;
        value: any;
    };
    static adapterIBuyTogetherToComponentData(buyTogether: IBuyTogether, isFirstLoad?: boolean): IBuyTogetherComponentData;
    static adapterPivotToProductCard(product: Product): IProductOrderBump;
    static adapterToProductCard(product: Product, mockPayments: BuyTogetherContentPayment[]): IProductCard;
    private static adaptPaymentOptions;
    static getValuesByVariation(product: Product): Product;
    static adapterAttributes(product: Product): ISelectVariation[];
    static generateSelectAttributes(product: Product): ISelectVariation;
    static generateSelectAttributesSecondary(product: Product): ISelectVariation;
    static generateSelectColors(product: Product): ISelectVariation;
    private static filterVariations;
    static filterAttributesByUnique(attributesGeneric: Product[], attributeTarget: keyof Product): ((ShowcaseColor | Attribute) & AttributesExtraDataType)[];
    private static checkAttributeOptionDisabled;
    private static getInstallmentsWithoutInterest;
    private static getTotalInstallments;
    private static adaptCreditCardPayment;
    private static adaptPayment;
    private static adaptSimplePayment;
}
export {};
