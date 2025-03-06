export class FrontCountdownService {
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
//# sourceMappingURL=front-countdown.service.js.map
