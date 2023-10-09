import { Component, Host, Event, Prop, h, EventEmitter } from '@stencil/core';
import { IInputSelectDataEvent, IProductCard, SelectAttributesType } from './product-card.type';
import { currencyFormat, getClassByProps } from '../../../utils/utils';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.scss',
  shadow: false,
  scoped: true,
})
export class ProductCard {
  @Prop() inline: boolean = false;
  @Prop({ mutable: true }) product: IProductCard;
  @Event() inputSelect: EventEmitter<IInputSelectDataEvent>;

  getClassWithInline(className: string) {
    const prosForClass = { '-inline': this.inline };
    return `${className} ${getClassByProps(prosForClass)}`;
  }

  private onInputSelect(data: any, eventSelectType: SelectAttributesType) {
    this.inputSelect.emit({
      eventSelectType,
      value: data.target.value,
      productId: this.product.id,
    });
  }

  render() {
    return (
      <Host>
        <div class={this.getClassWithInline('product-container')}>
          <figure class={this.getClassWithInline('image')}>
            <img src={this.product.image.src} alt={this.product.image.alt || 'Imagem do produto'} />
          </figure>
          <div class="info">
            <span class="title">{this.product.name}</span>
            <div class="price">
              {!!this.product.priceBase && (
                <span class="base">{currencyFormat(this.product.priceBase)}</span>
              )}
              <span class="current">{currencyFormat(this.product.price)}</span>
            </div>
          </div>
          {this.product.selectVariations && (
            <div class="variations">
              {this.product.selectVariations.map(
                ({ label, currentValue, options, selectId, placeholder, selectType }) => (
                  <div class="item">
                    <front-select
                      placeholder={placeholder}
                      selectId={selectId}
                      optionsList={options}
                      label={label}
                      value={currentValue}
                      onInput={data => this.onInputSelect(data, selectType)}
                    />
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
