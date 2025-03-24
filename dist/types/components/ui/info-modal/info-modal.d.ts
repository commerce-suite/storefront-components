import { EventEmitter } from '../../../stencil-public-runtime';
export declare class InfoModal {
    modalTitle: string;
    modalDescription: string;
    hideButtons: boolean;
    primaryButtonText: string;
    secondaryButtonText: string;
    position: 'bottom' | 'center' | 'top';
    componentRendered: EventEmitter<void>;
    onClickPrimaryButton: EventEmitter<void>;
    onClickSecondaryButton: EventEmitter<void>;
    private getModalPosition;
    componentDidLoad(): void;
    render(): any;
}
