'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-faa0dd42.js');

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

const FrontCountdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.countdownFinished = index.createEvent(this, "countdownFinished", 7);
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
        return (index.h(index.Host, { key: '04cc70aed7a5eaaaa2325d8d96ac1e744a68dd23', class: "timer" }, index.h("div", { key: 'e4d04ec48eb0c114540f71819c743e14e102305f', class: "cell" }, index.h("p", { key: 'afc437249cffd320be0d65e3f6f582b3afb7f49b', class: "time" }, this.days), index.h("p", { key: '0e1e5d2c98f4d677350895eed4617c8b520c1b6f', class: "unit" }, "dias")), index.h("div", { key: '891210acdae9d75512d11dbd467ab830702040d7', class: "cell" }, index.h("p", { key: 'a1fa2ffd7092112cccd7604545162fdb053307ad', class: "time" }, this.hours), index.h("p", { key: '7af131c576ce06c3020310bdb337361ffbe165b4', class: "unit" }, "horas")), index.h("div", { key: 'd4a2ccab7e79d76ab04c5fa6bfa039f887910e97', class: "cell" }, index.h("p", { key: 'b85bff0d26e9b30370ce3d44aede10d26bf6f191', class: "time" }, " ", this.minutes), index.h("p", { key: 'fa889898cdac56f85d6ea3d914f0b00bcfc79d5f', class: "unit" }, "minutos")), index.h("div", { key: '0b13a82c2d5faa354a720631b04d17795dc1c231', class: "cell" }, index.h("p", { key: 'd43b129896d4c79e3e8635407ddad009f8041894', class: "time" }, this.seconds), index.h("p", { key: '91f85c7e86df910e376079163602ccbac3e51f34', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
};
FrontCountdown.style = FrontCountdownStyle0;

exports.front_countdown = FrontCountdown;

//# sourceMappingURL=front-countdown.cjs.entry.js.map