import { IMaintenanceMode } from '../maintenance-mode.type';

const maintenanceModeContent: IMaintenanceMode = {
  image: {
    src: 'https://optimizer.dchomolog.dooca.store/103964/applications/pexels-photo-976853.jpeg',
  },
  active: false,
  colors: {
    title: '#FFFFFF',
    content: '#C1C2C3',
    button_text: '#FFFFFF',
    button_background: '#212529',
    content_background: '#212529',
  },
  newsletter: true,
  page_title: 'Loja em manutenção',
  page_content:
    'Estamos temporariamente em manutenção. Voltaremos em breve com novidades para você!',
};

export { maintenanceModeContent };
