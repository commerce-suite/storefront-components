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
        return (h(Host, { key: 'a1396bb34d5a3a0acec5110b9642f6769fe4aed3', style: {
                '--maintenance-bg': contentBackground,
                '--maintenance-title': title,
                '--maintenance-text': content,
                '--maintenance-button-bg': buttonBackground,
                '--maintenance-button-color': buttonText,
            } }, (this.isLoading || this.isInitialLoading) && (h("div", { key: 'ea7ea9977e8a0b9bc65680349c6877f8f1f1fe24', class: `loading-container ${this.isInitialLoading ? '-initial-loading' : ''}` }, h("span", { key: '78bed86de16ab631eb8a9e4eb6aea1893d360dd7', class: "spinner" }))), this.maintenanceModeData && !this.isInitialLoading && (h("div", { key: '15cb9900a8f59548c02b3d634da6579eb488ab5f', class: "maintenance-mode maintenance-mode-container" }, h("div", { key: 'e40c12b8c38c616abb9d6a3321c19d4a976616a5', class: "maintenance-mode-content" }, h("div", { key: 'a823e3cc810dd48625bd40286e9e89755b0e15dc', class: "maintenance-mode-content-label" }, h("h1", { key: 'b735c6fe4ff629485f6ec5444c562502e1cb300e' }, pageTitle), h("p", { key: '25d2dc430f46659bc60a83f33864458709449d0d' }, pageContent)), image && h("img", { key: 'fac6b920cc1287c26167bd548bf91bc34b043b8b', src: transformMediaUrl(image.src), alt: "maintenance-mode-image" })), newsletter && !this.userMessage && (h("form", { key: '079f478849da24bca16d853dcd3fd7082da5d04c', onSubmit: e => this.handleSubmit(e), name: "newsletter", class: "maintenance-mode-form" }, h("div", { key: '4bca546f32c576d2709c7af468e32f0317f770d6', class: "maintenance-mode-form-label" }, h("h2", { key: 'b23f216d16fa5aa4bdccb68f0a840949074f0e81' }, "Cadastre-se para receber novidades")), h("div", { key: '859d634253937d7cafae2b1c076f1c4cefb30cd3', class: "maintenance-mode-form-content" }, h("div", { key: 'a6e3f0e97b5aec2e000a7e5f2e5e58cb0e2d68f5', class: "maintenance-mode-form-content-input" }, h("input", { key: '7479d0dc63b04181f96a335e9af32dc17d0e1831', type: "text", name: "name", placeholder: "Seu nome", required: true }), h("input", { key: '75d7101275091344f131b79c16a4205785df4827', type: "email", name: "email", placeholder: "Seu email", required: true })), h("google-recaptcha", { key: '0bdae69c455e096c6906fc7d6d5ab31e934235b6', siteKey: Env.GOOGLE_RECAPTCHA_SITE_KEY }), h("button", { key: 'cfbaaa42e2fefa322ffd737bccbab2e8ae83ce0e', class: "maintenance-mode-form-content-button", type: "submit", disabled: !this.recaptchaToken }, "Quero me inscrever")))), this.userMessage && (h("div", { key: 'cdec56b6e13b245e932d000c9fcb9cad5cb971e0', class: `maintenance-mode-content-message maintenance-mode-content-message-${this.userMessage.type}` }, h("span", { key: '492f957e61cb9a0844cbc5e5566551e9c6309d8a' }, this.userMessage.text)))))));
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
