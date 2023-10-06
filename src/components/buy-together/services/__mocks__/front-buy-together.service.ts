/* eslint-disable @typescript-eslint/no-unused-vars */
import { IChangeResult, IFrontBuyTogetherService } from '../front-buy-together.type';
import { IBuyTogetherComponentData } from '../../buy-together.type';
import { buyTogetherData } from './buy-together-data.mock';
import {
  BuyTogether,
  GqlProduct,
} from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { FrontBuyTogetherAdapter } from '../front-buy-together.adapter';
import { IInputSelectDataEvent } from '../../../../components';

class FrontBuyTogetherServiceMock implements IFrontBuyTogetherService {
  changeProductOptions(data: IInputSelectDataEvent, productTarget: GqlProduct): IChangeResult {
    throw new Error('Method not implemented.');
  }

  changeColor(colorValue: string, productTarget: GqlProduct): IChangeResult {
    throw new Error('Method not implemented.');
  }

  changeAttribute(colorValue: string, productTarget: GqlProduct): IChangeResult {
    throw new Error('Method not implemented.');
  }

  changeAttributeSecondary(colorValue: string, productTarget: GqlProduct): IChangeResult {
    throw new Error('Method not implemented.');
  }

  public async getBuyTogetherByProductId(): Promise<IBuyTogetherComponentData> {
    return FrontBuyTogetherAdapter.adapterIBuyTogehterToComponentData(
      buyTogetherData as BuyTogether,
    );
  }
}
export { FrontBuyTogetherServiceMock as FrontBuyTogetherService };
