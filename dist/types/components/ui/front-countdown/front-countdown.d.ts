import { ComponentWillLoad, EventEmitter } from '../../../stencil-public-runtime';
export declare class FrontCountdown implements ComponentWillLoad {
    startDate: string;
    endDate: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    countdownFinished: EventEmitter;
    private service;
    private resetCountdown;
    private updateCountdown;
    disconnectedCallback(): void;
    private loadCountdown;
    watchStartDateChange(): void;
    watchEndDateChange(): void;
    componentWillLoad(): void;
    render(): any;
}
