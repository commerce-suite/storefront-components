import { EventEmitter } from '../../../stencil-public-runtime';
export declare class MiniPlayer {
    videoId: string;
    autoPlay: boolean;
    mainTitle: string;
    buttonText: string;
    showMiniPlayer: boolean;
    positionX: number;
    positionY: number;
    isDragging: boolean;
    onClickMiniPlayerButton: EventEmitter<void>;
    componentRendered: EventEmitter<void>;
    private dragDropService;
    componentWillLoad(): void;
    private handleDragStart;
    private handleTouchStart;
    private handleCloseMiniPlayer;
    private getMiniPlayerStyle;
    private getMiniPlayerBarStyle;
    componentDidLoad(): void;
    render(): any;
}
