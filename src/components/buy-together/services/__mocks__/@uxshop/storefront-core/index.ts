import { BuyTogether } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { buyTogetherData } from '../../buy-together-data.mock';

export class BuyTogetherService {
  static getByProductId(): Promise<BuyTogether> {
    return buyTogetherData;
  }
}
