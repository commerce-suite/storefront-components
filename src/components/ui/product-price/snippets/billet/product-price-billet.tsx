import { Component, Prop, h } from '@stencil/core';
import { currencyFormat } from '../../../../../utils/utils';
import { BasePrice } from '../../product-price.type';

@Component({
  tag: 'product-price-billet',
  styleUrl: '../../product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPriceBillet implements BasePrice {
  @Prop() price: number;
  @Prop() priceCompare?: number;

  render() {
    const formattedPrice = currencyFormat(this.price);
    const formattedCompare = this.priceCompare ? currencyFormat(this.priceCompare) : null;

    return (
      <div class="payment-option payment-option-billet">
        {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
        <span class="price-current">
          <span class="highlight">{formattedPrice}</span> no boleto
        </span>
      </div>
    );
  }
}
