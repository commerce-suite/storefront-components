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
        return (h(Host, { key: '5b1dfb40765505cd2bbb293806e97aec009b1289', class: "timer" }, h("div", { key: 'bc7e456f03f1361928003d36d10b65617ea17c7f', class: "cell" }, h("p", { key: '2ba71bab0da18d1bb41532c0729b0042d2bec1a9', class: "time" }, this.days), h("p", { key: '7dd9296f61b9265be15152bdbcd878717a7b7c0b', class: "unit" }, "dias")), h("div", { key: 'edc65fccf932780d1b3f3c06dcbfa16c3fce8247', class: "cell" }, h("p", { key: '39ae459310263ba4f4fbd1d3f6b73da6ff516e67', class: "time" }, this.hours), h("p", { key: 'e532962fec3f42614764d4eb1c2bf2c1ee27c2c5', class: "unit" }, "horas")), h("div", { key: '9f3dff884babac3eddfde49b59eaa784ac7ca0e1', class: "cell" }, h("p", { key: 'a9b546446e685519ec332ad49e43e05e3122eb48', class: "time" }, " ", this.minutes), h("p", { key: 'ff868bec07989d20a1924757eeb15817b305074c', class: "unit" }, "minutos")), h("div", { key: 'afaaf31a46555c8430ed5b28b7c9857779703955', class: "cell" }, h("p", { key: '49b7b0899889da791bcc4faffe8b6adb7b48bd22', class: "time" }, this.seconds), h("p", { key: '71aa7019d7c242eab2304b7d71a1a345379e87f4', class: "unit" }, "segundos"))));
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
