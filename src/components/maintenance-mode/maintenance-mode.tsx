import { Component, Env, Event, EventEmitter, h, Host, Listen, State } from '@stencil/core';
import { IMaintenanceMode } from './maintenance-mode.type';
import { maintenanceModeContent } from './mocks/maintenanceModeContent';
import { defaultContent } from './constants/defaultContent';
import { MaintenanceModeService } from './maintenance-mode.service';

@Component({
  tag: 'maintenance-mode',
  styleUrl: 'maintenance-mode.scss',
  shadow: false,
})
export class MaintenanceMode {
  @State() maintenanceModeData: IMaintenanceMode = maintenanceModeContent || defaultContent;
  @State() maintenanceModeService = new MaintenanceModeService();
  @State() recaptchaToken: string;
  @State() isLoading: boolean;
  @State() message: {
    text: string;
    type: 'success' | 'error';
  };

  @Event() componentRendered: EventEmitter<void>;

  async handleSubmit(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append('form_type', 'newsletter');

    try {
      this.isLoading = true;
      await this.maintenanceModeService.submitNewsletter(formData);
      this.message = {
        text: 'E-mail cadastrado',
        type: 'success',
      };
    } catch (error) {
      const defaultMessage = 'Ocorreu um erro, tente novamente mais tarde';
      const errors = error?.message ? JSON.parse(error.message) : { errors: [defaultMessage] };
      const errorMessage = errors.errors[0];

      this.message = {
        text: errorMessage,
        type: 'error',
      };
    } finally {
      this.isLoading = false;
    }
  }

  @Listen('tokenReceived')
  handleTokenReceived(event: CustomEvent<string>) {
    this.recaptchaToken = event.detail;
  }

  componentDidLoad() {
    this.componentRendered.emit();
  }

  render() {
    document.documentElement.style.setProperty(
      '--maintenance-bg',
      this.maintenanceModeData.colors.content_background,
    );

    return (
      <Host
        style={{
          '--maintenance-bg': this.maintenanceModeData.colors.content_background,
          '--maintenance-title': this.maintenanceModeData.colors.title,
          '--maintenance-text': this.maintenanceModeData.colors.content,
          '--maintenance-button-bg': this.maintenanceModeData.colors.button_background,
          '--maintenance-button-color': this.maintenanceModeData.colors.button_text,
        }}
      >
        {this.isLoading && (
          <div class="loading-container">
            <span class="spinner" />
          </div>
        )}
        <div class="maintenance-mode maintenance-mode-container">
          <div class="maintenance-mode-content">
            <div class="maintenance-mode-content-label">
              <h1>{this.maintenanceModeData.page_title}</h1>
              <p>{this.maintenanceModeData.page_content}</p>
            </div>
            {this.maintenanceModeData.image && (
              <img src={this.maintenanceModeData.image.src} alt="maintenance-mode-image" />
            )}
          </div>
          {this.maintenanceModeData.newsletter && !this.message && (
            <form
              onSubmit={this.handleSubmit.bind(this)}
              name="newsletter"
              class="maintenance-mode-form"
            >
              <div class="maintenance-mode-form-label">
                <h2>Cadastre-se para receber novidades</h2>
              </div>
              <div class="maintenance-mode-form-content">
                <div class="maintenance-mode-form-content-input">
                  <input type="text" name="name" placeholder="Seu nome" required />
                  <input type="email" name="email" placeholder="Seu email" required />
                </div>
                <google-recaptcha siteKey={Env.GOOGLE_RECAPTCHA_SITE_KEY} />
                <button
                  class="maintenance-mode-form-content-button"
                  type="submit"
                  disabled={!this.recaptchaToken}
                >
                  Quero me inscrever
                </button>
              </div>
            </form>
          )}
          {this.message && (
            <div
              class={`maintenance-mode-content-message maintenance-mode-content-message-${this.message.type}`}
            >
              <span>{this.message.text}</span>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
