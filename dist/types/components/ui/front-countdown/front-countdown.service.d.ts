import type { ICountdownService } from './ICountdownService';
import type { DateDifferenceType } from './front-countdown.type';
export declare class FrontCountdownService implements ICountdownService {
    private startDate;
    private endDate;
    private oneSecond;
    private intervalId;
    constructor(startDate: Date, endDate: Date);
    private incrementOneSecond;
    startCountdown(): void;
    stopCountdown(): void;
    getMillisecondsDifference(): number;
    isCountdownFinished(): boolean;
    getTimeDifference(): DateDifferenceType;
}
