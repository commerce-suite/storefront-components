import {
  Component,
  ComponentWillLoad,
  getAssetPath,
  Host,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { cashbackService } from './cashback.service';
import {
  CalculationItem,
  CalculationItemPromotion,
  CalculationPayload,
  Cashback as ICashback,
} from './cashback.type';
import { currencyFormat } from '../../utils/utils';

@Component({
  tag: 'cashback-credit',
  styleUrl: 'cashback.scss',
  scoped: true,
})
export class Cashback implements ComponentWillLoad {
  @Prop() customer_id: number | null;
  @Prop({ mutable: true }) product: Record<string, any>;

  @State() cashback: ICashback;
  @State() credit: CalculationItem;

  async componentWillLoad(): Promise<void> {
    if (!this.product) return;

    this.cashback = await cashbackService.getCashback();
    await this.getCalculation();
  }

  @Watch('customer_id')
  async onCustomerIdChange(): Promise<void> {
    await this.getCalculation();
  }

  @Watch('product')
  async onProductChange(): Promise<void> {
    await this.getCalculation();
  }

  async getCalculation(): Promise<void> {
    if (!this.cashback) return null;

    const { id } = this.product;
    const price = this.product.has_price_range ? this.product.max_price_range : this.product.price;

    const data: CalculationPayload = {
      customer_id: this.customer_id,
      exclude_promotions: [CalculationItemPromotion.CASHBACK_DEBIT],
      items: [
        {
          id,
          quantity: 1,
          price,
          discount: 0,
        },
      ],
    };

    const res = await cashbackService.calculate(data);

    const byCredit = (item: CalculationItem) =>
      CalculationItemPromotion.CASHBACK_CREDIT === item.promotion;
    this.credit = res.items?.find(byCredit);
  }

  render() {
    return (
      <Host>
        {this.cashback && this.credit && this.credit.value > 0 ? (
          <div class="cashback">
            <img src={getAssetPath('./assets/icons/cashback.svg')} />
            <span>
              Na compra deste produto, você receberá
              {this.cashback.allow_extra_discounts || this.product.has_price_range ? ' até ' : ' '}
              <strong>{currencyFormat(this.credit.value)}</strong> em Cashback!
            </span>
          </div>
        ) : null}
      </Host>
    );
  }
}
