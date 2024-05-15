import { buyTogetherData } from "./buy-together-data.mock";
import { FrontBuyTogetherAdapter } from "../front-buy-together.adapter";
class FrontBuyTogetherServiceMock {
    changeProductOptions(data, productTarget) {
        throw new Error(`Method not implemented. ${{ data, productTarget }}`);
    }
    changeColor(colorValue, productTarget) {
        throw new Error(`Method not implemented. ${{ colorValue, productTarget }}`);
    }
    changeAttribute(colorValue, productTarget) {
        throw new Error(`Method not implemented. ${{ colorValue, productTarget }}`);
    }
    changeAttributeSecondary(colorValue, productTarget) {
        throw new Error(`Method not implemented. ${{ colorValue, productTarget }}`);
    }
    async getBuyTogetherByProductId() {
        return FrontBuyTogetherAdapter.adapterIBuyTogetherToComponentData(buyTogetherData);
    }
}
export { FrontBuyTogetherServiceMock as FrontBuyTogetherService };
//# sourceMappingURL=front-buy-together.service.js.map
