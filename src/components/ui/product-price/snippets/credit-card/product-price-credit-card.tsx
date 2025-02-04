import { Component, Prop, h } from '@stencil/core';
import { currencyFormat } from '../../../../../utils/utils';
import { CreditCardPrice } from '../../product-price.type';

@Component({
  tag: 'product-price-credit-card',
  styleUrl: '../../product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPriceCreditCard implements CreditCardPrice {
  @Prop() price: number;
  @Prop() priceCompare?: number;
  @Prop() parcels: number;
  @Prop() parcelPrice: number;
  @Prop() hasInterest: boolean;

  render() {
    const formattedPrice = currencyFormat(this.price);
    const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;
    const formattedParcelPrice = this.parcelPrice ? currencyFormat(this.parcelPrice) : null;
    const interestText = this.hasInterest ? 'com juros' : 'sem juros';

    return (
      <div class="payment-option payment-option-creditCard">
        {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
        <span class="price-current">
          <span class="highlight">{formattedPrice}</span>{' '}
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
