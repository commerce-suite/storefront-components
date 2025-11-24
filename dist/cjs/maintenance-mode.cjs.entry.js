'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-ccb6baf7.js');
const index = require('./index-fd40904d.js');
const utils = require('./utils-f2fc9e55.js');

const defaultContent = {
    page_title: 'Loja em manutenção',
    page_content: 'Estamos temporariamente em manutenção. Voltaremos em breve com novidades para você!',
    active: false,
    image: null,
    newsletter: true,
    colors: {
        title: '#212529',
        content: '#535862',
        button_background: '#212529',
        button_text: '#FFFFFF',
        content_background: '#FFFFFF',
    },
};

class MaintenanceModeService {
    async getAppContent() {
        try {
            const { content } = await index.AppService.getBySlug('maintenance-mode');
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

const maintenanceModeCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}body{margin:0}:host{display:inline-block;width:100%}.loading-container{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);z-index:9999}.loading-container .spinner{position:relative;height:5rem;width:5rem}.loading-container .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(224, 224, 224, 0.2);border-right-color:rgba(224, 224, 224, 0.2);border-bottom-color:rgba(224, 224, 224, 0.5);border-left-color:rgba(224, 224, 224, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.loading-container.-initial-loading{background-color:transparent}.loading-container.-initial-loading .spinner{position:relative;height:5rem;width:5rem}.loading-container.-initial-loading .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(0, 0, 0, 0.2);border-right-color:rgba(0, 0, 0, 0.2);border-bottom-color:rgba(0, 0, 0, 0.5);border-left-color:rgba(0, 0, 0, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.maintenance-mode{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:24px}@media (min-width: 1024px){.maintenance-mode{flex-direction:row}}.maintenance-mode-content{display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center;max-width:480px}@media (min-width: 1024px){.maintenance-mode-content{padding:24px}}.maintenance-mode-content img{border-radius:12px;object-fit:contain;object-position:center;width:346px;height:172px}@media (min-width: 1024px){.maintenance-mode-content img{width:432px;height:238px}}.maintenance-mode-content-label{display:flex;flex-direction:column;gap:4px;width:346px}@media (min-width: 1024px){.maintenance-mode-content-label{width:100%}}.maintenance-mode-content-label h1,.maintenance-mode-content-label p{margin:0}.maintenance-mode-content-label h1{color:var(--maintenance-title);font-weight:700;font-size:28px}.maintenance-mode-content-label p{color:var(--maintenance-text);font-size:14px}.maintenance-mode-content-message{display:flex;justify-content:center;gap:16px;padding:20px;border-radius:12px;background:#ffffff;border:1px solid rgba(204, 204, 204, 0.4);width:100%}@media (min-width: 1024px){.maintenance-mode-content-message{width:480px;padding:24px}}.maintenance-mode-content-message-success{color:#28a745}.maintenance-mode-content-message-error{color:#dc3545}.maintenance-mode-form{display:flex;flex-direction:column;gap:16px;padding:20px;border-radius:12px;background:#ffffff;border:1px solid rgba(204, 204, 204, 0.4)}@media (min-width: 1024px){.maintenance-mode-form{width:480px;padding:24px}}.maintenance-mode-form-label h2{font-size:14px;text-align:center;margin:0;font-weight:600}.maintenance-mode-form-content{display:flex;flex-direction:column;gap:24px}.maintenance-mode-form-content-input{display:flex;flex-direction:column;gap:24px}.maintenance-mode-form-content-input input{padding:10px 14px;border:1px solid #d5d7da;border-radius:8px;font-size:16px}.maintenance-mode-form-content-input input::placeholder{color:#717680}.maintenance-mode-form-content-input input:focus{outline:none;border:1px solid #000000}.maintenance-mode-form-content-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--maintenance-button-bg);color:var(--maintenance-button-color)}.maintenance-mode-form-content-button:hover{opacity:0.75}.maintenance-mode-form-content-button:disabled{opacity:0.6;cursor:not-allowed}";

const MaintenanceMode = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.componentRendered = index$1.createEvent(this, "componentRendered", 7);
        this.maintenanceModeData = defaultContent;
        this.maintenanceModeService = new MaintenanceModeService();
        this.recaptchaToken = undefined;
        this.isLoading = false;
        this.isInitialLoading = true;
        this.userMessage = undefined;
    }
    async load() {
        try {
            this.maintenanceModeData = await this.maintenanceModeService.getAppContent();
        }
        catch (error) {
            console.error('MaintenanceMode - load', { error });
        }
        finally {
            this.isInitialLoading = false;
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.append('form_type', 'newsletter_app');
        try {
            this.isLoading = true;
            await this.maintenanceModeService.submitNewsletter(formData);
            this.userMessage = {
                text: 'E-mail cadastrado',
                type: 'success',
            };
        }
        catch (error) {
            console.error('MaintenanceMode - handleSubmit', { error });
            const defaultMessage = 'Ocorreu um erro, tente novamente mais tarde';
            const errors = (error === null || error === void 0 ? void 0 : error.message) ? JSON.parse(error.message) : { errors: [defaultMessage] };
            const [errorMessage] = errors.errors;
            this.userMessage = {
                text: errorMessage || defaultMessage,
                type: 'error',
            };
        }
        finally {
            this.isLoading = false;
        }
    }
    handleTokenReceived(event) {
        this.recaptchaToken = event.detail;
    }
    async componentDidLoad() {
        await this.load();
        this.componentRendered.emit();
    }
    render() {
        const { page_title: pageTitle, page_content: pageContent, colors, image, newsletter, } = this.maintenanceModeData;
        const { content_background: contentBackground, title, content, button_background: buttonBackground, button_text: buttonText, } = colors;
        document.documentElement.style.setProperty('--maintenance-bg', contentBackground);
        return (index$1.h(index$1.Host, { key: '1900cedeb7068e63689d1081b113cb3446e2ddfb', style: {
                '--maintenance-bg': contentBackground,
                '--maintenance-title': title,
                '--maintenance-text': content,
                '--maintenance-button-bg': buttonBackground,
                '--maintenance-button-color': buttonText,
            } }, (this.isLoading || this.isInitialLoading) && (index$1.h("div", { key: 'b15b399e25c8158b00ad4b44bac917ba9277f619', class: `loading-container ${this.isInitialLoading ? '-initial-loading' : ''}` }, index$1.h("span", { key: 'c7211f7dbe058db3077d3b863433bb1ff784689a', class: "spinner" }))), this.maintenanceModeData && !this.isInitialLoading && (index$1.h("div", { key: '21bb3ce3a444c7a6e7ac80e5dc39abce78b96961', class: "maintenance-mode maintenance-mode-container" }, index$1.h("div", { key: 'e0bdaaf670b4885e663e544220f5cc2dbf29aa04', class: "maintenance-mode-content" }, index$1.h("div", { key: '1c3d089f794bbde5f25abe2f1c61db55f929f25c', class: "maintenance-mode-content-label" }, index$1.h("h1", { key: 'b7273c7b4cbf6344836d94e20fb39b7fa0847ecf' }, pageTitle), index$1.h("p", { key: '89e45be7fbe1eac5904504766d7d1c6a026cedb1' }, pageContent)), image && index$1.h("img", { key: 'e975688737e4d6235617a1ce4c01039470737c86', src: utils.transformMediaUrl(image.src), alt: "maintenance-mode-image" })), newsletter && !this.userMessage && (index$1.h("form", { key: '0df506d0d16e8a318a84943cddcca3bbdc0bc1b4', onSubmit: e => this.handleSubmit(e), name: "newsletter", class: "maintenance-mode-form" }, index$1.h("div", { key: '9b37cfdc4921bb073f1b644e2aeaf322aa053f58', class: "maintenance-mode-form-label" }, index$1.h("h2", { key: '9d929d8b09e6333164fa388705a22685e973bcf0' }, "Cadastre-se para receber novidades")), index$1.h("div", { key: 'e33955e2d9d31dbfc208efe067a4ead5766e7c65', class: "maintenance-mode-form-content" }, index$1.h("div", { key: 'f785e5de7d745ffbb44b93fbd94ddb0b692696f0', class: "maintenance-mode-form-content-input" }, index$1.h("input", { key: 'dbae83cced7115b76ad014a41d0ff7d63932ae65', type: "text", name: "name", placeholder: "Seu nome", required: true }), index$1.h("input", { key: 'acf9f3a61f7c46c84ee541560fc817c5575607a8', type: "email", name: "email", placeholder: "Seu email", required: true })), index$1.h("google-recaptcha", { key: 'c3e5ccf04bf0392e51118db51042460b3d2b535c', siteKey: index$1.Env.GOOGLE_RECAPTCHA_SITE_KEY }), index$1.h("button", { key: '72dc53d7b0c3637a83edbe216709123271435dbb', class: "maintenance-mode-form-content-button", type: "submit", disabled: !this.recaptchaToken }, "Quero me inscrever")))), this.userMessage && (index$1.h("div", { key: 'ae0d0b67c135936ad7b4609e876e10ded605868c', class: `maintenance-mode-content-message maintenance-mode-content-message-${this.userMessage.type}` }, index$1.h("span", { key: '1afdb29599a9e7aef28db6b083b6f61f5a4712b4' }, this.userMessage.text)))))));
    }
};
MaintenanceMode.style = maintenanceModeCss;

exports.maintenance_mode = MaintenanceMode;

//# sourceMappingURL=maintenance-mode.cjs.entry.js.map