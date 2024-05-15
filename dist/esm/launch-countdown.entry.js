import { r as registerInstance, c as createEvent, h, H as Host } from './index-f45e2507.js';
import { P as ProductService } from './index-7b8cc3ac.js';

class LaunchCountdownService {
    static async getReleaseDateByProduct(productId, variationId) {
        var _a;
        try {
            if (!productId)
                return null;
            const product = await ProductService.getById(productId);
            if (!product)
                return null;
            let variation = product;
            if (variationId) {
                variation = ((_a = product.variations) === null || _a === void 0 ? void 0 : _a.find(({ id }) => id === variationId)) || product;
            }
            const { releaseDate } = variation;
            return releaseDate;
        }
        catch (_b) {
            return null;
        }
    }
}

const launchCountdownCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.launch-countdown-container{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--fc-color-secondary);padding:var(--fc-gap-grid);border-radius:var(--fc-border-radius)}.launch-countdown-container>.launch-countdown-container-header{display:flex;flex-direction:column;align-items:center;color:var(--fc-color-white);background-color:transparent;margin-bottom:16px;line-height:1.5;text-align:center}.launch-countdown-container>.launch-countdown-container-header>.launch-countdown-container-title{margin:0;margin-bottom:4px;font-weight:var(--fc-m-fw)}.launch-countdown-container>.launch-countdown-container-header>.launch-countdown-container-description{margin:0;font-size:12px}.launch-countdown-container>front-countdown.timer{display:flex;flex-wrap:wrap;--variations-gap:16px;gap:var(--variations-gap)}.launch-countdown-container>front-countdown.timer>.cell{display:flex;flex-direction:column;align-items:center;min-width:calc(50% - var(--variations-gap));border-radius:16px;background-color:#fff;color:var(--fc-color-secondary);padding:6px}.launch-countdown-container>front-countdown.timer>.cell>.time{font-size:46px;font-weight:700;margin:0}.launch-countdown-container>front-countdown.timer>.cell>.unit{font-size:12px;margin:0}@media (min-width: 1024px){.launch-countdown-container>front-countdown.timer>.cell{min-width:80px}.launch-countdown-container>front-countdown.timer>.cell>.time{font-size:40px}}";
const LaunchCountdownStyle0 = launchCountdownCss;

const LaunchCountdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.countdownLoaded = createEvent(this, "countdownLoaded", 7);
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
    static get watchers() { return {
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
};
LaunchCountdown.style = LaunchCountdownStyle0;

export { LaunchCountdown as launch_countdown };

//# sourceMappingURL=launch-countdown.entry.js.map