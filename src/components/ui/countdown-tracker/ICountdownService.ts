import { DateDifferenceType } from './countdown-tracker.type';

export interface ICountdownService {
  startCountdown(): void;
  stopCountdown(): void;
  isCountdownFinished(): boolean;
  getMillisecondsDifference(): number;
  getTimeDifference(): DateDifferenceType;
}
