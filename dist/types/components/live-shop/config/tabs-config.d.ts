import { IHighlightCardItem } from '../../../components';
export declare const tabs: (videoId: string, items: IHighlightCardItem[], handleAddItem: (event: CustomEvent<IHighlightCardItem>) => void, chatVisible: boolean) => {
    name: string;
    label: any;
    content: () => any;
}[];
