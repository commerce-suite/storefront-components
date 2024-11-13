import { EventEmitter } from '../../../stencil-public-runtime';
export declare class LiveVideoPlayer {
    videoId: string;
    autoPlay: boolean;
    componentRendered: EventEmitter<void>;
    private getVideoUrl;
    componentDidLoad(): void;
    render(): any;
}
