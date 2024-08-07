import { Component, Host, Prop, h, State, ComponentWillLoad } from '@stencil/core';
import { IProductCard } from './product-card.type';
import { currencyFormat, getClassByProps } from '../../../utils/utils';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.scss',
  shadow: false,
  scoped: false,
})
export class ProductCard implements ComponentWillLoad {
  @Prop() inline: boolean = false;
  @Prop({ mutable: true }) product: IProductCard;

  @State() showPriceBase: boolean;

  getClassWithInline(className: string) {
    const prosForClass = { '-inline': this.inline };
    return `${className} ${getClassByProps(prosForClass)}`;
  }

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
        <div class={this.getClassWithInline('product-container')}>
          <front-image
            class={this.getClassWithInline('image')}
            imageSrc={this.product?.image?.src}
            textAlt={this.product?.image?.alt || 'Imagem do produto'}
          ></front-image>
          <div class="info">
            <span class="title">{this.product?.name}</span>
            <div class="price">
              {this.showPriceBase && (
                <span class="base">{currencyFormat(this.product.priceBase)}</span>
              )}
              <span class="current">{this.getPrice()}</span>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
