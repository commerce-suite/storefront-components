import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CustomCard {
    cardTitle: string;
    cardDescription: string;
    customClass: string;
    el: HTMLElement;
    componentRendered: EventEmitter<void>;
    componentDidLoad(): void;
    hasSlot(): boolean;
    render(): any;
}
