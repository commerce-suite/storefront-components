import { Component, Host, Prop, h, Event, Method } from '@stencil/core';
import Splide from '@splidejs/splide';
import { IProductCard } from '../../components';
import { EventEmitter } from 'stream';

@Component({
  tag: 'showcase-related',
  styleUrl: 'showcase.scss',
  shadow: false,
})
export class Showcase {
  @Prop() products: IProductCard[];
  @Prop() productsPerPage: number = 3;
  @Event() clickBuyButton: EventEmitter<any>;

  componentDidLoad() {
    const splide = new Splide('#splide', {
      pagination: false,
      lazyLoad: true,
      breakpoints: {
        2000: {
          perPage: this.productsPerPage,
          gap: '.7rem',
        },
        640: {
          perPage: 2,
          gap: '.7rem',
        },
        480: {
          perPage: 1,
        },
      },
    });
    splide.mount();
  }

  @Method()
  onClickBuyButtonEmit(event: any, product: IProductCard) {
    event.preventDefault();
    this.clickBuyButton.emit(product);
  }

  render() {
    return (
      <Host>
        <div id="splide" class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              {this.products.map(product => {
                return (
                  <li class="splide__slide">
                    <form onSubmit={evt => this.onClickBuyButtonEmit(evt, product)}>
                      <div class="product-main-container">
                        <product-card product={product}></product-card>
                        <button type="submit" class="buy-button">
                          Comprar
                        </button>
                      </div>
                    </form>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
