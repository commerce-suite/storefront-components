import { h } from "@stencil/core";
export class GoogleRecaptcha {
    constructor() {
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
    static get is() { return "google-recaptcha"; }
    static get originalStyleUrls() {
        return {
            "$": ["google-recaptcha.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["google-recaptcha.css"]
        };
    }
    static get properties() {
        return {
            "siteKey": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "site-key",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "recaptchaId": {}
        };
    }
    static get events() {
        return [{
                "method": "tokenReceived",
                "name": "tokenReceived",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=google-recaptcha.js.map
