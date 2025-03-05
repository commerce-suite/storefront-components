import { Product } from '@uxshop/storefront-core/dist/modules/buy-together/BuyTogetherTypes';
import { FrontBuyTogetherResponse } from './front-buy-together-response';
type FilterRulesType = {
    key: 'balance' | 'priceless' | 'releaseDate';
    isActive: boolean;
    applyFn: () => void;
    checkFn: (data?: Partial<Product>) => boolean;
};
export declare class FrontBuyTogetherFilter extends FrontBuyTogetherResponse {
    private filterRules;
    applyFilters(overrideFilters?: Partial<FilterRulesType>[]): this;
    protected filterByZeroPrice(): void;
    protected filterByBalance(): void;
    protected filterByReleaseDate(): void;
    protected applyFilterVariations(): void;
    private filterVariations;
}
export {};
