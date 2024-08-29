import get from "lodash/get";
import { checkHasBalance, checkIsOutReleaseDate } from "../buy-together.utils";
export class FrontBuyTogetherAdapter {
    static adapterIBuyTogetherToComponentData(buyTogether, isFirstLoad = false) {
        this.isFirstLoad = isFirstLoad;
        const componentData = {
            productMain: this.adapterToProductCard(buyTogether.product),
            products: buyTogether.productsPivot.map(data => this.adapterPivotToProductCard(data)),
            originalData: buyTogether,
        };
        this.isFirstLoad = false;
        return componentData;
    }
    static adapterPivotToProductCard(product) {
        return Object.assign(Object.assign({}, this.adapterToProductCard(product)), { isCheck: true });
    }
    static adapterToProductCard(product) {
        var _a;
        const adaptSpecialPrice = (payments) => {
            const pixMethod = payments.find(payment => payment.method === 'pix');
            if (pixMethod) {
                const specialPrice = Number(pixMethod.installment.total);
                return specialPrice;
            }
            return null;
        };
        adaptSpecialPrice(product.payments);
        const { price, priceCompare, id } = this.getValuesByVariation(product);
        return {
            price,
            priceBase: priceCompare,
            id,
            productId: product.productId,
            image: ((_a = product.images) === null || _a === void 0 ? void 0 : _a.length) ? product.images[0] : { src: '' },
            name: product.name,
            slug: product.slug,
            selectVariations: this.adapterAttributes(product),
            specialPrice: adaptSpecialPrice(product.payments),
        };
    }
    static getValuesByVariation(product) {
        const { attribute, attributeSecondary, color } = product;
        const filter = {
            'attribute.id': attribute === null || attribute === void 0 ? void 0 : attribute.id,
            'attributeSecondary.id': attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id,
            'color.id': color === null || color === void 0 ? void 0 : color.id,
        };
        const variationsFiltered = this.filterVariations(product.variations, filter);
        return variationsFiltered[0] || product;
    }
    static adapterAttributes(product) {
        const colors = this.generateSelectColors(product);
        const attributes = this.generateSelectAttributes(product);
        const attributesSecondary = this.generateSelectAttributesSecondary(product);
        return [colors, attributes, attributesSecondary].filter(attr => !!attr);
    }
    static generateSelectAttributes(product) {
        var _a, _b;
        const { color, attributeSecondary, isSellOutOfStock } = product;
        const filterToCompare = {
            'color.id': color === null || color === void 0 ? void 0 : color.id,
            'attributeSecondary.id': attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id,
        };
        const productVariations = product.color
            ? this.filterVariations(product.variations, filterToCompare, 'attribute')
            : product.variations;
        const attributes = this.filterAttributesByUnique(productVariations, 'attribute');
        if (!attributes.length)
            return null;
        return {
            placeholder: this.placeholderDisabled,
            label: (_a = product.attribute) === null || _a === void 0 ? void 0 : _a.attributeName,
            options: attributes.map(({ balance, id, name, releaseDate }) => ({
                name,
                value: id,
                disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
            })),
            selectType: 'attributes',
            currentValue: this.isFirstLoad ? undefined : (_b = product.attribute) === null || _b === void 0 ? void 0 : _b.id,
        };
    }
    static generateSelectAttributesSecondary(product) {
        var _a, _b;
        const { color, attribute, isSellOutOfStock } = product;
        const filterToCompare = { 'color.id': color === null || color === void 0 ? void 0 : color.id, 'attribute.id': attribute === null || attribute === void 0 ? void 0 : attribute.id };
        const listAttributesSecondary = this.filterAttributesByUnique(this.filterVariations(product.variations, filterToCompare, 'attributeSecondary'), 'attributeSecondary');
        if (!listAttributesSecondary.length)
            return null;
        return {
            placeholder: this.placeholderDisabled,
            label: (_a = product.attributeSecondary) === null || _a === void 0 ? void 0 : _a.attributeName,
            options: listAttributesSecondary.map(({ name, balance, id, releaseDate }) => ({
                value: id,
                name,
                disabled: this.checkAttributeOptionDisabled({ balance, releaseDate, isSellOutOfStock }),
            })),
            selectType: 'secondaryAttributes',
            currentValue: this.isFirstLoad ? undefined : (_b = product.attributeSecondary) === null || _b === void 0 ? void 0 : _b.id,
        };
    }
    static generateSelectColors(product) {
        var _a;
        const listColors = this.filterAttributesByUnique(product.variations, 'color');
        if (!(listColors === null || listColors === void 0 ? void 0 : listColors.length))
            return null;
        return {
            label: 'Cor',
            placeholder: this.placeholderDisabled,
            options: listColors === null || listColors === void 0 ? void 0 : listColors.map(({ balance, id, name, releaseDate }) => ({
                name,
                value: id,
                disabled: this.checkAttributeOptionDisabled({ balance, releaseDate }),
            })),
            currentValue: (_a = product.color) === null || _a === void 0 ? void 0 : _a.id,
            selectType: 'color',
        };
    }
    static filterVariations(variations, filter, attributeTarget) {
        const filterKeys = Object.keys(filter);
        return variations.filter(objVariation => {
            const hasAttr = !attributeTarget || !!objVariation[attributeTarget];
            if (!hasAttr)
                return false;
            return filterKeys.reduce((acc, currentKey) => {
                const valueForCompare = filter[currentKey];
                const value = get(objVariation, currentKey);
                return acc && value === valueForCompare;
            }, true);
        });
    }
    static filterAttributesByUnique(attributesGeneric, attributeTarget) {
        return attributesGeneric
            .filter(attr => !!attr[attributeTarget])
            .reduce((acc, current) => {
            const objItem = current[attributeTarget];
            const index = acc.findIndex(attrAcc => attrAcc.id === objItem.id);
            if (index === -1)
                return [
                    ...acc,
                    Object.assign(Object.assign({}, objItem), { balance: current.balance, releaseDate: current.releaseDate }),
                ];
            return acc;
        }, []);
    }
    static checkAttributeOptionDisabled(data) {
        const { balance, releaseDate, isSellOutOfStock } = data;
        return (!checkHasBalance({ balance, isSellOutOfStock }) || !checkIsOutReleaseDate({ releaseDate }));
    }
}
FrontBuyTogetherAdapter.isFirstLoad = false;
FrontBuyTogetherAdapter.placeholderDisabled = { name: 'Selecione', disabled: true, value: undefined };
//# sourceMappingURL=front-buy-together.adapter.js.map
