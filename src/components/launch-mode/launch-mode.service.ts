import { AppService } from '@uxshop/storefront-core';
import { defaultContent } from './constants/defaultContent';

export class LaunchModeService {
  public async getAppContent() {
    try {
      const { content } = await AppService.getBySlug('modo-lancamento');
      return JSON.parse(content);
    } catch (error) {
      console.error(error);
      return defaultContent;
    }
  }

  public async validatePassword(formData: FormData) {
    const url = `${window.dooca.base_url}/action/launch-mode/validate`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
      }

      return response.json();
    } catch (error) {
      console.error('LaunchModeService - validatePassword', { error });
      throw error;
    }
  }
}
