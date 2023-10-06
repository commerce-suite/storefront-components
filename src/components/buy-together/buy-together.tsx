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
    console.log('selectOrderBump', {
      data: event.target.checked,
      productOrderBumpId,
      result: this.buyTogetherData,
    });
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
    console.log('onInputSelectOrderBump', event);
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
                  onInputSelect={this.onInputSelectOrderBump}
                ></product-card>
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
