import type { ICountdownService } from './ICountdownService';
import type { DateDifferenceType } from './launch-countdown.type';

export class CountdownService implements ICountdownService {
  private oneSecond = 1000;
  private intervalId: ReturnType<typeof setInterval>;

  constructor(
    private initialDate: Date,
    private targetDate: Date,
  ) {
    if (isNaN(initialDate.getTime()) || isNaN(targetDate.getTime())) {
      throw new Error('Invalid date');
    }

    this.startCountdown();
  }

  private incrementOneSecond(): void {
    this.initialDate = new Date(this.initialDate.getTime() + this.oneSecond);
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
    return this.targetDate.getTime() - this.initialDate.getTime();
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
