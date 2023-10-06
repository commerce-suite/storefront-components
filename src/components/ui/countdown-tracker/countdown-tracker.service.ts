import type { ICountdownTrackerService } from './ICountdownTrackerService';
import type { DateDifferenceType } from './countdown-tracker.type';

export class CountdownTrackerService implements ICountdownTrackerService {
  constructor(
    private startDate: Date,
    private targetDate: Date,
  ) {
    if (isNaN(startDate.getTime()) || isNaN(targetDate.getTime())) {
      throw new Error('Invalid date');
    }
  }

  getMillisecondsDifference(): number {
    return this.targetDate.getTime() - this.startDate.getTime();
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
