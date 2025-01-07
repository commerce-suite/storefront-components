import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'google-recaptcha',
  shadow: false,
})
export class GoogleRecaptcha {
  @Prop() siteKey: string;
  @State() recaptchaId: string = `recaptcha-${Date.now()}`;
  @Event() tokenReceived: EventEmitter<string>;

  private scriptLoaded = false;

  componentDidLoad() {
    this.loadRecaptchaScript();
  }

  private loadRecaptchaScript() {
    if (window.grecaptcha) {
      this.renderRecaptcha();
      return;
    }

    if (!this.scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;

      window.onRecaptchaLoad = () => {
        this.scriptLoaded = true;
        this.renderRecaptcha();
      };

      document.body.appendChild(script);
    }
  }

  private renderRecaptcha() {
    if (!window.grecaptcha) return;

    window.grecaptcha.render(this.recaptchaId, {
      'sitekey': this.siteKey,
      'callback': (token: string) => {
        this.tokenReceived.emit(token);
      },
      'error-callback': () => {
        console.error('Erro ao carregar o reCAPTCHA');
      },
      'expired-callback': () => {
        console.warn('O token do reCAPTCHA expirou');
      },
    });
  }

  render() {
    return <div id={this.recaptchaId}></div>;
  }
}
