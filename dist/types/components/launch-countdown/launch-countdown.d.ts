import { EventEmitter } from '../../stencil-public-runtime';
export declare class LaunchCountdown {
    productId: string;
    variationId: string;
    dataTargetDate: string;
    dataInitialDate: string;
    dataCountdownTitle: string;
    dataDescription: string;
    dateTime: {
        startDate: string;
        endDate: string;
    };
    countdownLoaded: EventEmitter<{
        releaseDateActive: boolean;
    }>;
    private setDateTimeByProps;
    private loadCountDown;
    componentWillLoad(): void;
    watchVariationIdChange(): void;
    watchProductIdChange(): void;
    render(): any;
}
