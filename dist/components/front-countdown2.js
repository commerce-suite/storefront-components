import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

class FrontCountdownService {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.oneSecond = 1000;
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error('Invalid date');
        }
        this.startCountdown();
    }
    incrementOneSecond() {
        this.startDate = new Date(this.startDate.getTime() + this.oneSecond);
    }
    startCountdown() {
        this.intervalId = setInterval(() => {
            this.incrementOneSecond();
            if (this.isCountdownFinished()) {
                this.stopCountdown();
            }
        }, this.oneSecond);
    }
    stopCountdown() {
        clearInterval(this.intervalId);
    }
    getMillisecondsDifference() {
        return this.endDate.getTime() - this.startDate.getTime();
    }
    isCountdownFinished() {
        const diff = this.getMillisecondsDifference();
        return diff <= 0;
    }
    getTimeDifference() {
        const diff = this.getMillisecondsDifference();
        const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hoursDiff = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsDiff = Math.floor((diff % (1000 * 60)) / 1000);
        return {
            daysDiff,
            hoursDiff,
            minutesDiff,
            secondsDiff,
        };
    }
}

const frontCountdownCss = ".sc-front-countdown-h{display:block}";
const FrontCountdownStyle0 = frontCountdownCss;

const FrontCountdown = /*@__PURE__*/ proxyCustomElement(class FrontCountdown extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.countdownFinished = createEvent(this, "countdownFinished", 7);
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
        return (h(Host, { key: '0e57cd02db0d613b4e071ef412693a87d2041aef', class: "timer" }, h("div", { key: '6698c019604f66c47b489a32784108dd6a443cd9', class: "cell" }, h("p", { key: 'a7d2b87a71a15630c748e553477d685f3314e9ad', class: "time" }, this.days), h("p", { key: '23c38397aa663d1aedc84c306cefc703dde92353', class: "unit" }, "dias")), h("div", { key: '55290bcb462b315089ca0d99821a2276f4ba7259', class: "cell" }, h("p", { key: 'ac7c2a1283499289642696ba845f8d2556dc6ed7', class: "time" }, this.hours), h("p", { key: '28cfa0a7cef6f1f06eec5062c56d0f73e7fb0c30', class: "unit" }, "horas")), h("div", { key: '9b8680fbac63d66c7940772a4d1b3e10253caae3', class: "cell" }, h("p", { key: '4389abac6b5c5ab10e439fea565b90e2d7d6cb40', class: "time" }, " ", this.minutes), h("p", { key: '914981949287eecd80933d502164bc7d9b4ddab8', class: "unit" }, "minutos")), h("div", { key: 'de6a718cbe240583cad21a53c3b4bb58174ad6a6', class: "cell" }, h("p", { key: '51b7e12a8fcdeb5a9bcc63bb587cb8e552d8b012', class: "time" }, this.seconds), h("p", { key: '6b139f2f10c64d5a7a483a444266db83d7730d90', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
    static get style() { return FrontCountdownStyle0; }
}, [2, "front-countdown", {
        "startDate": [1025, "start-date"],
        "endDate": [1025, "end-date"],
        "days": [32],
        "hours": [32],
        "minutes": [32],
        "seconds": [32]
    }, undefined, {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["front-countdown"];
    components.forEach(tagName => { switch (tagName) {
        case "front-countdown":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FrontCountdown);
            }
            break;
    } });
}

export { FrontCountdown as F, defineCustomElement as d };

//# sourceMappingURL=front-countdown2.js.map