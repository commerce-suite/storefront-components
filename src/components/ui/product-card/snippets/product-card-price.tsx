import { Component, Host, Prop, h, State, ComponentWillLoad } from '@stencil/core';
import { currencyFormat } from '../../../../utils/utils';
import { IProductCard } from '../product-card.type';

@Component({
  tag: 'product-card-price',
  styleUrl: 'product-card-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductCard implements ComponentWillLoad {
  @Prop() product: IProductCard;
  @Prop() showSimplePrice: boolean = true;

  @State() showPriceBase: boolean;

  getPrice() {
    if (this.product.specialPrice) {
      const price = currencyFormat(this.product.specialPrice);
      return `${price} no pix`;
    }
    return currencyFormat(this.product.price);
  }

  componentWillLoad(): void | Promise<void> {
    this.showPriceBase =
      !!this.product?.priceBase && +this.product?.priceBase !== +this.product?.price;
  }

  render() {
    return (
      <Host>
        {this.showSimplePrice ? (
          <div class="product-card-price">
            {this.showPriceBase && (
              <span class="product-card-price-base">{currencyFormat(this.product.priceBase)}</span>
            )}
            <span class="product-card-price-current">{this.getPrice()}</span>
          </div>
        ) : (
          <p>Outras formas de pagamentos...</p>
        )}
      </Host>
    );
  }
}
