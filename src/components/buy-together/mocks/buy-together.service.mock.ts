import { IBuyTogetherData } from '../buy-together.type';
import productMock from './product.mock';

export class BuyTogetherServiceMock {
  private buyTogetherDataMock: IBuyTogetherData = {
    productBump: [productMock, productMock, productMock],
    productMain: productMock,
  };

  getBuyTogether(): Promise<IBuyTogetherData> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.buyTogetherDataMock);
      }, 1500);
    });
  }
}
