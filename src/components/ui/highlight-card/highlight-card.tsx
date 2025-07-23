import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
  Host,
  Watch,
  getAssetPath,
} from '@stencil/core';
import { IHighlightCardItem, IProductItem } from './highlight-card.type';
import { IColor, IProductCard } from '../product-card/product-card.type';

@Component({
  tag: 'highlight-card',
  styleUrl: 'highlight-card.scss',
  shadow: false,
})
export class HighlightCard {
  @Prop() items: IHighlightCardItem[] = [];

  @State() highlightedItems: IHighlightCardItem[] = [];
  @State() nonHighlightedItems: IHighlightCardItem[] = [];
  @State() selectedColorByProductId: Record<number, number> = {};

  @Event() addItem: EventEmitter<IHighlightCardItem>;
  @Event() componentRendered: EventEmitter<void>;

  private updateProductItem(currentItem: IHighlightCardItem, updatedProduct: IProductCard) {
    const targetList = currentItem.highlight ? this.highlightedItems : this.nonHighlightedItems;

    const updatedList = targetList.map(item =>
      item.type === 'product' && item.id === currentItem.id ? { ...item, ...updatedProduct } : item,
    );

    if (currentItem.highlight) this.highlightedItems = [...updatedList];
    else this.nonHighlightedItems = [...updatedList];
  }

  private handleColorSelected(currentItem: IProductItem, color: IColor) {
    const productId = currentItem.id;

    this.selectedColorByProductId = {
      ...this.selectedColorByProductId,
      [productId]: color.id,
    };

    const baseName = currentItem.name?.split(' - ')[0] ?? currentItem.name;
    const baseSlug = currentItem.slug?.split('/')?.[0] ?? currentItem.slug;

    const updatedProduct: IProductCard = {
      ...currentItem,
      id: productId,
      name: `${baseName} - ${color.name}`,
      slug: `${baseSlug}/${color.slug}`,
      gridId: `${productId}-${color.id}`,
      image: { src: color.productImage?.src ?? null },
      price: color.price,
      balance: color.balance,
      priceBase: color.priceCompare,
    };

    this.updateProductItem(currentItem, updatedProduct);
  }

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
          <div class="highlight-card-product">
            <product-card
              custom-class="highlight-custom-style"
              product={item}
              basePrice={{ price: item.price, priceCompare: item.priceBase }}
              showStartingFrom={item.showStartingFrom}
              inline
            >
              <color-selector
                colors={item.colors}
                selectedId={this.selectedColorByProductId[item.id]}
                onColorSelected={e => this.handleColorSelected(item, e.detail)}
              />
            </product-card>
            <div class="highlight-card-product-cart-icon" onClick={() => this.addItem.emit(item)}>
              <img src={getAssetPath('./assets/icons/add-to-cart.svg')} alt="add_to_cart_icon" />
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

    const selectedMap: Record<number, number> = {};

    const allProducts = [...this.highlightedItems, ...this.nonHighlightedItems];

    allProducts.forEach(item => {
      if (item.type === 'product') {
        const firstColor = item.colors?.[0];
        if (firstColor) {
          selectedMap[item.id] = firstColor.id;
          this.handleColorSelected(item, firstColor);
        }
      }
    });

    this.selectedColorByProductId = selectedMap;
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
