'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d77613b.js');
const index$1 = require('./index-e8e5cf79.js');

const customCardCss = ":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}";
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
        return (index.h(index.Host, { key: '53245f10b891d307ae757b2992c3e5127cfdaf56' }, index.h("div", { key: 'd18493b0cb827d91cf650cf5a139fb791b258fa3', class: `custom-card ${this.customClass}` }, index.h("div", { key: '66348c1eadf3b516bc15ef074461fd7c77d4822b', class: "custom-card-header" }, index.h("h2", { key: '1e45189b4de9ae8e94b6300ae90d26b722b5ee21', class: "custom-card-header-title" }, this.cardTitle), this.cardDescription && (index.h("p", { key: 'ba3abd85c94474d7a24ab119c091b94b0b6f4670', class: "custom-card-header-description" }, this.cardDescription))), index.h("div", { key: '08d5f6a130b9123713ec8d26d408fd9f496dbd6c', class: "custom-card-content" }, index.h("slot", { key: '07d0861be27e9f32fe81fd55eadda597da0cb10a' })))));
    }
};
CustomCard.style = CustomCardStyle0;

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
        return (index.h(index.Host, { key: '8568df856989ba170181dab00d2b2d319beb59e4' }, index.h("figure", { key: '713d672234f520f6b3c66323662f7570b3f1c300', class: this.getImageClassByProps() }, index.h("img", { key: 'c592c3b5a18359ae74f491be9be473f08a51fa53', src: this.imageSrc, alt: this.textAlt || 'Imagem', onLoad: () => this.onSrcLoadFinish() }), !!this.figCaption && index.h("figcaption", { key: 'dd13acd7b63e276d0936ad03f70d469ac00c4792' }, this.figCaption))));
    }
    static get watchers() { return {
        "imageSrc": ["changeImageSrc"]
    }; }
};
FrontImage.style = FrontImageStyle0;

const highlightCardCss = ":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product-cart-icon{padding:24px}.highlight-card-product-cart-icon img{cursor:pointer}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";
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
        return (index.h("div", { class: `highlight-card-item ${isHighlighted ? 'highlight-card-item-highlighted' : ''}` }, item.type === 'message' && (index.h("div", { class: "highlight-card-message" }, index.h("h4", { class: "highlight-card-message-title" }, item.title), index.h("p", { class: "highlight-card-message-content" }, item.content))), item.type === 'product' && (index.h("div", { class: "highlight-card-product" }, index.h("product-card", { "custom-class": "highlight-custom-style", product: item, inline: true }), index.h("div", { class: "highlight-card-product-cart-icon" }, index.h("img", { onClick: () => this.addItem.emit(item), src: index.getAssetPath('./assets/icons/add-to-cart.svg'), alt: "add_to_cart_icon" }))))));
    }
    filterItems() {
        this.highlightedItems = this.items.filter(item => item.highlight);
        this.nonHighlightedItems = this.items.filter(item => !item.highlight);
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    componentWillLoad() {
        this.filterItems();
    }
    filterItemsHandler() {
        this.filterItems();
    }
    render() {
        return (index.h(index.Host, { key: '71d5ef81aae5fb0d2b099ba48b0c518d57931310' }, index.h("div", { key: '0f6381c4f72ca5b3e1f038e8aa5d2ad2d87c2a13', class: "highlight-card" }, this.highlightedItems.length > 0 && (index.h("div", { key: '2224059a47407062abf4769d14c0d230f00f3dff', class: "highlight-card-container" }, index.h("div", { key: '364d9a076d3a6d0563bf85d59e1644e053187437', class: "highlight-card-header" }, index.h("span", { key: '4798401487cfb3e5f5a97baf6dd25fb07c1f164d', class: "highlight-card-header-title" }, "Destaque")), this.highlightedItems.map((item, index$1) => (index.h("div", null, this.renderItem(item, true), index$1 < this.highlightedItems.length - 1 && (index.h("div", { class: "highlight-card-separator" }))))))), this.nonHighlightedItems.map(item => this.renderItem(item, false)))));
    }
    static get watchers() { return {
        "items": ["filterItemsHandler"]
    }; }
};
HighlightCard.style = HighlightCardStyle0;

