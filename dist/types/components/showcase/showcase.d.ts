/// <reference types="node" />
/// <reference types="node" />
import { ComponentWillLoad } from '../../stencil-public-runtime';
import { IProductCard } from '../../components';
import { EventEmitter } from 'stream';
export declare class Showcase implements ComponentWillLoad {
    productsPerPage: number;
    showcaseTitle: string;
    buttonLabel: string;
    buyTogetherProductIds: string;
    showArrows: boolean;
    productIds: number[];
    products: any[];
    loading: boolean;
    clickBuyButton: EventEmitter<any>;
    load(): Promise<void>;
    mountCarousel(): void;
    parseProductIds(): void;
    onClickBuyButtonEmit(event: any, product: IProductCard): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
