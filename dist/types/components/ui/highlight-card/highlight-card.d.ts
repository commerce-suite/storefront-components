import { EventEmitter } from '../../../stencil-public-runtime';
import { IHighlightCardItem } from './highlight-card.type';
export declare class HighlightCard {
    items: IHighlightCardItem[];
    highlightedItems: IHighlightCardItem[];
    nonHighlightedItems: IHighlightCardItem[];
    addItem: EventEmitter<IHighlightCardItem>;
    componentRendered: EventEmitter<void>;
    private renderItem;
    filterItems(): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    filterItemsHandler(): void;
    render(): any;
}
