import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CustomCard {
    cardTitle: string;
    cardDescription: string;
    customClass: string;
    componentRendered: EventEmitter<void>;
    componentDidLoad(): void;
    render(): any;
}
