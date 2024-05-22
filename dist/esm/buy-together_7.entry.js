import { r as registerInstance, c as createEvent, h, g as getAssetPath, H as Host } from './index-b22ea81d.js';
import { F as FrontBuyTogetherService, P as ProductService } from './front-buy-together.service-a487e4ac.js';

var EnumBuyTogetherOnLoadStatus;
(function (EnumBuyTogetherOnLoadStatus) {
    EnumBuyTogetherOnLoadStatus["SHOULD_HIDDEN"] = "SHOULD_HIDDEN";
    EnumBuyTogetherOnLoadStatus["SHOULD_SHOW"] = "SHOULD_SHOW";
})(EnumBuyTogetherOnLoadStatus || (EnumBuyTogetherOnLoadStatus = {}));

const buyTogetherCss = "*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}*.sc-buy-together{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.sc-buy-together-h{display:inline-block;width:100%}.title-wrapper.sc-buy-together{display:flex;align-items:center;justify-content:center}.title-wrapper.sc-buy-together .title.sc-buy-together{margin:24px 0;font-weight:var(--fc-h2-fw);font-size:var(--fc-h2-fs)}.loading-container.sc-buy-together{display:flex;width:100%;justify-content:center;align-items:center;min-height:450px}.loading-container.sc-buy-together .spinner.sc-buy-together{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container.sc-buy-together .spinner.sc-buy-together:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.buy-together-container.sc-buy-together{display:grid;gap:var(--fc-gap-grid);justify-items:center;grid-template-columns:auto;grid-template-rows:auto auto auto auto;grid-template-areas:\"main\" \"plus\" \"products\" \"btn-buy\"}.buy-together-container.-showcase.sc-buy-together{grid-template-areas:\"products\" \"btn-buy\";grid-template-columns:auto;grid-template-rows:auto auto}@media (min-width: 1024px){.buy-together-container.sc-buy-together{grid-template-columns:auto auto auto;grid-template-rows:auto;align-items:center;grid-template-areas:\"main plus products btn-buy\"}.buy-together-container.-showcase.sc-buy-together{display:flex;flex-direction:column;gap:var(--fc-gap-grid);align-items:center}}.product-wrapper.sc-buy-together{display:flex;width:100%;background-color:var(--fc-color-white);flex-direction:column;padding:calc(var(--fc-margin-width) * 2);border:1px solid var(--fc-color-light-border-default);gap:20px}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together{margin:5px}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together{--form-control-color:var(--fc-color-primary);--form-control-disabled:var(--fc-color-light-text-secondary);appearance:none;background-color:#fff;margin:0;font:inherit;color:var(--form-control-color);width:18px;height:18px;border:1px solid var(--form-control-color);border-radius:var(--fc-border-radius);transform:translateY(-0.075em);display:grid;place-content:center}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:checked{background-color:var(--form-control-color)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together::before{content:\"\";width:0.65em;height:0.65em;transform:scale(0);background-color:var(--fc-color-white);clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:checked::before{transform:scale(1)}.product-wrapper.sc-buy-together .checkbox-wrapper.sc-buy-together input[type=checkbox].sc-buy-together:disabled{--form-control-color:var(--form-control-disabled);color:var(--form-control-disabled);cursor:not-allowed}.product-wrapper-pivot.sc-buy-together{display:flex;gap:24px;align-items:center}.product-main.sc-buy-together{display:flex;grid-area:main;width:100%}.products-order-bump.sc-buy-together{display:flex;width:100%;flex-direction:column;justify-content:center;gap:var(--fc-gap-grid);grid-area:products;align-items:center}@media (min-width: 1024px){.products-order-bump.-showcase.sc-buy-together{flex-direction:row;width:auto;align-items:flex-start}}.plus-icon.sc-buy-together{display:inline-block;grid-area:plus;align-self:center}.buy-btn-wrapper.sc-buy-together{display:flex;grid-area:btn-buy;width:100%}@media (min-width: 1024px){.buy-btn-wrapper.-showcase.sc-buy-together{width:auto}}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);--btn-bg-color:var(--color-buy-button);--btn-text-color:var(--color-buy-button-text)}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together:hover{opacity:0.75}.buy-btn-wrapper.sc-buy-together .buy-btn.sc-buy-together:disabled{opacity:0.6;cursor:not-allowed}";
const BuyTogetherStyle0 = buyTogetherCss;

