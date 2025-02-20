import { Calculation, CalculationPayload } from './cashback.type';
export interface CashbackService {
    calculate(data: CalculationPayload): Promise<Calculation>;
}
export declare const cashbackService: CashbackService;
