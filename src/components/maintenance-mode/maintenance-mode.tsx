import { Component, Env, Event, EventEmitter, h, Host, Listen, State } from '@stencil/core';
import { IMaintenanceMode } from './maintenance-mode.type';
import { maintenanceModeContent } from './mocks/maintenanceModeContent';
import { defaultContent } from './constants/defaultContent';

@Component({
  tag: 'maintenance-mode',
  styleUrl: 'maintenance-mode.scss',
  shadow: false,
})
export class MaintenanceMode {
  @State() maintenanceModeData: IMaintenanceMode = maintenanceModeContent || defaultContent;
  @State() recaptchaToken: string;

  @Event() componentRendered: EventEmitter<void>;

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('submit');
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

          {this.maintenanceModeData.newsletter && (
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
                  <input type="text" placeholder="Digite seu nome" required />
                  <input type="email" placeholder="Digite seu e-mail" required />
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
        </div>
      </Host>
    );
  }
}
