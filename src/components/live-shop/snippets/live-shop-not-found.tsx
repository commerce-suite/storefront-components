import { Component, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'live-shop-not-found',
  styleUrl: 'live-shop-not-found.scss',
  shadow: false,
})
export class LiveShopNotFound {
  @Event() onReturnToHome: EventEmitter<void>;

  private handleReturnToHome = () => {
    this.onReturnToHome.emit();
  };

  render() {
    return (
      <Host>
        <div class="live-shop-not-found">
          <custom-card
            cardTitle="Ops, parece que essa live não existe mais!"
            cardDescription="Fique de olho em nossas próximas lives para mais novidades e promoções imperdíveis!"
          >
            <button onClick={this.handleReturnToHome}>Voltar para a página inicial</button>
          </custom-card>
        </div>
      </Host>
    );
  }
}
