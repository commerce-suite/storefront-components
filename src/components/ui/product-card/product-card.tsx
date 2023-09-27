import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.scss',
  shadow: false,
  scoped: true,
})
export class ProductCard {
  render() {
    return (
      <Host>
        <div class="bagy-product-card">
          <figure class="product-thumb">
            <img class="thumb" src="" alt="" />
          </figure>
          <div class="product-info">
            <h3 class="title">Nome do produto</h3>
          </div>
        </div>
      </Host>
    );
  }
}
