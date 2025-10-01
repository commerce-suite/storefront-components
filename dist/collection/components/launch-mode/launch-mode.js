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
        return (h(Host, { key: 'a909f8edc8119e172b9acc82250e8c71f563fcc2', style: {
                '--launch-title': colorTitle,
                '--launch-caption': colorCaption,
                '--launch-button-bg': colorButton,
            } }, (this.isLoading || this.isInitialLoading) && (h("div", { key: '364694868f1debebd0034240599db23abc6ab89b', class: `loading-container ${this.isInitialLoading ? '-initial-loading' : ''}` }, h("span", { key: '4be252cb3fd2422809ed015572f81126f48db2ce', class: "spinner" }))), this.launchModeData && !this.isInitialLoading && (h("div", { key: '8bce12136bd7fc6ba2e6735794c58b711d9d6aea', class: "launch-mode launch-mode-container" }, h("div", { key: 'c05dc557e32d54043ed8f3b6fd2a9a6994a3524d', class: "launch-mode-content" }, h("div", { key: '7c5ae49f0060ec2762a30d6605ea3fa36524ac6c', class: "launch-mode-content-label" }, h("h1", { key: 'be0dd3ca2d98dd02f0549f53116fb0d1e7407aec', class: "h1" }, title), h("div", { key: 'd480fe29f0d12edf0529e4537e2d4c074138d8ec', innerHTML: caption })), h("form", { key: 'f0917ec6ead319b3956883b4114b604f14c6b636', onSubmit: e => this.handleSubmit(e), class: "launch-mode-form" }, h("div", { key: '69391b5305962c3fa277c9a87aeb0859933e3a45', class: "launch-mode-form-content" }, h("div", { key: 'd10748a0a7455103eac0d6954e902a2508f61929', class: "launch-mode-form-content-input" }, h("input", { key: '020acbb3b4daa284e29d2842ea8fca1f56cdd0ef', name: "password", type: this.showPassword ? 'text' : 'password', placeholder: "Digite sua senha", value: this.passwordInput, onInput: e => this.handlePasswordChange(e), required: true }), h("button", { key: 'e52c66eb057042e444dcf00414325908c1d126ee', type: "button", class: "password-toggle-btn", onClick: () => this.togglePasswordVisibility(), "aria-label": this.showPassword ? 'Ocultar senha' : 'Mostrar senha' }, h("img", { key: '7eaf2b34fb9ffc0515ef7552f99966c145a0b13f', src: getAssetPath(this.showPassword
                ? './assets/icons/eye-off.svg'
                : './assets/icons/eye.svg'), alt: this.showPassword ? 'Ocultar senha' : 'Mostrar senha' }))), h("button", { key: 'ca82551eee91a7a53fb057e270b6b4b4d7842766', class: "launch-mode-form-content-button", type: "submit", disabled: this.isLoading || !this.passwordInput.trim() }, this.isLoading ? 'Destravando...' : 'Destravar'))), this.userMessage && (h("div", { key: '33c23a18ecdd8fd8644cb3af23c0e38ca32491a3', class: `launch-mode-content-message launch-mode-content-message-error` }, h("span", { key: '90908a1bed0430c31beedc54cfcbb805f4ae86f3' }, this.userMessage.text))))))));
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
