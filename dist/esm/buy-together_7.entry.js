import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host } from './index-0d23a78b.js';
import { F as FrontBuyTogetherService, P as ProductService } from './front-buy-together.service-a3c32f35.js';

var EnumBuyTogetherOnLoadStatus;
(function (EnumBuyTogetherOnLoadStatus) {
    EnumBuyTogetherOnLoadStatus["SHOULD_HIDDEN"] = "SHOULD_HIDDEN";
    EnumBuyTogetherOnLoadStatus["SHOULD_SHOW"] = "SHOULD_SHOW";
})(EnumBuyTogetherOnLoadStatus || (EnumBuyTogetherOnLoadStatus = {}));

const buyTogetherCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}:host{display:inline-block;width:100%}.title-wrapper{display:flex;align-items:center;justify-content:center}.title-wrapper .title{margin:0 0 56px 0;font-weight:var(--fc-h2-fw);font-size:var(--fc-h2-fs)}@media (min-width: 1024px){.title-wrapper .title.-showcase{margin:0 0 24px 0}}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:450px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.buy-together-container{display:grid;gap:var(--fc-gap-grid);justify-items:center;grid-template-columns:auto;grid-template-rows:auto auto auto auto;grid-template-areas:\"main\" \"plus\" \"products\" \"btn-buy\"}.buy-together-container.-showcase{grid-template-areas:\"products\" \"btn-buy\";grid-template-columns:auto;grid-template-rows:auto auto}@media (min-width: 1024px){.buy-together-container{grid-template-columns:auto auto auto;grid-template-rows:auto;align-items:center;grid-template-areas:\"main plus products btn-buy\"}.buy-together-container.-showcase{display:flex;flex-direction:column;gap:var(--fc-gap-grid);align-items:center}}.product-wrapper{display:flex;width:100%;background-color:var(--fc-color-white);flex-direction:column;padding:calc(var(--fc-margin-width) * 2);border:1px solid var(--fc-color-light-border-default)}.product-wrapper .checkbox-wrapper{margin:5px}.product-wrapper .checkbox-wrapper input[type=checkbox]{--form-control-color:var(--fc-color-primary);--form-control-disabled:var(--fc-color-light-text-secondary);appearance:none;background-color:#fff;margin:0;font:inherit;color:var(--form-control-color);width:18px;height:18px;border:1px solid var(--form-control-color);border-radius:var(--fc-border-radius);transform:translateY(-0.075em);display:grid;place-content:center}.product-wrapper .checkbox-wrapper input[type=checkbox]:checked{background-color:var(--form-control-color)}.product-wrapper .checkbox-wrapper input[type=checkbox]::before{content:\"\";width:0.65em;height:0.65em;transform:scale(0);background-color:var(--fc-color-white);clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)}.product-wrapper .checkbox-wrapper input[type=checkbox]:checked::before{transform:scale(1)}.product-wrapper .checkbox-wrapper input[type=checkbox]:disabled{--form-control-color:var(--form-control-disabled);color:var(--form-control-disabled);cursor:not-allowed}.product-wrapper-pivot{display:flex;gap:24px;align-items:center}.product-main{display:flex;grid-area:main;width:100%}.products-order-bump{display:flex;width:100%;flex-direction:column;justify-content:center;gap:var(--fc-gap-grid);grid-area:products;align-items:center}@media (min-width: 1024px){.products-order-bump.-showcase{flex-direction:row;width:auto;align-items:flex-start}}.plus-icon{display:inline-block;grid-area:plus;align-self:center}.buy-btn-wrapper{display:flex;grid-area:btn-buy;width:100%}@media (min-width: 1024px){.buy-btn-wrapper.-showcase{width:auto}}.buy-btn-wrapper .buy-btn{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);--btn-bg-color:var(--color-buy-button);--btn-text-color:var(--color-buy-button-text)}.buy-btn-wrapper .buy-btn:hover{opacity:0.75}.buy-btn-wrapper .buy-btn:disabled{opacity:0.6;cursor:not-allowed}";
const BuyTogetherStyle0 = buyTogetherCss;

const BuyTogether = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onBuyTogetherAddCartEvent = createEvent(this, "on-buy-together-add-cart", 7);
        this.loadBuyTogehter = createEvent(this, "loadBuyTogehter", 7);
        this.buyTogetherService = new FrontBuyTogetherService();
        this.productId = undefined;
        this.variationId = undefined;
        this.promotionTitle = undefined;
        this.buyButtonText = undefined;
        this.showcaseMode = undefined;
        this.buyTogetherData = undefined;
        this.hasBuyTogether = undefined;
        this.isLoading = undefined;
        this.isAddingToCart = undefined;
        this.formIsValid = undefined;
    }
    async getBuyTogetherData() {
        return this.buyTogetherData;
    }
    async load() {
        var _a;
        this.isLoading = true;
        try {
            this.buyTogetherData = await this.buyTogetherService.getBuyTogetherByProductId(this.productId, this.variationId);
        }
        catch (error) {
            if (!((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('buy_together_not_found'))) {
                console.error('BuyTogether - load', { error });
            }
        }
        finally {
            this.isLoading = false;
            this.emitOnLoad();
        }
    }
    checkValidForm() {
        const checkSelectedVariations = (variations) => variations.every(({ currentValue }) => currentValue !== undefined && currentValue !== null);
        const isValidProductMain = checkSelectedVariations(this.buyTogetherData.productMain.selectVariations);
        const productsPivotSelected = this.buyTogetherData.products
            .map(({ selectVariations, isCheck }) => ({ selectVariations, isCheck }))
            .filter(({ isCheck }) => isCheck);
        const isValidPivotProducts = productsPivotSelected.every(({ selectVariations }) => checkSelectedVariations(selectVariations));
        if (this.showcaseMode) {
            this.formIsValid = isValidPivotProducts && productsPivotSelected.length > 0;
        }
        else {
            this.formIsValid =
                isValidProductMain && isValidPivotProducts && productsPivotSelected.length > 0;
        }
    }
    emitOnLoad() {
        let status = EnumBuyTogetherOnLoadStatus.SHOULD_SHOW;
        if (!this.buyTogetherData) {
            status = EnumBuyTogetherOnLoadStatus.SHOULD_HIDDEN;
        }
        this.loadBuyTogehter.emit({ status, data: this.buyTogetherData });
    }
    selectOrderBump(event, productOrderBumpId) {
        const { products } = this.buyTogetherData;
        this.buyTogetherData = Object.assign(Object.assign({}, this.buyTogetherData), { products: products.map(prod => {
                if (productOrderBumpId === prod.id) {
                    return Object.assign(Object.assign({}, prod), { isCheck: event.target.checked });
                }
                return prod;
            }) });
    }
    onInputSelectProductMain(event) {
        const { productCard, productTargetUpdated } = this.buyTogetherService.changeProductOptions(event.detail, this.buyTogetherData.originalData.product);
        if (!productCard)
            return;
        this.buyTogetherData = Object.assign(Object.assign({}, this.buyTogetherData), { productMain: productCard, originalData: Object.assign(Object.assign({}, this.buyTogetherData.originalData), { product: productTargetUpdated }) });
    }
    onInputSelectOrderBump(event) {
        const { productId } = event.detail;
        const { originalData: { productsPivot }, products, } = this.buyTogetherData;
        const productPivotIndex = productsPivot.findIndex(({ id }) => +id === productId);
        const productIndex = products.findIndex(({ id }) => +id === productId);
        if (productPivotIndex === -1 || productIndex === -1)
            return;
        const { productCard, productTargetUpdated } = this.buyTogetherService.changeProductOptions(event.detail, productsPivot[productPivotIndex]);
        productsPivot[productPivotIndex] = productTargetUpdated;
        products[productIndex] = Object.assign(Object.assign({}, productCard), { isCheck: products[productIndex].isCheck });
        this.buyTogetherData = Object.assign(Object.assign({}, this.buyTogetherData), { products, originalData: Object.assign(Object.assign({}, this.buyTogetherData.originalData), { productsPivot }) });
    }
    async onAddItemsToCart(event) {
        try {
            this.isAddingToCart = true;
            event.preventDefault();
            const variationsIds = [];
            const checkedProducts = this.buyTogetherData.products.filter(product => product.isCheck);
            if (!this.showcaseMode)
                variationsIds.push(this.buyTogetherData.productMain.id);
            checkedProducts.forEach(product => variationsIds.push(product.id));
            await this.buyTogetherService.addToCart(variationsIds);
            this.onBuyTogetherAddCartEvent.emit({
                showcaseMode: !!this.showcaseMode,
                productsAdded: [...checkedProducts, this.buyTogetherData.productMain],
            });
        }
        finally {
            this.isAddingToCart = false;
        }
    }
    showcaseModeClass() {
        if (this.showcaseMode)
            return '-showcase';
        else
            return '';
    }
    onClickBuyButtonHandler(event) {
        window.open(`${window.location.origin}/${event.detail.slug}`, '_blank');
    }
    watchPropHandler(newValue) {
        this.hasBuyTogether = !!(newValue === null || newValue === void 0 ? void 0 : newValue.originalData);
        this.checkValidForm();
    }
    watchVariationIdChange() {
        this.load();
    }
    watchProductIdChange() {
        this.load();
    }
    componentWillLoad() {
        this.load();
    }
    render() {
        return (h(Host, { key: 'aa7a2853a237d1db09b78a32ca832a46472f6de7' }, this.isLoading && (h("div", { key: '473a6c004081b218ed3d5390d61b62ce6b032117', class: "loading-container" }, h("span", { key: '65938546005b0fd6f5be88a4f7716bfaede900da', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: '29213e411c2f6b4908ce34501dcfb5152426d274', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: '6b6253536effe07d2d7e5a54b0394d3a894d9b7e', class: "title-wrapper" }, h("h2", { key: 'c435dda1153e4042035ddb432cdf2601d86751e8', class: `title ${this.showcaseModeClass()}` }, this.promotionTitle || 'Compre Junto')), h("section", { key: 'ce7cd68d631eab51771ea97c40070f7f22ed4371', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: '2ed1e0c90353de8a82ca71a74745557281e80fe4', class: "product-main" }, h("div", { key: '80bf575eb9e3f50e97d5d79092c39d9bcb63c8ce', class: "product-wrapper" }, h("product-card", { key: '168e7ae6385098f0b022bcaeca57569c6e945b50', product: this.buyTogetherData.productMain }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: 'c8f537f971590d20f4ec8598fe6f536f576c0d68', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: 'fb08f358905ab67d82211611a675275d106ae634', class: "plus-icon" }, h("img", { key: '74436c8e1a9e690f261010c3923f8e1dad379da4', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: 'd19a07443a8e285a7d2d802eabcff4b3def7486a', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: '20a7b1d8b7113a8923298bcda8adc710ab666818', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: 'fd9f8303aceb1f1249c86b25736fb43be874fe5c', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyButtonText || 'Comprar')))))));
    }
    static get watchers() { return {
        "buyTogetherData": ["watchPropHandler"],
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
};
BuyTogether.style = BuyTogetherStyle0;

class FrontCountdownService {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.oneSecond = 1000;
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error('Invalid date');
        }
        this.startCountdown();
    }
    incrementOneSecond() {
        this.startDate = new Date(this.startDate.getTime() + this.oneSecond);
    }
    startCountdown() {
        this.intervalId = setInterval(() => {
            this.incrementOneSecond();
            if (this.isCountdownFinished()) {
                this.stopCountdown();
            }
        }, this.oneSecond);
    }
    stopCountdown() {
        clearInterval(this.intervalId);
    }
    getMillisecondsDifference() {
        return this.endDate.getTime() - this.startDate.getTime();
    }
    isCountdownFinished() {
        const diff = this.getMillisecondsDifference();
        return diff <= 0;
    }
    getTimeDifference() {
        const diff = this.getMillisecondsDifference();
        const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hoursDiff = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsDiff = Math.floor((diff % (1000 * 60)) / 1000);
        return {
            daysDiff,
            hoursDiff,
            minutesDiff,
            secondsDiff,
        };
    }
}

const frontCountdownCss = ".sc-front-countdown-h{display:block}";
const FrontCountdownStyle0 = frontCountdownCss;

const FrontCountdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.countdownFinished = createEvent(this, "countdownFinished", 7);
        this.startDate = undefined;
        this.endDate = undefined;
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
    }
    resetCountdown() {
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
    }
    updateCountdown() {
        if (this.service.isCountdownFinished()) {
            this.resetCountdown();
            this.countdownFinished.emit('finished');
            return;
        }
        const { daysDiff, hoursDiff, minutesDiff, secondsDiff } = this.service.getTimeDifference();
        this.days = String(daysDiff).padStart(2, '0');
        this.hours = String(hoursDiff).padStart(2, '0');
        this.minutes = String(minutesDiff).padStart(2, '0');
        this.seconds = String(secondsDiff).padStart(2, '0');
        requestAnimationFrame(this.updateCountdown.bind(this));
    }
    disconnectedCallback() {
        if (!this.service)
            return;
        this.service.stopCountdown();
    }
    loadCountdown() {
        if (!this.startDate || !this.endDate)
            return;
        try {
            this.service = new FrontCountdownService(new Date(Number(this.startDate) || this.startDate), new Date(Number(this.endDate) || this.endDate));
            this.updateCountdown();
        }
        catch (_a) {
            this.resetCountdown();
        }
    }
    watchStartDateChange() {
        this.loadCountdown();
    }
    watchEndDateChange() {
        this.loadCountdown();
    }
    componentWillLoad() {
        this.loadCountdown();
    }
    render() {
        return (h(Host, { key: '29127fd7a88012a56cfdd63c5171c068d1a4a30d', class: "timer" }, h("div", { key: '8c7c81d819be88038ef304d785b0049e88610e02', class: "cell" }, h("p", { key: 'a3963fa36f60ad5da34958e026394e07aa08156b', class: "time" }, this.days), h("p", { key: 'e33178b25d79b5821120f04c358d1f0cf8971607', class: "unit" }, "dias")), h("div", { key: '9cabe27156a4ab501d80979b522df9118df34ec0', class: "cell" }, h("p", { key: '1a00c8c7f5ea012e63a5721a33832716753eaad6', class: "time" }, this.hours), h("p", { key: '5eb933a8d37d2bbf719e9fea6fb7e8ea831e8f5e', class: "unit" }, "horas")), h("div", { key: 'bca0a9b2df04aba591d9b545e4c1abffde7cfe71', class: "cell" }, h("p", { key: '362af675db9be25685715709f04f6276d67bf20c', class: "time" }, " ", this.minutes), h("p", { key: '094f37ce332a0d5edaf1aeedfc7e790e27f84707', class: "unit" }, "minutos")), h("div", { key: '9c5fae1b21e621caeb10fff98895368d3a4b3719', class: "cell" }, h("p", { key: '7ac40b7f736f163f1e5f70c9fdd8e10a1c1a9c63', class: "time" }, this.seconds), h("p", { key: '8f2b6874d6dfe8a5b24a600ac76f72e1940f91ce', class: "unit" }, "segundos"))));
    }
    static get watchers() { return {
        "startDate": ["watchStartDateChange"],
        "endDate": ["watchEndDateChange"]
    }; }
};
FrontCountdown.style = FrontCountdownStyle0;

