'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ccb6baf7.js');
const utils = require('./utils-f2fc9e55.js');

const exec = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(method, url, true);
        req.setRequestHeader('X-Ajax', 'true');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = function () {
            if (req.status >= 200 && req.status < 300) {
                resolve(JSON.parse(req.responseText));
            }
            else {
                reject(req.status);
            }
        };
        req.send(data ? JSON.stringify(data) : null);
    });
};
const cashbackService = {
    async calculate(data) {
        return await exec('POST', `${window.dooca.base_url}/action/promotions/calculate`, data);
    },
};

var CalculationItemPromotion;
(function (CalculationItemPromotion) {
    CalculationItemPromotion["CASHBACK_CREDIT"] = "cashback_credit";
    CalculationItemPromotion["CASHBACK_DEBIT"] = "cashback_debit";
})(CalculationItemPromotion || (CalculationItemPromotion = {}));

const cashbackCss = ".cashback.sc-cashback-credit{display:inline-flex}.cashback.sc-cashback-credit img.sc-cashback-credit{margin-right:0.5rem}.cashback.sc-cashback-credit span.sc-cashback-credit{color:var(--success)}";

const Cashback = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '7a9b5e42944d2dc68c03b8651f8ce4dd921b5f2b' }, this.credit && this.credit.value > 0 ? (index.h("div", { class: "cashback" }, index.h("img", { src: index.getAssetPath('./assets/icons/cashback.svg') }), index.h("span", null, "Na compra deste produto, voc\u00EA receber\u00E1 at\u00E9", ' ', index.h("strong", null, utils.currencyFormat(this.credit.value)), " em Cashback!"))) : null));
    }
    static get watchers() { return {
        "customer_id": ["onCustomerIdChange"],
        "product": ["onProductChange"]
    }; }
};
Cashback.style = cashbackCss;

exports.cashback_credit = Cashback;

//# sourceMappingURL=cashback-credit.cjs.entry.js.map