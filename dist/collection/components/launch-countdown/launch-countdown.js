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
        return (h(Host, { key: '29cddb67e8a7d3b963bf4aaa4f0c9b6cda1470f1' }, h("div", { key: '06cb6b558f312427b7c9d3ebc26fbe66efe992fd', class: "launch-countdown-container" }, h("div", { key: '47a67bf28d204c189fbc735defbc571c49a45dc7', class: "launch-countdown-container-header" }, h("h3", { key: 'f1a3316645e68f85dc6d5ffd6fc64731c8a505d5', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: 'fbef046f8d31721f74d849cfed014a7df672001f', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: 'be1a088244017be51590b34de61a575661d7c9c6', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
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
