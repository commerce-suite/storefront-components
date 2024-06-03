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
        return (h(Host, { key: '71430e6883b779cac55f690768bfe8e62131babe' }, h("div", { key: '347d50068ebc34f29cc8b4d9ebf8ac7b37a9f56a', class: "launch-countdown-container" }, h("div", { key: '7a3986b1f14b8a15a8e404f8f66b910678e19077', class: "launch-countdown-container-header" }, h("h3", { key: 'dd7a3cbe5d86256c581a1d1108d20c7d90a91669', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: '49a24fa7006b6fcb9042bd00b0dc0dbf4637e6b7', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: '8502d65dbd0301d2ac5299e8fa8bf9073c0edbda', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
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
