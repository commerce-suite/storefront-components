import { Component, Host, Prop, h } from '@stencil/core';
import { IProductCard } from './product-card.type';
import { getClassByProps } from '../../../utils/utils';
import { BasePrice, PaymentOption } from '../product-price/product-price.type';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.scss',
  shadow: false,
  scoped: false,
})
export class ProductCard {
  @Prop() inline: boolean = false;
  @Prop() customClass: string = '';
  @Prop({ mutable: true }) product: IProductCard;
  @Prop() basePrice: BasePrice;
  @Prop() paymentOptions?: PaymentOption[] = [];
  @Prop() showStartingFrom?: boolean = false;

  getClassWithInline(className: string) {
    const prosForClass = { '-inline': this.inline };
    return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
  }

  render() {
    return (
      <Host>
        <div class={this.getClassWithInline('product-container')}>
          <front-image
            class={this.getClassWithInline('image')}
            imageSrc={this.product?.image?.src}
            textAlt={this.product?.image?.alt || 'Imagem do produto'}
          />
          <div class="info">
            <span class="title">{this.product?.name}</span>
            <product-price
              basePrice={this.basePrice}
              paymentOptions={this.paymentOptions}
              showStartingFrom={this.showStartingFrom}
            />
          </div>
        </div>
      </Host>
    );
  }
}
