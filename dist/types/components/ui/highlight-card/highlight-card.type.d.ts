import { IImage } from '../product-card/product-card.type';
interface IItem {
    type: 'message' | 'product';
    highlight: boolean;
    show: boolean;
}
export interface IMessageItem extends IItem {
    type: 'message';
    title: string;
    content: string;
    id?: string;
}
export interface IProductItem extends IItem {
    type: 'product';
    price: number;
    priceBase: number;
    image: IImage | null;
    name: string;
    slug: string;
    id?: number;
    specialPrice?: number;
}
export type IHighlightCardItem = IMessageItem | IProductItem;
export {};
