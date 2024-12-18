import { Component, Prop, h } from '@stencil/core';
import { currencyFormat } from '../../../../../utils/utils';

@Component({
  tag: 'product-price-simple',
  styleUrl: '../../product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPriceSimple {
  @Prop() price: number;
  @Prop() priceCompare?: number;

  render() {
    const formattedPrice = currencyFormat(this.price);
    const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;

    return (
      <div class="payment-option payment-option-simple">
        {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
        <span class="price-current">
          <span class="highlight">{formattedPrice}</span>
        </span>
      </div>
    );
  }
}
