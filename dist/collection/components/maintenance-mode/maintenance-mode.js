import { Env, h, Host } from "@stencil/core";
import { defaultContent } from "./constants/defaultContent";
import { MaintenanceModeService } from "./maintenance-mode.service";
import { transformMediaUrl } from "../../utils/utils";
export class MaintenanceMode {
    constructor() {
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
        return (h(Host, { key: '1900cedeb7068e63689d1081b113cb3446e2ddfb', style: {
                '--maintenance-bg': contentBackground,
                '--maintenance-title': title,
                '--maintenance-text': content,
                '--maintenance-button-bg': buttonBackground,
                '--maintenance-button-color': buttonText,
            } }, (this.isLoading || this.isInitialLoading) && (h("div", { key: 'b15b399e25c8158b00ad4b44bac917ba9277f619', class: `loading-container ${this.isInitialLoading ? '-initial-loading' : ''}` }, h("span", { key: 'c7211f7dbe058db3077d3b863433bb1ff784689a', class: "spinner" }))), this.maintenanceModeData && !this.isInitialLoading && (h("div", { key: '21bb3ce3a444c7a6e7ac80e5dc39abce78b96961', class: "maintenance-mode maintenance-mode-container" }, h("div", { key: 'e0bdaaf670b4885e663e544220f5cc2dbf29aa04', class: "maintenance-mode-content" }, h("div", { key: '1c3d089f794bbde5f25abe2f1c61db55f929f25c', class: "maintenance-mode-content-label" }, h("h1", { key: 'b7273c7b4cbf6344836d94e20fb39b7fa0847ecf' }, pageTitle), h("p", { key: '89e45be7fbe1eac5904504766d7d1c6a026cedb1' }, pageContent)), image && h("img", { key: 'e975688737e4d6235617a1ce4c01039470737c86', src: transformMediaUrl(image.src), alt: "maintenance-mode-image" })), newsletter && !this.userMessage && (h("form", { key: '0df506d0d16e8a318a84943cddcca3bbdc0bc1b4', onSubmit: e => this.handleSubmit(e), name: "newsletter", class: "maintenance-mode-form" }, h("div", { key: '9b37cfdc4921bb073f1b644e2aeaf322aa053f58', class: "maintenance-mode-form-label" }, h("h2", { key: '9d929d8b09e6333164fa388705a22685e973bcf0' }, "Cadastre-se para receber novidades")), h("div", { key: 'e33955e2d9d31dbfc208efe067a4ead5766e7c65', class: "maintenance-mode-form-content" }, h("div", { key: 'f785e5de7d745ffbb44b93fbd94ddb0b692696f0', class: "maintenance-mode-form-content-input" }, h("input", { key: 'dbae83cced7115b76ad014a41d0ff7d63932ae65', type: "text", name: "name", placeholder: "Seu nome", required: true }), h("input", { key: 'acf9f3a61f7c46c84ee541560fc817c5575607a8', type: "email", name: "email", placeholder: "Seu email", required: true })), h("google-recaptcha", { key: 'c3e5ccf04bf0392e51118db51042460b3d2b535c', siteKey: Env.GOOGLE_RECAPTCHA_SITE_KEY }), h("button", { key: '72dc53d7b0c3637a83edbe216709123271435dbb', class: "maintenance-mode-form-content-button", type: "submit", disabled: !this.recaptchaToken }, "Quero me inscrever")))), this.userMessage && (h("div", { key: 'ae0d0b67c135936ad7b4609e876e10ded605868c', class: `maintenance-mode-content-message maintenance-mode-content-message-${this.userMessage.type}` }, h("span", { key: '1afdb29599a9e7aef28db6b083b6f61f5a4712b4' }, this.userMessage.text)))))));
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
