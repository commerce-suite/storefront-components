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
        return (h(Host, { key: '5ba0e21d3b0c921f587d2fafeeb3acc232fcc8c5', class: "timer" }, h("div", { key: '259ba405576b33a175de29c28db062ae2e1fc14b', class: "cell" }, h("p", { key: '5e1dfa501cd7ad281b9d0ceec5da4f8d9ec267e1', class: "time" }, this.days), h("p", { key: 'bda0f34d9ed20737307627b1edc8692bf3d7d492', class: "unit" }, "dias")), h("div", { key: '9e0c344630d79aa5e88d310ef9d9aca52b4266c3', class: "cell" }, h("p", { key: '26ca183f58ba041e68fa3a6775cda1e7c25d55ea', class: "time" }, this.hours), h("p", { key: 'e772f7e238b1ebe071b248a9235ce6fe70d9ecc3', class: "unit" }, "horas")), h("div", { key: '715d89927050f97075d5061d30b24013afbf602c', class: "cell" }, h("p", { key: 'b36d1a318543e2342335d06025cbfe8d36b6def0', class: "time" }, " ", this.minutes), h("p", { key: '864ac83f83e084fd1fae07a9276373ed6f00ccbf', class: "unit" }, "minutos")), h("div", { key: 'b842c4306e534d12af6bb493968d53e5ee997244', class: "cell" }, h("p", { key: '79c4da57f6e08f19b1047d7ac0a7e857e1587d45', class: "time" }, this.seconds), h("p", { key: '1437536d184974c8f31baae49782d35524181c27', class: "unit" }, "segundos"))));
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