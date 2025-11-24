import { ProductFieldService } from "@uxshop/storefront-core";
export class LaunchCountdownService {
    static async getReleaseDateByProduct(productId, variationId) {
        var _a;
        try {
            if (!productId)
                return null;
            const product = await ProductFieldService.getById(productId, {
                releaseDate: { now: true, releaseDate: true },
                variations: { id: true, releaseDate: { now: true, releaseDate: true } },
            });
            if (!product)
                return null;
            let variation = product;
            if (variationId) {
                variation = ((_a = product.variations) === null || _a === void 0 ? void 0 : _a.find(({ id }) => id === variationId)) || product;
            }
            const { releaseDate } = variation;
            return releaseDate;
        }
        catch (_b) {
            return null;
        }
    }
}
//# sourceMappingURL=launch-countdown.service.js.map
