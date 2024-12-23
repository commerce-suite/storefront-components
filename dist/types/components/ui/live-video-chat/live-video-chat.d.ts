import { EventEmitter } from '../../../stencil-public-runtime';
export declare class LiveVideoChat {
    videoId: string;
    componentRendered: EventEmitter<void>;
    private getChatUrl;
    componentDidLoad(): void;
    render(): any;
}
