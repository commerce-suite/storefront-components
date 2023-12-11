import type { ICountdownService } from './ICountdownService';
import type { DateDifferenceType } from './front-countdown.type';

export class FrontCountdownService implements ICountdownService {
  private oneSecond = 1000;
  private intervalId: ReturnType<typeof setInterval>;

  constructor(
    private startDate: Date,
    private endDate: Date,
  ) {
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new Error('Invalid date');
    }
    this.startCountdown();
  }

  private incrementOneSecond(): void {
    this.startDate = new Date(this.startDate.getTime() + this.oneSecond);
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.incrementOneSecond();

      if (this.isCountdownFinished()) {
        this.stopCountdown();
      }
    }, this.oneSecond);
  }

  stopCountdown(): void {
    clearInterval(this.intervalId);
  }

  getMillisecondsDifference(): number {
    return this.endDate.getTime() - this.startDate.getTime();
  }

  isCountdownFinished(): boolean {
    const diff = this.getMillisecondsDifference();
    return diff <= 0;
  }

  getTimeDifference(): DateDifferenceType {
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
