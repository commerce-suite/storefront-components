'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ed1a22c2.js');
const index$1 = require('./index-0d53d433.js');

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
        return (index.h(index.Host, { key: '7d0df7dde3ce33daa768cd22e9e055d668dc7e88', class: "timer" }, index.h("div", { key: '41febacb37afa4da3bbb81132eaa578f371ada0d', class: "cell" }, index.h("p", { key: 'df6efd229c66d178f0cd590168bbb9be7b73ee41', class: "time" }, this.days), index.h("p", { key: 'e96cb5915fb5854bf4698a57ddb587c7d1ca8dba', class: "unit" }, "dias")), index.h("div", { key: '2f2cc14127eb4aefe7fd8a2e2c6ff8c06dd454e1', class: "cell" }, index.h("p", { key: '847729f3be44be1a84584c399a3e456b764db101', class: "time" }, this.hours), index.h("p", { key: 'cb49d27ddacc4d4839f5dd480be89ed35e91209a', class: "unit" }, "horas")), index.h("div", { key: '04a68b5a51427d16eb362709f65c9c0f911e726c', class: "cell" }, index.h("p", { key: 'cd501cb0d7bcb404b86b46cefc8e7e031945e3ef', class: "time" }, " ", this.minutes), index.h("p", { key: '39c0f7c293407174eaa80b093f3a9ed48ad13777', class: "unit" }, "minutos")), index.h("div", { key: '1c7832dc2a4e5a223ab86d847282f2ffcf1deb5e', class: "cell" }, index.h("p", { key: '4b20c70325ed29a1bb7ec565eb62066a623b9cb3', class: "time" }, this.seconds), index.h("p", { key: 'bdd01c3d87c75807bff2687978c399af5d4fd717', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
};
FrontCountdown.style = FrontCountdownStyle0;

class LaunchCountdownService {
    static async getReleaseDateByProduct(productId, variationId) {
        var _a;
        try {
            if (!productId)
                return null;
            const product = await index$1.ProductFieldService.getById(productId, {
                releaseDate: { now: true, releaseDate: true },
                variations: { id: true, releaseDate: { now: true, releaseDate: true } },
            });
            if (!product)
                return null;
            let variation = product;
            if (variationId) {
                variation = ((_a = product.variations) === null || _a === void 0 ? void 0 : _a.find(({ id }) => id === variationId)) || product;
            }
            const { releaseDate } = variation;
            return releaseDate;
        }
        catch (_b) {
            return null;
        }
    }
}

const launchCountdownCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.launch-countdown-container{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--fc-color-secondary);padding:var(--fc-gap-grid);border-radius:var(--fc-border-radius)}.launch-countdown-container>.launch-countdown-container-header{display:flex;flex-direction:column;align-items:center;color:var(--fc-color-white);background-color:transparent;margin-bottom:16px;line-height:1.5;text-align:center}.launch-countdown-container>.launch-countdown-container-header>.launch-countdown-container-title{margin:0;margin-bottom:4px;font-weight:var(--fc-m-fw)}.launch-countdown-container>.launch-countdown-container-header>.launch-countdown-container-description{margin:0;font-size:12px}.launch-countdown-container>front-countdown.timer{display:flex;flex-wrap:wrap;--variations-gap:16px;gap:var(--variations-gap)}.launch-countdown-container>front-countdown.timer>.cell{display:flex;flex-direction:column;align-items:center;min-width:calc(50% - var(--variations-gap));border-radius:16px;background-color:#fff;color:var(--fc-color-secondary);padding:6px}.launch-countdown-container>front-countdown.timer>.cell>.time{font-size:46px;font-weight:700;margin:0}.launch-countdown-container>front-countdown.timer>.cell>.unit{font-size:12px;margin:0}@media (min-width: 1024px){.launch-countdown-container>front-countdown.timer>.cell{min-width:80px}.launch-countdown-container>front-countdown.timer>.cell>.time{font-size:40px}}";
const LaunchCountdownStyle0 = launchCountdownCss;

const LaunchCountdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.countdownLoaded = index.createEvent(this, "countdownLoaded", 7);
        this.productId = undefined;
        this.variationId = undefined;
        this.dataTargetDate = undefined;
        this.dataInitialDate = undefined;
        this.dataCountdownTitle = 'Agora falta muito pouco!';
        this.dataDescription = 'O produto que você tanto espera será liberado em breve.';
        this.dateTime = { endDate: null, startDate: null };
    }
    setDateTimeByProps() {
        this.dateTime = {
            startDate: this.dataInitialDate,
            endDate: this.dataTargetDate,
        };
    }
    async loadCountDown() {
        const productReleaseDate = await LaunchCountdownService.getReleaseDateByProduct(this.productId, this.variationId);
        if (!productReleaseDate) {
            this.countdownLoaded.emit({ releaseDateActive: false });
            this.setDateTimeByProps();
            return;
        }
        const { now, releaseDate } = productReleaseDate;
        this.countdownLoaded.emit({ releaseDateActive: Number(now) < Number(releaseDate) });
        this.dateTime = {
            startDate: now,
            endDate: releaseDate,
        };
    }
    componentWillLoad() {
        this.loadCountDown();
    }
    watchVariationIdChange() {
        this.loadCountDown();
    }
    watchProductIdChange() {
        this.loadCountDown();
    }
    render() {
        return (index.h(index.Host, { key: 'b5222efedc7637599725ceeec7ce9817567f48ae' }, index.h("div", { key: '4a2bf59691e27d81c7c4aacd050d6d168ebdbe10', class: "launch-countdown-container" }, index.h("div", { key: '2e288b294802a75a710a7896c8484b161ace0bc6', class: "launch-countdown-container-header" }, index.h("h3", { key: '2fd3d6689ab670675adf87507250734b75c55db7', class: "launch-countdown-container-title" }, this.dataCountdownTitle), index.h("p", { key: '87a180a6bd19d8d42faadab0929dad957c6d5a78', class: "launch-countdown-container-description" }, this.dataDescription)), index.h("front-countdown", { key: '63245f4238b0f3b131005a63a9107dc906e0aee6', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
    }
    static get watchers() { return {
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
};
LaunchCountdown.style = LaunchCountdownStyle0;

exports.front_countdown = FrontCountdown;
exports.launch_countdown = LaunchCountdown;

//# sourceMappingURL=front-countdown_2.cjs.entry.js.map