'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9c4b21d6.js');
const utils = require('./utils-da8673ef.js');
const index$1 = require('./index-cf4f2b3e.js');

const exec = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open(method, url, true);
        req.setRequestHeader('X-Ajax', 'true');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = function () {
            if (req.status >= 200 && req.status < 300) {
                resolve(JSON.parse(req.responseText));
            }
            else {
                reject(req.status);
            }
        };
        req.send(data ? JSON.stringify(data) : null);
    });
};
const cashbackService = {
    async calculate(data) {
        return await exec('POST', `${window.dooca.base_url}/action/promotions/calculate`, data);
    },
};

var CalculationItemPromotion;
(function (CalculationItemPromotion) {
    CalculationItemPromotion["CASHBACK_CREDIT"] = "cashback_credit";
    CalculationItemPromotion["CASHBACK_DEBIT"] = "cashback_debit";
})(CalculationItemPromotion || (CalculationItemPromotion = {}));

const cashbackCss = ".cashback.sc-cashback-credit{display:inline-flex}.cashback.sc-cashback-credit img.sc-cashback-credit{margin-right:0.5rem}.cashback.sc-cashback-credit span.sc-cashback-credit{color:var(--success)}";
const CashbackCreditStyle0 = cashbackCss;

const Cashback = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.customer_id = undefined;
        this.cashback = undefined;
        this.product = undefined;
        this.credit = undefined;
    }
    async componentWillLoad() {
        await this.getCalculation();
    }
    async onCustomerIdChange() {
        await this.getCalculation();
    }
    async onProductChange() {
        await this.getCalculation();
    }
    async getCalculation() {
        var _a;
        const valid = this.cashback && this.cashback.active && this.cashback.show_credit_preview;
        if (!this.product || !valid)
            return;
        const { id, price } = this.product;
        const data = {
            customer_id: this.customer_id,
            exclude_promotions: [CalculationItemPromotion.CASHBACK_DEBIT],
            items: [
                {
                    id,
                    quantity: 1,
                    price,
                    discount: 0,
                },
            ],
        };
        const res = await cashbackService.calculate(data);
        const byCredit = (item) => CalculationItemPromotion.CASHBACK_CREDIT === item.promotion;
        this.credit = (_a = res.items) === null || _a === void 0 ? void 0 : _a.find(byCredit);
    }
    render() {
        return (index.h(index.Host, { key: '7a9b5e42944d2dc68c03b8651f8ce4dd921b5f2b' }, this.credit && this.credit.value > 0 ? (index.h("div", { class: "cashback" }, index.h("img", { src: index.getAssetPath('./assets/icons/cashback.svg') }), index.h("span", null, "Na compra deste produto, voc\u00EA receber\u00E1 at\u00E9", ' ', index.h("strong", null, utils.currencyFormat(this.credit.value)), " em Cashback!"))) : null));
    }
    static get watchers() { return {
        "customer_id": ["onCustomerIdChange"],
        "product": ["onProductChange"]
    }; }
};
Cashback.style = CashbackCreditStyle0;

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}.custom-card-content:empty{display:none}";
const CustomCardStyle0 = customCardCss;

const CustomCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.cardTitle = 'Não perca! Live hoje às 19 horas.';
        this.cardDescription = undefined;
        this.customClass = '';
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: '16b6c91b4ab7927ac1954b3a5365b6fbb6e7603f' }, index.h("div", { key: '98bb46c64c48bd37d380a8f337dd66256f630d59', class: `custom-card ${this.customClass}` }, index.h("div", { key: '93400ea4e003c24c104c9e2b74cf3370185054ab', class: "custom-card-header" }, index.h("h2", { key: 'e29f084693661cf9479f2b9d1326201cb21bde02', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (index.h("p", { key: '2c78641d880ade884516620a49da680c502858d0', class: "custom-card-header-description" }, this.cardDescription))), index.h("div", { key: 'db19d7a2c82005e859552a102cb4807739288f1c', class: "custom-card-content" }, index.h("slot", { key: 'e8a3962cde3dbc3594eb747b21e55bc19ef6b336' })))));
    }
    get el() { return index.getElement(this); }
};
CustomCard.style = CustomCardStyle0;

const frontIconCss = "@import url('https://fonts.googleapis.com/icon?family=Material+Icons');";
const FrontIconStyle0 = frontIconCss;

const FrontIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = 'home';
        this.size = '24px';
        this.color = '#000';
    }
    render() {
        return (index.h("span", { key: 'c250591eef5668047e5c35868343449e48161761', class: "material-icons", style: { color: this.color, fontSize: this.size } }, this.name));
    }
};
FrontIcon.style = FrontIconStyle0;

const frontImageCss = "@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:contain;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";
const FrontImageStyle0 = frontImageCss;

