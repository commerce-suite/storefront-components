import { Component, Prop, h } from '@stencil/core';
import { currencyFormat } from '../../../../../utils/utils';
import { BasePrice } from '../../product-price.type';

@Component({
  tag: 'product-price-simple',
  styleUrl: '../../product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPriceSimple implements BasePrice {
  @Prop() price: number;
  @Prop() priceCompare?: number;
  @Prop() showStartingFrom?: boolean = false;

  render() {
    const formattedPrice = currencyFormat(this.price);
    const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;

    return (
      <div class="payment-option payment-option-simple">
        {this.showStartingFrom && <span class="starting-from">A partir de</span>}
        {formattedCompare && !this.showStartingFrom && (
          <span class="price-compare">{formattedCompare}</span>
        )}
        <span class="price-current">
          <span class="highlight">{formattedPrice}</span>
        </span>
      </div>
    );
  }
}
