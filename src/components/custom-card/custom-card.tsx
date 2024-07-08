import { Component, Event, Host, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-card',
  styleUrl: 'custom-card.scss',
  shadow: false,
})
export class CustomCard {
  @Prop() cardTitle: string = 'Não perca! Live hoje às 19 horas.';
  @Prop() cardDescription: string;

  @Event() componentRendered: EventEmitter<void>;

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        <div class="custom-card">
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">{this.cardTitle}</h2>
            {this.cardDescription && (
              <p class="custom-card-header-description">{this.cardDescription}</p>
            )}
          </div>
          <div class="custom-card-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
