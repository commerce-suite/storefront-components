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
  ICashback,
} from './cashback.type';
import { currencyFormat } from '../../utils/utils';

@Component({
  tag: 'cashback-credit',
  styleUrl: 'cashback.scss',
  scoped: true,
})
export class Cashback implements ComponentWillLoad {
  @Prop() customer_id: number | null;
  @Prop() cashback: ICashback | null;
  @Prop({ mutable: true }) product: { id: number; price: number };

  @State() credit: CalculationItem;

  async componentWillLoad(): Promise<void> {
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
    const valid = this.cashback && this.cashback.active && this.cashback.show_credit_preview;

    if (!this.product || !valid) return;

    const { id, price } = this.product;

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
        {this.credit && this.credit.value > 0 ? (
          <div class="cashback">
            <img src={getAssetPath('./assets/icons/cashback.svg')} />
            <span>
              Na compra deste produto, você receberá até{' '}
              <strong>{currencyFormat(this.credit.value)}</strong> em Cashback!
            </span>
          </div>
        ) : null}
      </Host>
    );
  }
}
