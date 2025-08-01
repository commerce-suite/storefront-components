import { Component, Host, Prop, h } from '@stencil/core';
import { BasePrice, PaymentOption } from './product-price.type';

@Component({
  tag: 'product-price',
  styleUrl: 'product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPrice {
  @Prop() basePrice: BasePrice;
  @Prop() paymentOptions?: PaymentOption[];
  @Prop() showStartingFrom?: boolean = false;

  private componentMap = {
    simple: (option: PaymentOption) => (
      <product-price-simple
        price={option.price}
        priceCompare={option.priceCompare}
        showStartingFrom={this.showStartingFrom}
      />
    ),
    billet: (option: PaymentOption) => (
      <product-price-billet price={option.price} priceCompare={option.priceCompare} />
    ),
    creditCard: (option: PaymentOption) => (
      <product-price-credit-card
        price={option.price}
        priceCompare={option.priceCompare}
        parcels={option.parcels}
        parcelPrice={option.parcelPrice}
        hasInterest={option.hasInterest}
      />
    ),
    pix: (option: PaymentOption) => (
      <product-price-pix price={option.price} priceCompare={option.priceCompare} />
    ),
  };

  private renderPaymentOption(option: PaymentOption) {
    if (option.price <= 0) return null;

    const renderFn = this.componentMap[option.type] || this.componentMap.simple;
    return renderFn(option);
  }

  render() {
    const options = this.paymentOptions || [];

    if (!options.length) {
      return (
        <Host>
          <div class="product-price-container">
            {this.renderPaymentOption({
              type: 'simple',
              price: this.basePrice.price,
              priceCompare: this.basePrice.priceCompare,
            })}
          </div>
        </Host>
      );
    }

    return (
      <Host>
        <div class="product-price-container">
          {options.map(option => this.renderPaymentOption(option))}
        </div>
      </Host>
    );
  }
}