const FrontImage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.imageSrc = undefined;
        this.textAlt = undefined;
        this.figCaption = undefined;
        this.isSrcLoading = true;
    }
    getImageClassByProps() {
        const classProps = {
            '-is-loading': this.isSrcLoading,
        };
        return `image-container ${utils.getClassByProps(classProps)}`;
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
        return (index.h(index.Host, { key: 'dd3d760a962ac9c7445af9be2e9d4883c4fcbf25' }, index.h("figure", { key: '277f589658f3fe6c5f149e105a5d4353160943fe', class: this.getImageClassByProps() }, index.h("img", { key: 'd9dbc2eda5cb1ed762d8f7a742fdaff1f93b3007', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && index.h("figcaption", { key: '1d52ee3801a502d5a1a6a21874fabab0fbc74c66' }, this.figCaption))));
    }
    static get watchers() { return {
        "imageSrc": ["changeImageSrc"]
    }; }
};
FrontImage.style = FrontImageStyle0;

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product:hover{cursor:pointer}.highlight-card-product:hover .highlight-card-product-cart-action a{text-decoration:underline var(--fc-color-primary) 1px solid !important}.highlight-card-product-cart-action{padding:24px;font-weight:bold}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-all}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";
const HighlightCardStyle0 = highlightCardCss;

const HighlightCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addItem = index.createEvent(this, "addItem", 7);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.items = [];
        this.highlightedItems = [];
        this.nonHighlightedItems = [];
    }
    renderItem(item, isHighlighted) {
        if (!item.show)
            return null;
        return (index.h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (index.h("div", { class: "highlight-card-message" }, index.h("h4", { class: "highlight-card-message-title" }, item.title), index.h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (index.h("div", { class: "highlight-card-product", onClick: () => this.addItem.emit(item) }, index.h("product-card", { "custom-class": "highlight-custom-style", product: item, basePrice: { price: item.price, priceCompare: item.priceBase }, showStartingFrom: item.showStartingFrom, inline: true }), index.h("div", { class: "highlight-card-product-cart-action" }, index.h("a", null, "Ver produto"))))));
    }
    filterItems(items) {
        const visibleItems = items.filter(item => item.show);
        this.highlightedItems = visibleItems.filter(item => item.highlight);
        this.nonHighlightedItems = visibleItems.filter(item => !item.highlight);
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    componentWillLoad() {
        this.filterItems(this.items);
    }
    handleItemsChange(newItems) {
        this.filterItems(newItems);
    }
    render() {
        return (index.h(index.Host, { key: 'dbedc562911a2aa0de8c549ca6e624384462bb43' }, index.h("div", { key: '0e906d70f4a33ce8a4fa68a0e5f24788aeaf4dd2', class: "highlight-card" }, this.highlightedItems.length > 0 && (index.h("div", { key: 'ff07e4f52e37658cc0a01f84da9b867a061bd595', class: "highlight-card-container" }, index.h("div", { key: '31f09f1551c076a0b96befa406615f3dff4f9f13', class: "highlight-card-header" }, index.h("span", { key: 'f2726974bf3aa3b4c980dd46badd979a2ee0f342', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index$1) => (index.h("div", null, this.renderItem(item, true), index$1 < this.highlightedItems.length - 1 && (index.h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
    }
    static get watchers() { return {
        "items": ["handleItemsChange"]
    }; }
};
HighlightCard.style = HighlightCardStyle0;

class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await index$1.ProductService.getList({
            fields: [
                'name',
                'images { src }',
                'price',
                'priceCompare',
                'productId',
                'slug',
                'hasPriceRange',
            ],
            filter: { productIds, page: 0, first: productIds.length },
        });
    }
    async getLiveShop(hashRoom) {
        this.liveShopData = await index$1.LiveShopService.getByHash(hashRoom);
        return this.liveShopData;
    }
    async productsToItemsAdapter() {
        var _a;
        const products = await this.getProducts();
        const liveProducts = (_a = this.liveShopData) === null || _a === void 0 ? void 0 : _a.products;
        return products.edges.map(({ node }) => {
            var _a, _b, _c, _d;
            const liveProduct = liveProducts.find(product => product.productId === node.productId);
            const status = (_a = liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.status) !== null && _a !== void 0 ? _a : null;
            return {
                id: +node.productId,
                name: node.name,
                image: (_c = (_b = node === null || node === void 0 ? void 0 : node.images) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : null,
                price: node.price,
                priceBase: node.priceCompare,
                title: '',
                content: '',
                type: 'product',
                slug: node.slug,
                show: status && status !== 'hidden',
                highlight: status === 'highlighting',
                position: (_d = liveProduct === null || liveProduct === void 0 ? void 0 : liveProduct.position) !== null && _d !== void 0 ? _d : 0,
                showStartingFrom: node.hasPriceRange,
            };
        });
    }
    messagesToItemsAdapter() {
        return this.liveShopData.messages.map(message => {
            var _a, _b;
            return ({
                id: (_a = message.id) !== null && _a !== void 0 ? _a : null,
                title: message.title,
                content: message.content,
                type: 'message',
                show: message.status && message.status !== 'hidden',
                highlight: message.status === 'highlighting',
                position: (_b = message.position) !== null && _b !== void 0 ? _b : 0,
            });
        });
    }
    updateItems(items, message) {
        const maxPosition = Math.max(...items.map(i => { var _a; return (_a = i.position) !== null && _a !== void 0 ? _a : 0; }));
        const updatedItems = items.map(item => {
            var _a, _b;
            if (item.id !== message.id || item.type !== message.type)
                return item;
            const isHighlightOn = message.status === 'highlighting';
            const wasHighlightOn = !!item.highlight;
            const isHidden = message.status === 'hidden';
            if (isHighlightOn && !wasHighlightOn) {
                return Object.assign(Object.assign({}, item), { show: !isHidden, highlight: true, lastPosition: (_a = item.lastPosition) !== null && _a !== void 0 ? _a : item.position, position: maxPosition + 1 });
            }
            if (!isHighlightOn && wasHighlightOn) {
                return Object.assign(Object.assign({}, item), { show: !isHidden, highlight: false, position: (_b = item.lastPosition) !== null && _b !== void 0 ? _b : item.position, lastPosition: undefined });
            }
            return Object.assign(Object.assign({}, item), { show: !isHidden, highlight: isHighlightOn, position: maxPosition + 1 });
        });
        updatedItems.sort((a, b) => { var _a, _b; return ((_a = b.position) !== null && _a !== void 0 ? _a : 0) - ((_b = a.position) !== null && _b !== void 0 ? _b : 0); });
        return updatedItems;
    }
    async getItems() {
        const productItems = await this.productsToItemsAdapter();
        const messageItems = this.messagesToItemsAdapter();
        const allItems = [...productItems, ...messageItems];
        allItems.sort((a, b) => b.position - a.position);
        return allItems;
    }
}

class WebSocketClient {
    constructor(url) {
        this.socket = null;
        this.reconnectAttempts = 0;
        this.reconnectTimeout = null;
        this.messageCallback = null;
        this.onOpen = () => {
            this.reconnectAttempts = 0;
            if (this.messageCallback && this.socket) {
                this.socket.addEventListener('message', this.messageCallback);
            }
        };
        this.onClose = (event) => {
            if (!event.wasClean)
                this.handleReconnect();
        };
        this.onError = () => {
            this.handleReconnect();
        };
        this.url = url;
        this.connect();
    }
    connect() {
        if (this.socket) {
            this.socket.onclose = null;
            this.socket.onerror = null;
            this.socket.onmessage = null;
        }
        this.socket = new WebSocket(this.url);
        this.socket.onopen = this.onOpen;
        this.socket.onclose = this.onClose;
        this.socket.onerror = this.onError;
    }
    handleReconnect() {
        if (this.reconnectTimeout !== null)
            return;
        if (this.reconnectAttempts >= WebSocketClient.MAX_RECONNECT_ATTEMPTS)
            return;
        const delay = this.reconnectAttempts === 0
            ? WebSocketClient.INITIAL_INCREMENT_DELAY
            : Math.min(WebSocketClient.INITIAL_RECONNECT_DELAY * Math.pow(2, this.reconnectAttempts - 1), WebSocketClient.MAX_RECONNECT_DELAY);
        this.reconnectTimeout = window.setTimeout(() => {
            this.reconnectAttempts++;
            this.reconnectTimeout = null;
            this.connect();
        }, delay);
    }
    closeConnection() {
        var _a;
        if (((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readyState) === WebSocket.OPEN) {
            this.socket.close();
        }
        if (this.reconnectTimeout !== null) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
    }
    onMessage(callback) {
        this.messageCallback = callback;
        if (this.socket) {
            this.socket.addEventListener('message', callback);
        }
    }
}
WebSocketClient.MAX_RECONNECT_ATTEMPTS = 5;
WebSocketClient.INITIAL_RECONNECT_DELAY = 5000;
WebSocketClient.MAX_RECONNECT_DELAY = 30000;
WebSocketClient.INITIAL_INCREMENT_DELAY = 1000;

const liveShopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes simple-spinner-animation{0%{transform:translate(-50%, -50%) rotate(0deg)}100%{transform:translate(-50%, -50%) rotate(360deg)}}:host{display:block;width:100%}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:350px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.live-shop-warmup .banner-custom-style{padding:40px}.live-shop-warmup .banner-custom-style>.custom-card-content{width:100%;max-width:720px;height:auto;aspect-ratio:16/9}.live-shop-warmup .banner-custom-style>.custom-card-content img{width:100%;height:100%;object-fit:cover}.live-shop-warmup .banner-custom-style>.custom-card-content .live-shop-banner{background-color:#d9d9d9;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.live-shop-finished .button-custom-style{padding:40px;max-width:410px;margin:0 auto;text-align:center}.live-shop-finished .button-custom-style button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.live-shop-finished .button-custom-style button:hover{opacity:0.75}.live-shop-finished .button-custom-style button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopStyle0 = liveShopCss;

const LiveShop = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onReturnToHome = index.createEvent(this, "on-return-to-home", 7);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.handleResize = () => {
            this.isSmallDevice = window.innerWidth <= 1024;
        };
        this.isChatOpenHandler = () => {
            this.isChatOpen = !this.isChatOpen;
        };
        this.handleMessage = (event) => {
            try {
                if (!event.data)
                    return;
                const message = JSON.parse(event.data);
                const statusMap = {
                    liveOn: 'inLive',
                    liveOff: 'finished',
                };
                if (statusMap[message.type]) {
                    this.liveShopRegister = Object.assign(Object.assign({}, this.liveShopRegister), { status: statusMap[message.type] });
                    return;
                }
                this.liveShopItems = this.liveShopItemsService.updateItems(this.liveShopItems, message);
            }
            catch (error) {
                console.error(error);
            }
        };
        this.hashRoom = undefined;
        this.liveShopNotFound = false;
        this.videoId = undefined;
        this.isSmallDevice = window.innerWidth <= 1024;
        this.isChatOpen = false;
        this.isLoading = true;
        this.liveShopRegister = undefined;
        this.liveShopItemsService = undefined;
        this.liveShopItems = undefined;
        this.liveSocket = undefined;
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
        if (this.liveSocket)
            this.liveSocket.closeConnection();
    }
    async componentDidLoad() {
        var _a;
        try {
            if (!this.hashRoom)
                throw new Error('Hash Room is required');
            this.isLoading = true;
            window.addEventListener('resize', this.handleResize);
            this.componentRendered.emit();
            this.liveShopItemsService = new LiveShopHandler();
            this.liveShopRegister = await this.liveShopItemsService.getLiveShop(this.hashRoom);
            if (!this.liveShopRegister)
                throw new Error('live-shop_not_found');
            this.liveShopItems = await this.liveShopItemsService.getItems();
            if (this.liveShopRegister) {
                this.videoId = utils.extractYouTubeVideoId(this.liveShopRegister.urlLive);
            }
            const wsBaseUrl = index.Env.WEBSOCKET_URL ;
            this.liveSocket = new WebSocketClient(`${wsBaseUrl}?hashRoom=${this.hashRoom}`);
            this.liveSocket.onMessage(this.handleMessage);
        }
        catch (error) {
            if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('live-shop_not_found')) {
                this.liveShopNotFound = true;
                console.error('Live Shop not found', { error });
                return;
            }
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    renderLoading() {
        return (index.h("div", { class: "loading-container" }, index.h("span", { class: "spinner" })));
    }
    renderWarmup() {
        var _a;
        return (index.h("div", { class: "live-shop-warmup" }, index.h("custom-card", { customClass: "banner-custom-style", cardTitle: this.liveShopRegister.title }, ((_a = this.liveShopRegister.banner) === null || _a === void 0 ? void 0 : _a.src) ? (index.h("img", { src: this.liveShopRegister.banner.src, alt: this.liveShopRegister.banner.alt })) : null)));
    }
    renderInLive() {
        return this.isSmallDevice ? (index.h("live-shop-mobile", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems })) : (index.h("live-shop-desktop", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems, isChatOpen: this.isChatOpen, toggleChat: () => this.isChatOpenHandler() }));
    }
    renderFinished() {
        return (index.h("div", { class: "live-shop-finished" }, index.h("custom-card", { customClass: "button-custom-style", cardTitle: "A live chegou ao fim!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades!" }, index.h("button", { onClick: () => this.onReturnToHome.emit() }, "Voltar para a p\u00E1gina inicial"))));
    }
    render() {
        var _a, _b, _c;
        if (this.isLoading) {
            return index.h(index.Host, null, this.renderLoading());
        }
        if (this.liveShopNotFound) {
            return index.h("live-shop-not-found", { onReturnToHome: () => this.onReturnToHome.emit() });
        }
        return (index.h(index.Host, null, index.h("div", { class: "live-shop" }, ((_a = this.liveShopRegister) === null || _a === void 0 ? void 0 : _a.status) === 'warmup' && this.renderWarmup(), ((_b = this.liveShopRegister) === null || _b === void 0 ? void 0 : _b.status) === 'inLive' && this.renderInLive(), ((_c = this.liveShopRegister) === null || _c === void 0 ? void 0 : _c.status) === 'finished' && this.renderFinished())));
    }
};
LiveShop.style = LiveShopStyle0;

const liveShopDesktopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;max-width:550px;word-break:break-word}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card{width:450px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}.live-shop-in-live-desktop .highlight-card{width:450px;max-height:573px;overflow-y:auto;overflow-x:hidden}";
const LiveShopDesktopStyle0 = liveShopDesktopCss;

const LiveShopDesktop = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickAdd = index.createEvent(this, "on-click-add", 7);
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                liveShopData: this.liveShopData,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
        this.isChatOpen = undefined;
        this.toggleChat = undefined;
    }
    buttonText() {
        return this.isChatOpen ? 'Ocultar chat da live' : 'Exibir chat da live';
    }
    render() {
        return (index.h("div", { key: '96df90cadc361a5160f3cc71740990dda0f18113', class: "live-shop-in-live-desktop" }, index.h("div", { key: '9b8029ada6a375467b236a6cad3563a3875ec9d4', class: "live-shop-in-live-desktop-infos" }, index.h("div", { key: '4850fb89073f15ea8e6cfe95226167f040d10788', class: "live-shop-in-live-desktop-infos-player" }, index.h("live-video-player", { key: '29fc96d2a68412aeb1da0ed01c7bc8590e23132e', videoId: this.videoId, autoPlay: true })), index.h("div", { key: '10e3f6cc0d819f5893975f6285b6932e1538a21f', class: "live-shop-in-live-desktop-infos-options" }, index.h("h2", { key: '867ccd7c7a0f645c7e4e92de0380c166d1f7ae8d', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), this.liveShopData.chatVisible && (index.h("button", { key: 'ca180b1bb7065465d1763f6c84215a8c4e0fba0e', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText()))), this.isChatOpen && (index.h("div", { key: 'f5a2d3a1c35a0c4cdddc1bde0b1329d5dcf4f81c', class: "live-shop-in-live-desktop-infos-options-chat" }, index.h("live-video-chat", { key: '82d7e877e65f41825c61a41bcfed0ddcbc4e9076', videoId: this.videoId })))), index.h("div", { key: '6e5a7e740744ad021d5881bd744d7cbd5d42c45b', class: "live-shop-in-live-desktop-content" }, index.h("div", { key: '5451983b6706ea18d6d900e75d080a852cf523dc', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 && this.items.some(item => item.show) ? (index.h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (index.h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
    }
};
LiveShopDesktop.style = LiveShopDesktopStyle0;

const tabs = (videoId, items, handleAddItem, chatVisible) => {
    const baseTabs = [
        {
            name: 'products',
            label: (index.h("span", null,
                "Produtos",
                (items === null || items === void 0 ? void 0 : items.some(item => item.type === 'product' && item.show)) && (index.h("span", { class: "product-count" }, items.filter(item => item.type === 'product' && item.show).length)))),
            content: () => {
                return (items === null || items === void 0 ? void 0 : items.length) > 0 && (items === null || items === void 0 ? void 0 : items.some(item => item.show)) ? (index.h("highlight-card", { items: items, onAddItem: handleAddItem })) : (index.h("custom-card", { customClass: "in-live-custom-style-empty", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }));
            },
        },
    ];
    if (chatVisible) {
        baseTabs.push({
            name: 'chat',
            label: 'Chat',
            content: () => index.h("live-video-chat", { videoId: videoId }),
        });
    }
    return baseTabs;
};

const liveShopMobileCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live{display:flex;flex-direction:column;gap:32px}.live-shop-in-live .live-video-player{height:229px;border-radius:8px;overflow:hidden}.live-shop-in-live-options .in-live-custom-style .custom-card-content{width:100%}.live-shop-in-live-options .in-live-custom-style-empty{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-options .custom-card-content .live-video-chat{height:calc(100vh - 386px);border-radius:8px;overflow:hidden}";
const LiveShopMobileStyle0 = liveShopMobileCss;

const LiveShopMobile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickAdd = index.createEvent(this, "on-click-add", 7);
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                liveShopData: this.liveShopData,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
    }
    render() {
        return (index.h("div", { key: 'b57194c7ac87bfc7ca76717bdccd20e74909ee8f', class: "live-shop-in-live" }, index.h("div", { key: '0725abc5598f295f32934bbc96b36c2d261ca3c4', class: "live-shop-in-live-player" }, index.h("live-video-player", { key: '2ac3167cf1954f9d6f745eb2632543dd4715a49f', videoId: this.videoId, autoPlay: true })), index.h("div", { key: '230abc19f8e2844db0bbb9d3d4ffe41908856e8d', class: "live-shop-in-live-options" }, index.h("custom-card", { key: 'd428654da62065e3675b75e570b32a41d8b34869', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, index.h("tab-selector", { key: '12c671d3815960895c67f10371fd4bc232764d23', tabs: tabs(this.videoId, this.items, this.handleAddItem, this.liveShopData.chatVisible) })))));
    }
};
LiveShopMobile.style = LiveShopMobileStyle0;

const liveShopNotFoundCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-not-found button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-size:14px}.live-shop-not-found button:hover{opacity:0.75}.live-shop-not-found button:disabled{opacity:0.6;cursor:not-allowed}";
const LiveShopNotFoundStyle0 = liveShopNotFoundCss;

const LiveShopNotFound = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.returnToHome = index.createEvent(this, "returnToHome", 7);
        this.handleReturnToHome = () => {
            this.returnToHome.emit();
        };
    }
    render() {
        return (index.h(index.Host, { key: '49d77b6d709c51891a2447ff5d54870528f25237' }, index.h("div", { key: '66881b2845774132feaa6029f2f9085e0e3b77dc', class: "live-shop-not-found" }, index.h("custom-card", { key: 'd2cf4d00bd34984697b4f899ff14bf669bff8ad1', cardTitle: "Ops, parece que essa live n\u00E3o existe mais!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades!" }, index.h("button", { key: '8ac991570b3420a43c5aea2b634b10939ecf2bf2', onClick: this.handleReturnToHome }, "Voltar para a p\u00E1gina inicial")))));
    }
};
LiveShopNotFound.style = LiveShopNotFoundStyle0;

const liveVideoChatCss = ":host{display:inline-block;width:100%}.live-video-chat{display:flex;justify-content:center;align-items:center;width:100%}.live-video-chat iframe{height:100%;width:100%}";
const LiveVideoChatStyle0 = liveVideoChatCss;

const LiveVideoChat = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
    }
    getChatUrl() {
        return `https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: 'b375119df95c68b42627497709d997d831b81eaf' }, index.h("div", { key: '8baf88559c9114a168fd079463fbd26add1e7235', class: "live-video-chat" }, index.h("iframe", { key: '9733e87680f2c629d56a6746815a180647806aaa', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoChat.style = LiveVideoChatStyle0;

const liveVideoPlayerCss = ":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";
const LiveVideoPlayerStyle0 = liveVideoPlayerCss;

const LiveVideoPlayer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.videoId = undefined;
        this.autoPlay = false;
        this.mute = true;
    }
    getVideoUrl() {
        if (this.autoPlay)
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=${+this.mute}`;
        return `https://www.youtube.com/embed/${this.videoId}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: 'b7e494530efeba855077e59604d69f797816cc68' }, index.h("div", { key: 'b907509b06ad0cb953b4879d80cf57905ea85b3f', class: "live-video-player" }, index.h("iframe", { key: '05d3efbeff57386cb30447de2550ba2ad38d4a55', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoPlayer.style = LiveVideoPlayerStyle0;

class DraggableService {
    constructor(onUpdatePosition) {
        this._isDragging = false;
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.onDragStateChange = () => { };
        this.handleDragMove = (event) => {
            if (!this._isDragging)
                return;
            const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
            const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
            this.currentX = clientX - this.initialX;
            this.currentY = clientY - this.initialY;
            this.positionX = this.currentX;
            this.positionY = this.currentY;
            this.onUpdatePosition(this.positionX, this.positionY);
        };
        this.handleDragEnd = () => {
            this._isDragging = false;
            this.onDragStateChange(this._isDragging);
            this.removeDragEventListeners();
        };
        this.onUpdatePosition = onUpdatePosition;
    }
    get isDragging() {
        return this._isDragging;
    }
    handleDragStart(event, positionX, positionY) {
        event.preventDefault();
        this._isDragging = true;
        this.onDragStateChange(this._isDragging);
        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        this.initialX = clientX - positionX;
        this.initialY = clientY - positionY;
        this.positionX = positionX;
        this.positionY = positionY;
        this.addDragEventListeners();
    }
    addDragEventListeners() {
        window.addEventListener('mousemove', this.handleDragMove);
        window.addEventListener('mouseup', this.handleDragEnd);
        window.addEventListener('touchmove', this.handleDragMove);
        window.addEventListener('touchend', this.handleDragEnd);
    }
    removeDragEventListeners() {
        window.removeEventListener('mousemove', this.handleDragMove);
        window.removeEventListener('mouseup', this.handleDragEnd);
        window.removeEventListener('touchmove', this.handleDragMove);
        window.removeEventListener('touchend', this.handleDragEnd);
    }
}

const miniPlayerCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.mini-player{position:fixed;bottom:10%;left:10px;display:flex;flex-direction:column;z-index:1000;border-radius:8px;overflow:hidden;background-color:#000000}@media (min-width: 1024px){.mini-player{bottom:10px;width:372px}}.mini-player live-video-player{width:100%;aspect-ratio:16/9}.mini-player live-video-player iframe{width:100%;height:100%;border:none;object-fit:cover}.mini-player-bar{display:flex;align-items:center;justify-content:space-between;padding:16px;background-color:var(--color-secondary);width:100%}@media (min-width: 1024px){.mini-player-bar{padding:8px 16px}}.mini-player-bar-title{font-family:var(--h1-ff);font-size:16px;text-transform:uppercase;font-weight:bold;color:var(--menu-background);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin:0}.mini-player-bar-button{display:flex;align-items:center}.mini-player-bar-button button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);text-transform:none;font-size:12px;padding:8px 16px;color:var(--color-secondary);background-color:#ffffff}.mini-player-bar-button button:hover{opacity:0.75}.mini-player-bar-button button:disabled{opacity:0.6;cursor:not-allowed}@media (min-width: 1024px){.mini-player-bar-button button{padding:12px 24px}}.mini-player-close-button{position:absolute;top:10px;right:10px;z-index:1001;background:#ffffff;border:none;border-radius:4px;width:28px;height:28px;display:flex;justify-content:center;cursor:pointer}.mini-player-close-button:hover{background:#c0c0c0}";
const MiniPlayerStyle0 = miniPlayerCss;

const MiniPlayer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.onClickMiniPlayerButton = index.createEvent(this, "on-click-miniplayer-button", 7);
        this.componentRendered = index.createEvent(this, "componentRendered", 7);
        this.handleDragStart = (event) => {
            this.dragDropService.handleDragStart(event, this.positionX, this.positionY);
        };
        this.videoId = undefined;
        this.autoPlay = false;
        this.mainTitle = 'Mini Player Title';
        this.buttonText = 'Return';
        this.showMiniPlayer = true;
        this.positionX = 0;
        this.positionY = 0;
        this.isDragging = false;
    }
    componentWillLoad() {
        this.dragDropService = new DraggableService((x, y) => {
            this.positionX = x;
            this.positionY = y;
        });
        this.dragDropService.onDragStateChange = (isDragging) => {
            this.isDragging = isDragging;
        };
    }
    handleTouchStart(event) {
        const target = event.target;
        if (target.tagName !== 'BUTTON')
            return this.handleDragStart(event);
        event.stopPropagation();
    }
    handleCloseMiniPlayer() {
        this.showMiniPlayer = false;
    }
    getMiniPlayerStyle() {
        return {
            transform: `translate(${this.positionX}px, ${this.positionY}px)`,
        };
    }
    getMiniPlayerBarStyle() {
        return {
            cursor: this.isDragging ? 'grabbing' : 'grab',
        };
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: 'c32258823bf14cf833de8ba8409909a2e8f0e850' }, this.showMiniPlayer && (index.h("div", { key: '120e243b384be6150c1021a783c1b1286927fdf8', class: "mini-player", style: this.getMiniPlayerStyle() }, index.h("button", { key: 'f917d0f2889ed83497185ea69c4258e681e27763', class: "mini-player-close-button", onClick: () => this.handleCloseMiniPlayer() }, index.h("front-icon", { key: '943e3f9637e71cd257d781cee08c19f8c227fb72', name: "close" })), index.h("live-video-player", { key: '86ed72a773e4066811f1e1b8cd2a4a81947214a4', videoId: this.videoId, autoPlay: this.autoPlay }), index.h("div", { key: 'd3ccdc66d548c68dc07e96fa749b6902c2678719', class: "mini-player-bar", style: this.getMiniPlayerBarStyle(), onMouseDown: this.handleDragStart, onTouchStart: event => this.handleTouchStart(event) }, index.h("h6", { key: '29c033ca808ac737394595e101a32580f31e143d', class: "mini-player-bar-title" }, this.mainTitle), index.h("div", { key: '28a3f4afc2ae283877bde72e86690a88d9aa1cc0', class: "mini-player-bar-button" }, index.h("button", { key: '669c20160294449096c802801540bf82c94399cc', onClick: () => this.onClickMiniPlayerButton.emit() }, this.buttonText)))))));
    }
};
MiniPlayer.style = MiniPlayerStyle0;

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.basePrice = undefined;
        this.paymentOptions = [];
        this.showStartingFrom = false;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${utils.getClassByProps(prosForClass)} ${this.customClass}`;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h(index.Host, { key: 'a91c01aba45c2170fd5e80e979bfebb5efe92206' }, index.h("div", { key: '4e05f5525c4781fc75147e022d6a446ae15d0b98', class: this.getClassWithInline('product-container') }, index.h("front-image", { key: '25724ec5cb8c21c8616c62f73aa01b2625795aad', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), index.h("div", { key: 'a204f8544ab6cdd62a71498aa481dab5d4c90215', class: "info" }, index.h("span", { key: '6d1b35bf05b48ca425b9ca5d3ef971f357599cee', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), index.h("product-price", { key: '7fd834aa77c751dc27be770f1c0e409ba5a3b1ee', basePrice: this.basePrice, paymentOptions: this.paymentOptions, showStartingFrom: this.showStartingFrom })))));
    }
};
ProductCard.style = ProductCardStyle0;

const productPriceCss$4 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceStyle0 = productPriceCss$4;

const ProductPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentMap = {
            simple: (option) => (index.h("product-price-simple", { price: option.price, priceCompare: option.priceCompare, showStartingFrom: this.showStartingFrom })),
            billet: (option) => (index.h("product-price-billet", { price: option.price, priceCompare: option.priceCompare })),
            creditCard: (option) => (index.h("product-price-credit-card", { price: option.price, priceCompare: option.priceCompare, parcels: option.parcels, parcelPrice: option.parcelPrice, hasInterest: option.hasInterest })),
            pix: (option) => (index.h("product-price-pix", { price: option.price, priceCompare: option.priceCompare })),
        };
        this.basePrice = undefined;
        this.paymentOptions = undefined;
        this.showStartingFrom = false;
    }
    renderPaymentOption(option) {
        const renderFn = this.componentMap[option.type] || this.componentMap.simple;
        return renderFn(option);
    }
    render() {
        const options = this.paymentOptions || [];
        if (!options.length) {
            return (index.h(index.Host, null, index.h("div", { class: "product-price-container" }, this.componentMap.simple({
                type: 'simple',
                price: this.basePrice.price,
                priceCompare: this.basePrice.priceCompare,
            }))));
        }
        return (index.h(index.Host, null, index.h("div", { class: "product-price-container" }, options.map(option => this.renderPaymentOption(option)))));
    }
};
ProductPrice.style = ProductPriceStyle0;

const productPriceCss$3 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceBilletStyle0 = productPriceCss$3;

const ProductPriceBillet = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        return (index.h("div", { key: 'eb7c2100eaadc1bead4f99e3eb2c018e5b956ce1', class: "payment-option payment-option-billet" }, formattedCompare && index.h("span", { key: 'c2de2cf12105a63ed58786c56379843eb73c169e', class: "price-compare" }, formattedCompare), index.h("span", { key: '6d9dccb0ff532c1c73d9cfb496746f0f3242abe7', class: "price-current" }, index.h("span", { key: '81c2cc2e134c7ccae7ada543bb6037f3cd457d0b', class: "highlight" }, formattedPrice), " no boleto")));
    }
};
ProductPriceBillet.style = ProductPriceBilletStyle0;

const productPriceCss$2 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceCreditCardStyle0 = productPriceCss$2;

const ProductPriceCreditCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
        this.parcels = undefined;
        this.parcelPrice = undefined;
        this.hasInterest = undefined;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        const formattedParcelPrice = this.parcelPrice ? utils.currencyFormat(this.parcelPrice) : null;
        const interestText = this.hasInterest ? 'com juros' : 'sem juros';
        return (index.h("div", { key: '4c2d292d74d588a0c7916e95984e1e90582094dd', class: "payment-option payment-option-creditCard" }, formattedCompare && index.h("span", { key: 'f4496ddd829b2a643ba272e2b43de378db4b1545', class: "price-compare" }, formattedCompare), index.h("span", { key: 'f4ae143bf96624b142127bf76ebcdd36c549b9a1', class: "price-current" }, index.h("span", { key: '7b0a5e7b19837d1b2d0019de8e185bd777fc5f78', class: "highlight" }, formattedPrice), ' ', this.parcels && this.parcelPrice && (index.h("span", { key: '24886565082f6ac05018a6802804edbce6e1ae4c', class: "credit-info" }, "em at\u00E9 ", index.h("span", { key: '560ba460f7b0eec3065af8bd13728668283c35f3', class: "highlight" }, this.parcels, "x"), " de", ' ', index.h("span", { key: '92c084aec1027aef88ef9ed53aaa669f7d3aee22', class: "highlight" }, formattedParcelPrice), " ", interestText)))));
    }
};
ProductPriceCreditCard.style = ProductPriceCreditCardStyle0;

const productPriceCss$1 = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPricePixStyle0 = productPriceCss$1;

const ProductPricePix = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        return (index.h("div", { key: '6391de752d7109afcc4270b99ab053c9426a9f04', class: "payment-option payment-option-pix" }, formattedCompare && index.h("span", { key: '5f1e369308173f90a8c7513b357eb58a95611c4b', class: "price-compare" }, formattedCompare), index.h("span", { key: '2014e9be0659f0c9fa5181b23811a1f40c38c1a3', class: "price-current" }, index.h("span", { key: 'c167bf0fba59a1d1c5ef6f8523531b74191204d6', class: "highlight" }, formattedPrice), " no pix")));
    }
};
ProductPricePix.style = ProductPricePixStyle0;

const productPriceCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .starting-from{font-size:12px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}";
const ProductPriceSimpleStyle0 = productPriceCss;

const ProductPriceSimple = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.priceCompare = undefined;
        this.showStartingFrom = false;
    }
    render() {
        const formattedPrice = utils.currencyFormat(this.price);
        const formattedCompare = this.priceCompare ? utils.currencyFormat(this.priceCompare) : null;
        return (index.h("div", { key: '742d65e24510131f255dc105b5d491a139b43edc', class: "payment-option payment-option-simple" }, this.showStartingFrom && index.h("span", { key: 'f65dfd20e1add28b170e73bb1e28e145bb4a27df', class: "starting-from" }, "A partir de"), formattedCompare && !this.showStartingFrom && (index.h("span", { key: '1ca46bdc98689a5b1e44e6bfab64daf4460d26cd', class: "price-compare" }, formattedCompare)), index.h("span", { key: 'a8f4467da2e65fea621521b5f0bbefab3479bc39', class: "price-current" }, index.h("span", { key: '9cf82d389efed234dd351cced3ddbbce54d100b4', class: "highlight" }, formattedPrice))));
    }
};
ProductPriceSimple.style = ProductPriceSimpleStyle0;

const tabSelectorCss = ".tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}";
const TabSelectorStyle0 = tabSelectorCss;

const TabSelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabs = undefined;
        this.activeTab = undefined;
    }
    handleTabClick(tabName) {
        this.activeTab = tabName;
    }
    componentWillLoad() {
        var _a;
        if (((_a = this.tabs) === null || _a === void 0 ? void 0 : _a.length) > 0)
            this.activeTab = this.tabs[0].name;
    }
    render() {
        var _a, _b;
        return (index.h("div", { key: 'aa7e377b4bacdb6aac7a108a3eb56b4ea1a1ff59', class: "tab-selector" }, index.h("div", { key: 'a624968d01bcc64975bf5fb3dae9cfb16bede933', class: "tab-selector-tabs" }, (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.map(tab => (index.h("span", { class: { active: this.activeTab === tab.name }, onClick: () => this.handleTabClick(tab.name) }, tab.label)))), index.h("div", { key: '4d0cb9491abff1bb74702b0ef67654e794a96056', class: "tab-selector-tabs-content" }, (_b = this.tabs) === null || _b === void 0 ? void 0 : _b.map(tab => (index.h("div", { class: {
                'tab-selector-tabs-content-item': true,
                'active': this.activeTab === tab.name,
            } }, this.activeTab === tab.name && tab.content()))))));
    }
};
TabSelector.style = TabSelectorStyle0;

exports.cashback_credit = Cashback;
exports.custom_card = CustomCard;
exports.front_icon = FrontIcon;
exports.front_image = FrontImage;
exports.highlight_card = HighlightCard;
exports.live_shop = LiveShop;
exports.live_shop_desktop = LiveShopDesktop;
exports.live_shop_mobile = LiveShopMobile;
exports.live_shop_not_found = LiveShopNotFound;
exports.live_video_chat = LiveVideoChat;
exports.live_video_player = LiveVideoPlayer;
exports.mini_player = MiniPlayer;
exports.product_card = ProductCard;
exports.product_price = ProductPrice;
exports.product_price_billet = ProductPriceBillet;
exports.product_price_credit_card = ProductPriceCreditCard;
exports.product_price_pix = ProductPricePix;
exports.product_price_simple = ProductPriceSimple;
exports.tab_selector = TabSelector;

//# sourceMappingURL=cashback-credit_19.cjs.entry.js.map