import { DateDifferenceType } from './types';

export interface ICountdownTrackerService {
  calculateTimeDifference(startDate: Date, targetDate: Date): DateDifferenceType;
}
