/// <reference types="node" />
import { UUID } from 'crypto';
export interface ICashbackSettingRange {
    min: number;
    max: number;
    markup: number;
}
export interface ICashback {
    id: UUID;
    organization_id: number;
    markup: number | string;
    type: string;
    release_days: number;
    expiration_days: number;
    exclude_categories?: number[] | null;
    allowed_categories?: number[] | null;
    allow_extra_discounts: boolean;
    active: boolean;
    active_to_use: boolean;
    show_extract: boolean;
    show_credit_preview: boolean;
    max_representativeness?: number;
    representativeness_type: string;
    ranges?: ICashbackSettingRange[] | null;
    created_at: string;
    updated_at: string;
}
export declare enum CalculationItemPromotion {
    CASHBACK_CREDIT = "cashback_credit",
    CASHBACK_DEBIT = "cashback_debit"
}
export interface CalculationItem {
    id: UUID;
    promotion: CalculationItemPromotion;
    value: number;
    remaining_to_apply: number;
    not_applicable_reasons: string[];
}
export interface Calculation {
    id: UUID;
    customer_id?: number;
    source: string;
    source_id?: number;
    check_sum: string;
    items: CalculationItem[];
}
export interface CalculationItemPayload {
    id: number;
    quantity: number;
    price: number;
    discount: number;
}
export interface CalculationPayload {
    customer_id: number | null;
    exclude_promotions: CalculationItemPromotion[];
    items: CalculationItemPayload[];
}
