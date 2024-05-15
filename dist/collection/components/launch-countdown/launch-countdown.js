import { Host, h } from "@stencil/core";
import { LaunchCountdownService } from "./launch-countdown.service";
export class LaunchCountdown {
    constructor() {
        this.productId = undefined;
        this.variationId = undefined;
        this.dataTargetDate = undefined;
        this.dataInitialDate = undefined;
        this.dataCountdownTitle = 'Agora falta muito pouco!';
        this.dataDescription = 'O produto que você tanto espera será liberado em breve.';
        this.dateTime = { endDate: null, startDate: null };
    }
    setDateTimeByProps() {
        this.dateTime = {
            startDate: this.dataInitialDate,
            endDate: this.dataTargetDate,
        };
    }
    async loadCountDown() {
        const productReleaseDate = await LaunchCountdownService.getReleaseDateByProduct(this.productId, this.variationId);
        if (!productReleaseDate) {
            this.countdownLoaded.emit({ releaseDateActive: false });
            this.setDateTimeByProps();
            return;
        }
        const { now, releaseDate } = productReleaseDate;
        this.countdownLoaded.emit({ releaseDateActive: Number(now) < Number(releaseDate) });
        this.dateTime = {
            startDate: now,
            endDate: releaseDate,
        };
    }
    componentWillLoad() {
        this.loadCountDown();
    }
    watchVariationIdChange() {
        this.loadCountDown();
    }
    watchProductIdChange() {
        this.loadCountDown();
    }
    render() {
        return (h(Host, { key: '30a4a721f1fdf440408b0304a576b1ebe2ec4f70' }, h("div", { key: '045e7b50ce51272c74a367d94426732b247520bd', class: "launch-countdown-container" }, h("div", { key: 'a26c6eb50724f68ec48930ff91c281e7752d80e4', class: "launch-countdown-container-header" }, h("h3", { key: 'ad4bcffd6b02e363fe9466f94241cb82fc8d2f13', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: '095ba5903827f93366175dfe4817f03b421b0387', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: 'be5fff8d11232b3b2c24eac5372b771b76b5a1cf', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
    }
    static get is() { return "launch-countdown"; }
    static get originalStyleUrls() {
        return {
            "$": ["launch-countdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["launch-countdown.css"]
        };
    }
    static get properties() {
        return {
            "productId": {
                "type": "string",
                "mutable": true,
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
                "attribute": "product-id",
                "reflect": false
            },
            "variationId": {
                "type": "string",
                "mutable": true,
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
                "attribute": "variation-id",
                "reflect": false
            },
            "dataTargetDate": {
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
                "attribute": "data-target-date",
                "reflect": false
            },
            "dataInitialDate": {
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
                "attribute": "data-initial-date",
                "reflect": false
            },
            "dataCountdownTitle": {
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
                "attribute": "data-countdown-title",
                "reflect": false,
                "defaultValue": "'Agora falta muito pouco!'"
            },
            "dataDescription": {
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
                "attribute": "data-description",
                "reflect": false,
                "defaultValue": "'O produto que voc\u00EA tanto espera ser\u00E1 liberado em breve.'"
            }
        };
    }
    static get states() {
        return {
            "dateTime": {}
        };
    }
    static get events() {
        return [{
                "method": "countdownLoaded",
                "name": "countdownLoaded",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ releaseDateActive: boolean }",
                    "resolved": "{ releaseDateActive: boolean; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "variationId",
                "methodName": "watchVariationIdChange"
            }, {
                "propName": "productId",
                "methodName": "watchProductIdChange"
            }];
    }
}
//# sourceMappingURL=launch-countdown.js.map
