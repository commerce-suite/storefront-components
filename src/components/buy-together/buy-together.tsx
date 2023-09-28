import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'buy-together',
  styleUrl: 'buy-together.scss',
  shadow: false,
  scoped: true,
})
export class BuyTogether {
  render() {
    return (
      <Host>
        <section class="bagy-buy-together">
          <h1 class="title">Meu title</h1>
          <product-card></product-card>
        </section>
      </Host>
    );
  }
}
