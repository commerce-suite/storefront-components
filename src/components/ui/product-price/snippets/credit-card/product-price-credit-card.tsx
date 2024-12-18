import { Component, Prop, h } from '@stencil/core';
import { currencyFormat } from '../../../../../utils/utils';

@Component({
  tag: 'product-price-credit-card',
  styleUrl: '../../product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPriceCreditCard {
  @Prop() price: number;
  @Prop() parcels: number;
  @Prop() parcelPrice: number;
  @Prop() hasInterest: boolean;
  @Prop() priceCompare?: number;

  render() {
    const formattedPrice = currencyFormat(this.price);
    const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
    const formattedParcelPrice = this.parcelPrice ? currencyFormat(this.parcelPrice) : null;
    const interestText = this.hasInterest ? 'com juros' : 'sem juros';

    return (
      <div class="payment-option payment-option-creditCard">
        {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
        <span class="price-current">
          {formattedPrice}{' '}
          {this.parcels && this.parcelPrice && (
            <span class="credit-info">
              em até <span class="highlight">{this.parcels}x</span> de{' '}
              <span class="highlight">{formattedParcelPrice}</span> {interestText}
            </span>
          )}
        </span>
      </div>
    );
  }
}
