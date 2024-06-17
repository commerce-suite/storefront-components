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
        return (h(Host, { key: '7663c3ac7be67769e9115cfb71928856c89d0aac' }, h("div", { key: 'b67acc6e6e97503b7c32a4d5c920e0ded335de0f', class: "launch-countdown-container" }, h("div", { key: 'a836c13f17ef931e6d59acb9dbd32f2c8c95a723', class: "launch-countdown-container-header" }, h("h3", { key: 'b9b1f96b681acd79f3f8ad48fefd4c39d3a210f8', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: '2ad67b669d41d12d5574a4089b3634b354f25c38', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: '80845c1e039431e5f555b3f2de8733db6dbfd3e5', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
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
