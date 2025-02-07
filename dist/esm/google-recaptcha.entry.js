import { r as registerInstance, c as createEvent, h } from './index-b6aa95eb.js';

const googleRecaptchaCss = ".g-recaptcha{display:flex;justify-content:center}";
const GoogleRecaptchaStyle0 = googleRecaptchaCss;

const GoogleRecaptcha = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tokenReceived = createEvent(this, "tokenReceived", 7);
        this.scriptLoaded = false;
        this.siteKey = undefined;
        this.recaptchaId = `recaptcha-${Date.now()}`;
    }
    componentDidLoad() {
        this.loadRecaptchaScript();
    }
    loadRecaptchaScript() {
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
    renderRecaptcha() {
        if (!window.grecaptcha)
            return;
        window.grecaptcha.render(this.recaptchaId, {
            'sitekey': this.siteKey,
            'callback': (token) => {
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
        return h("div", { key: 'e836237538893dab8e46f717230d2e0519b81360', class: "g-recaptcha", id: this.recaptchaId });
    }
};
GoogleRecaptcha.style = GoogleRecaptchaStyle0;

export { GoogleRecaptcha as google_recaptcha };

//# sourceMappingURL=google-recaptcha.entry.js.map