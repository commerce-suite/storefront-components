import { EventEmitter } from '../../stencil-public-runtime';
export declare class GoogleRecaptcha {
    siteKey: string;
    recaptchaId: string;
    tokenReceived: EventEmitter<string>;
    private scriptLoaded;
    componentDidLoad(): void;
    private loadRecaptchaScript;
    private renderRecaptcha;
    render(): any;
}
