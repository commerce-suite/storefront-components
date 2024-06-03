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
        return (h(Host, { key: '87bb93d588569e2549042e8e6c1fd4fbbf1b1a80', class: "timer" }, h("div", { key: '5511d23f64e780eaa651534ed25cffbebd25d60e', class: "cell" }, h("p", { key: 'fb13ab26c6765807cc49f329f3c2aab87eeb1f11', class: "time" }, this.days), h("p", { key: 'e0eedb35d1d0bb37f864fcf62b6d22c0d33b0aa1', class: "unit" }, "dias")), h("div", { key: 'e07c7efa1afdba5ed142792ecb3407b5ff7aa08c', class: "cell" }, h("p", { key: '5661edce2c7bf6a20678a8e7faf63b41e101d559', class: "time" }, this.hours), h("p", { key: 'df0d2ccfb0f4424447b0f67b0eb98070c45c0b59', class: "unit" }, "horas")), h("div", { key: 'f317415e70b79c9228f2da756d2a36c1932d3198', class: "cell" }, h("p", { key: 'be2c1d43fdef9e439ce78c76f85a6651f5e91abd', class: "time" }, " ", this.minutes), h("p", { key: 'e41503854297e9cc58a46bd49da4d0e5050241d4', class: "unit" }, "minutos")), h("div", { key: '1fc6bd9b3a444b48bdd98a2c4928b78391822bcb', class: "cell" }, h("p", { key: '0a40936838ddf56051d08b8008d886487412950b', class: "time" }, this.seconds), h("p", { key: 'f91bd9c410505c74f5ee5b97e7bb9fe72ba072da', class: "unit" }, "segundos"))));
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