function currencyFormat(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
function getClassByProps(classByProps) {
    return Object.keys(classByProps)
        .filter(key => classByProps[key])
        .map(key => key)
        .join(' ');
}

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:cover;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
const FrontImageStyle0 = frontImageCss;

const FrontImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.imageSrc = undefined;
        this.textAlt = undefined;
        this.figCaption = undefined;
        this.isSrcLoading = true;
    }
    getImageClassByProps() {
        const classProps = {
            '-is-loading': this.isSrcLoading,
        };
        return `image-container ${getClassByProps(classProps)}`;
    }
    // private onSrcLoadError() {
    //   this.imageSrc = getAssetPath('./assets/images/image-fallback.png');
    //   setTimeout(() => {
    //     this.isSrcLoading = false;
    //   }, 500);
    // }
    onSrcLoadFinish() {
        setTimeout(() => {
            this.isSrcLoading = false;
        }, 500);
    }
    changeImageSrc() {
        this.isSrcLoading = true;
    }
    render() {
        return (h(Host, { key: '4255eb4aec16539af72395d482f9ab7c9c03ae5d' }, h("figure", { key: '9b93a19c07d096c221ec88551f765e0616c7f0ad', class: this.getImageClassByProps() }, h("img", { key: 'df29dad7df8ad63bb511d618c3bb5029f46f089a', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: 'fc72c85e55768d046d6a1e145345a45f52c5ed43' }, this.figCaption))));
    }
    static get watchers() { return {
        "imageSrc": ["changeImageSrc"]
    }; }
};
FrontImage.style = FrontImageStyle0;

