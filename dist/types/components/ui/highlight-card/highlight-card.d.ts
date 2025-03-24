import { EventEmitter } from '../../../stencil-public-runtime';
import { IHighlightCardItem } from './highlight-card.type';
export declare class HighlightCard {
    items: IHighlightCardItem[];
    highlightedItems: IHighlightCardItem[];
    nonHighlightedItems: IHighlightCardItem[];
    addItem: EventEmitter<IHighlightCardItem>;
    componentRendered: EventEmitter<void>;
    private renderItem;
    filterItems(items: IHighlightCardItem[]): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    handleItemsChange(newItems: IHighlightCardItem[]): void;
    render(): any;
}
