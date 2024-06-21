import { Host, h, } from "@stencil/core";
import { FrontCountdownService } from "./front-countdown.service";
export class FrontCountdown {
    constructor() {
        this.startDate = undefined;
        this.endDate = undefined;
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
    }
    resetCountdown() {
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
    }
    updateCountdown() {
        if (this.service.isCountdownFinished()) {
            this.resetCountdown();
            this.countdownFinished.emit('finished');
            return;
        }
        const { daysDiff, hoursDiff, minutesDiff, secondsDiff } = this.service.getTimeDifference();
        this.days = String(daysDiff).padStart(2, '0');
        this.hours = String(hoursDiff).padStart(2, '0');
        this.minutes = String(minutesDiff).padStart(2, '0');
        this.seconds = String(secondsDiff).padStart(2, '0');
        requestAnimationFrame(this.updateCountdown.bind(this));
    }
    disconnectedCallback() {
        if (!this.service)
            return;
        this.service.stopCountdown();
    }
    loadCountdown() {
        if (!this.startDate || !this.endDate)
            return;
        try {
            this.service = new FrontCountdownService(new Date(Number(this.startDate) || this.startDate), new Date(Number(this.endDate) || this.endDate));
            this.updateCountdown();
        }
        catch (_a) {
            this.resetCountdown();
        }
    }
    watchStartDateChange() {
        this.loadCountdown();
    }
    watchEndDateChange() {
        this.loadCountdown();
    }
    componentWillLoad() {
        this.loadCountdown();
    }
    render() {
        return (h(Host, { key: '29127fd7a88012a56cfdd63c5171c068d1a4a30d', class: "timer" }, h("div", { key: '8c7c81d819be88038ef304d785b0049e88610e02', class: "cell" }, h("p", { key: 'a3963fa36f60ad5da34958e026394e07aa08156b', class: "time" }, this.days), h("p", { key: 'e33178b25d79b5821120f04c358d1f0cf8971607', class: "unit" }, "dias")), h("div", { key: '9cabe27156a4ab501d80979b522df9118df34ec0', class: "cell" }, h("p", { key: '1a00c8c7f5ea012e63a5721a33832716753eaad6', class: "time" }, this.hours), h("p", { key: '5eb933a8d37d2bbf719e9fea6fb7e8ea831e8f5e', class: "unit" }, "horas")), h("div", { key: 'bca0a9b2df04aba591d9b545e4c1abffde7cfe71', class: "cell" }, h("p", { key: '362af675db9be25685715709f04f6276d67bf20c', class: "time" }, " ", this.minutes), h("p", { key: '094f37ce332a0d5edaf1aeedfc7e790e27f84707', class: "unit" }, "minutos")), h("div", { key: '9c5fae1b21e621caeb10fff98895368d3a4b3719', class: "cell" }, h("p", { key: '7ac40b7f736f163f1e5f70c9fdd8e10a1c1a9c63', class: "time" }, this.seconds), h("p", { key: '8f2b6874d6dfe8a5b24a600ac76f72e1940f91ce', class: "unit" }, "segundos"))));
    }
    static get is() { return "front-countdown"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["front-countdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["front-countdown.css"]
        };
    }
    static get properties() {
        return {
            "startDate": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "start-date",
                "reflect": false
            },
            "endDate": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "end-date",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "days": {},
            "hours": {},
            "minutes": {},
            "seconds": {}
        };
    }
    static get events() {
        return [{
                "method": "countdownFinished",
                "name": "countdownFinished",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "startDate",
                "methodName": "watchStartDateChange"
            }, {
                "propName": "endDate",
                "methodName": "watchEndDateChange"
            }];
    }
}
//# sourceMappingURL=front-countdown.js.map
