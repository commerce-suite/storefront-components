import { DateDifferenceType } from './front-countdown.type';
export interface ICountdownService {
    startCountdown(): void;
    stopCountdown(): void;
    isCountdownFinished(): boolean;
    getMillisecondsDifference(): number;
    getTimeDifference(): DateDifferenceType;
}
