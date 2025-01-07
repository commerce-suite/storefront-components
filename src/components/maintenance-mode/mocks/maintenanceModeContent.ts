import { IMaintenanceMode } from '../maintenance-mode.type';

export const maintenanceModeContent: IMaintenanceMode = {
  image: null,
  active: false,
  colors: {
    title: '#212529',
    content: '#535862',
    button_text: '#FFFFFF',
    button_background: '#212529',
    content_background: '#FFFFFF',
  },
  newsletter: true,
  page_title: 'Loja em manutenção',
  page_content:
    'Estamos temporariamente em manutenção. Voltaremos em breve com novidades para você!',
};
