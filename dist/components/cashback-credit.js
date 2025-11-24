import { proxyCustomElement, HTMLElement, h, Host, getAssetPath } from '@stencil/core/internal/client';
import { c as currencyFormat } from './utils.js';

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
const CashbackCreditStyle0 = cashbackCss;

const Cashback = /*@__PURE__*/ proxyCustomElement(class Cashback extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get watchers() { return {
        "customer_id": ["onCustomerIdChange"],
        "product": ["onProductChange"]
    }; }
    static get style() { return CashbackCreditStyle0; }
}, [2, "cashback-credit", {
        "customer_id": [2],
        "cashback": [16],
        "product": [1040],
        "credit": [32]
    }, undefined, {
        "customer_id": ["onCustomerIdChange"],
        "product": ["onProductChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["cashback-credit"];
    components.forEach(tagName => { switch (tagName) {
        case "cashback-credit":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Cashback);
            }
            break;
    } });
}

const CashbackCredit = Cashback;
const defineCustomElement = defineCustomElement$1;

export { CashbackCredit, defineCustomElement };

//# sourceMappingURL=cashback-credit.js.map