import { newSpecPage } from "@stencil/core/testing";
import { cashbackService } from "../cashback.service";
import { Cashback } from "../cashback";
import { cashbackMock } from "../__mocks__/cashback.mock";
import { calculationMock } from "../__mocks__/calculation.mock";
import { h } from "@stencil/core";
it('should render and have correct rootInstance', async () => {
    jest.spyOn(cashbackService, 'calculate').mockResolvedValue(calculationMock);
    const page = await newSpecPage({
        components: [Cashback],
        template: () => (h("cashback-credit", { id: "cashback", customer_id: 1, cashback: cashbackMock, product: {
                id: 1,
                price: 100,
            } })),
    });
    expect(page.root).toEqualHtml(`
        <cashback-credit id="cashback">
            <div class="cashback">
                <img src="/assets/icons/cashback.svg">
                <span>
                    Na compra deste produto, você receberá até <strong>R$&nbsp;10,00</strong> em Cashback!
                </span>
            </div>
        </cashback-credit>
    `);
});
//# sourceMappingURL=cashback.spec.js.map
