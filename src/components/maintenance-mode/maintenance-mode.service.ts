export class MaintenanceModeService {
  public async submitNewsletter(formData: FormData) {
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
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