class LiveShopHandler {
    async getProducts() {
        const productIds = this.liveShopData.products.map(product => product.productId);
        return await index$1.ProductService.getList({
            fields: ['name', 'images { src }', 'price', 'priceCompare', 'id', 'slug'],
            filter: { productIds },
        });
    }
    async getLiveShop(hashRoom) {
        this.liveShopData = await index$1.LiveShopService.getByHash(hashRoom);
        console.log('🚀 ~ LiveShopHandler ~ getLiveShop ~ liveShopData:', this.liveShopData);
        return this.liveShopData;
    }
    async productsToItemsAdapter() {
        const products = await this.getProducts();
        return products.edges.map(({ node }) => {
            var _a;
            return ({
                id: +node.id,
                name: node.name,
                image: (_a = node.images[0]) !== null && _a !== void 0 ? _a : null,
                price: node.price,
                priceBase: node.priceCompare,
                title: '',
                content: '',
                type: 'product',
                highlight: false,
                slug: node.slug,
            });
        });
    }
    messagesToItemsAdapter() {
        return this.liveShopData.messages.map(message => {
            var _a;
            return ({
                id: (_a = message.id) !== null && _a !== void 0 ? _a : null,
                title: message.title,
                content: message.content,
                type: 'message',
                highlight: false,
            });
        });
    }
    async getItems() {
        const productItems = await this.productsToItemsAdapter();
        const messageItems = this.messagesToItemsAdapter();
        return [...productItems, ...messageItems];
    }
}

const liveShopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}:host{display:block;width:100%}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:350px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.live-shop{height:100%}.live-shop-warmup .banner-custom-style{padding:40px}.live-shop-warmup .banner-custom-style>.custom-card-content{width:100%;max-width:720px;height:auto;aspect-ratio:16/9}.live-shop-warmup .banner-custom-style>.custom-card-content img{width:100%;height:100%;object-fit:cover}.live-shop-warmup .banner-custom-style>.custom-card-content .live-shop-banner{background-color:#d9d9d9;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.live-shop-finished .button-custom-style{padding:40px;max-width:410px;margin:0 auto;text-align:center}.live-shop-finished .button-custom-style button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;text-transform:capitalize;font-size:14px}.live-shop-finished .button-custom-style button:hover{opacity:0.75}.live-shop-finished .button-custom-style button:disabled{opacity:0.6;cursor:not-allowed}";
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
        this.hashRoom = undefined;
        this.videoId = undefined;
        this.isSmallDevice = window.innerWidth <= 1024;
        this.isChatOpen = false;
        this.isLoading = true;
        this.liveShopRegister = undefined;
        this.liveShopItemsService = undefined;
        this.liveShopItems = undefined;
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
    }
    async componentDidLoad() {
        try {
            if (!this.hashRoom)
                throw new Error('Hash Room is required');
            this.isLoading = true;
            window.addEventListener('resize', this.handleResize);
            this.componentRendered.emit();
            this.liveShopItemsService = new LiveShopHandler();
            this.liveShopRegister = await this.liveShopItemsService.getLiveShop(this.hashRoom);
            this.liveShopItems = await this.liveShopItemsService.getItems();
            if (this.liveShopRegister)
                this.videoId = this.liveShopRegister.urlLive.split('v=')[1];
        }
        catch (error) {
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
        return (index.h("div", { class: "live-shop-warmup" }, index.h("custom-card", { customClass: "banner-custom-style", cardTitle: this.liveShopRegister.title }, this.liveShopRegister.banner ? (index.h("img", { src: this.liveShopRegister.banner.src, alt: this.liveShopRegister.banner.alt })) : (index.h("div", { class: "live-shop-banner" })))));
    }
    renderInLive() {
        return this.isSmallDevice ? (index.h("live-shop-mobile", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems })) : (index.h("live-shop-desktop", { videoId: this.videoId, liveShopData: this.liveShopRegister, items: this.liveShopItems, isChatOpen: this.isChatOpen, toggleChat: () => this.isChatOpenHandler() }));
    }
    renderFinished() {
        return (index.h("div", { class: "live-shop-finished" }, index.h("custom-card", { customClass: "button-custom-style", cardTitle: "A live chegou ao fim!", cardDescription: "Fique de olho em nossas pr\u00F3ximas lives para mais novidades e promo\u00E7\u00F5es imperd\u00EDveis!" }, index.h("button", { onClick: () => this.onReturnToHome.emit() }, "Voltar para a p\u00E1gina inicial"))));
    }
    render() {
        if (this.isLoading) {
            return index.h(index.Host, null, this.renderLoading());
        }
        return (index.h(index.Host, null, index.h("div", { class: "live-shop" }, this.liveShopRegister.status === 'warmup' && this.renderWarmup(), this.liveShopRegister.status === 'inLive' && this.renderInLive(), this.liveShopRegister.status === 'finished' && this.renderFinished())));
    }
};
LiveShop.style = LiveShopStyle0;

