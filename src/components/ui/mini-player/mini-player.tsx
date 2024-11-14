import { Component, Prop, Event, Host, EventEmitter, h, getAssetPath, State } from '@stencil/core';
import { DraggableService } from './services/DraggableService';

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

  @Event({ bubbles: true, eventName: 'on-click-miniplayer-button' })
  onClickMiniPlayerButton: EventEmitter<void>;

  @Event() componentRendered: EventEmitter<void>;

  private dragDropService: DraggableService;

  componentWillLoad() {
    this.dragDropService = new DraggableService((x, y) => {
      this.positionX = x;
      this.positionY = y;
    });

    this.dragDropService.onDragStateChange = (isDragging: boolean) => {
      this.isDragging = isDragging;
    };
  }

  private handleDragStart = (event: MouseEvent | TouchEvent) => {
    this.dragDropService.handleDragStart(event, this.positionX, this.positionY);
  };

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
                <button onClick={() => this.onClickMiniPlayerButton.emit()}>
                  {this.buttonText}
                </button>
              </div>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
