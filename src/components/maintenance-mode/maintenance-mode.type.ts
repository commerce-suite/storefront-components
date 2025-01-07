import { IImage } from '../ui/product-card/product-card.type';

export interface IMaintenanceMode {
  page_title: string;
  page_content: string;
  image: IImage | null;
  newsletter: boolean;
  active: boolean;
  colors: {
    title: string;
    content: string;
    button_background: string;
    button_text: string;
    content_background: string;
  };
}
