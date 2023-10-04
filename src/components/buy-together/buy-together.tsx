import { Component, Host, h } from '@stencil/core';
import { IInputSelectDataEvent } from '../../components';
import productMock from './mocks/product.mock';

@Component({
  tag: 'buy-together',
  styleUrl: 'buy-together.scss',
  shadow: false,
  scoped: true,
})
export class BuyTogether {
  private inputSelect = (data: CustomEvent<IInputSelectDataEvent>) => {
    // TODO: Remover e trocar pela implementação
    console.log('inputSelect', { data: data.detail });
  };

  render() {
    return (
      <Host>
        <section class="bagy-buy-together">
          <div class="product-box">
            <product-card product={productMock} onInputSelect={this.inputSelect}></product-card>
          </div>
        </section>
      </Host>
    );
  }
}
