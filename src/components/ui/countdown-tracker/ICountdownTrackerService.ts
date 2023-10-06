import { DateDifferenceType } from './countdown-tracker.type';

export interface ICountdownTrackerService {
  isCountdownFinished(): boolean;
  getMillisecondsDifference(): number;
  getTimeDifference(): DateDifferenceType;
}