const frontSelectCss = "*.sc-front-select{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-front-select-h{display:inline-block;width:100%}.front-select-container.sc-front-select{position:relative}.front-select-container.sc-front-select>select.sc-front-select{appearance:none;width:100%;font-size:14px;color:var(--fc-color-light-text-secondary);padding:10px;padding-right:15px;background-color:#fff;border:1px solid var(--fc-color-light-border-default);cursor:pointer}.front-select-container.sc-front-select::before,.front-select-container.sc-front-select::after{position:absolute;content:\"\";right:5px;pointer-events:none;display:block}.front-select-container.sc-front-select::before{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;bottom:45%}.front-select-container.sc-front-select::after{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;top:45%;transform:rotate(180deg)}.select-label.sc-front-select{display:inline-block;margin-bottom:8px;font-family:inherit}";
const FrontSelectStyle0 = frontSelectCss;

const FrontSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionsList = undefined;
        this.value = undefined;
        this.placeholder = { name: 'Selecione', value: undefined };
        this.selectId = '';
        this.selectName = '';
        this.label = undefined;
    }
    componentWillLoad() {
        document.documentElement.style.setProperty('--arrow-up-image-src', `url(${getAssetPath('../../../assets/images/arrow-up.png')})`);
    }
    render() {
        var _a;
        return (h(Host, { key: '9c28e7df16d8486f95f60fae619c9100a00dc4ae' }, this.label && (h("label", { key: '8a98185e686648c4be3c991a56b7ea6d80c40c2c', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: 'b89103e2f0c67bc364359076401992c9b1d60c29', class: "front-select-container" }, h("select", { key: '71fd70b929ee8c097f9e2af9d6718a45d7ca9106', name: this.selectName, id: this.selectId }, h("option", { key: '39f6512bff6ea7384577572f01354875dce707ec', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
            _a.map(({ name, value, disabled }) => (h("option", { value: value, selected: this.value === value, disabled: disabled }, name)))))));
    }
};
FrontSelect.style = FrontSelectStyle0;

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
        return (h(Host, { key: '7663c3ac7be67769e9115cfb71928856c89d0aac' }, h("div", { key: 'b67acc6e6e97503b7c32a4d5c920e0ded335de0f', class: "launch-countdown-container" }, h("div", { key: 'a836c13f17ef931e6d59acb9dbd32f2c8c95a723', class: "launch-countdown-container-header" }, h("h3", { key: 'b9b1f96b681acd79f3f8ad48fefd4c39d3a210f8', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: '2ad67b669d41d12d5574a4089b3634b354f25c38', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: '80845c1e039431e5f555b3f2de8733db6dbfd3e5', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
    }
    static get watchers() { return {
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
};
LaunchCountdown.style = LaunchCountdownStyle0;

const productCardCss = "*.sc-product-card{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-product-card-h{display:inline-block;font-size:14px;width:100%}.product-container.sc-product-card{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline.sc-product-card{flex-direction:row;gap:var(--fc-gap-grid)}.product-container.sc-product-card>.info.sc-product-card{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container.sc-product-card>.info.sc-product-card>.title.sc-product-card{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card{display:flex;flex-direction:column}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card .base.sc-product-card{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card .current.sc-product-card{font-size:15px;font-weight:700}.product-container.sc-product-card>.image.sc-product-card{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container.sc-product-card>.image.-inline.sc-product-card{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inline = false;
        this.product = undefined;
        this.showPriceBase = undefined;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)}`;
    }
    getPrice() {
        if (this.product.specialPrice) {
            const price = currencyFormat(this.product.specialPrice);
            return `${price} no pix`;
        }
        return currencyFormat(this.product.price);
    }
    componentWillLoad() {
        var _a, _b, _c;
        this.showPriceBase =
            !!((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceBase) && +((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceBase) !== +((_c = this.product) === null || _c === void 0 ? void 0 : _c.price);
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '858f40d36381339ac56cdf361862d99570b60827' }, h("div", { key: '69f7e6fbb44421c31f75dc39c575177d0ce0847f', class: this.getClassWithInline('product-container') }, h("front-image", { key: '29ac89fa414116489d0f6db0e69f659a2d6c77d8', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '81cbcea072e99824c8b5b4fa120f89a152bed748', class: "info" }, h("span", { key: 'abc07c3b23b66998220a61ec4988b473eb303969', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: 'd71bd4db5dadaec4fd7151005b3dd7a25543b74e', class: "price" }, this.showPriceBase && (h("span", { key: '964270e9cad98f70c5a91015d0beaac51add0cc5', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '8966cccd3376d73766432131b02a1bdfc6a9acb8', class: "current" }, this.getPrice()))))));
    }
};
ProductCard.style = ProductCardStyle0;

const variationSelectorCss = ".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";
const VariationSelectorStyle0 = variationSelectorCss;

const VariationSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputSelect = createEvent(this, "inputSelect", 7);
        this.variations = undefined;
        this.productId = undefined;
        this.showcaseMode = undefined;
    }
    onInputSelect(data, eventSelectType) {
        this.inputSelect.emit({
            eventSelectType,
            value: data.target.value,
            productId: this.productId,
        });
    }
    render() {
        return (h("div", { key: '6aef58ac81d122d000a07639b330f4edcc004d3a', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (h("div", { class: "item" }, h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
};
VariationSelector.style = VariationSelectorStyle0;

export { BuyTogether as buy_together, FrontCountdown as front_countdown, FrontImage as front_image, FrontSelect as front_select, LaunchCountdown as launch_countdown, ProductCard as product_card, VariationSelector as variation_selector };

//# sourceMappingURL=buy-together_7.entry.js.map