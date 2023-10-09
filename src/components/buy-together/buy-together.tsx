import { Component, Host, h, ComponentWillLoad, Prop, State } from '@stencil/core';
import { IBuyTogetherComponentData } from './buy-together.type';
import { FrontBuyTogetherService } from './services/front-buy-together.service';
import { IInputSelectDataEvent } from '../../components';

@Component({
  tag: 'buy-together',
  styleUrl: 'buy-together.scss',
  shadow: false,
  scoped: true,
})
export class BuyTogether implements ComponentWillLoad {
  @Prop({ mutable: true }) productId: number;
  private buyTogetherService = new FrontBuyTogetherService();
  @State() buyTogetherData: IBuyTogetherComponentData;

  public async load() {
    try {
      this.buyTogetherData = await this.buyTogetherService.getBuyTogetherByProductId(
        this.productId,
      );
    } catch {}
  }

  private selectOrderBump(event: any, productOrderBumpId: number) {
    const { products } = this.buyTogetherData;
    this.buyTogetherData = {
      ...this.buyTogetherData,
      products: products.map(prod => {
        if (productOrderBumpId === prod.id) {
          return { ...prod, isCheck: event.target.checked };
        }
        return prod;
      }),
    };
  }

  private onInputSelectProductMain(event: CustomEvent<IInputSelectDataEvent>) {
    const { productCard, productTargetUpdated } = this.buyTogetherService.changeProductOptions(
      event.detail,
      this.buyTogetherData.originalData.product,
    );
    if (!productCard) return;
    this.buyTogetherData = {
      ...this.buyTogetherData,
      productMain: productCard,
      originalData: {
        ...this.buyTogetherData.originalData,
        product: productTargetUpdated,
      },
    };
  }

  private onInputSelectOrderBump(event: CustomEvent<IInputSelectDataEvent>) {
    const { productId } = event.detail;
    const {
      originalData: { productsPivot },
      products,
    } = this.buyTogetherData;

    const productPivotIndex = productsPivot.findIndex(({ id }) => id === productId);
    const productIndex = products.findIndex(({ id }) => id === productId);

    if (productPivotIndex === -1 || productIndex === -1) return;

    const { productCard, productTargetUpdated } = this.buyTogetherService.changeProductOptions(
      event.detail,
      productsPivot[productPivotIndex],
    );

    productsPivot[productPivotIndex] = productTargetUpdated;
    products[productIndex] = productCard;

    this.buyTogetherData = {
      ...this.buyTogetherData,
      products,
      originalData: {
        ...this.buyTogetherData.originalData,
        productsPivot,
      },
    };
  }

  componentWillLoad(): void | Promise<void> {
    return this.load();
  }

  render() {
    return (
      <Host>
        <div class="title-wrapper">
          <h2 class="title">{this.buyTogetherData.originalData.title || 'Compre Junto'}</h2>
        </div>
        <section class="bagy-buy-together buy-together-container">
          <div class="product-wrapper product-main">
            <product-card
              product={this.buyTogetherData.productMain}
              onInputSelect={ev => this.onInputSelectProductMain(ev)}
            ></product-card>
          </div>
          <div class="plus-icon">
            <img src="./assets/icons/icon-plus.svg" alt="" />
          </div>
          <div class="products-order-bump">
            {this.buyTogetherData.products.map(productCard => (
              <div class="product-wrapper">
                <div class="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id={String(productCard.id)}
                    onInput={ev => this.selectOrderBump(ev, productCard.id)}
                  />
                </div>
                <product-card
                  inline
                  product={productCard}
                  onInputSelect={ev => this.onInputSelectOrderBump(ev)}
                ></product-card>
              </div>
            ))}
          </div>
          <div class="buy-btn-wrapper">
            <button class="buy-btn">
              {this.buyTogetherData.originalData.buyButtonText || 'Comprar'}
            </button>
          </div>
        </section>
      </Host>
    );
  }
}
