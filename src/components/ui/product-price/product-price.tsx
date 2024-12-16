import { Component, Host, Prop, h, State, ComponentWillLoad } from '@stencil/core';
import { currencyFormat } from '../../../utils/utils';
import { IProductCard } from '../product-card/product-card.type';

@Component({
  tag: 'product-price',
  styleUrl: 'product-price.scss',
  shadow: false,
  scoped: false,
})
export class ProductPrice implements ComponentWillLoad {
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
          <div class="product-price">
            {this.showPriceBase && (
              <span class="product-price-base">{currencyFormat(this.product.priceBase)}</span>
            )}
            <span class="product-price-current">{this.getPrice()}</span>
          </div>
        ) : (
          <p>Outras formas de pagamentos...</p>
        )}
      </Host>
    );
  }
}
