export declare class DraggableService {
    private _isDragging;
    private initialX;
    private initialY;
    private currentX;
    private currentY;
    private positionX;
    private positionY;
    onDragStateChange: (isDragging: boolean) => void;
    onUpdatePosition: (x: number, y: number) => void;
    constructor(onUpdatePosition: (x: number, y: number) => void);
    get isDragging(): boolean;
    handleDragStart(event: MouseEvent | TouchEvent, positionX: number, positionY: number): void;
    handleDragMove: (event: MouseEvent | TouchEvent) => void;
    handleDragEnd: () => void;
    private addDragEventListeners;
    private removeDragEventListeners;
}
