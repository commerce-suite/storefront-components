import { IMaintenanceMode } from '../maintenance-mode.type';

export const defaultContent: IMaintenanceMode = {
  page_title: 'Loja em manutenção',
  page_content:
    'Estamos temporariamente em manutenção. Voltaremos em breve com novidades para você!',
  active: false,
  image: null,
  newsletter: true,
  colors: {
    title: '#212529',
    content: '#535862',
    button_background: '#212529',
    button_text: '#FFFFFF',
    content_background: '#FFFFFF',
  },
};
