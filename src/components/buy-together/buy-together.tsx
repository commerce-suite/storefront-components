import { Component, Host, h, ComponentWillLoad } from '@stencil/core';
import { IInputSelectDataEvent } from '../../components';
import { IBuyTogetherData } from './buy-together.type';
import { BuyTogetherServiceMock } from './mocks/buy-together.service.mock';

@Component({
  tag: 'buy-together',
  styleUrl: 'buy-together.scss',
  shadow: false,
  scoped: true,
})
export class BuyTogether implements ComponentWillLoad {
  private serviceMock = new BuyTogetherServiceMock();
  private buyTogetherData: IBuyTogetherData;

  private inputSelect = (data: CustomEvent<IInputSelectDataEvent>) => {
    // TODO: Remover e trocar pela implementação
    console.log('inputSelect', { data: data.detail });
  };

  public async load() {
    try {
      this.buyTogetherData = await this.serviceMock.getBuyTogether();
    } catch {}
  }

  private selectOrderBump(event: any, productId: number) {
    console.log('selectOrderBump', { data: event.target.checked, productId });
  }

  componentWillLoad(): void | Promise<void> {
    return this.load();
  }

  render() {
    return (
      <Host>
        <section class="bagy-buy-together buy-together-container">
          <div class="product-wrapper product-main">
            <product-card
              product={this.buyTogetherData.productMain}
              onInputSelect={this.inputSelect}
            ></product-card>
          </div>
          <div class="plus-icon">
            <img src="./assets/icons/icon-plus.svg" alt="" />
          </div>
          <div class="products-order-bump">
            {this.buyTogetherData.productBump.map(productCard => (
              <div class="product-wrapper">
                <div class="checkbox-wrapper">
                  <front-checkbox
                    inputId={String(productCard.id)}
                    onInput={ev => this.selectOrderBump(ev, productCard.id)}
                  />
                </div>
                <product-card inline product={productCard}></product-card>
              </div>
            ))}
          </div>
          <div class="buy-btn-wrapper">
            <button class="buy-btn">Comprar</button>
          </div>
        </section>
      </Host>
    );
  }
}
