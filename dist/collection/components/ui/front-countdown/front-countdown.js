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
        return (h(Host, { key: '3ba9431de03eab99b3bc52197dd45e7a2a04069d', class: "timer" }, h("div", { key: 'd67a172ae0ebc0bc7c231dd0ca0ee4906e5b3c09', class: "cell" }, h("p", { key: 'a6503f200743684d9c3d203cef814366317609cd', class: "time" }, this.days), h("p", { key: 'd76596a7ef3e34acb7b321e9267d973f3d79c253', class: "unit" }, "dias")), h("div", { key: '0d53523df5ae725acb8047e8c1ce0871af490a06', class: "cell" }, h("p", { key: 'f21989ddf99dcd0653734d81b9ae265be906de26', class: "time" }, this.hours), h("p", { key: 'd226108b1f387fd3b9794a27c43ef005359902dd', class: "unit" }, "horas")), h("div", { key: 'cd576809c6b8c2b6e18da1b1c0198c0fe395bb03', class: "cell" }, h("p", { key: 'c6c9eb66f844628b897786a74b429f11fdcb42e9', class: "time" }, " ", this.minutes), h("p", { key: '81a1ec91beb9dad0e78ba4da3bf3b4d6828425f0', class: "unit" }, "minutos")), h("div", { key: '99bacc5910542b809e50491c0cdafad8a2820715', class: "cell" }, h("p", { key: '67df970ed92727c77c3870a178e9239d409f7f40', class: "time" }, this.seconds), h("p", { key: '1a4d320f7d5ed5833c64f175b86787c5a68b02ec', class: "unit" }, "segundos"))));
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
