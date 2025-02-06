export class DraggableService {
    constructor(onUpdatePosition) {
        this._isDragging = false;
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.onDragStateChange = () => { };
        this.handleDragMove = (event) => {
            if (!this._isDragging)
                return;
            const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
            const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
            this.currentX = clientX - this.initialX;
            this.currentY = clientY - this.initialY;
            this.positionX = this.currentX;
            this.positionY = this.currentY;
            this.onUpdatePosition(this.positionX, this.positionY);
        };
        this.handleDragEnd = () => {
            this._isDragging = false;
            this.onDragStateChange(this._isDragging);
            this.removeDragEventListeners();
        };
        this.onUpdatePosition = onUpdatePosition;
    }
    get isDragging() {
        return this._isDragging;
    }
    handleDragStart(event, positionX, positionY) {
        event.preventDefault();
        this._isDragging = true;
        this.onDragStateChange(this._isDragging);
        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        this.initialX = clientX - positionX;
        this.initialY = clientY - positionY;
        this.positionX = positionX;
        this.positionY = positionY;
        this.addDragEventListeners();
    }
    addDragEventListeners() {
        window.addEventListener('mousemove', this.handleDragMove);
        window.addEventListener('mouseup', this.handleDragEnd);
        window.addEventListener('touchmove', this.handleDragMove);
        window.addEventListener('touchend', this.handleDragEnd);
    }
    removeDragEventListeners() {
        window.removeEventListener('mousemove', this.handleDragMove);
        window.removeEventListener('mouseup', this.handleDragEnd);
        window.removeEventListener('touchmove', this.handleDragMove);
        window.removeEventListener('touchend', this.handleDragEnd);
    }
}
//# sourceMappingURL=DraggableService.js.map
