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
        return (h(Host, { key: '7d0df7dde3ce33daa768cd22e9e055d668dc7e88', class: "timer" }, h("div", { key: '41febacb37afa4da3bbb81132eaa578f371ada0d', class: "cell" }, h("p", { key: 'df6efd229c66d178f0cd590168bbb9be7b73ee41', class: "time" }, this.days), h("p", { key: 'e96cb5915fb5854bf4698a57ddb587c7d1ca8dba', class: "unit" }, "dias")), h("div", { key: '2f2cc14127eb4aefe7fd8a2e2c6ff8c06dd454e1', class: "cell" }, h("p", { key: '847729f3be44be1a84584c399a3e456b764db101', class: "time" }, this.hours), h("p", { key: 'cb49d27ddacc4d4839f5dd480be89ed35e91209a', class: "unit" }, "horas")), h("div", { key: '04a68b5a51427d16eb362709f65c9c0f911e726c', class: "cell" }, h("p", { key: 'cd501cb0d7bcb404b86b46cefc8e7e031945e3ef', class: "time" }, " ", this.minutes), h("p", { key: '39c0f7c293407174eaa80b093f3a9ed48ad13777', class: "unit" }, "minutos")), h("div", { key: '1c7832dc2a4e5a223ab86d847282f2ffcf1deb5e', class: "cell" }, h("p", { key: '4b20c70325ed29a1bb7ec565eb62066a623b9cb3', class: "time" }, this.seconds), h("p", { key: 'bdd01c3d87c75807bff2687978c399af5d4fd717', class: "unit" }, "segundos"))));
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