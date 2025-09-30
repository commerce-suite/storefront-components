import { Component, Event, EventEmitter, h, Host, State, getAssetPath } from '@stencil/core';
import { LaunchModeService } from './launch-mode.service';
import { ILaunchMode } from './lauch-mode.type';
import { defaultContent } from './constants/defaultContent';
import { ERROR_MESSAGES, ErrorCode } from './constants/errorMessages';

@Component({
  tag: 'launch-mode',
  styleUrl: 'launch-mode.scss',
  shadow: false,
})
export class LaunchMode {
  @State() launchModeData: ILaunchMode = defaultContent;
  @State() launchModeService = new LaunchModeService();
  @State() isLoading = false;
  @State() isInitialLoading = true;
  @State() userMessage: {
    text: string;
  };

  @State() passwordInput = '';
  @State() showPassword = false;

  @Event() componentRendered: EventEmitter<void>;

  private async load() {
    try {
      this.launchModeData = await this.launchModeService.getAppContent();
    } catch (error) {
      console.error('LaunchMode - load', { error });
    } finally {
      this.isInitialLoading = false;
    }
  }

  private async handleSubmit(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('password', this.passwordInput);
    formData.append('form_type', 'launch_mode');

    try {
      this.isLoading = true;
      await this.launchModeService.validatePassword(formData);

      const baseUrl = window.dooca.base_url;
      window.location.href = baseUrl;
    } catch (error) {
      console.error('LaunchMode - handleSubmit', { error });

      const errorCode = this.parseErrorCode(error);
      const errorMessage = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.default;

      this.userMessage = {
        text: errorMessage,
      };
    } finally {
      this.isLoading = false;
    }
  }

  private parseErrorCode(error: any): ErrorCode | null {
    try {
      const parsed = JSON.parse(error?.message || '{}');
      return parsed.code || null;
    } catch {
      return null;
    }
  }

  private handlePasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.passwordInput = target.value;

    if (this.userMessage) this.userMessage = null;
  }

  private togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async componentDidLoad() {
    await this.load();
    this.componentRendered.emit();
  }

  render() {
    const {
      title,
      caption,
      color_title: colorTitle,
      color_caption: colorCaption,
      color_button: colorButton,
    } = this.launchModeData;

    return (
      <Host
        style={{
          '--launch-title': colorTitle,
          '--launch-caption': colorCaption,
          '--launch-button-bg': colorButton,
        }}
      >
        {(this.isLoading || this.isInitialLoading) && (
          <div class={`loading-container ${this.isInitialLoading ? '-initial-loading' : ''}`}>
            <span class="spinner" />
          </div>
        )}

        {this.launchModeData && !this.isInitialLoading && (
          <div class="launch-mode launch-mode-container">
            <div class="launch-mode-content">
              <div class="launch-mode-content-label">
                <h1 class="h1">{title}</h1>
                <div innerHTML={caption} />
              </div>

              <form onSubmit={e => this.handleSubmit(e)} class="launch-mode-form">
                <div class="launch-mode-form-content">
                  <div class="launch-mode-form-content-input">
                    <input
                      name="password"
                      type={this.showPassword ? 'text' : 'password'}
                      placeholder="Digite sua senha"
                      value={this.passwordInput}
                      onInput={e => this.handlePasswordChange(e)}
                      required
                    />
                    <button
                      type="button"
                      class="password-toggle-btn"
                      onClick={() => this.togglePasswordVisibility()}
                      aria-label={this.showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      <img
                        src={getAssetPath(
                          this.showPassword
                            ? './assets/icons/eye-off.svg'
                            : './assets/icons/eye.svg',
                        )}
                        alt={this.showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      />
                    </button>
                  </div>

                  <button
                    class="launch-mode-form-content-button"
                    type="submit"
                    disabled={this.isLoading || !this.passwordInput.trim()}
                  >
                    {this.isLoading ? 'Destravando...' : 'Destravar'}
                  </button>
                </div>
              </form>

              {this.userMessage && (
                <div class={`launch-mode-content-message launch-mode-content-message-error`}>
                  <span>{this.userMessage.text}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </Host>
    );
  }
}
