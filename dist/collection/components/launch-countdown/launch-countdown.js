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
        return (h(Host, { key: 'b5222efedc7637599725ceeec7ce9817567f48ae' }, h("div", { key: '4a2bf59691e27d81c7c4aacd050d6d168ebdbe10', class: "launch-countdown-container" }, h("div", { key: '2e288b294802a75a710a7896c8484b161ace0bc6', class: "launch-countdown-container-header" }, h("h3", { key: '2fd3d6689ab670675adf87507250734b75c55db7', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: '87a180a6bd19d8d42faadab0929dad957c6d5a78', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: '63245f4238b0f3b131005a63a9107dc906e0aee6', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
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
