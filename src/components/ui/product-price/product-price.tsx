import { Component, Host, Prop, h } from '@stencil/core';
import { currencyFormat } from '../../../utils/utils';
import { IPaymentOption } from './product-price.type';

@Component({
  tag: 'product-price',
  styleUrl: 'product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPrice {
  @Prop() paymentOptions: IPaymentOption[] = [];

  private renderStrategy = {
    simple: (option: IPaymentOption) => {
      const { price, priceCompare } = option;
      const formattedPrice = currencyFormat(price);
      const formattedCompare = priceCompare ? currencyFormat(priceCompare) : null;
      return (
        <div class="payment-option payment-option-simple">
          {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
          <span class="price-current">
            <span class="highlight">{formattedPrice}</span>
          </span>
        </div>
      );
    },

    billet: (option: IPaymentOption) => {
      const { price, priceCompare } = option;
      const formattedPrice = currencyFormat(price);
      const formattedCompare = priceCompare ? currencyFormat(priceCompare) : null;
      return (
        <div class="payment-option payment-option-billet">
          {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
          <span class="price-current">
            <span class="highlight">{formattedPrice}</span> no boleto
          </span>
        </div>
      );
    },

    creditCard: (option: IPaymentOption) => {
      const { price, priceCompare, parcels, parcelPrice, hasInterest } = option;
      const formattedPrice = currencyFormat(price);
      const formattedCompare = priceCompare ? currencyFormat(priceCompare) : null;
      const formattedParcelPrice = parcelPrice ? currencyFormat(parcelPrice) : null;
      const interestText = hasInterest ? 'com juros' : 'sem juros';

      return (
        <div class="payment-option payment-option-creditCard">
          {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
          <span class="price-current">
            {formattedPrice}{' '}
            {parcels && parcelPrice && (
              <span class="credit-info">
                em até <span class="highlight">{parcels}x</span> de{' '}
                <span class="highlight">{formattedParcelPrice}</span> {interestText}
              </span>
            )}
          </span>
        </div>
      );
    },

    pix: (option: IPaymentOption) => {
      const { price, priceCompare } = option;
      const formattedPrice = currencyFormat(price);
      const formattedCompare = priceCompare ? currencyFormat(priceCompare) : null;
      return (
        <div class="payment-option payment-option-pix">
          {formattedCompare && <span class="price-compare">{formattedCompare}</span>}
          <span class="price-current">
            <span class="highlight">{formattedPrice}</span> no pix
          </span>
        </div>
      );
    },
  };

  render() {
    return (
      <Host>
        <div class="product-price-container">
          {this.paymentOptions.map(option => {
            const renderFunction = this.renderStrategy[option.type];
            return renderFunction ? renderFunction(option) : null;
          })}
        </div>
      </Host>
    );
  }
}
