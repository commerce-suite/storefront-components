import { Env, h, Host } from "@stencil/core";
import { defaultContent } from "./constants/defaultContent";
import { MaintenanceModeService } from "./maintenance-mode.service";
export class MaintenanceMode {
    constructor() {
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
        return (h(Host, { key: 'f428c820ef32044f8c9a4dcc9550cc07536a0cfd', style: {
                '--maintenance-bg': contentBackground,
                '--maintenance-title': title,
                '--maintenance-text': content,
                '--maintenance-button-bg': buttonBackground,
                '--maintenance-button-color': buttonText,
            } }, this.isLoading && (h("div", { key: '929177421684e7906f2dc346b1696812cb295c0d', class: "loading-container" }, h("span", { key: '9500d7badc036f52c56133714be8545cadd84d18', class: "spinner" }))), this.maintenanceModeData && !this.isInitialLoading && (h("div", { key: '1f4e704aadc37fddaac2f3255a35a2ae6bcc354b', class: "maintenance-mode maintenance-mode-container" }, h("div", { key: '866d3172570153e5d894351fd65644d774d907db', class: "maintenance-mode-content" }, h("div", { key: '176a745fddcaf06ce6264c329cbab69429f666b4', class: "maintenance-mode-content-label" }, h("h1", { key: 'da1ac6c0cf8ab562c127a240794d7c46b9aff873' }, pageTitle), h("p", { key: '386266c6bf9940db6a02140647bfc589b46183de' }, pageContent)), image && h("img", { key: '12f977adcd4b25160e407da5008f300b0dda481e', src: image.src, alt: "maintenance-mode-image" })), newsletter && !this.userMessage && (h("form", { key: '74db42729b5f250ae141826347ef0d366c7e48b3', onSubmit: e => this.handleSubmit(e), name: "newsletter", class: "maintenance-mode-form" }, h("div", { key: 'ccb34bf48b09c64563c2ece31026c68b56da57c5', class: "maintenance-mode-form-label" }, h("h2", { key: '65c6bd29cbbc4767900170f269c2caa4170d80b8' }, "Cadastre-se para receber novidades")), h("div", { key: '7ead00a5046528635825bda1dc1498d1d5a7ba40', class: "maintenance-mode-form-content" }, h("div", { key: 'ddae2b5ac82d7b5544ca50917c6a2637e7b4a949', class: "maintenance-mode-form-content-input" }, h("input", { key: '085cf52349fbecf63c1d841addf63a21217fdb5a', type: "text", name: "name", placeholder: "Seu nome", required: true }), h("input", { key: 'f656374a81449d6ba97a393278cbc01d42242596', type: "email", name: "email", placeholder: "Seu email", required: true })), h("google-recaptcha", { key: '6d400a4ba9f3832976a013c45b47d49beef09e8a', siteKey: Env.GOOGLE_RECAPTCHA_SITE_KEY }), h("button", { key: '7ac85838bcb5243666de1991e3c8a937dfb1981b', class: "maintenance-mode-form-content-button", type: "submit", disabled: !this.recaptchaToken }, "Quero me inscrever")))), this.userMessage && (h("div", { key: '3fd5d321f7511f184bdbad3ab17c480e770714a7', class: `maintenance-mode-content-message maintenance-mode-content-message-${this.userMessage.type}` }, h("span", { key: 'cce885af039bc843f10947f176d41c34bf31f8c7' }, this.userMessage.text)))))));
    }
    static get is() { return "maintenance-mode"; }
    static get originalStyleUrls() {
        return {
            "$": ["maintenance-mode.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["maintenance-mode.css"]
        };
    }
    static get states() {
        return {
            "maintenanceModeData": {},
            "maintenanceModeService": {},
            "recaptchaToken": {},
            "isLoading": {},
            "isInitialLoading": {},
            "userMessage": {}
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
    static get listeners() {
        return [{
                "name": "tokenReceived",
                "method": "handleTokenReceived",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=maintenance-mode.js.map
