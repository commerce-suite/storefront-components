import { EventEmitter } from '../../../stencil-public-runtime';
import { IHighlightCardItem } from './highlight-card.type';
export declare class HighlightCard {
    items: IHighlightCardItem[];
    highlightedItems: IHighlightCardItem[];
    nonHighlightedItems: IHighlightCardItem[];
    selectedColorByProductId: Record<number, number>;
    addItem: EventEmitter<IHighlightCardItem>;
    componentRendered: EventEmitter<void>;
    private updateProductItem;
    private handleColorSelected;
    private renderItem;
    filterItems(items: IHighlightCardItem[]): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    handleItemsChange(newItems: IHighlightCardItem[]): void;
    render(): any;
}
