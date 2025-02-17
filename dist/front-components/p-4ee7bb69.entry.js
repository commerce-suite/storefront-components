import{r as t,c as i,h as e,H as a}from"./p-040ae869.js";const r=":host{display:inline-block;width:100%}.highlight-card{display:flex;flex-direction:column;gap:16px}.highlight-card-container{border:1px solid var(--menu-items);border-radius:8px}.highlight-card-header{background-color:var(--color-secondary);padding:10px;text-align:center;font-weight:bold;border-top-left-radius:7px;border-top-right-radius:7px}.highlight-card-header-title{font-family:var(--h1-ff);text-transform:uppercase;color:var(--white)}.highlight-card-item{border:1px solid #d5d5d5;border-radius:8px}.highlight-card-item-highlighted{border:none;border-radius:0}.highlight-card-message{display:flex;flex-direction:column;padding:24px;gap:2px;word-break:break-word}.highlight-card-message-title,.highlight-card-message-content{margin:0;font-size:14px}.highlight-card-message-title{font-weight:600}.highlight-card-separator{height:1px;background-color:var(--menu-items)}.highlight-card-product{display:flex;align-items:center;justify-content:space-between}.highlight-card-product:hover{cursor:pointer}.highlight-card-product:hover .highlight-card-product-cart-action a{text-decoration:underline var(--fc-color-primary) 1px solid !important}.highlight-card-product-cart-action{padding:24px;font-weight:bold}.highlight-card .highlight-custom-style.product-container{display:flex;gap:12px;padding:24px}.highlight-card .highlight-custom-style.product-container>.info>.title{word-break:break-all}.highlight-card .highlight-custom-style.product-container>.info>.price{display:flex;flex-direction:row;gap:8px;align-items:center}.highlight-card .highlight-custom-style.product-container>.info>.price>.base,.highlight-card .highlight-custom-style.product-container>.info>.price .current{font-weight:400;font-size:14px}.highlight-card .highlight-custom-style.product-container>.image{height:48px;width:48px;border:1px solid #dee2e6;border-radius:4px;flex-shrink:0}.highlight-card .highlight-custom-style.product-container>.image>.image-container>img{border-radius:3px}.highlight-card .highlight-custom-style.product-container>.image .image-container.-is-loading{min-width:48px;min-height:48px}";const c=r;const o=class{constructor(e){t(this,e);this.addItem=i(this,"addItem",7);this.componentRendered=i(this,"componentRendered",7);this.items=[];this.highlightedItems=[];this.nonHighlightedItems=[]}renderItem(t,i){if(!t.show)return null;return e("div",{class:`highlight-card-item ${i?"highlight-card-item-highlighted":""}`},t.type==="message"&&e("div",{class:"highlight-card-message"},e("h4",{class:"highlight-card-message-title"},t.title),e("p",{class:"highlight-card-message-content"},t.content)),t.type==="product"&&e("div",{class:"highlight-card-product",onClick:()=>this.addItem.emit(t)},e("product-card",{"custom-class":"highlight-custom-style",product:t,basePrice:{price:t.price,priceCompare:t.priceBase},showStartingFrom:t.showStartingFrom,inline:true}),e("div",{class:"highlight-card-product-cart-action"},e("a",null,"Ver produto"))))}filterItems(t){const i=t.filter((t=>t.show));this.highlightedItems=i.filter((t=>t.highlight));this.nonHighlightedItems=i.filter((t=>!t.highlight))}componentDidLoad(){this.componentRendered.emit()}componentWillLoad(){this.filterItems(this.items)}handleItemsChange(t){this.filterItems(t)}render(){return e(a,{key:"dbedc562911a2aa0de8c549ca6e624384462bb43"},e("div",{key:"0e906d70f4a33ce8a4fa68a0e5f24788aeaf4dd2",class:"highlight-card"},this.highlightedItems.length>0&&e("div",{key:"ff07e4f52e37658cc0a01f84da9b867a061bd595",class:"highlight-card-container"},e("div",{key:"31f09f1551c076a0b96befa406615f3dff4f9f13",class:"highlight-card-header"},e("span",{key:"f2726974bf3aa3b4c980dd46badd979a2ee0f342",class:"highlight-card-header-title"},"Destaque")),this.highlightedItems.map(((t,i)=>e("div",null,this.renderItem(t,true),i<this.highlightedItems.length-1&&e("div",{class:"highlight-card-separator"}))))),this.nonHighlightedItems.map((t=>this.renderItem(t,false)))))}static get watchers(){return{items:["handleItemsChange"]}}};o.style=c;const s=":host{display:inline-block;width:100%}.live-video-chat{display:flex;justify-content:center;align-items:center;width:100%}.live-video-chat iframe{height:100%;width:100%}";const h=s;const d=class{constructor(e){t(this,e);this.componentRendered=i(this,"componentRendered",7);this.videoId=undefined}getChatUrl(){return`https://www.youtube.com/live_chat?v=${this.videoId}&embed_domain=${window.location.hostname}`}componentDidLoad(){this.componentRendered.emit()}render(){return e(a,{key:"b375119df95c68b42627497709d997d831b81eaf"},e("div",{key:"8baf88559c9114a168fd079463fbd26add1e7235",class:"live-video-chat"},e("iframe",{key:"9733e87680f2c629d56a6746815a180647806aaa",src:this.getChatUrl(),frameborder:"0",allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:true})))}};d.style=h;const l='.tab-selector-tabs{position:relative;display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:24px;border-bottom:1px solid #c2cfde;padding:0 8px}.tab-selector-tabs span{font-weight:500;font-size:14px;cursor:pointer;padding:8px 16px;position:relative;width:100%;text-align:center}.tab-selector-tabs span::after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background-color:transparent;transition:background-color 0.3s}.tab-selector-tabs span.active{color:var(--color-secondary)}.tab-selector-tabs span.active::after{background-color:var(--color-secondary)}.tab-selector-tabs .product-count{padding:0 4px;border-radius:4px;background-color:#f5f7fa;color:var(--color-primary);font-size:12px}.tab-selector-tabs-content-item{display:none}.tab-selector-tabs-content-item.active{display:block}';const n=l;const g=class{constructor(i){t(this,i);this.tabs=undefined;this.activeTab=undefined}handleTabClick(t){this.activeTab=t}componentWillLoad(){var t;if(((t=this.tabs)===null||t===void 0?void 0:t.length)>0)this.activeTab=this.tabs[0].name}render(){var t,i;return e("div",{key:"aa7e377b4bacdb6aac7a108a3eb56b4ea1a1ff59",class:"tab-selector"},e("div",{key:"a624968d01bcc64975bf5fb3dae9cfb16bede933",class:"tab-selector-tabs"},(t=this.tabs)===null||t===void 0?void 0:t.map((t=>e("span",{class:{active:this.activeTab===t.name},onClick:()=>this.handleTabClick(t.name)},t.label)))),e("div",{key:"4d0cb9491abff1bb74702b0ef67654e794a96056",class:"tab-selector-tabs-content"},(i=this.tabs)===null||i===void 0?void 0:i.map((t=>e("div",{class:{"tab-selector-tabs-content-item":true,active:this.activeTab===t.name}},this.activeTab===t.name&&t.content())))))}};g.style=n;export{o as highlight_card,d as live_video_chat,g as tab_selector};
//# sourceMappingURL=p-4ee7bb69.entry.js.map