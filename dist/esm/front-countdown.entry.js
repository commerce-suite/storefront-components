import { r as registerInstance, c as createEvent, h, H as Host } from './index-eeb6481f.js';

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
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'db79e831d4a9884ccf4cf2b55c9c2cba6c737d07', class: "timer" }, h("div", { key: '12d5528e80ca74e8276e27b82553552439ed05a1', class: "cell" }, h("p", { key: '1436fa9a496e15196d3aa48a7a51cb5c4769ee2a', class: "time" }, this.days), h("p", { key: '49c04d6a486e525cb5bf53878675b43c0bb49675', class: "unit" }, "dias")), h("div", { key: '87c5491104f468a23cf4a44f1784da9fd7c9a8d8', class: "cell" }, h("p", { key: 'd411dfece4d9bd472eae35c8d890d62f57e487bb', class: "time" }, this.hours), h("p", { key: 'f3589acb654c39c97da051ca1124a4e444bfb216', class: "unit" }, "horas")), h("div", { key: 'ce9389342f1b3be49ae050b85067d83bfb9b8f71', class: "cell" }, h("p", { key: '4a7b252e26e7fe4ed2443a1fc08f922f91acd526', class: "time" }, " ", this.minutes), h("p", { key: 'cdf7ca0f5132292456a2ae8babba862628b2a2de', class: "unit" }, "minutos")), h("div", { key: '39d388b6a136e13bfcf6ba458fb23a28ece13c8d', class: "cell" }, h("p", { key: '2f2698bd0a5ed83010eef10487b43f809d60f284', class: "time" }, this.seconds), h("p", { key: '2502c4e49db385067894d64644296fc7f5de4061', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
};
FrontCountdown.style = FrontCountdownStyle0;

export { FrontCountdown as front_countdown };

//# sourceMappingURL=front-countdown.entry.js.map