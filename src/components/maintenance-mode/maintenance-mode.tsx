import { Component, Env, Event, EventEmitter, h, Host, Listen, State } from '@stencil/core';
import { IMaintenanceMode } from './maintenance-mode.type';
import { defaultContent } from './constants/defaultContent';
import { MaintenanceModeService } from './maintenance-mode.service';
import { transformMediaUrl } from '../../utils/utils';

@Component({
  tag: 'maintenance-mode',
  styleUrl: 'maintenance-mode.scss',
  shadow: false,
})
export class MaintenanceMode {
  @State() maintenanceModeData: IMaintenanceMode = defaultContent;
  @State() maintenanceModeService = new MaintenanceModeService();
  @State() recaptchaToken: string;
  @State() isLoading = false;
  @State() isInitialLoading = true;
  @State() userMessage: {
    text: string;
    type: 'success' | 'error';
  };

  @Event() componentRendered: EventEmitter<void>;

  private async load() {
    try {
      this.maintenanceModeData = await this.maintenanceModeService.getAppContent();
    } catch (error) {
      console.error('MaintenanceMode - load', { error });
    } finally {
      this.isInitialLoading = false;
    }
  }

  private async handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append('form_type', 'newsletter');

    try {
      this.isLoading = true;
      await this.maintenanceModeService.submitNewsletter(formData);
      this.userMessage = {
        text: 'E-mail cadastrado',
        type: 'success',
      };
    } catch (error) {
      console.error('MaintenanceMode - handleSubmit', { error });
      const defaultMessage = 'Ocorreu um erro, tente novamente mais tarde';
      const errors = error?.message ? JSON.parse(error.message) : { errors: [defaultMessage] };
      const [errorMessage] = errors.errors;

      this.userMessage = {
        text: errorMessage || defaultMessage,
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

  async componentDidLoad() {
    await this.load();
    this.componentRendered.emit();
  }

  render() {
    const {
      page_title: pageTitle,
      page_content: pageContent,
      colors,
      image,
      newsletter,
    } = this.maintenanceModeData;

    const {
      content_background: contentBackground,
      title,
      content,
      button_background: buttonBackground,
      button_text: buttonText,
    } = colors;

    document.documentElement.style.setProperty('--maintenance-bg', contentBackground);

    return (
      <Host
        style={{
          '--maintenance-bg': contentBackground,
          '--maintenance-title': title,
          '--maintenance-text': content,
          '--maintenance-button-bg': buttonBackground,
          '--maintenance-button-color': buttonText,
        }}
      >
        {(this.isLoading || this.isInitialLoading) && (
          <div class={`loading-container ${this.isInitialLoading ? '-initial-loading' : ''}`}>
            <span class="spinner" />
          </div>
        )}

        {this.maintenanceModeData && !this.isInitialLoading && (
          <div class="maintenance-mode maintenance-mode-container">
            <div class="maintenance-mode-content">
              <div class="maintenance-mode-content-label">
                <h1>{pageTitle}</h1>
                <p>{pageContent}</p>
              </div>

              {image && <img src={transformMediaUrl(image.src)} alt="maintenance-mode-image" />}
            </div>

            {newsletter && !this.userMessage && (
              <form
                onSubmit={e => this.handleSubmit(e)}
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

            {this.userMessage && (
              <div
                class={`maintenance-mode-content-message maintenance-mode-content-message-${this.userMessage.type}`}
              >
                <span>{this.userMessage.text}</span>
              </div>
            )}
          </div>
        )}
      </Host>
    );
  }
}