const BuyTogether = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onBuyTogetherAddCartEvent = createEvent(this, "on-buy-together-add-cart", 7);
        this.loadBuyTogehter = createEvent(this, "loadBuyTogehter", 7);
        this.buyTogetherService = new FrontBuyTogetherService();
        this.productId = undefined;
        this.variationId = undefined;
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
        const productPivotIndex = productsPivot.findIndex(({ id }) => id === productId);
        const productIndex = products.findIndex(({ id }) => id === productId);
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
            variationsIds.push(this.buyTogetherData.productMain.id);
            checkedProducts.forEach(product => variationsIds.push(product.id));
            await this.buyTogetherService.addToCart(variationsIds);
            this.onBuyTogetherAddCartEvent.emit([...checkedProducts, this.buyTogetherData.productMain]);
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
        return (h(Host, { key: 'af58415b46953918377e013d79e57732cb753b7d' }, this.isLoading && (h("div", { key: 'ac59904a2deaacfabf0552a00533806b381a88ed', class: "loading-container" }, h("span", { key: '659efa5db1b2d82a187d6899938aae0ad35262b9', class: "spinner" }))), !this.isLoading && this.hasBuyTogether && (h("form", { key: 'a0d17839e97cc20716fbd7d02d48c5c6d76b4270', onSubmit: evt => this.onAddItemsToCart(evt) }, h("div", { key: 'd3320ea14518dcf0779983ed3425a1c0ce6f8d3f', class: "title-wrapper" }, h("h2", { key: '592a5274ea95286ef444b81e8858544c934f3933', class: "title" }, this.buyTogetherData.originalData.title || 'Compre Junto')), h("section", { key: '344f038c78d1a748fdf891d3210df904c9030f0d', class: `bagy-buy-together buy-together-container ${this.showcaseModeClass()}` }, !this.showcaseMode && (h("div", { key: 'bd951ce3e2af4241fb174dbb7b53acc36a3d1821', class: "product-main" }, h("div", { key: 'a87d7fa1eee79ea082029535dfe04127a0cb686a', class: "product-wrapper" }, h("product-card", { key: '35e65e83595805f986b5810df9f24515fdda06f5', product: this.buyTogetherData.productMain }), this.buyTogetherData.productMain.selectVariations && (h("variation-selector", { key: '26da9c5b8af63916f33b5b82058c533917bfb674', productId: this.buyTogetherData.productMain.id, onInputSelect: ev => this.onInputSelectProductMain(ev), variations: this.buyTogetherData.productMain.selectVariations }))))), !this.showcaseMode && (h("div", { key: '8d1b01ba012dfb72b3551abec3bddada65837b1e', class: "plus-icon" }, h("img", { key: 'a821be2baf64abef872504bfe5717bca37de969c', src: getAssetPath('./assets/icons/icon-plus.svg'), alt: "" }))), h("div", { key: 'b4bd08667d8f7fc6aa706f9a61a59f5ce5b64faf', class: `products-order-bump ${this.showcaseModeClass()}` }, this.buyTogetherData.products.map(productCard => (h("div", { class: "product-wrapper" }, h("div", { class: "product-wrapper-pivot" }, h("div", { class: "checkbox-wrapper" }, h("input", { type: "checkbox", checked: productCard.isCheck, id: String(productCard.id), onInput: ev => this.selectOrderBump(ev, productCard.id) })), h("product-card", { inline: true, product: productCard })), productCard.selectVariations && (h("variation-selector", { productId: productCard.id, variations: productCard.selectVariations, onInputSelect: ev => this.onInputSelectOrderBump(ev), showcaseMode: this.showcaseMode })))))), h("div", { key: 'ef4ba8728b7af2edf187159b9cedd6a4bac951df', class: `buy-btn-wrapper ${this.showcaseModeClass()}` }, h("button", { key: '822afd0adefe1e77b4d3961a0a03a08f275ddecc', class: "buy-btn", type: "submit", disabled: this.isAddingToCart || !this.formIsValid }, this.buyTogetherData.originalData.buyButtonText || 'Comprar')))))));
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
        return (h(Host, { key: '0e57cd02db0d613b4e071ef412693a87d2041aef', class: "timer" }, h("div", { key: '6698c019604f66c47b489a32784108dd6a443cd9', class: "cell" }, h("p", { key: 'a7d2b87a71a15630c748e553477d685f3314e9ad', class: "time" }, this.days), h("p", { key: '23c38397aa663d1aedc84c306cefc703dde92353', class: "unit" }, "dias")), h("div", { key: '55290bcb462b315089ca0d99821a2276f4ba7259', class: "cell" }, h("p", { key: 'ac7c2a1283499289642696ba845f8d2556dc6ed7', class: "time" }, this.hours), h("p", { key: '28cfa0a7cef6f1f06eec5062c56d0f73e7fb0c30', class: "unit" }, "horas")), h("div", { key: '9b8680fbac63d66c7940772a4d1b3e10253caae3', class: "cell" }, h("p", { key: '4389abac6b5c5ab10e439fea565b90e2d7d6cb40', class: "time" }, " ", this.minutes), h("p", { key: '914981949287eecd80933d502164bc7d9b4ddab8', class: "unit" }, "minutos")), h("div", { key: 'de6a718cbe240583cad21a53c3b4bb58174ad6a6', class: "cell" }, h("p", { key: '51b7e12a8fcdeb5a9bcc63bb587cb8e552d8b012', class: "time" }, this.seconds), h("p", { key: '6b139f2f10c64d5a7a483a444266db83d7730d90', class: "unit" }, "segundos"))));
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

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative}.image-container img{width:100%;height:100%;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
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
        return (h(Host, { key: '0d7dec8afefd3f1b83a8f4bc699407988667ea3f' }, h("figure", { key: 'bf9cf2be0bcbb311dba4e8998d768bb668452626', class: this.getImageClassByProps() }, h("img", { key: '9c56ad826fbad2456fb35dc4a994213441bd9385', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && h("figcaption", { key: 'a88e477440272ec247638e0d8bebe30165f8977c' }, this.figCaption))));
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
        return (h(Host, { key: 'f377ef9cc186891230be16f769dbb7a3fc277045' }, this.label && (h("label", { key: '34abf11094df21cc5e2a6a59e9eeecefa4c7ca2a', class: "select-label", htmlFor: this.selectId }, this.label)), h("div", { key: 'd5f7f8e50af04fe7d399b9314be5da70862796d6', class: "front-select-container" }, h("select", { key: '7e6ccb7f3d2286a4e21fc5229b3cafab110bd125', name: this.selectName, id: this.selectId }, h("option", { key: '48e1f35c8c97c49f11edf712e4cfa5b2fcae2705', disabled: this.placeholder.disabled, value: this.placeholder.value, selected: this.value === this.placeholder.value }, this.placeholder.name), (_a = this.optionsList) === null || _a === void 0 ? void 0 :
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
        return (h(Host, { key: '30a4a721f1fdf440408b0304a576b1ebe2ec4f70' }, h("div", { key: '045e7b50ce51272c74a367d94426732b247520bd', class: "launch-countdown-container" }, h("div", { key: 'a26c6eb50724f68ec48930ff91c281e7752d80e4', class: "launch-countdown-container-header" }, h("h3", { key: 'ad4bcffd6b02e363fe9466f94241cb82fc8d2f13', class: "launch-countdown-container-title" }, this.dataCountdownTitle), h("p", { key: '095ba5903827f93366175dfe4817f03b421b0387', class: "launch-countdown-container-description" }, this.dataDescription)), h("front-countdown", { key: 'be5fff8d11232b3b2c24eac5372b771b76b5a1cf', "start-date": this.dateTime.startDate, "end-date": this.dateTime.endDate }))));
    }
    static get watchers() { return {
        "variationId": ["watchVariationIdChange"],
        "productId": ["watchProductIdChange"]
    }; }
};
LaunchCountdown.style = LaunchCountdownStyle0;

const productCardCss = "*.sc-product-card{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-product-card-h{display:inline-block;font-size:14px;width:100%}.product-container.sc-product-card{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline.sc-product-card{flex-direction:row;gap:var(--fc-gap-grid)}.product-container.sc-product-card>.info.sc-product-card{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container.sc-product-card>.info.sc-product-card>.title.sc-product-card{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card{display:flex;flex-direction:column}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card .base.sc-product-card{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.product-container.sc-product-card>.info.sc-product-card>.price.sc-product-card .current.sc-product-card{font-size:15px;font-weight:700}.product-container.sc-product-card>.image.sc-product-card{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container.sc-product-card>.image.-inline.sc-product-card{width:100px;justify-content:flex-start}";
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
    componentWillLoad() {
        var _a, _b, _c;
        this.showPriceBase =
            !!((_a = this.product) === null || _a === void 0 ? void 0 : _a.priceBase) && +((_b = this.product) === null || _b === void 0 ? void 0 : _b.priceBase) !== +((_c = this.product) === null || _c === void 0 ? void 0 : _c.price);
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Host, { key: '3bf48464c79089527f486f316b19c8e19f1bbcea' }, h("div", { key: 'a3cfa9de0a68586978ff8cb04d2140ecfaa3be24', class: this.getClassWithInline('product-container') }, h("front-image", { key: 'a3e74a6034eb32c858c34be5390724d895bf9d82', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), h("div", { key: '5d04b49a7e3d74310d56b2528ca9475b919a1f44', class: "info" }, h("span", { key: '7a944adbf6bd2d8c7d5315d46c8d307bc434c3c0', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), h("div", { key: '14a77353836f8437c76627f1ef0bf7ee907376ca', class: "price" }, this.showPriceBase && (h("span", { key: '99a840c197078d24ad632043f39a43a3ea4b4940', class: "base" }, currencyFormat(this.product.priceBase))), h("span", { key: '3e78a45606b8d378c6dc0a29c11a75b18ec7add5', class: "current" }, currencyFormat((_f = this.product) === null || _f === void 0 ? void 0 : _f.price)))))));
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
        return (h("div", { key: '1f8b55c1c1c437097bb16d7656787670e58d0ed9', class: `variations ${this.showcaseMode ? '-showcase' : ''}` }, this.variations.map(({ label, currentValue, options, selectId, placeholder, selectType }) => (h("div", { class: "item" }, h("front-select", { placeholder: placeholder, selectId: selectId, optionsList: options, label: label, value: currentValue, onInput: data => this.onInputSelect(data, selectType) }))))));
    }
};
VariationSelector.style = VariationSelectorStyle0;

export { BuyTogether as buy_together, FrontCountdown as front_countdown, FrontImage as front_image, FrontSelect as front_select, LaunchCountdown as launch_countdown, ProductCard as product_card, VariationSelector as variation_selector };

//# sourceMappingURL=buy-together_7.entry.js.map