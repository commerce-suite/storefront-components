import { Component, Event, Host, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'info-modal',
  styleUrl: 'info-modal.scss',
  shadow: false,
})
export class InfoModal {
  @Prop() modalTitle: string = 'Estamos ao vivo!';
  @Prop() modalDescription: string =
    'Venha conferir nossa live cheia de novidades e promoções imperdíveis para você!';

  @Prop() hideButtons: boolean = false;
  @Prop() primaryButtonText: string = 'Assistir agora';
  @Prop() secondaryButtonText: string = 'Não, obrigado';
  @Prop() position: 'bottom' | 'center' | 'top' = 'bottom';

  @Event() componentRendered: EventEmitter<void>;

  @Event({ bubbles: true, eventName: 'on-click-primary-button' })
  onClickPrimaryButton: EventEmitter<void>;

  @Event({ bubbles: true, eventName: 'on-click-secondary-button' })
  onClickSecondaryButton: EventEmitter<void>;

  private getModalPosition() {
    const positionMap: { [key: string]: string } = {
      top: '-top',
      center: '-center',
    };

    return positionMap[this.position] || '-bottom';
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        <div
          class={`info-modal ${this.getModalPosition()} ${this.hideButtons ? '-hide-buttons' : ''}`}
        >
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">{this.modalTitle}</h2>
            <p class="info-modal-header-description">{this.modalDescription}</p>
          </div>
          {!this.hideButtons && (
            <div class="info-modal-buttons">
              <button
                class="info-modal-buttons-primary"
                onClick={() => this.onClickPrimaryButton.emit()}
              >
                {this.primaryButtonText}
              </button>
              <button
                class="info-modal-buttons-secondary"
                onClick={() => this.onClickSecondaryButton.emit()}
              >
                {this.secondaryButtonText}
              </button>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
