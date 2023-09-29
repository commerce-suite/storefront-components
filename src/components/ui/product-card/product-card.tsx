import { Component, Host, Prop, h } from '@stencil/core';
import { IProductCard } from './product-card.type';
import { currencyFormat } from '../../../utils/utils';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.scss',
  shadow: false,
  scoped: true,
})
export class ProductCard {
  @Prop() inline: boolean = false;
  @Prop() product: IProductCard;

  getClassWithInline(className: string) {
    return `${className}${this.inline ? ' -inline' : ''}`;
  }

  render() {
    return (
      <Host>
        <div class={this.getClassWithInline('product-container')}>
          <figure class={this.getClassWithInline('image')}>
            <img src={this.product.image.src} alt={this.product.image.alt || 'Imagem do produto'} />
          </figure>
          <div class="info">
            <span class="title">{this.product.name}</span>
            <div class="price">
              {!!this.product.priceBase && (
                <span class="base">{currencyFormat(this.product.priceBase)}</span>
              )}
              <span class="current">{currencyFormat(this.product.price)}</span>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
