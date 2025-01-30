import { Component, Event, Host, EventEmitter, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'custom-card',
  styleUrl: 'custom-card.scss',
  shadow: false,
})
export class CustomCard {
  @Prop() cardTitle: string = 'Não perca! Live hoje às 19 horas.';
  @Prop() cardDescription: string;
  @Prop() customClass: string = '';

  @Element() el: HTMLElement;
  @Event() componentRendered: EventEmitter<void>;

  componentDidLoad() {
    this.componentRendered.emit();
  }

  hasSlot(): boolean {
    const slot = this.el.querySelector('slot') as HTMLSlotElement;
    return !!slot && slot.assignedNodes().length > 0;
  }

  render() {
    return (
      <Host>
        <div class={`custom-card ${this.customClass}`}>
          <div class="custom-card-header">
            <h2 class="custom-card-header-title">{this.cardTitle}</h2>
            {this.cardDescription && (
              <p class="custom-card-header-description">{this.cardDescription}</p>
            )}
          </div>
          {this.hasSlot() ? (
            <div class="custom-card-content">
              <slot></slot>
            </div>
          ) : null}
        </div>
      </Host>
    );
  }
}
