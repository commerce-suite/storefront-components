import { ReleaseDate } from '@uxshop/storefront-core/dist/types/ReleaseDateTypes';
export declare class LaunchCountdownService {
    static getReleaseDateByProduct(productId: string, variationId?: string): Promise<ReleaseDate | null>;
}
