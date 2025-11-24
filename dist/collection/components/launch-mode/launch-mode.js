import { h, Host, getAssetPath } from "@stencil/core";
import { LaunchModeService } from "./launch-mode.service";
import { defaultContent } from "./constants/defaultContent";
import { ERROR_MESSAGES } from "./constants/errorMessages";
export class LaunchMode {
    constructor() {
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
    static get is() { return "launch-mode"; }
    static get originalStyleUrls() {
        return {
            "$": ["launch-mode.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["launch-mode.css"]
        };
    }
    static get states() {
        return {
            "launchModeData": {},
            "launchModeService": {},
            "isLoading": {},
            "isInitialLoading": {},
            "userMessage": {},
            "passwordInput": {},
            "showPassword": {}
        };
    }
    static get events() {
        return [{
                "method": "componentRendered",
                "name": "componentRendered",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=launch-mode.js.map
