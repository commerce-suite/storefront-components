import { getAssetPath, Host, h, } from "@stencil/core";
import { cashbackService } from "./cashback.service";
import { CalculationItemPromotion, } from "./cashback.type";
import { currencyFormat } from "../../utils/utils";
export class Cashback {
    constructor() {
        this.customer_id = undefined;
        this.cashback = undefined;
        this.product = undefined;
        this.credit = undefined;
    }
    async componentWillLoad() {
        await this.getCalculation();
    }
    async onCustomerIdChange() {
        await this.getCalculation();
    }
    async onProductChange() {
        await this.getCalculation();
    }
    async getCalculation() {
        var _a;
        const valid = this.cashback && this.cashback.active && this.cashback.show_credit_preview;
        if (!this.product || !valid)
            return;
        const { id, price } = this.product;
        const data = {
            customer_id: this.customer_id,
            exclude_promotions: [CalculationItemPromotion.CASHBACK_DEBIT],
            items: [
                {
                    id,
                    quantity: 1,
                    price,
                    discount: 0,
                },
            ],
        };
        const res = await cashbackService.calculate(data);
        const byCredit = (item) => CalculationItemPromotion.CASHBACK_CREDIT === item.promotion;
        this.credit = (_a = res.items) === null || _a === void 0 ? void 0 : _a.find(byCredit);
    }
    render() {
        return (h(Host, { key: '7a9b5e42944d2dc68c03b8651f8ce4dd921b5f2b' }, this.credit && this.credit.value > 0 ? (h("div", { class: "cashback" }, h("img", { src: getAssetPath('./assets/icons/cashback.svg') }), h("span", null, "Na compra deste produto, voc\u00EA receber\u00E1 at\u00E9", ' ', h("strong", null, currencyFormat(this.credit.value)), " em Cashback!"))) : null));
    }
    static get is() { return "cashback-credit"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["cashback.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["cashback.css"]
        };
    }
    static get properties() {
        return {
            "customer_id": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "customer_id",
                "reflect": false
            },
            "cashback": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICashback | null",
                    "resolved": "ICashback",
                    "references": {
                        "ICashback": {
                            "location": "import",
                            "path": "./cashback.type",
                            "id": "src/components/cashback/cashback.type.ts::ICashback"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            },
            "product": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "{ id: number; price: number }",
                    "resolved": "{ id: number; price: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "credit": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "customer_id",
                "methodName": "onCustomerIdChange"
            }, {
                "propName": "product",
                "methodName": "onProductChange"
            }];
    }
}
//# sourceMappingURL=cashback.js.map
