import { EventEmitter } from '../../stencil-public-runtime';
import { LaunchModeService } from './launch-mode.service';
import { ILaunchMode } from './lauch-mode.type';
export declare class LaunchMode {
    launchModeData: ILaunchMode;
    launchModeService: LaunchModeService;
    isLoading: boolean;
    isInitialLoading: boolean;
    userMessage: {
        text: string;
        type: 'error' | 'success';
    };
    passwordInput: string;
    showPassword: boolean;
    componentRendered: EventEmitter<void>;
    private load;
    private handleSubmit;
    private parseErrorCode;
    private handlePasswordChange;
    private togglePasswordVisibility;
    componentDidLoad(): Promise<void>;
    render(): any;
}
