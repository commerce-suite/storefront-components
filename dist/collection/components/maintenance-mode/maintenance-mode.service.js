import { AppService } from "@uxshop/storefront-core";
import { defaultContent } from "./constants/defaultContent";
export class MaintenanceModeService {
    async getAppContent() {
        try {
            const { content } = await AppService.getBySlug('maintenance-mode');
            return JSON.parse(content);
        }
        catch (error) {
            console.error(error);
            return defaultContent;
        }
    }
    async submitNewsletter(formData) {
        const url = `${window.dooca.base_url}/action/newsletter/add`;
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
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
//# sourceMappingURL=maintenance-mode.service.js.map
