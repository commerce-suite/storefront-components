import { Component, Event, EventEmitter, h, Prop, State, Host, Watch } from '@stencil/core';
import { IHighlightCardItem } from './highlight-card.type';

@Component({
  tag: 'highlight-card',
  styleUrl: 'highlight-card.scss',
  shadow: false,
})
export class HighlightCard {
  @Prop() items: IHighlightCardItem[] = [];

  @State() highlightedItems: IHighlightCardItem[] = [];
  @State() nonHighlightedItems: IHighlightCardItem[] = [];

  @Event() addItem: EventEmitter<IHighlightCardItem>;
  @Event() componentRendered: EventEmitter<void>;

  private renderItem(item: any, isHighlighted: boolean) {
    if (!item.show) return null;

    return (
      <div class={`highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}`}>
        {item.type === 'message' && (
          <div class="highlight-card-message">
            <h4 class="highlight-card-message-title">{item.title}</h4>
            <p class="highlight-card-message-content">{item.content}</p>
          </div>
        )}
        {item.type === 'product' && (
          <div class="highlight-card-product" onClick={() => this.addItem.emit(item)}>
            <product-card
              custom-class="highlight-custom-style"
              product={item}
              basePrice={{ price: item.price, priceCompare: item.priceBase }}
              inline
            />
            <div class="highlight-card-product-cart-action">
              <a>Ver produto</a>
            </div>
          </div>
        )}
      </div>
    );
  }

  filterItems(items: IHighlightCardItem[]) {
    const visibleItems = items.filter(item => item.show);
    this.highlightedItems = visibleItems.filter(item => item.highlight);
    this.nonHighlightedItems = visibleItems.filter(item => !item.highlight);
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  componentWillLoad() {
    this.filterItems(this.items);
  }

  @Watch('items')
  handleItemsChange(newItems: IHighlightCardItem[]) {
    this.filterItems(newItems);
  }

  render() {
    return (
      <Host>
        <div class="highlight-card">
          {this.highlightedItems.length > 0 && (
            <div class="highlight-card-container">
              <div class="highlight-card-header">
                <span class="highlight-card-header-title">Destaque</span>
              </div>
              {this.highlightedItems.map((item, index) => (
                <div>
                  {this.renderItem(item, true)}
                  {index < this.highlightedItems.length - 1 && (
                    <div class="highlight-card-separator" />
                  )}
                </div>
              ))}
            </div>
          )}
          {this.nonHighlightedItems.map(item => this.renderItem(item, false))}
        </div>
      </Host>
    );
  }
}