const liveShopDesktopCss = "*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, \"uppercase\");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, \"uppercase\");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}";
const LiveShopDesktopStyle0 = liveShopDesktopCss;

const LiveShopDesktop = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickAdd = index.createEvent(this, "on-click-add", 7);
        this.handleAddItem = (event) => {
            const item = event.detail;
            this.clickAdd.emit({
                item,
                video_id: this.videoId,
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
        return (index.h("div", { key: '0ee2586808270792007716471f5d87369c55c1f9', class: "live-shop-in-live-desktop" }, index.h("div", { key: 'b63c038433a672c1c8e10504cad1e3d80237d61d', class: "live-shop-in-live-desktop-infos" }, index.h("div", { key: 'e4679b41470de47afe5514e73dfe06200baf89d7', class: "live-shop-in-live-desktop-infos-player" }, index.h("live-video-player", { key: '237354c9f960a2d488729a24ba9b3c02df715ada', videoId: this.videoId, autoPlay: true })), index.h("div", { key: '53e46b670662037597cc9e25c33bfa3e5d340392', class: "live-shop-in-live-desktop-infos-options" }, index.h("h2", { key: '44df1331d19fd994555a60ad03db63eacacf3426', class: "live-shop-in-live-desktop-infos-options-title" }, this.liveShopData.name), index.h("button", { key: '683e1db0dc5b382810e9d0bd343900549ec60398', class: "live-shop-in-live-desktop-infos-options-button", onClick: this.toggleChat }, this.buttonText())), this.isChatOpen && (index.h("div", { key: '65297655fa1e43c02709eb56ab64fff57fb933d5', class: "live-shop-in-live-desktop-infos-options-chat" }, index.h("live-video-chat", { key: '3265a63d913454603a8c8f49b87a03bf3489ffa3', videoId: this.videoId })))), index.h("div", { key: '84498cf604b9b2aa604bfa249eba4e3782ef72ac', class: "live-shop-in-live-desktop-content" }, index.h("div", { key: 'd023e218e83062e4b423f644933d13ff579adf77', class: "live-shop-in-live-desktop-content-card" }, this.items.length > 0 ? (index.h("highlight-card", { items: this.items, onAddItem: this.handleAddItem })) : (index.h("custom-card", { customClass: "in-live-custom-style-desktop", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }))))));
    }
};
LiveShopDesktop.style = LiveShopDesktopStyle0;

const tabs = (videoId, items, handleAddItem) => [
    {
        name: 'products',
        label: (index.h("span", null,
            "Produtos",
            (items === null || items === void 0 ? void 0 : items.filter(item => item.type === 'product').length) > 0 ? (index.h("span", { class: "product-count" }, items === null || items === void 0 ? void 0 : items.filter(item => item.type === 'product').length)) : (''))),
        content: () => {
            return (items === null || items === void 0 ? void 0 : items.length) > 0 ? (index.h("highlight-card", { items: items, onAddItem: handleAddItem })) : (index.h("custom-card", { customClass: "in-live-custom-style-empty", cardTitle: "produtos a caminho...", cardDescription: "Em breve, teremos algo especial para voc\u00EA!" }));
        },
    },
    {
        name: 'chat',
        label: 'Chat',
        content: () => index.h("live-video-chat", { videoId: videoId }),
    },
];

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
                video_id: this.videoId,
            });
        };
        this.videoId = undefined;
        this.liveShopData = undefined;
        this.items = undefined;
    }
    render() {
        return (index.h("div", { key: 'a2e8b7fd69e2bc3c338462bf26c79dd720b8d970', class: "live-shop-in-live" }, index.h("div", { key: 'b106572b3f90afc8a0d869f6f445dbf4a4002e7f', class: "live-shop-in-live-player" }, index.h("live-video-player", { key: '48eef803501fe992949786060724d26921d597a5', videoId: this.videoId, autoPlay: true })), index.h("div", { key: 'a64becef8dfbd80c18e41dbd0d9438d67ad4b216', class: "live-shop-in-live-options" }, index.h("custom-card", { key: '8d8745427174f8e0934964fc854a591a0e8177ae', customClass: "in-live-custom-style", cardTitle: this.liveShopData.name }, index.h("tab-selector", { key: 'b86e66ada9c27627f9343c6eae555e583d25967f', tabs: tabs(this.videoId, this.items, this.handleAddItem) })))));
    }
};
LiveShopMobile.style = LiveShopMobileStyle0;

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
        return (index.h(index.Host, { key: '99f8f1c30bb7c2a3b0c27f5ef0996f339c5e6863' }, index.h("div", { key: '82ef91119765c8fc529e4fea7f8030c3d9364ca2', class: "live-video-chat" }, index.h("iframe", { key: 'faeea5447113b0f31be336f6f9b16929d7102e1c', src: this.getChatUrl(), frameborder: "0", allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true }))));
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
    }
    getVideoUrl() {
        if (this.autoPlay)
            return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
        return `https://www.youtube.com/embed/${this.videoId}`;
    }
    componentDidLoad() {
        this.componentRendered.emit();
    }
    render() {
        return (index.h(index.Host, { key: '6143eefed800c9aabcf4b726805e4310b84f60c8' }, index.h("div", { key: '7680de35372b636b177650654e6c804c46809464', class: "live-video-player" }, index.h("iframe", { key: '3eca83bdf0e462bbd0319ebc8763553b578cb7ee', src: this.getVideoUrl(), frameborder: "0", allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))));
    }
};
LiveVideoPlayer.style = LiveVideoPlayerStyle0;

