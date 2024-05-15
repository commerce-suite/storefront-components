import { Component, Host, Prop, h, Event, Method, State, ComponentWillLoad } from '@stencil/core';
import Splide from '@splidejs/splide';
import { IProductCard } from '../../components';
import { EventEmitter } from 'stream';
import { FrontBuyTogetherService } from '../buy-together/services/front-buy-together.service';

@Component({
  tag: 'showcase-related',
  styleUrl: 'showcase.scss',
  shadow: false,
})
export class Showcase implements ComponentWillLoad {
  @Prop() productsPerPage: number;
  @Prop() showcaseTitle: string;
  @Prop() buttonLabel: string;
  @Prop() buyTogetherProductIds: string;
  @Prop() showArrows: boolean = true;
  @State() productIds: number[];
  @State() products: any[];
  @State() loading: boolean;
  @Event() clickBuyButton: EventEmitter<any>;

  @Method()
  public async load() {
    try {
      this.loading = true;
      this.products = await new FrontBuyTogetherService().getOnlyPivotProducts(this.productIds);
    } catch (error) {
      if (!error?.message?.includes('buy_together_not_found')) {
        console.error('BuyTogether - load', { error });
      }
    } finally {
      this.loading = false;
    }
  }

  public mountCarousel() {
    const splide = new Splide('#splide', {
      pagination: false,
      lazyLoad: true,
      breakpoints: {
        2000: {
          perPage: this.productsPerPage || this.products?.length >= 4 ? 4 : this.products?.length,
          gap: '.7rem',
          arrows: this.showArrows,
        },
        768: {
          perPage: 3,
          gap: '.7rem',
          arrows: this.showArrows,
        },
        640: {
          perPage: 2,
          gap: '.7rem',
          arrows: this.showArrows,
        },
        480: {
          perPage: 1,
          arrows: this.showArrows,
          padding: { right: '24px' },
        },
      },
    });
    splide.mount();
  }

  parseProductIds() {
    if (this.buyTogetherProductIds) {
      this.productIds = JSON.parse(this.buyTogetherProductIds);
    }
  }

  onClickBuyButtonEmit(event: any, product: IProductCard) {
    event.preventDefault();
    this.clickBuyButton.emit(product);
  }

  async componentWillLoad(): Promise<void> {
    this.parseProductIds();
    await this.load();
  }

  componentDidLoad() {
    this.mountCarousel();
  }

  render() {
    return (
      <Host>
        {this.loading && (
          <div class="loading-container">
            <span class="spinner" />
          </div>
        )}
        {!this.loading && this.products && (
          <div class="showcase-related-products">
            <h4 class="showcase-related-products-title">{this.showcaseTitle}</h4>
            <div id="splide" class="splide" style={!this.showArrows ? { padding: '30px 0' } : {}}>
              <div class="splide__track">
                <ul class="splide__list">
                  {this.products?.map(product => {
                    return (
                      <li class="splide__slide">
                        <form
                          class="product-form"
                          onSubmit={evt => this.onClickBuyButtonEmit(evt, product)}
                        >
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
          </div>
        )}
      </Host>
    );
  }
}
