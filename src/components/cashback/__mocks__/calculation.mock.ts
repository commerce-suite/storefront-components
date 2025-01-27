import { Calculation, CalculationItemPromotion } from '../cashback.type';

export const calculationMock: Calculation = {
  id: null,
  source: null,
  source_id: null,
  check_sum: null,
  items: [
    {
      id: null,
      promotion: CalculationItemPromotion.CASHBACK_CREDIT,
      value: 10,
      remaining_to_apply: 0,
      not_applicable_reasons: null,
    },
  ],
};
