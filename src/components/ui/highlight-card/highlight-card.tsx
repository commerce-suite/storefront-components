import { Component, Event, Host, EventEmitter, h, getAssetPath, Prop } from '@stencil/core';
import { IHighlightCardItem } from './highlight-card.type';

@Component({
  tag: 'highlight-card',
  styleUrl: 'highlight-card.scss',
  shadow: false,
})
export class HighlightCard {
  @Prop() items: IHighlightCardItem[] = [];

  @Event() componentRendered: EventEmitter<void>;

  private renderItem(item: any, isHighlighted: boolean) {
    return (
      <div class={`highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}`}>
        {item.type === 'message' && (
          <div class="highlight-card-message">
            <h4 class="highlight-card-message-title">{item.title}</h4>
            <p class="highlight-card-message-content">{item.content}</p>
          </div>
        )}
        {item.type === 'product' && (
          <div class="highlight-card-product">
            <product-card custom-class="highlight-custom-style" product={item} inline />
            <div class="highlight-card-product-cart-icon">
              <img
                onClick={() => console.log('add to cart')}
                src={getAssetPath('./assets/icons/add-to-cart.svg')}
                alt="add_to_cart_icon"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    const highlightedItems = this.items.filter(item => item.highlight);
    const nonHighlightedItems = this.items.filter(item => !item.highlight);

    return (
      <Host>
        <div class="highlight-card">
          {highlightedItems.length > 0 && (
            <div class="highlight-card-container">
              <div class="highlight-card-header">
                <span class="highlight-card-header-title">Destaque</span>
              </div>
              {highlightedItems.map((item, index) => (
                <div>
                  {this.renderItem(item, true)}
                  {index < highlightedItems.length - 1 && <div class="highlight-card-separator" />}
                </div>
              ))}
            </div>
          )}
          {nonHighlightedItems.map(item => this.renderItem(item, false))}
        </div>
      </Host>
    );
  }
}
