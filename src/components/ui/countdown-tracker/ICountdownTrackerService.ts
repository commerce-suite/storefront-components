import { DateDifferenceType } from './types';

export interface ICountdownTrackerService {
  isCountdownFinished(): boolean;
  getMillisecondsDifference(): number;
  getTimeDifference(): DateDifferenceType;
}
