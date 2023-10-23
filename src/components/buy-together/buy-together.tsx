import {
  Component,
  Host,
  h,
  ComponentWillLoad,
  Prop,
  State,
  getAssetPath,
  Method,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { EnumBuyTogetherOnLoadStatus, IBuyTogetherComponentData } from './buy-together.type';
import { FrontBuyTogetherService } from './services/front-buy-together.service';
import { IInputSelectDataEvent, IProductCard } from '../ui/product-card/product-card.type';

@Component({
  tag: 'buy-together',
  styleUrl: 'buy-together.scss',
  shadow: false,
  scoped: true,
})
export class BuyTogether implements ComponentWillLoad {
  @Prop({ mutable: true }) productId: number;
  @Prop({ mutable: true }) variationId: number;
  private buyTogetherService = new FrontBuyTogetherService();
  @State() buyTogetherData: IBuyTogetherComponentData;
  @Event({ bubbles: true, eventName: 'on-buy-together-add-cart' })
  onBuyTogetherAddCartEvent: EventEmitter<IProductCard[]>;

  @Event({ bubbles: true })
  loadBuyTogehter: EventEmitter<{
    status: EnumBuyTogetherOnLoadStatus;
    data: IBuyTogetherComponentData | null;
  }>;

  @State() hasBuyTogether: boolean;
  @State() isLoading: boolean;
  @State() isAddingToCart: boolean;

  @Method()
  async getBuyTogetherData() {
    return this.buyTogetherData;
  }

  public async load() {
    this.isLoading = true;
    try {
      this.buyTogetherData = await this.buyTogetherService.getBuyTogetherByProductId(
        this.productId,
        this.variationId,
      );
    } catch (error) {
      if (!error?.message?.includes('buy_together_not_found')) {
        console.error('BuyTogether - load', { error });
      }
    } finally {
      this.isLoading = false;
      this.emitOnLoad();
    }
  }

  private emitOnLoad() {
    let status = EnumBuyTogetherOnLoadStatus.SHOULD_SHOW;
    if (!this.buyTogetherData) {
      status = EnumBuyTogetherOnLoadStatus.SHOULD_HIDDEN;
    }
    this.loadBuyTogehter.emit({ status, data: this.buyTogetherData });
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
    products[productIndex] = { ...productCard, isCheck: products[productIndex].isCheck };

    this.buyTogetherData = {
      ...this.buyTogetherData,
      products,
      originalData: {
        ...this.buyTogetherData.originalData,
        productsPivot,
      },
    };
  }

  private async onAddItemsToCart(event: any) {
    try {
      this.isAddingToCart = true;
      event.preventDefault();
      const variationsIds: number[] = [];
      const checkedProducts = this.buyTogetherData.products.filter(product => product.isCheck);
      variationsIds.push(this.buyTogetherData.productMain.id);
      checkedProducts.forEach(product => variationsIds.push(product.id));
      await this.buyTogetherService.addToCart(variationsIds);
      this.onBuyTogetherAddCartEvent.emit([...checkedProducts, this.buyTogetherData.productMain]);
    } finally {
      this.isAddingToCart = false;
    }
  }

  @Watch('buyTogetherData')
  watchPropHandler(newValue: IBuyTogetherComponentData) {
    this.hasBuyTogether = !!newValue?.originalData;
  }

  @Watch('variationId')
  watchVariationIdChange() {
    this.load();
  }

  @Watch('productId')
  watchProductIdChange() {
    this.load();
  }

  componentWillLoad(): void | Promise<void> {
    this.load();
  }

  render() {
    return (
      <Host>
        {this.isLoading && (
          <div class="loading-container">
            <span class="spinner" />
          </div>
        )}
        {!this.isLoading && this.hasBuyTogether && (
          <form onSubmit={evt => this.onAddItemsToCart(evt)}>
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
                <img src={getAssetPath('./assets/icons/icon-plus.svg')} alt="" />
              </div>
              <div class="products-order-bump">
                {this.buyTogetherData.products.map(productCard => (
                  <div class="product-wrapper">
                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={productCard.isCheck}
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
                <button class="buy-btn" type="submit" disabled={this.isAddingToCart}>
                  {this.buyTogetherData.originalData.buyButtonText || 'Comprar'}
                </button>
              </div>
            </section>
          </form>
        )}
      </Host>
    );
  }
}
