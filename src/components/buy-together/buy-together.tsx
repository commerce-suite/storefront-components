import { Component, Host, h } from '@stencil/core';
import { IProductCard } from '../../components';

@Component({
  tag: 'buy-together',
  styleUrl: 'buy-together.scss',
  shadow: false,
  scoped: true,
})
export class BuyTogether {
  private product: IProductCard = {
    image: {
      src: 'https://blog.myahaas.com.br/wp-content/uploads/2021/08/bolsas-que-combinam-com-tudo-como-comprar-900x900.jpg',
    },
    name: 'Bolsa Essencial',
    price: 389.9,
    priceBase: 499.99,
  };

  render() {
    return (
      <Host>
        <section class="bagy-buy-together">
          <h1 class="title">Meu title</h1>
          <product-card inline product={this.product}></product-card>
        </section>
      </Host>
    );
  }
}
