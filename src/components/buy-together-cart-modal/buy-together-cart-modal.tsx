import { Component, Event, Host, Prop, getAssetPath, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'buy-together-cart-modal',
  styleUrl: 'buy-together-cart-modal.scss',
  shadow: false,
})
export class BuyTogetherCartModal {
  @Prop() containerTitle: string;
  @Prop() productId: number;
  @Prop() variationId?: number;
  @Prop() promotionTitle?: string;
  @Prop() buyButtonText?: string;

  @Event({ bubbles: true, eventName: 'on-finish-buy-button' })
  onFinishBuyButton: EventEmitter<void>;

  @Event({ bubbles: true, eventName: 'on-continue-buy-button' })
  onContinueBuyButton: EventEmitter<void>;

  @Event() componentRendered: EventEmitter<void>;

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    return (
      <Host>
        <section class="buy-together-cart">
          <header class="buy-together-cart-header">
            <div class="buy-together-cart-header-text">
              <img src={getAssetPath('./assets/icons/add.svg')} alt="add_icon" />
              <h2>{this.containerTitle || 'Produto adicionado ao carrinho!'}</h2>
            </div>
            <div class="header-buttons">
              <button onClick={() => this.onFinishBuyButton.emit()} class="header-buttons-primary">
                Finalizar compra
              </button>
              <button
                onClick={() => this.onContinueBuyButton.emit()}
                class="header-buttons-secondary"
              >
                Continuar comprando
              </button>
            </div>
          </header>
          <buy-together
            id="buy-together"
            promotion-title={this.promotionTitle}
            buy-button-text={this.buyButtonText}
            product-id={this.productId}
            variation-id={this.variationId}
            showcase-mode
          />
        </section>
      </Host>
    );
  }
}
