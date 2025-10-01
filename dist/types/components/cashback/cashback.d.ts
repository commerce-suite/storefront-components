import { ComponentWillLoad } from '../../stencil-public-runtime';
import { CalculationItem, ICashback } from './cashback.type';
export declare class Cashback implements ComponentWillLoad {
    customer_id: number | null;
    cashback: ICashback | null;
    product: {
        id: number;
        price: number;
    };
    credit: CalculationItem;
    componentWillLoad(): Promise<void>;
    onCustomerIdChange(): Promise<void>;
    onProductChange(): Promise<void>;
    getCalculation(): Promise<void>;
    render(): any;
}
