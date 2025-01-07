'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-faa0dd42.js');
const index = require('./index-5ea523e2.js');

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

const maintenanceModeCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}body{margin:0}:host{display:inline-block;width:100%}.loading-container{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);z-index:9999}.loading-container .spinner{position:relative;height:5rem;width:5rem}.loading-container .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(224, 224, 224, 0.2);border-right-color:rgba(224, 224, 224, 0.2);border-bottom-color:rgba(224, 224, 224, 0.5);border-left-color:rgba(224, 224, 224, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.maintenance-mode-container{background-color:var(--maintenance-bg)}.maintenance-mode{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:24px}@media (min-width: 1024px){.maintenance-mode{flex-direction:row}}.maintenance-mode-content{display:flex;flex-direction:column;align-items:center;gap:24px;text-align:center;max-width:480px}@media (min-width: 1024px){.maintenance-mode-content{padding:24px}}.maintenance-mode-content img{border-radius:12px;object-fit:cover;object-position:center;width:346px;height:172px}@media (min-width: 1024px){.maintenance-mode-content img{width:432px;height:238px}}.maintenance-mode-content-label{display:flex;flex-direction:column;gap:4px;width:346px}@media (min-width: 1024px){.maintenance-mode-content-label{width:100%}}.maintenance-mode-content-label h1,.maintenance-mode-content-label p{margin:0}.maintenance-mode-content-label h1{color:var(--maintenance-title);font-weight:700;font-size:28px}.maintenance-mode-content-label p{color:var(--maintenance-text);font-size:14px}.maintenance-mode-content-message{display:flex;justify-content:center;gap:16px;padding:20px;border-radius:12px;background:#ffffff;border:1px solid rgba(204, 204, 204, 0.4);width:100%}@media (min-width: 1024px){.maintenance-mode-content-message{width:480px;padding:24px}}.maintenance-mode-content-message-success{color:#28a745}.maintenance-mode-content-message-error{color:#dc3545}.maintenance-mode-form{display:flex;flex-direction:column;gap:16px;padding:20px;border-radius:12px;background:#ffffff;border:1px solid rgba(204, 204, 204, 0.4)}@media (min-width: 1024px){.maintenance-mode-form{width:480px;padding:24px}}.maintenance-mode-form-label h2{font-size:14px;text-align:center;margin:0;font-weight:600}.maintenance-mode-form-content{display:flex;flex-direction:column;gap:24px}.maintenance-mode-form-content-input{display:flex;flex-direction:column;gap:24px}.maintenance-mode-form-content-input input{padding:10px 14px;border:1px solid #d5d7da;border-radius:8px;font-size:16px}.maintenance-mode-form-content-input input::placeholder{color:#717680}.maintenance-mode-form-content-input input:focus{outline:none;border:1px solid #000000}.maintenance-mode-form-content-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--maintenance-button-bg);color:var(--maintenance-button-color)}.maintenance-mode-form-content-button:hover{opacity:0.75}.maintenance-mode-form-content-button:disabled{opacity:0.6;cursor:not-allowed}";
const MaintenanceModeStyle0 = maintenanceModeCss;

const MaintenanceMode = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.componentRendered = index$1.createEvent(this, "componentRendered", 7);
        this.maintenanceModeData = defaultContent;
        this.maintenanceModeService = new MaintenanceModeService();
        this.recaptchaToken = undefined;
        this.isLoading = false;
        this.isInitialLoading = false;
        this.userMessage = undefined;
    }
    async load() {
        this.isInitialLoading = true;
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
        formData.append('form_type', 'newsletter');
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
    async componentWillLoad() {
        await this.load();
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        const { page_title: pageTitle, page_content: pageContent, colors, image, newsletter, } = this.maintenanceModeData;
        const { content_background: contentBackground, title, content, button_background: buttonBackground, button_text: buttonText, } = colors;
        document.documentElement.style.setProperty('--maintenance-bg', contentBackground);
        return (index$1.h(index$1.Host, { key: 'f428c820ef32044f8c9a4dcc9550cc07536a0cfd', style: {
                '--maintenance-bg': contentBackground,
                '--maintenance-title': title,
                '--maintenance-text': content,
                '--maintenance-button-bg': buttonBackground,
                '--maintenance-button-color': buttonText,
            } }, this.isLoading && (index$1.h("div", { key: '929177421684e7906f2dc346b1696812cb295c0d', class: "loading-container" }, index$1.h("span", { key: '9500d7badc036f52c56133714be8545cadd84d18', class: "spinner" }))), this.maintenanceModeData && !this.isInitialLoading && (index$1.h("div", { key: '1f4e704aadc37fddaac2f3255a35a2ae6bcc354b', class: "maintenance-mode maintenance-mode-container" }, index$1.h("div", { key: '866d3172570153e5d894351fd65644d774d907db', class: "maintenance-mode-content" }, index$1.h("div", { key: '176a745fddcaf06ce6264c329cbab69429f666b4', class: "maintenance-mode-content-label" }, index$1.h("h1", { key: 'da1ac6c0cf8ab562c127a240794d7c46b9aff873' }, pageTitle), index$1.h("p", { key: '386266c6bf9940db6a02140647bfc589b46183de' }, pageContent)), image && index$1.h("img", { key: '12f977adcd4b25160e407da5008f300b0dda481e', src: image.src, alt: "maintenance-mode-image" })), newsletter && !this.userMessage && (index$1.h("form", { key: '74db42729b5f250ae141826347ef0d366c7e48b3', onSubmit: e => this.handleSubmit(e), name: "newsletter", class: "maintenance-mode-form" }, index$1.h("div", { key: 'ccb34bf48b09c64563c2ece31026c68b56da57c5', class: "maintenance-mode-form-label" }, index$1.h("h2", { key: '65c6bd29cbbc4767900170f269c2caa4170d80b8' }, "Cadastre-se para receber novidades")), index$1.h("div", { key: '7ead00a5046528635825bda1dc1498d1d5a7ba40', class: "maintenance-mode-form-content" }, index$1.h("div", { key: 'ddae2b5ac82d7b5544ca50917c6a2637e7b4a949', class: "maintenance-mode-form-content-input" }, index$1.h("input", { key: '085cf52349fbecf63c1d841addf63a21217fdb5a', type: "text", name: "name", placeholder: "Seu nome", required: true }), index$1.h("input", { key: 'f656374a81449d6ba97a393278cbc01d42242596', type: "email", name: "email", placeholder: "Seu email", required: true })), index$1.h("google-recaptcha", { key: '6d400a4ba9f3832976a013c45b47d49beef09e8a', siteKey: index$1.Env.GOOGLE_RECAPTCHA_SITE_KEY }), index$1.h("button", { key: '7ac85838bcb5243666de1991e3c8a937dfb1981b', class: "maintenance-mode-form-content-button", type: "submit", disabled: !this.recaptchaToken }, "Quero me inscrever")))), this.userMessage && (index$1.h("div", { key: '3fd5d321f7511f184bdbad3ab17c480e770714a7', class: `maintenance-mode-content-message maintenance-mode-content-message-${this.userMessage.type}` }, index$1.h("span", { key: 'cce885af039bc843f10947f176d41c34bf31f8c7' }, this.userMessage.text)))))));
    }
};
MaintenanceMode.style = MaintenanceModeStyle0;

exports.maintenance_mode = MaintenanceMode;

//# sourceMappingURL=maintenance-mode.cjs.entry.js.map