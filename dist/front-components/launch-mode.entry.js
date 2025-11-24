import { r as registerInstance, a as createEvent, h, e as Host, g as getAssetPath } from './index-02e5006d.js';
import { A as AppService } from './index-588ed867.js';

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
            const { content } = await AppService.getBySlug('modo-lancamento');
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

const launchModeCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}body{margin:0}:host{display:inline-block;width:100%}.loading-container{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.5);z-index:9999}.loading-container .spinner{position:relative;height:5rem;width:5rem}.loading-container .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(224, 224, 224, 0.2);border-right-color:rgba(224, 224, 224, 0.2);border-bottom-color:rgba(224, 224, 224, 0.5);border-left-color:rgba(224, 224, 224, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.loading-container.-initial-loading{background-color:transparent}.loading-container.-initial-loading .spinner{position:relative;height:5rem;width:5rem}.loading-container.-initial-loading .spinner::after{content:\"\";display:block;position:absolute;left:50%;top:50%;border-width:-0.75rem;border-style:solid;border-top-color:rgba(0, 0, 0, 0.2);border-right-color:rgba(0, 0, 0, 0.2);border-bottom-color:rgba(0, 0, 0, 0.5);border-left-color:rgba(0, 0, 0, 0.5);transform:translateZ(0);animation:simple-spinner-animation 0.5s infinite linear;border-radius:50%;width:5rem;height:5rem}.launch-mode{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:100vh}.launch-mode-container{padding:16px}@media (min-width: 768px){.launch-mode-container{padding:0}}.launch-mode-content{display:flex;flex-direction:column;align-items:center;gap:32px;text-align:center;max-width:480px}.launch-mode-content-label{display:flex;flex-direction:column;gap:8px}.launch-mode-content-label h1,.launch-mode-content-label div{margin:0}.launch-mode-content-label h1{color:var(--launch-title, #ffffff)}.launch-mode-content-label div{color:var(--launch-caption, #ffffff)}.launch-mode-content-message{display:flex;justify-content:center;padding:16px;border-radius:12px;background:#ffffff;border:1px solid rgba(204, 204, 204, 0.4);width:100%}.launch-mode-content-message-error{color:#dc3545}.launch-mode-content-message-success{color:#28a745}.launch-mode-form{width:100%}.launch-mode-form-content{display:flex;flex-direction:column;gap:16px}@media (min-width: 768px){.launch-mode-form-content{flex-direction:row}}.launch-mode-form-content-input{display:flex;position:relative;width:100%}@media (min-width: 768px){.launch-mode-form-content-input{flex:1}}.launch-mode-form-content-input input{padding:12px 48px 12px 24px;border:1px solid #e1e5e9;background:#f8f9fa;width:100%;font-size:14px}.launch-mode-form-content-input input::placeholder{color:#6c757d}.launch-mode-form-content-input input:focus,.launch-mode-form-content-input input:hover{border-color:var(--launch-button-bg, #667eea)}.launch-mode-form-content-input input:focus{outline:none;background:#ffffff}.launch-mode-form-content-input .password-toggle-btn{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:transparent;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;transition:color 0.2s ease}.launch-mode-form-content-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-size:14px;background-color:var(--launch-button-bg, #667eea);padding:14px 48px}.launch-mode-form-content-button:hover{opacity:0.75}.launch-mode-form-content-button:disabled{opacity:0.6;cursor:not-allowed}@media (min-width: 768px){.launch-mode-form-content-button{width:auto;white-space:nowrap}}.launch-mode-form-content-button:disabled{opacity:0.6;cursor:not-allowed}";

const LaunchMode = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentRendered = createEvent(this, "componentRendered", 7);
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
            this.userMessage = {
                text: 'Acesso liberado. Você será redirecionado em instantes.',
                type: 'success',
            };
            const baseUrl = window.dooca.base_url;
            window.location.href = baseUrl;
        }
        catch (error) {
            console.error('LaunchMode - handleSubmit', { error });
            const errorCode = this.parseErrorCode(error);
            const errorMessage = ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.default;
            this.userMessage = {
                text: errorMessage,
                type: 'error',
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
        return (h(Host, { key: '2f04a58e9fb49d4dbb306af1148566b8e3b3c635', style: {
                '--launch-title': colorTitle,
                '--launch-caption': colorCaption,
                '--launch-button-bg': colorButton,
            } }, (this.isLoading || this.isInitialLoading) && (h("div", { key: '3f03f5d6002aba433b587ee5c59abe589a859801', class: `loading-container ${this.isInitialLoading ? '-initial-loading' : ''}` }, h("span", { key: '5be69b1fa720d4be7ae4bcbf5dbb2c925749ac89', class: "spinner" }))), this.launchModeData && !this.isInitialLoading && (h("div", { key: '8ffb73b0c2520f33398f21ebb2755bf98c75e3ce', class: "launch-mode launch-mode-container" }, h("div", { key: 'bceb9b44133fd32e7f429c8ed56b6eb61b6e66eb', class: "launch-mode-content" }, h("div", { key: '4f9cdd39df8dcb2b9c117106f628ae43acfb3aae', class: "launch-mode-content-label" }, h("h1", { key: '98b874c80e97fa15c2dcb6f1b5c5a7efede53ba7', class: "h1" }, title), h("div", { key: '1e2a9be6ff7533bc5753d12c72297dadf51ab9a2', innerHTML: caption })), h("form", { key: 'e10a93ce0ee8410cea3bd9a3e6cebe629d23a51b', onSubmit: e => this.handleSubmit(e), class: "launch-mode-form" }, h("div", { key: '3508f0f1ab12e16a0e8bbc0862219d8aa378eea1', class: "launch-mode-form-content" }, h("div", { key: '7417cdaccaa971eb74c6309f164e13d3cb891845', class: "launch-mode-form-content-input" }, h("input", { key: 'ded7bf21b3a727726b5896bcad72299d44e0374e', name: "password", type: this.showPassword ? 'text' : 'password', placeholder: "Digite sua senha", value: this.passwordInput, onInput: e => this.handlePasswordChange(e), required: true }), h("button", { key: 'eaf238e32518befa3b246eac112e22fb33611935', type: "button", class: "password-toggle-btn", onClick: () => this.togglePasswordVisibility(), "aria-label": this.showPassword ? 'Ocultar senha' : 'Mostrar senha' }, h("img", { key: '4bb356059a474e91a8f5a2e8e1abb46883d47b6f', src: getAssetPath(this.showPassword
                ? './assets/icons/eye-off.svg'
                : './assets/icons/eye.svg'), alt: this.showPassword ? 'Ocultar senha' : 'Mostrar senha' }))), h("button", { key: '0b4836a64079181bd82832c1e15023ccf91a274c', class: "launch-mode-form-content-button", type: "submit", disabled: this.isLoading || !this.passwordInput.trim() }, this.isLoading ? 'Destravando...' : 'Destravar'))), this.userMessage && (h("div", { key: 'c072e9c8682adf7aec7b2b0e9b402497c9ec991e', class: `launch-mode-content-message launch-mode-content-message-${this.userMessage.type}` }, h("span", { key: '722dd31a47c42767477eaac01c303e61a45a0662' }, this.userMessage.text))))))));
    }
};
LaunchMode.style = launchModeCss;

export { LaunchMode as launch_mode };

//# sourceMappingURL=launch-mode.entry.js.map