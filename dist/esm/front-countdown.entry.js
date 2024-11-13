import { r as registerInstance, c as createEvent, h, H as Host } from './index-cb0223a2.js';

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
        return (h(Host, { key: '37a6441ead0d543032f47b77b8537a8eee3ec298', class: "timer" }, h("div", { key: 'a99e9f459d1248bd7aba7abffdc004bbfbdafc28', class: "cell" }, h("p", { key: '9368ce32dd2f92662874005ec85287a877b5b172', class: "time" }, this.days), h("p", { key: '4b1595eaa22fb401e65ca7f41617eb355a59104f', class: "unit" }, "dias")), h("div", { key: 'f60c08be20c3c3b2b432f57108452298e930f581', class: "cell" }, h("p", { key: 'b73cfd4165fe1ff257b4f1b737f863f6a867ca40', class: "time" }, this.hours), h("p", { key: '234f22e1d824cf0c6f72f2987eed0ea19a1ab504', class: "unit" }, "horas")), h("div", { key: '2ddf1177ef8058acc038ba131862c6234c58e70b', class: "cell" }, h("p", { key: '50676956dc7d171afb7d7be70c334ef48769fc60', class: "time" }, " ", this.minutes), h("p", { key: 'bad04f1d75d0ad69cbdd41912e82379cfd5dbf81', class: "unit" }, "minutos")), h("div", { key: '64fd979d64ffc5ea84c50e9f5d23e7be8f286047', class: "cell" }, h("p", { key: '45f7a375c24658c63baa4d83c27c7a225bd656d3', class: "time" }, this.seconds), h("p", { key: '9bd89c3d82f8eaa94287bc52b77abed1e5fb9fce', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
};
FrontCountdown.style = FrontCountdownStyle0;

export { FrontCountdown as front_countdown };

//# sourceMappingURL=front-countdown.entry.js.map