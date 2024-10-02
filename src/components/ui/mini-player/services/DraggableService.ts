export class DraggableService {
  private _isDragging: boolean = false;
  private initialX: number = 0;
  private initialY: number = 0;
  private currentX: number = 0;
  private currentY: number = 0;
  private positionX: number = 0;
  private positionY: number = 0;

  public onDragStateChange: (isDragging: boolean) => void = () => {};
  public onUpdatePosition: (x: number, y: number) => void;

  constructor(onUpdatePosition: (x: number, y: number) => void) {
    this.onUpdatePosition = onUpdatePosition;
  }

  public get isDragging() {
    return this._isDragging;
  }

  public handleDragStart(event: MouseEvent | TouchEvent, positionX: number, positionY: number) {
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

  public handleDragMove = (event: MouseEvent | TouchEvent) => {
    if (!this._isDragging) return;

    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    this.currentX = clientX - this.initialX;
    this.currentY = clientY - this.initialY;

    this.positionX = this.currentX;
    this.positionY = this.currentY;

    this.onUpdatePosition(this.positionX, this.positionY);
  };

  public handleDragEnd = () => {
    this._isDragging = false;
    this.onDragStateChange(this._isDragging);
    this.removeDragEventListeners();
  };

  private addDragEventListeners() {
    window.addEventListener('mousemove', this.handleDragMove);
    window.addEventListener('mouseup', this.handleDragEnd);
    window.addEventListener('touchmove', this.handleDragMove);
    window.addEventListener('touchend', this.handleDragEnd);
  }

  private removeDragEventListeners() {
    window.removeEventListener('mousemove', this.handleDragMove);
    window.removeEventListener('mouseup', this.handleDragEnd);
    window.removeEventListener('touchmove', this.handleDragMove);
    window.removeEventListener('touchend', this.handleDragEnd);
  }
}
