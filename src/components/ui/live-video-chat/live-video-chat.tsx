import { Component, Prop, Event, Host, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'live-video-chat',
  styleUrl: 'live-video-chat.scss',
  shadow: false,
})
export class LiveVideoChat {
  @Prop() videoId: string;

  @Event() componentRendered: EventEmitter<void>;

  private getChatUrl() {
    return `https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`;
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        <div class="live-video-chat">
          <iframe
            src={this.getChatUrl()}
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Host>
    );
  }
}