const productCardCss = ":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.info>.price{display:flex;flex-direction:column}.product-container>.info>.price .base{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.product-container>.info>.price .current{font-size:15px;font-weight:700}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";
const ProductCardStyle0 = productCardCss;

const ProductCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inline = false;
        this.customClass = '';
        this.product = undefined;
        this.showPriceBase = undefined;
    }
    getClassWithInline(className) {
        const prosForClass = { '-inline': this.inline };
        return `${className} ${getClassByProps(prosForClass)} ${this.customClass}`;
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
        return (index.h(index.Host, { key: 'd57a5b480237972e7cb933f4bf18fa3c37b87167' }, index.h("div", { key: '8ca70bb2579a70389166a16257deff1a808fa0f8', class: this.getClassWithInline('product-container') }, index.h("front-image", { key: 'ec4a504469423d2f6bb9851faedd91d5c395b867', class: this.getClassWithInline('image'), imageSrc: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.src, textAlt: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.alt) || 'Imagem do produto' }), index.h("div", { key: '7737a2b0063d1b0a699dc09dd7a1bdf9385c1845', class: "info" }, index.h("span", { key: '60579bfd64f7f01e67ff991388eadebecb26f9bc', class: "title" }, (_e = this.product) === null || _e === void 0 ? void 0 : _e.name), index.h("div", { key: '1f048caf3c00583e7ec298a010345d211cec1a52', class: "price" }, this.showPriceBase && (index.h("span", { key: '6fbeabbff19b94cda3da0b94466cd7553ed2e976', class: "base" }, currencyFormat(this.product.priceBase))), index.h("span", { key: 'c4e27ce6cba64e7a6e24d5bab4c0ce25ef2737cc', class: "current" }, this.getPrice()))))));
    }
};
ProductCard.style = ProductCardStyle0;

const tabSelectorCss = ".tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;text-transform:capitalize;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}";
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
        return (index.h("div", { key: 'fb65eec92caa07066a7305198f931e8af91c480d', class: "tab-selector" }, index.h("div", { key: '1ca30e4bdf7e9edc025ad7c1c86bab9d32efee17', class: "tab-selector-tabs" }, (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.map(tab => (index.h("span", { class: { active: this.activeTab === tab.name }, onClick: () => this.handleTabClick(tab.name) }, tab.label)))), index.h("div", { key: '0cf9ccc7955536f81f2247fc82e87f87e9ec6aff', class: "tab-selector-tabs-content" }, (_b = this.tabs) === null || _b === void 0 ? void 0 : _b.map(tab => (index.h("div", { class: {
                'tab-selector-tabs-content-item': true,
                'active': this.activeTab === tab.name,
            } }, this.activeTab === tab.name && tab.content()))))));
    }
};
TabSelector.style = TabSelectorStyle0;

exports.custom_card = CustomCard;
exports.front_image = FrontImage;
exports.highlight_card = HighlightCard;
exports.live_shop = LiveShop;
exports.live_shop_desktop = LiveShopDesktop;
exports.live_shop_mobile = LiveShopMobile;
exports.live_video_chat = LiveVideoChat;
exports.live_video_player = LiveVideoPlayer;
exports.product_card = ProductCard;
exports.tab_selector = TabSelector;

//# sourceMappingURL=custom-card_10.cjs.entry.js.map