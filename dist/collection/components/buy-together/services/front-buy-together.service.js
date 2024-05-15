import { BuyTogetherService } from "@uxshop/storefront-core";
import { FrontBuyTogetherAdapter } from "./front-buy-together.adapter";
import { FrontBuyTogetherFilter } from "./front-buy-together.filter";
import { FrontBuyTogetherResponse } from "./front-buy-together-response";
export class FrontBuyTogetherService {
    async getBuyTogetherByProductId(productId, variationId) {
        const responseData = await BuyTogetherService.getByProductIdWithValidPromotionDate(productId);
        if (!responseData)
            return null;
        const buyTogetherData = new FrontBuyTogetherFilter(responseData);
        return buyTogetherData
            .changeByVariationSelected(variationId)
            .applyFilters()
            .adapterToComponentData().getComponentData;
    }
    async getOnlyPivotProducts(productIds) {
        const responseData = await BuyTogetherService.getByProductIds(productIds);
        const productsPivot = responseData.map(response => {
            const adaptedBuyTogether = new FrontBuyTogetherResponse(response).adapterToComponentData();
            const filteredUniqueProducts = adaptedBuyTogether.getComponentData.products.filter(product => !productIds.includes(+product.productId));
            return filteredUniqueProducts;
        });
        return productsPivot.reduce((acc, current) => {
            return acc.concat(current);
        }, []);
    }
    changeProductOptions(data, productTarget) {
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
    changeColor(colorValue, productTarget) {
        const variationByColor = productTarget.variations.find(({ color }) => (color === null || color === void 0 ? void 0 : color.id) === Number(colorValue));
        const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation(Object.assign(Object.assign({}, productTarget), { color: variationByColor.color }));
        const productTargetUpdated = Object.assign(Object.assign({}, currentVariation), { variations: productTarget.variations });
        const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
        return { productTargetUpdated, productCard };
    }
    changeAttribute(attributeValue, productTarget) {
        const variationByAttribute = productTarget.variations.find(({ attribute }) => (attribute === null || attribute === void 0 ? void 0 : attribute.id) === Number(attributeValue));
        const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation(Object.assign(Object.assign({}, productTarget), { attribute: (variationByAttribute === null || variationByAttribute === void 0 ? void 0 : variationByAttribute.attribute) || productTarget.attribute }));
        const productTargetUpdated = Object.assign(Object.assign({}, (currentVariation || productTarget)), { variations: productTarget.variations });
        const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
        return { productTargetUpdated, productCard };
    }
    changeAttributeSecondary(attributeValue, productTarget) {
        const variationByAttributeSecondary = productTarget.variations.find(({ attributeSecondary }) => (attributeSecondary === null || attributeSecondary === void 0 ? void 0 : attributeSecondary.id) === Number(attributeValue));
        const currentVariation = FrontBuyTogetherAdapter.getValuesByVariation(Object.assign(Object.assign({}, productTarget), { attributeSecondary: variationByAttributeSecondary.attributeSecondary }));
        const productTargetUpdated = Object.assign(Object.assign({}, currentVariation), { variations: productTarget.variations });
        const productCard = FrontBuyTogetherAdapter.adapterToProductCard(productTargetUpdated);
        return { productTargetUpdated, productCard };
    }
    async addToCart(variantIds) {
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
                }
                else {
                    reject(request.status);
                }
            };
            request.send(body);
        });
    }
}
//# sourceMappingURL=front-buy-together.service.js.map
