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

  private handleMouseDown(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.isDragging = true;

    if (event instanceof MouseEvent) {
      this.initialX = event.clientX - this.positionX;
      this.initialY = event.clientY - this.positionY;
    } else {
      this.initialX = event.touches[0].clientX - this.positionX;
      this.initialY = event.touches[0].clientY - this.positionY;
    }

    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('touchmove', this.handleMouseMove);
    window.addEventListener('touchend', this.handleMouseUp);
  }

  private handleMouseMove = (event: MouseEvent | TouchEvent) => {
    if (!this.isDragging) return;

    if (event instanceof MouseEvent) {
      this.currentX = event.clientX - this.initialX;
      this.currentY = event.clientY - this.initialY;
    } else {
      this.currentX = event.touches[0].clientX - this.initialX;
      this.currentY = event.touches[0].clientY - this.initialY;
    }

    this.positionX = this.currentX;
    this.positionY = this.currentY;
  };

  private handleMouseUp = () => {
    this.isDragging = false;

    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('touchmove', this.handleMouseMove);
    window.removeEventListener('touchend', this.handleMouseUp);
  };

  private handleCloseMiniPlayer() {
    this.showMiniPlayer = false;
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    const style = {
      transform: `translate(${this.positionX}px, ${this.positionY}px)`,
    };

    const styleBar = {
      cursor: this.isDragging ? 'grabbing' : 'grab',
    };

    return (
      <Host>
        {this.showMiniPlayer ? (
          <div class="mini-player" style={style}>
            <button class="mini-player-close-button" onClick={() => this.handleCloseMiniPlayer()}>
              <img src={getAssetPath('./assets/icons/close-icon.svg')} alt="close-icon" />
            </button>
            <live-video-player videoId={this.videoId} autoPlay={this.autoPlay} />
            <div
              class="mini-player-bar"
              style={styleBar}
              onMouseDown={event => this.handleMouseDown(event)}
              onTouchStart={event => this.handleMouseDown(event)}
            >
              <h6 class="mini-player-bar-title">{this.mainTitle}</h6>
              <div class="mini-player-bar-button">
                <button onClick={() => this.onClickButton.emit()}>{this.buttonText}</button>
              </div>
            </div>
          </div>
        ) : null}
      </Host>
    );
  }
}
