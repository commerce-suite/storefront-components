import { DateDifferenceType } from './countdown-tracker.type';

export interface ICountdownService {
  isCountdownFinished(): boolean;
  getMillisecondsDifference(): number;
  getTimeDifference(): DateDifferenceType;
}
