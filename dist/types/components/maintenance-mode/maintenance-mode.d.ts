import { EventEmitter } from '../../stencil-public-runtime';
import { IMaintenanceMode } from './maintenance-mode.type';
import { MaintenanceModeService } from './maintenance-mode.service';
export declare class MaintenanceMode {
    maintenanceModeData: IMaintenanceMode;
    maintenanceModeService: MaintenanceModeService;
    recaptchaToken: string;
    isLoading: boolean;
    isInitialLoading: boolean;
    userMessage: {
        text: string;
        type: 'success' | 'error';
    };
    componentRendered: EventEmitter<void>;
    private load;
    private handleSubmit;
    handleTokenReceived(event: CustomEvent<string>): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
