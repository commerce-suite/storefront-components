import { r as registerInstance, c as createEvent, h, H as Host } from './index-b6aa95eb.js';

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
        return (h(Host, { key: '16801cd0dcb288ba7754d3a723d1d7d0410787f8', class: "timer" }, h("div", { key: '60ca60b8fbd901528f55986edf24bc65956682ac', class: "cell" }, h("p", { key: '855e9f6fe72254ff7ec3aaf9c98ef698b6d118bf', class: "time" }, this.days), h("p", { key: 'c51287dd1146855126b51bd817648027468d9b7e', class: "unit" }, "dias")), h("div", { key: '3a3a1add6b8e53c8e17bde98246f4414efbcaafb', class: "cell" }, h("p", { key: '4f4b51b8fd2a1cdf56f2e7f70ca44b71d7c577e5', class: "time" }, this.hours), h("p", { key: '71532d5ebe2856863ed9aac44f2a430c98280792', class: "unit" }, "horas")), h("div", { key: '4992ee75523ccf7da592c2b60d65d6ce593ea6fb', class: "cell" }, h("p", { key: '44451febfc41182f60d4cd1b9cf8652b3ac8a188', class: "time" }, " ", this.minutes), h("p", { key: 'ef5f6711719d0654bdf830d8dc4fd5fa4b5c0660', class: "unit" }, "minutos")), h("div", { key: '8502e1e4c5f526db65878c6fa88a787b50dfb96f', class: "cell" }, h("p", { key: '5d2698c589c3231e6bc03dcd11ec98c52a06cc9b', class: "time" }, this.seconds), h("p", { key: 'b278ed3d23d0002db3f061457c2ec6330df66cd2', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
};
FrontCountdown.style = FrontCountdownStyle0;

export { FrontCountdown as front_countdown };

//# sourceMappingURL=front-countdown.entry.js.map