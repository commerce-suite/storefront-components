import { ProductFieldService } from '@uxshop/storefront-core';
import { ReleaseDate } from '@uxshop/storefront-core/dist/types/ReleaseDateTypes';

export class LaunchCountdownService {
  static async getReleaseDateByProduct(
    productId: string,
    variationId?: string,
  ): Promise<ReleaseDate | null> {
    try {
      if (!productId) return null;
      const product = await ProductFieldService.getById(productId, {
        releaseDate: { now: true, releaseDate: true },
        variations: { id: true, releaseDate: { now: true, releaseDate: true } },
      });
      if (!product) return null;
      let variation = product;
      if (variationId) {
        variation = product.variations?.find(({ id }) => id === variationId) || product;
      }
      const { releaseDate } = variation;
      return releaseDate;
    } catch {
      return null;
    }
  }
}
