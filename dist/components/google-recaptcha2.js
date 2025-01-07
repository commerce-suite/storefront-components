import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const googleRecaptchaCss = ".g-recaptcha{display:flex;justify-content:center}";
const GoogleRecaptchaStyle0 = googleRecaptchaCss;

const GoogleRecaptcha = /*@__PURE__*/ proxyCustomElement(class GoogleRecaptcha extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return h("div", { key: 'dcb8a08ef5c8ca05e7f8a740b0347d92afe059d7', class: "g-recaptcha", id: this.recaptchaId });
    }
    static get style() { return GoogleRecaptchaStyle0; }
}, [0, "google-recaptcha", {
        "siteKey": [1, "site-key"],
        "recaptchaId": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["google-recaptcha"];
    components.forEach(tagName => { switch (tagName) {
        case "google-recaptcha":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, GoogleRecaptcha);
            }
            break;
    } });
}

export { GoogleRecaptcha as G, defineCustomElement as d };

//# sourceMappingURL=google-recaptcha2.js.map