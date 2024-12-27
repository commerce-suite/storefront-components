import{r as t,c as e,h as i,H as o,g as r,E as s}from"./p-95925ffd.js";import{P as a,L as c}from"./p-6b5b706d.js";const n=":host{display:inline-block;width:100%}.custom-card{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:24px}.custom-card-header{display:flex;flex-direction:column;gap:16px}.custom-card-header-title,.custom-card-header-description{margin:0;text-align:center}.custom-card-header-title{font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;word-break:break-word}.custom-card-header-description{font-size:16px}@media (min-width: 1024px){.custom-card{gap:40px}}";const l=n;const d=class{constructor(i){t(this,i);this.componentRendered=e(this,"componentRendered",7);this.cardTitle="Não perca! Live hoje às 19 horas.";this.cardDescription=undefined;this.customClass=""}componentDidLoad(){this.componentRendered.emit()}render(){return i(o,{key:"732ac75941c1cf4a35775ac286de0a74dcb33def"},i("div",{key:"9fbe399940103764e765dd84563622a5ac9fca29",class:`custom-card ${this.customClass}`},i("div",{key:"dca7891aeb907406a97ce9093407ceea1d844d13",class:"custom-card-header"},i("h2",{key:"8eaefb1c57db1af82c73a2bea7df4dca0c506c90",class:"custom-card-header-title"},this.cardTitle),this.cardDescription&&i("p",{key:"1db1caf8f312021121348055880fc67c7b8e4545",class:"custom-card-header-description"},this.cardDescription)),i("div",{key:"ea8120c8aa7e11799b5a2e270f49edd3c580bde2",class:"custom-card-content"},i("slot",{key:"f793382fc558355fd70659264ec3c69c60f98e31"}))))}};d.style=l;function h(t){return Number(t).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}function p(t){return Object.keys(t).filter((e=>t[e])).map((t=>t)).join(" ")}function f(t){if(!t)return null;const e=/(?:watch\?v=|live\/)([a-zA-Z0-9_-]{11})/;const i=t.match(e);return i?i[1]:null}const m="@keyframes skeleton-loading{0%{background-color:hsl(200, 20%, 80%)}100%{background-color:hsl(200, 20%, 95%)}}:host{display:inline-block;width:100%}.image-container{position:relative;margin:unset}.image-container img{width:100%;height:100%;object-fit:contain;opacity:1;transition:opacity 1s}.image-container.-is-loading{min-width:100px;min-height:100px;animation:skeleton-loading 1s linear infinite alternate}.image-container.-is-loading img{opacity:0}";const u=m;const g=class{constructor(e){t(this,e);this.imageSrc=undefined;this.textAlt=undefined;this.figCaption=undefined;this.isSrcLoading=true}getImageClassByProps(){const t={"-is-loading":this.isSrcLoading};return`image-container ${p(t)}`}onSrcLoadFinish(){setTimeout((()=>{this.isSrcLoading=false}),500)}changeImageSrc(){this.isSrcLoading=true}render(){return i(o,{key:"a86cbee4ce7b83af6db0f609c9d50339332ab639"},i("figure",{key:"1d7ae12ec0cb14648c1bba089f999729338de4b0",class:this.getImageClassByProps()},i("img",{key:"fdf4e6f59d6b3014871e74916a8c087d1911cddf",src:this.imageSrc,alt:this.textAlt||"Imagem",onLoad:()=>this.onSrcLoadFinish()}),!!this.figCaption&&i("figcaption",{key:"16b68f05ef81fb5c2d76ffef7a236240e8ecc567"},this.figCaption)))}static get watchers(){return{imageSrc:["changeImageSrc"]}}};g.style=u;const v=":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product-cart-icon{padding:24px}.highlight-card-product-cart-icon img{cursor:pointer}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-all}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";const b=v;const y=class{constructor(i){t(this,i);this.addItem=e(this,"addItem",7);this.componentRendered=e(this,"componentRendered",7);this.items=[];this.highlightedItems=[];this.nonHighlightedItems=[]}renderItem(t,e){if(!t.show)return null;return i("div",{class:`highlight-card-item ${e?"highlight-card-item-highlighted":""}`},t.type==="message"&&i("div",{class:"highlight-card-message"},i("h4",{class:"highlight-card-message-title"},t.title),i("p",{class:"highlight-card-message-content"},t.content)),t.type==="product"&&i("div",{class:"highlight-card-product"},i("product-card",{"custom-class":"highlight-custom-style",product:t,basePrice:{price:t.price,priceCompare:t.priceBase},inline:true}),i("div",{class:"highlight-card-product-cart-icon"},i("img",{onClick:()=>this.addItem.emit(t),src:r("./assets/icons/add-to-cart.svg"),alt:"add_to_cart_icon"}))))}filterItems(t){const e=t.filter((t=>t.show));this.highlightedItems=e.filter((t=>t.highlight));this.nonHighlightedItems=e.filter((t=>!t.highlight))}componentDidLoad(){this.componentRendered.emit()}componentWillLoad(){this.filterItems(this.items)}handleItemsChange(t){this.filterItems(t)}render(){return i(o,{key:"7e2f359858cce941a8d6716035d4d6d39e175c7a"},i("div",{key:"55210b6faeeea74acabbed2d93f363f6fa70c8e7",class:"highlight-card"},this.highlightedItems.length>0&&i("div",{key:"6b0ef6ae3e25d69979144996146168ffe480d4a4",class:"highlight-card-container"},i("div",{key:"65ccf2ce3e9ca96530c56fecd3f00632dd175cde",class:"highlight-card-header"},i("span",{key:"d768d8d71b176fa8e6acf55c134db5145705338f",class:"highlight-card-header-title"},"Destaque")),this.highlightedItems.map(((t,e)=>i("div",null,this.renderItem(t,true),e<this.highlightedItems.length-1&&i("div",{class:"highlight-card-separator"}))))),this.nonHighlightedItems.map((t=>this.renderItem(t,false)))))}static get watchers(){return{items:["handleItemsChange"]}}};y.style=b;class x{async getProducts(){const t=this.liveShopData.products.map((t=>t.productId));return await a.getList({fields:["name","images { src }","price","priceCompare","productId","slug"],filter:{productIds:t,page:0,first:t.length}})}async getLiveShop(t){this.liveShopData=await c.getByHash(t);return this.liveShopData}async productsToItemsAdapter(){var t;const e=await this.getProducts();const i=(t=this.liveShopData)===null||t===void 0?void 0:t.products;return e.edges.map((({node:t})=>{var e,o,r;const s=i.find((e=>e.productId===t.productId));const a=(e=s===null||s===void 0?void 0:s.status)!==null&&e!==void 0?e:null;return{id:+t.productId,name:t.name,image:(r=(o=t===null||t===void 0?void 0:t.images)===null||o===void 0?void 0:o[0])!==null&&r!==void 0?r:null,price:t.price,priceBase:t.priceCompare,title:"",content:"",type:"product",slug:t.slug,show:a&&a!=="hidden",highlight:a==="highlighting"}}))}messagesToItemsAdapter(){return this.liveShopData.messages.map((t=>{var e;return{id:(e=t.id)!==null&&e!==void 0?e:null,title:t.title,content:t.content,type:"message",show:t.status&&t.status!=="hidden",highlight:t.status==="highlighting"}}))}updateItems(t,e){const i=t.map((t=>{if(t.id===e.id&&t.type===e.type){return Object.assign(Object.assign({},t),{show:e.status!=="hidden",highlight:e.status==="highlighting"})}return t}));return i}async getItems(){const t=await this.productsToItemsAdapter();const e=this.messagesToItemsAdapter();return[...t,...e]}}class w{constructor(t){this.socket=null;this.reconnectAttempts=0;this.reconnectTimeout=null;this.messageCallback=null;this.onOpen=()=>{this.reconnectAttempts=0;if(this.messageCallback&&this.socket){this.socket.addEventListener("message",this.messageCallback)}};this.onClose=t=>{if(!t.wasClean)this.handleReconnect()};this.onError=()=>{this.handleReconnect()};this.url=t;this.connect()}connect(){if(this.socket){this.socket.onclose=null;this.socket.onerror=null;this.socket.onmessage=null}this.socket=new WebSocket(this.url);this.socket.onopen=this.onOpen;this.socket.onclose=this.onClose;this.socket.onerror=this.onError}handleReconnect(){if(this.reconnectTimeout!==null)return;if(this.reconnectAttempts>=w.MAX_RECONNECT_ATTEMPTS)return;const t=this.reconnectAttempts===0?w.INITIAL_INCREMENT_DELAY:Math.min(w.INITIAL_RECONNECT_DELAY*Math.pow(2,this.reconnectAttempts-1),w.MAX_RECONNECT_DELAY);this.reconnectTimeout=window.setTimeout((()=>{this.reconnectAttempts++;this.reconnectTimeout=null;this.connect()}),t)}closeConnection(){var t;if(((t=this.socket)===null||t===void 0?void 0:t.readyState)===WebSocket.OPEN){this.socket.close()}if(this.reconnectTimeout!==null){clearTimeout(this.reconnectTimeout);this.reconnectTimeout=null}}onMessage(t){this.messageCallback=t;if(this.socket){this.socket.addEventListener("message",t)}}}w.MAX_RECONNECT_ATTEMPTS=5;w.INITIAL_RECONNECT_DELAY=5e3;w.MAX_RECONNECT_DELAY=3e4;w.INITIAL_INCREMENT_DELAY=1e3;const k='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}@keyframes lds-dual-ring-animation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}:host{display:block;width:100%}.loading-container{display:flex;width:100%;justify-content:center;align-items:center;min-height:350px}.loading-container .spinner{--spinner-color:var(--fc-color-secondary, #000);display:inline-block;width:80px;height:80px}.loading-container .spinner:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid var(--spinner-color);border-color:var(--spinner-color) transparent var(--spinner-color) transparent;animation:lds-dual-ring-animation 1.2s linear infinite}.live-shop{height:100%}.live-shop-warmup .banner-custom-style{padding:40px}.live-shop-warmup .banner-custom-style>.custom-card-content{width:100%;max-width:720px;height:auto;aspect-ratio:16/9}.live-shop-warmup .banner-custom-style>.custom-card-content img{width:100%;height:100%;object-fit:cover}.live-shop-warmup .banner-custom-style>.custom-card-content .live-shop-banner{background-color:#d9d9d9;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.live-shop-finished .button-custom-style{padding:40px;max-width:410px;margin:0 auto;text-align:center}.live-shop-finished .button-custom-style button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, "uppercase");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-weight:500;font-size:14px}.live-shop-finished .button-custom-style button:hover{opacity:0.75}.live-shop-finished .button-custom-style button:disabled{opacity:0.6;cursor:not-allowed}';const _=k;const z=class{constructor(i){t(this,i);this.onReturnToHome=e(this,"on-return-to-home",7);this.componentRendered=e(this,"componentRendered",7);this.handleResize=()=>{this.isSmallDevice=window.innerWidth<=1024};this.isChatOpenHandler=()=>{this.isChatOpen=!this.isChatOpen};this.handleMessage=t=>{try{if(!t.data)return;const e=JSON.parse(t.data);const i={liveOn:"inLive",liveOff:"finished"};if(i[e.type]){this.liveShopRegister=Object.assign(Object.assign({},this.liveShopRegister),{status:i[e.type]});return}this.liveShopItems=this.liveShopItemsService.updateItems(this.liveShopItems,e)}catch(t){console.error(t)}};this.hashRoom=undefined;this.liveShopNotFound=false;this.videoId=undefined;this.isSmallDevice=window.innerWidth<=1024;this.isChatOpen=false;this.isLoading=true;this.liveShopRegister=undefined;this.liveShopItemsService=undefined;this.liveShopItems=undefined;this.liveSocket=undefined}disconnectedCallback(){window.removeEventListener("resize",this.handleResize);if(this.liveSocket)this.liveSocket.closeConnection()}async componentDidLoad(){var t;try{if(!this.hashRoom)throw new Error("Hash Room is required");this.isLoading=true;window.addEventListener("resize",this.handleResize);this.componentRendered.emit();this.liveShopItemsService=new x;this.liveShopRegister=await this.liveShopItemsService.getLiveShop(this.hashRoom);if(!this.liveShopRegister)throw new Error("live-shop_not_found");this.liveShopItems=await this.liveShopItemsService.getItems();if(this.liveShopRegister){this.videoId=f(this.liveShopRegister.urlLive)}const t=s.WEBSOCKET_URL;this.liveSocket=new w(`${t}?hashRoom=${this.hashRoom}`);this.liveSocket.onMessage(this.handleMessage)}catch(e){if((t=e===null||e===void 0?void 0:e.message)===null||t===void 0?void 0:t.includes("live-shop_not_found")){this.liveShopNotFound=true;console.error("Live Shop not found",{error:e});return}console.error(e)}finally{this.isLoading=false}}renderLoading(){return i("div",{class:"loading-container"},i("span",{class:"spinner"}))}renderWarmup(){return i("div",{class:"live-shop-warmup"},i("custom-card",{customClass:"banner-custom-style",cardTitle:this.liveShopRegister.title},this.liveShopRegister.banner?i("img",{src:this.liveShopRegister.banner.src,alt:this.liveShopRegister.banner.alt}):i("div",{class:"live-shop-banner"})))}renderInLive(){return this.isSmallDevice?i("live-shop-mobile",{videoId:this.videoId,liveShopData:this.liveShopRegister,items:this.liveShopItems}):i("live-shop-desktop",{videoId:this.videoId,liveShopData:this.liveShopRegister,items:this.liveShopItems,isChatOpen:this.isChatOpen,toggleChat:()=>this.isChatOpenHandler()})}renderFinished(){return i("div",{class:"live-shop-finished"},i("custom-card",{customClass:"button-custom-style",cardTitle:"A live chegou ao fim!",cardDescription:"Fique de olho em nossas próximas lives para mais novidades e promoções imperdíveis!"},i("button",{onClick:()=>this.onReturnToHome.emit()},"Voltar para a página inicial")))}render(){var t,e,r;if(this.isLoading){return i(o,null,this.renderLoading())}if(this.liveShopNotFound){return i("live-shop-not-found",{onReturnToHome:()=>this.onReturnToHome.emit()})}return i(o,null,i("div",{class:"live-shop"},((t=this.liveShopRegister)===null||t===void 0?void 0:t.status)==="warmup"&&this.renderWarmup(),((e=this.liveShopRegister)===null||e===void 0?void 0:e.status)==="inLive"&&this.renderInLive(),((r=this.liveShopRegister)===null||r===void 0?void 0:r.status)==="finished"&&this.renderFinished()))}};z.style=_;const C='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live-desktop{display:flex;justify-content:center;gap:24px}.live-shop-in-live-desktop-infos{display:flex;flex-direction:column;gap:32px}.live-shop-in-live-desktop-infos-options{display:flex;justify-content:space-between;align-items:center}.live-shop-in-live-desktop-infos-options-title{margin:0;font-family:var(--h1-ff);color:var(--menu-items);font-weight:700;font-size:24px;text-transform:uppercase;max-width:550px;word-break:break-word}.live-shop-in-live-desktop-infos-options-button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, "uppercase");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);background-color:var(--color-secondary);width:unset;font-weight:500;text-transform:none;font-size:14px}.live-shop-in-live-desktop-infos-options-button:hover{opacity:0.75}.live-shop-in-live-desktop-infos-options-button:disabled{opacity:0.6;cursor:not-allowed}.live-shop-in-live-desktop-infos-options-chat .live-video-chat{height:768px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-infos .live-video-player{height:500px;width:752.7px;border-radius:8px;overflow:hidden}.live-shop-in-live-desktop-content-card{width:450px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-desktop-content-card .in-live-custom-style-desktop .custom-card-content{display:none}.live-shop-in-live-desktop .highlight-card{width:450px}';const I=C;const j=class{constructor(i){t(this,i);this.clickAdd=e(this,"on-click-add",7);this.handleAddItem=t=>{const e=t.detail;this.clickAdd.emit({item:e,liveShopData:this.liveShopData})};this.videoId=undefined;this.liveShopData=undefined;this.items=undefined;this.isChatOpen=undefined;this.toggleChat=undefined}buttonText(){return this.isChatOpen?"Ocultar chat da live":"Exibir chat da live"}render(){return i("div",{key:"0b0e80a706d46319d24bf31f22796f27747f3536",class:"live-shop-in-live-desktop"},i("div",{key:"a91d542363fe2f1200fd8938b63fceeda4430d5f",class:"live-shop-in-live-desktop-infos"},i("div",{key:"b21d77cc94bbbd045e88b7bf1e94eb5e9a0e82a6",class:"live-shop-in-live-desktop-infos-player"},i("live-video-player",{key:"1f3f0e31fda7ba10cd3ba515c9cfbea7a693d143",videoId:this.videoId,autoPlay:true})),i("div",{key:"20a9163a8380a98b19ce8613e4a6dfb51e8f491b",class:"live-shop-in-live-desktop-infos-options"},i("h2",{key:"3d51977961f1ef2feb0a9f71aefbff5e8992a361",class:"live-shop-in-live-desktop-infos-options-title"},this.liveShopData.name),this.liveShopData.chatVisible&&i("button",{key:"d07cdc4ad3c486da0b60f3c35bf5247a63a8047c",class:"live-shop-in-live-desktop-infos-options-button",onClick:this.toggleChat},this.buttonText())),this.isChatOpen&&i("div",{key:"fcec6f27e38dbadad290d6127ffee3930669d7c5",class:"live-shop-in-live-desktop-infos-options-chat"},i("live-video-chat",{key:"0e3ebfaa8b2c0960158503b3556d8a469990ebc3",videoId:this.videoId}))),i("div",{key:"f7f486ad5203d7e2a756a95659732c484d054e50",class:"live-shop-in-live-desktop-content"},i("div",{key:"a19a7b5bcf531f9f351b8ad6908c174d9c8c21a8",class:"live-shop-in-live-desktop-content-card"},this.items.length>0&&this.items.some((t=>t.show))?i("highlight-card",{items:this.items,onAddItem:this.handleAddItem}):i("custom-card",{customClass:"in-live-custom-style-desktop",cardTitle:"produtos a caminho...",cardDescription:"Em breve, teremos algo especial para você!"}))))}};j.style=I;const L=(t,e,o,r)=>{const s=[{name:"products",label:i("span",null,"Produtos",(e===null||e===void 0?void 0:e.some((t=>t.type==="product"&&t.show)))&&i("span",{class:"product-count"},e.filter((t=>t.type==="product"&&t.show)).length)),content:()=>(e===null||e===void 0?void 0:e.length)>0&&(e===null||e===void 0?void 0:e.some((t=>t.show)))?i("highlight-card",{items:e,onAddItem:o}):i("custom-card",{customClass:"in-live-custom-style-empty",cardTitle:"produtos a caminho...",cardDescription:"Em breve, teremos algo especial para você!"})}];if(r){s.push({name:"chat",label:"Chat",content:()=>i("live-video-chat",{videoId:t})})}return s};const S='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-in-live{display:flex;flex-direction:column;gap:32px}.live-shop-in-live .live-video-player{height:229px;border-radius:8px;overflow:hidden}.live-shop-in-live-options .in-live-custom-style .custom-card-content{width:100%}.live-shop-in-live-options .in-live-custom-style-empty{padding:40px;border:1px solid var(--menu-items);border-radius:8px}.live-shop-in-live-options .custom-card-content .live-video-chat{height:calc(100vh - 386px);border-radius:8px;overflow:hidden}';const D=S;const T=class{constructor(i){t(this,i);this.clickAdd=e(this,"on-click-add",7);this.handleAddItem=t=>{const e=t.detail;this.clickAdd.emit({item:e,liveShopData:this.liveShopData})};this.videoId=undefined;this.liveShopData=undefined;this.items=undefined}render(){return i("div",{key:"1abb54a525fa61685d562217ab00c6c0159cfadd",class:"live-shop-in-live"},i("div",{key:"3d664a342fb4617d18e5db88e8a49c3f2bfe3e0d",class:"live-shop-in-live-player"},i("live-video-player",{key:"14a3df758d6159a71e1f6cb01acfda6a991571b6",videoId:this.videoId,autoPlay:true})),i("div",{key:"ac70850384d726f4e139a54c6eb1f43c1474f8be",class:"live-shop-in-live-options"},i("custom-card",{key:"dee7d588370cbd6f9860107597ba2a9a7c219d4e",customClass:"in-live-custom-style",cardTitle:this.liveShopData.name},i("tab-selector",{key:"a122cdcccc5e6546e90498659b91e1a1f0af6768",tabs:L(this.videoId,this.items,this.handleAddItem,this.liveShopData.chatVisible)}))))}};T.style=D;const O='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.live-shop-not-found button{--btn-bg-color:var(--fc-color-primary);--btn-text-color:var(--fc-color-white);--btn-text-weight:var(--fc-m-fw, 600);--btn-text-size:var(--fc-m-fs);--btn-text-transform:var(--fc-m-tt, "uppercase");--btn-text-letter-spacing:var(--fc-m-ls, 1px);all:unset;box-sizing:border-box;width:100%;background-color:var(--btn-bg-color);color:var(--btn-text-color);font-weight:var(--btn-text-weight);font-size:var(--btn-text-size);padding:12px 24px;cursor:pointer;border-radius:var(--fc-border-radius);text-align:center;text-transform:var(--btn-text-transform);letter-spacing:var(--btn-text-letter-spacing);font-size:14px}.live-shop-not-found button:hover{opacity:0.75}.live-shop-not-found button:disabled{opacity:0.6;cursor:not-allowed}';const $=O;const R=class{constructor(i){t(this,i);this.returnToHome=e(this,"returnToHome",7);this.handleReturnToHome=()=>{this.returnToHome.emit()}}render(){return i(o,{key:"59dac1f6b8f36d4deb1c8dd2c0afc83267f34917"},i("div",{key:"241648e20ce99d694b61ec9dfd517ce3694781a5",class:"live-shop-not-found"},i("custom-card",{key:"20ab423c2133a82a6f825b5d088915bfc10fb296",cardTitle:"Ops, parece que essa live não existe mais!",cardDescription:"Fique de olho em nossas próximas lives para mais novidades e promoções imperdíveis!"},i("button",{key:"e25c35d961b6165aab4f88369108b5523dfb0217",onClick:this.handleReturnToHome},"Voltar para a página inicial"))))}};R.style=$;const P=":host{display:inline-block;width:100%}.live-video-chat{display:flex;justify-content:center;align-items:center;width:100%}.live-video-chat iframe{height:100%;width:100%}";const A=P;const E=class{constructor(i){t(this,i);this.componentRendered=e(this,"componentRendered",7);this.videoId=undefined}getChatUrl(){return`https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`}componentDidLoad(){this.componentRendered.emit()}render(){return i(o,{key:"4fca836fe08716a1c9670fab3600ff25c19ef5c2"},i("div",{key:"5cc11e1e12dbd71a6e87197fa39088cab475d441",class:"live-video-chat"},i("iframe",{key:"5dfae10c79c4737e7b0773f854b28a3e9db4a9fd",src:this.getChatUrl(),frameborder:"0",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:true})))}};E.style=A;const F=":host{display:inline-block;width:100%}.live-video-player{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.live-video-player iframe{height:100%;width:100%}";const W=F;const q=class{constructor(i){t(this,i);this.componentRendered=e(this,"componentRendered",7);this.videoId=undefined;this.autoPlay=false}getVideoUrl(){if(this.autoPlay)return`https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;return`https://www.youtube.com/embed/${this.videoId}`}componentDidLoad(){this.componentRendered.emit()}render(){return i(o,{key:"942dfcce61872c32a69c77e2af4292ba2b1f1742"},i("div",{key:"4f66fc6a07ee5cefaf1d28ab140248cb7c0436f8",class:"live-video-player"},i("iframe",{key:"1fe89746939e6849c7d99797f8e736d8f4df2156",src:this.getVideoUrl(),frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true})))}};q.style=W;const B=":host{display:inline-block;font-size:14px;width:100%}.product-container{display:flex;flex-direction:column;gap:var(--fc-gap-grid) 0;color:var(--fc-color-light-text-default)}.product-container.-inline{flex-direction:row;gap:var(--fc-gap-grid)}.product-container>.info{grid-area:info;display:flex;flex-direction:column;justify-content:center}.product-container>.info>.title{display:inline-block;margin-bottom:var(--fc-margin-width);font-weight:600}.product-container>.image{display:flex;align-self:center;max-width:400px;max-height:400px;justify-content:center}.product-container>.image.-inline{width:100px;height:100px;justify-content:center}";const H=B;const M=class{constructor(e){t(this,e);this.inline=false;this.customClass="";this.product=undefined;this.basePrice=undefined;this.paymentOptions=[]}getClassWithInline(t){const e={"-inline":this.inline};return`${t} ${p(e)} ${this.customClass}`}render(){var t,e,r,s,a;return i(o,{key:"991c60752ba0e7013f37edefe76d9a344e795174"},i("div",{key:"f45566a66eb378fb06d792b1a2e9b89ee9139e29",class:this.getClassWithInline("product-container")},i("front-image",{key:"3303b5b6eb1e3173b8fe6ac0fdaae7e0ec871153",class:this.getClassWithInline("image"),imageSrc:(e=(t=this.product)===null||t===void 0?void 0:t.image)===null||e===void 0?void 0:e.src,textAlt:((s=(r=this.product)===null||r===void 0?void 0:r.image)===null||s===void 0?void 0:s.alt)||"Imagem do produto"}),i("div",{key:"046364c46282e3b4692017714f8dc41064cc71a5",class:"info"},i("span",{key:"04e964be0d1f9b96300c7d6ca566b2d127f4d5f3",class:"title"},(a=this.product)===null||a===void 0?void 0:a.name),i("product-price",{key:"67254f9cba4545e0655793c8fc3ad354a99ab5ec",basePrice:this.basePrice,paymentOptions:this.paymentOptions}))))}};M.style=H;const N='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}';const V=N;const U=class{constructor(e){t(this,e);this.componentMap={simple:t=>i("product-price-simple",{price:t.price,priceCompare:t.priceCompare}),billet:t=>i("product-price-billet",{price:t.price,priceCompare:t.priceCompare}),creditCard:t=>i("product-price-credit-card",{price:t.price,priceCompare:t.priceCompare,parcels:t.parcels,parcelPrice:t.parcelPrice,hasInterest:t.hasInterest}),pix:t=>i("product-price-pix",{price:t.price,priceCompare:t.priceCompare})};this.basePrice=undefined;this.paymentOptions=undefined}renderPaymentOption(t){const e=this.componentMap[t.type]||this.componentMap.simple;return e(t)}render(){const t=this.paymentOptions||[];if(!t.length){return i(o,null,i("div",{class:"product-price-container"},this.componentMap.simple({type:"simple",price:this.basePrice.price,priceCompare:this.basePrice.priceCompare})))}return i(o,null,i("div",{class:"product-price-container"},t.map((t=>this.renderPaymentOption(t)))))}};U.style=V;const J='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}';const Z=J;const G=class{constructor(e){t(this,e);this.price=undefined;this.priceCompare=undefined}render(){const t=h(this.price);const e=this.priceCompare?h(this.priceCompare):null;return i("div",{key:"3d806266e456292d2e80d90d202d0b346d70a5d7",class:"payment-option payment-option-billet"},e&&i("span",{key:"15306ea65e7300bd71d1716ee91650e7fd384d86",class:"price-compare"},e),i("span",{key:"a0a662facb128ad70c1f404ab5c4d4f8152a421e",class:"price-current"},i("span",{key:"26a2d6933ffcb02f672ff76ea59269f4d4e8749d",class:"highlight"},t)," no boleto"))}};G.style=Z;const K='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}';const Q=K;const X=class{constructor(e){t(this,e);this.price=undefined;this.priceCompare=undefined;this.parcels=undefined;this.parcelPrice=undefined;this.hasInterest=undefined}render(){const t=h(this.price);const e=this.priceCompare?h(this.priceCompare):null;const o=this.parcelPrice?h(this.parcelPrice):null;const r=this.hasInterest?"com juros":"sem juros";return i("div",{key:"6a9a93ca0ee4bd214fbf382426540f7c2ca59626",class:"payment-option payment-option-creditCard"},e&&i("span",{key:"8b6f103b58d6790bad28e4c69e24e1628d576a1b",class:"price-compare"},e),i("span",{key:"cde6822719072a91a86e51610d21080cc9300830",class:"price-current"},i("span",{key:"401a7c4d306a06b5c70890dfa69eb0ba5a0043f8",class:"highlight"},t)," ",this.parcels&&this.parcelPrice&&i("span",{key:"41d7e71ff72b5b7c9a2c6abff671d0aac4738330",class:"credit-info"},"em até ",i("span",{key:"853a474d498507ac53106e5a3d597c77210fd264",class:"highlight"},this.parcels,"x")," de"," ",i("span",{key:"152aa9060d4cb070bc7d701beb472a8c100d1b4a",class:"highlight"},o)," ",r)))}};X.style=Q;const Y='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}';const tt=Y;const et=class{constructor(e){t(this,e);this.price=undefined;this.priceCompare=undefined}render(){const t=h(this.price);const e=this.priceCompare?h(this.priceCompare):null;return i("div",{key:"b006be8ee807e4f9bee0d339e34268b954618859",class:"payment-option payment-option-pix"},e&&i("span",{key:"98b9122feb3233e4dc85c6105b371e391be1c613",class:"price-compare"},e),i("span",{key:"7e00bf224ba92e7a35793c37d2a998ffc116479e",class:"price-current"},i("span",{key:"3eb8ed1f95172c3ef46a28e85a235581d73f9d81",class:"highlight"},t)," no pix"))}};et.style=tt;const it='*{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}:host{display:inline-block;width:100%}.product-price-container{display:flex;flex-direction:column;gap:8px}.payment-option{font-size:14px}.payment-option .price-compare{text-decoration:line-through;color:var(--fc-color-light-text-secondary)}.payment-option .price-current .highlight{font-weight:bold}.payment-option-simple,.payment-option-billet,.payment-option-pix{display:flex;flex-direction:column}.payment-option-simple .highlight,.payment-option-billet .highlight,.payment-option-pix .highlight{font-size:16px}.payment-option-creditCard{display:flex;flex-direction:column}';const ot=it;const rt=class{constructor(e){t(this,e);this.price=undefined;this.priceCompare=undefined}render(){const t=h(this.price);const e=this.priceCompare?h(this.priceCompare):null;return i("div",{key:"b87b05ebb6330b579e6e3c7703ac37ae0a74e18d",class:"payment-option payment-option-simple"},e&&i("span",{key:"2d5b7c07df8ca631ecd019078adf5dc1f2fefb6a",class:"price-compare"},e),i("span",{key:"f0f6d020e0a626758c11cfbc22ef31336041c8ba",class:"price-current"},i("span",{key:"469a3d1d4e88517d51169d650a9e5b6a351f904b",class:"highlight"},t)))}};rt.style=ot;const st='.tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}';const at=st;const ct=class{constructor(e){t(this,e);this.tabs=undefined;this.activeTab=undefined}handleTabClick(t){this.activeTab=t}componentWillLoad(){var t;if(((t=this.tabs)===null||t===void 0?void 0:t.length)>0)this.activeTab=this.tabs[0].name}render(){var t,e;return i("div",{key:"f99808007d9c6fc6b8d57f1281e09be382783158",class:"tab-selector"},i("div",{key:"95c9b04f8af831220247bfe240d81d7da1ed7270",class:"tab-selector-tabs"},(t=this.tabs)===null||t===void 0?void 0:t.map((t=>i("span",{class:{active:this.activeTab===t.name},onClick:()=>this.handleTabClick(t.name)},t.label)))),i("div",{key:"cb253ee08a5e27a94e6d8df1521363b1d84b6634",class:"tab-selector-tabs-content"},(e=this.tabs)===null||e===void 0?void 0:e.map((t=>i("div",{class:{"tab-selector-tabs-content-item":true,active:this.activeTab===t.name}},this.activeTab===t.name&&t.content())))))}};ct.style=at;export{d as custom_card,g as front_image,y as highlight_card,z as live_shop,j as live_shop_desktop,T as live_shop_mobile,R as live_shop_not_found,E as live_video_chat,q as live_video_player,M as product_card,U as product_price,G as product_price_billet,X as product_price_credit_card,et as product_price_pix,rt as product_price_simple,ct as tab_selector};
//# sourceMappingURL=p-3bf9f423.entry.js.map