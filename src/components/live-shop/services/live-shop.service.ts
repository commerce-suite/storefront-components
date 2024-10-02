import { LiveShopService, ProductService } from '@uxshop/storefront-core';
import { LiveShop } from '@uxshop/storefront-core/dist/modules/live-shop/LiveShopTypes';

export class LiveShopServiceRepo {
  static async getLiveShop(hashRoom: string): Promise<LiveShop> {
    return await LiveShopService.getByHash(hashRoom);
  }

  static async getLiveShopProducts(productIds: number[]) {
    return await ProductService.getList({
      fields: ['name', 'images { src }', 'price', 'priceCompare', 'id'],
      filter: { productIds },
    });
  }
}
