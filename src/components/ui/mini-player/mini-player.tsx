import { Component, Prop, Event, Host, EventEmitter, h, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'mini-player',
  styleUrl: 'mini-player.scss',
  shadow: false,
})
export class MiniPlayer {
  @Prop() videoId: string;
  @Prop() autoPlay: boolean = false;
  @Prop() mainTitle: string = 'Mini Player Title';
  @Prop() buttonText: string = 'Return';

  @State() showMiniPlayer: boolean = true;
  @State() positionX: number = 0;
  @State() positionY: number = 0;
  @State() isDragging: boolean = false;

  @Event() componentRendered: EventEmitter<void>;
  @Event({ bubbles: true, eventName: 'on-click-button' }) onClickButton: EventEmitter<void>;

  private initialX: number;
  private initialY: number;
  private currentX: number;
  private currentY: number;

  private handleDragStart = (event: MouseEvent | TouchEvent) => {
    event.preventDefault();
    this.isDragging = true;

    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    this.initialX = clientX - this.positionX;
    this.initialY = clientY - this.positionY;

    this.addDragEventListeners();
  };

  private handleDragMove = (event: MouseEvent | TouchEvent) => {
    if (!this.isDragging) return;

    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;

    this.currentX = clientX - this.initialX;
    this.currentY = clientY - this.initialY;

    this.positionX = this.currentX;
    this.positionY = this.currentY;
  };

  private handleDragEnd = () => {
    this.isDragging = false;
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

  private handleCloseMiniPlayer() {
    this.showMiniPlayer = false;
  }

  private getMiniPlayerStyle() {
    return {
      transform: `translate(${this.positionX}px, ${this.positionY}px)`,
    };
  }

  private getMiniPlayerBarStyle() {
    return {
      cursor: this.isDragging ? 'grabbing' : 'grab',
    };
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        {this.showMiniPlayer && (
          <div class="mini-player" style={this.getMiniPlayerStyle()}>
            <button class="mini-player-close-button" onClick={() => this.handleCloseMiniPlayer()}>
              <img src={getAssetPath('./assets/icons/close-icon.svg')} alt="close-icon" />
            </button>
            <live-video-player videoId={this.videoId} autoPlay={this.autoPlay} />
            <div
              class="mini-player-bar"
              style={this.getMiniPlayerBarStyle()}
              onMouseDown={this.handleDragStart}
              onTouchStart={this.handleDragStart}
            >
              <h6 class="mini-player-bar-title">{this.mainTitle}</h6>
              <div class="mini-player-bar-button">
                <button onClick={() => this.onClickButton.emit()}>{this.buttonText}</button>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
