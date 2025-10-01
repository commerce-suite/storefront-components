'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-9c4b21d6.js');
const index = require('./index-cf4f2b3e.js');

const defaultContent = {
    title: 'Modo lançamento',
    caption: '<p>Utilize a senha para acessar a loja.</p>',
    password: '1234',
    is_active: false,
    color_title: '#000000',
    color_button: '#000000',
    color_caption: '#222222',
};

class LaunchModeService {
    async getAppContent() {
        try {
            const { content } = await index.AppService.getBySlug('modo-lancamento');
            return JSON.parse(content);
        }
        catch (error) {
            console.error(error);
            return defaultContent;
        }
    }
    async validatePassword(formData) {
        const url = `${window.dooca.base_url}/action/launch-mode/validate`;
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
            console.error('LaunchModeService - validatePassword', { error });
            throw error;
        }
    }
}

const ERROR_MESSAGES = {
    invalid_password: 'Senha incorreta.',
    inactive_mode: 'O modo lançamento está inativo no momento.',
    default: 'Ocorreu um erro, tente novamente mais tarde.',
};

const launchModeCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}body{margin:0}:host{display:inline-block;width:100%}.loading-container{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);z-index:9999}.loading-container .spinner{position:relative;height:5rem;width:5rem}.loading-container .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(224, 224, 224, 0.2);border-right-color:rgba(224, 224, 224, 0.2);border-bottom-color:rgba(224, 224, 224, 0.5);border-left-color:rgba(224, 224, 224, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.loading-container.-initial-loading{background-color:transparent}.loading-container.-initial-loading .spinner{position:relative;height:5rem;width:5rem}.loading-container.-initial-loading .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(0, 0, 0, 0.2);border-right-color:rgba(0, 0, 0, 0.2);border-bottom-color:rgba(0, 0, 0, 0.5);border-left-color:rgba(0, 0, 0, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.launch-mode{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:100vh}.launch-mode-container{padding:16px}@media (min-width: 768px){.launch-mode-container{padding:0}}.launch-mode-content{display:flex;flex-direction:column;align-items:center;gap:32px;text-align:center;width:480px}.launch-mode-content-label{display:flex;flex-direction:column;gap:8px}.launch-mode-content-label h1,.launch-mode-content-label div{margin:0}.launch-mode-content-label h1{color:var(--launch-title, #ffffff)}.launch-mode-content-label div{color:var(--launch-caption, #ffffff)}.launch-mode-content-message{display:flex;justify-content:center;padding:16px;border-radius:12px;background:#ffffff;border:1px solid rgba(204, 204, 204, 0.4);width:100%}.launch-mode-content-message-error{color:#dc3545}.launch-mode-form{width:100%}.launch-mode-form-content{display:flex;flex-direction:column;gap:16px}@media (min-width: 768px){.launch-mode-form-content{flex-direction:row}}.launch-mode-form-content-input{display:flex;position:relative;width:100%}@media (min-width: 768px){.launch-mode-form-content-input{flex:1}}.launch-mode-form-content-input input{padding:12px 48px 12px 24px;border:1px solid #e1e5e9;background:#f8f9fa;width:100%;font-size:12px}.launch-mode-form-content-input input::placeholder{color:#6c757d}.launch-mode-form-content-input input:focus,.launch-mode-form-content-input input:hover{border-color:var(--launch-button-bg, #667eea)}.launch-mode-form-content-input input:focus{outline:none;background:#ffffff}.launch-mode-form-content-input .password-toggle-btn{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:transparent;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;transition:color 0.2s ease}.launch-mode-form-content-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-size:12px;background-color:var(--launch-button-bg, #667eea);padding:14px 48px}.launch-mode-form-content-button:hover{opacity:0.75}.launch-mode-form-content-button:disabled{opacity:0.6;cursor:not-allowed}@media (min-width: 768px){.launch-mode-form-content-button{width:auto;white-space:nowrap}}.launch-mode-form-content-button:disabled{opacity:0.6;cursor:not-allowed}";
const LaunchModeStyle0 = launchModeCss;

const LaunchMode = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.componentRendered = index$1.createEvent(this, "componentRendered", 7);
        this.launchModeData = defaultContent;
        this.launchModeService = new LaunchModeService();
        this.isLoading = false;
        this.isInitialLoading = true;
        this.userMessage = undefined;
        this.passwordInput = '';
        this.showPassword = false;
    }
    async load() {
        try {
            this.launchModeData = await this.launchModeService.getAppContent();
        }
        catch (error) {
            console.error('LaunchMode - load', { error });
        }
        finally {
            this.isInitialLoading = false;
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('password', this.passwordInput);
        formData.append('form_type', 'launch_mode');
        try {
            this.isLoading = true;
            await this.launchModeService.validatePassword(formData);
            const baseUrl = window.dooca.base_url;
            window.location.href = baseUrl;
        }
        catch (error) {
            console.error('LaunchMode - handleSubmit', { error });
            const errorCode = this.parseErrorCode(error);
            const errorMessage = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.default;
            this.userMessage = {
                text: errorMessage,
            };
        }
        finally {
            this.isLoading = false;
        }
    }
    parseErrorCode(error) {
        try {
            const parsed = JSON.parse((error === null || error === void 0 ? void 0 : error.message) || '{}');
            return parsed.code || null;
        }
        catch (_a) {
            return null;
        }
    }
    handlePasswordChange(event) {
        const target = event.target;
        this.passwordInput = target.value;
        if (this.userMessage)
            this.userMessage = null;
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    async componentDidLoad() {
        await this.load();
        this.componentRendered.emit();
    }
    render() {
        const { title, caption, color_title: colorTitle, color_caption: colorCaption, color_button: colorButton, } = this.launchModeData;
        return (index$1.h(index$1.Host, { key: 'a909f8edc8119e172b9acc82250e8c71f563fcc2', style: {
                '--launch-title': colorTitle,
                '--launch-caption': colorCaption,
                '--launch-button-bg': colorButton,
            } }, (this.isLoading || this.isInitialLoading) && (index$1.h("div", { key: '364694868f1debebd0034240599db23abc6ab89b', class: `loading-container ${this.isInitialLoading ? '-initial-loading' : ''}` }, index$1.h("span", { key: '4be252cb3fd2422809ed015572f81126f48db2ce', class: "spinner" }))), this.launchModeData && !this.isInitialLoading && (index$1.h("div", { key: '8bce12136bd7fc6ba2e6735794c58b711d9d6aea', class: "launch-mode launch-mode-container" }, index$1.h("div", { key: 'c05dc557e32d54043ed8f3b6fd2a9a6994a3524d', class: "launch-mode-content" }, index$1.h("div", { key: '7c5ae49f0060ec2762a30d6605ea3fa36524ac6c', class: "launch-mode-content-label" }, index$1.h("h1", { key: 'be0dd3ca2d98dd02f0549f53116fb0d1e7407aec', class: "h1" }, title), index$1.h("div", { key: 'd480fe29f0d12edf0529e4537e2d4c074138d8ec', innerHTML: caption })), index$1.h("form", { key: 'f0917ec6ead319b3956883b4114b604f14c6b636', onSubmit: e => this.handleSubmit(e), class: "launch-mode-form" }, index$1.h("div", { key: '69391b5305962c3fa277c9a87aeb0859933e3a45', class: "launch-mode-form-content" }, index$1.h("div", { key: 'd10748a0a7455103eac0d6954e902a2508f61929', class: "launch-mode-form-content-input" }, index$1.h("input", { key: '020acbb3b4daa284e29d2842ea8fca1f56cdd0ef', name: "password", type: this.showPassword ? 'text' : 'password', placeholder: "Digite sua senha", value: this.passwordInput, onInput: e => this.handlePasswordChange(e), required: true }), index$1.h("button", { key: 'e52c66eb057042e444dcf00414325908c1d126ee', type: "button", class: "password-toggle-btn", onClick: () => this.togglePasswordVisibility(), "aria-label": this.showPassword ? 'Ocultar senha' : 'Mostrar senha' }, index$1.h("img", { key: '7eaf2b34fb9ffc0515ef7552f99966c145a0b13f', src: index$1.getAssetPath(this.showPassword
                ? './assets/icons/eye-off.svg'
                : './assets/icons/eye.svg'), alt: this.showPassword ? 'Ocultar senha' : 'Mostrar senha' }))), index$1.h("button", { key: 'ca82551eee91a7a53fb057e270b6b4b4d7842766', class: "launch-mode-form-content-button", type: "submit", disabled: this.isLoading || !this.passwordInput.trim() }, this.isLoading ? 'Destravando...' : 'Destravar'))), this.userMessage && (index$1.h("div", { key: '33c23a18ecdd8fd8644cb3af23c0e38ca32491a3', class: `launch-mode-content-message launch-mode-content-message-error` }, index$1.h("span", { key: '90908a1bed0430c31beedc54cfcbb805f4ae86f3' }, this.userMessage.text))))))));
    }
};
LaunchMode.style = LaunchModeStyle0;

exports.launch_mode = LaunchMode;

//# sourceMappingURL=launch-mode.cjs.entry.js.map