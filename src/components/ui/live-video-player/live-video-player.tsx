import { Component, Prop, Event, Host, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'live-video-player',
  styleUrl: 'live-video-player.scss',
  shadow: false,
})
export class LiveVideoPlayer {
  @Prop() videoId: string;
  @Prop() autoPlay: boolean = false;
  @Prop() mute: boolean = true;

  @Event()
  componentRendered: EventEmitter<void>;

  private getVideoUrl() {
    if (this.autoPlay)
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=${+this.mute}`;
    return `https://www.youtube.com/embed/${this.videoId}`;
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        <div class="live-video-player">
          <iframe
            src={this.getVideoUrl()}
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Host>
    );
  }
}
