import{B as t,A as r}from"./p-38c1f26e.js";var e=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};var n=Array.isArray;var i=n;var a=typeof e=="object"&&e&&e.Object===Object&&e;var o=a;var u=o;var s=typeof self=="object"&&self&&self.Object===Object&&self;var c=u||s||Function("return this")();var l=c;var v=l;var d=v.Symbol;var f=d;var h=f;var b=Object.prototype;var p=b.hasOwnProperty;var y=b.toString;var O=h?h.toStringTag:undefined;function j(t){var r=p.call(t,O),e=t[O];try{t[O]=undefined;var n=true}catch(t){}var i=y.call(t);if(n){if(r){t[O]=e}else{delete t[O]}}return i}var m=j;var g=Object.prototype;var S=g.toString;function w(t){return S.call(t)}var C=w;var A=f,k=m,P=C;var D="[object Null]",F="[object Undefined]";var T=A?A.toStringTag:undefined;function _(t){if(t==null){return t===undefined?F:D}return T&&T in Object(t)?k(t):P(t)}var B=_;function N(t){return t!=null&&typeof t=="object"}var $=N;var V=B,x=$;var I="[object Symbol]";function U(t){return typeof t=="symbol"||x(t)&&V(t)==I}var q=U;var M=i,R=q;var E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/;function X(t,r){if(M(t)){return false}var e=typeof t;if(e=="number"||e=="symbol"||e=="boolean"||t==null||R(t)){return true}return J.test(t)||!E.test(t)||r!=null&&t in Object(r)}var G=X;function H(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var L=H;var W=B,Z=L;var z="[object AsyncFunction]",K="[object Function]",Q="[object GeneratorFunction]",Y="[object Proxy]";function tt(t){if(!Z(t)){return false}var r=W(t);return r==K||r==Q||r==z||r==Y}var rt=tt;var et=l;var nt=et["__core-js_shared__"];var it=nt;var at=it;var ot=function(){var t=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ut(t){return!!ot&&ot in t}var st=ut;var ct=Function.prototype;var lt=ct.toString;function vt(t){if(t!=null){try{return lt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var dt=vt;var ft=rt,ht=st,bt=L,pt=dt;var yt=/[\\^$.*+?()[\]{}|]/g;var Ot=/^\[object .+?Constructor\]$/;var jt=Function.prototype,mt=Object.prototype;var gt=jt.toString;var St=mt.hasOwnProperty;var wt=RegExp("^"+gt.call(St).replace(yt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ct(t){if(!bt(t)||ht(t)){return false}var r=ft(t)?wt:Ot;return r.test(pt(t))}var At=Ct;function kt(t,r){return t==null?undefined:t[r]}var Pt=kt;var Dt=At,Ft=Pt;function Tt(t,r){var e=Ft(t,r);return Dt(e)?e:undefined}var _t=Tt;var Bt=_t;var Nt=Bt(Object,"create");var $t=Nt;var Vt=$t;function xt(){this.__data__=Vt?Vt(null):{};this.size=0}var It=xt;function Ut(t){var r=this.has(t)&&delete this.__data__[t];this.size-=r?1:0;return r}var qt=Ut;var Mt=$t;var Rt="__lodash_hash_undefined__";var Et=Object.prototype;var Jt=Et.hasOwnProperty;function Xt(t){var r=this.__data__;if(Mt){var e=r[t];return e===Rt?undefined:e}return Jt.call(r,t)?r[t]:undefined}var Gt=Xt;var Ht=$t;var Lt=Object.prototype;var Wt=Lt.hasOwnProperty;function Zt(t){var r=this.__data__;return Ht?r[t]!==undefined:Wt.call(r,t)}var zt=Zt;var Kt=$t;var Qt="__lodash_hash_undefined__";function Yt(t,r){var e=this.__data__;this.size+=this.has(t)?0:1;e[t]=Kt&&r===undefined?Qt:r;return this}var tr=Yt;var rr=It,er=qt,nr=Gt,ir=zt,ar=tr;function or(t){var r=-1,e=t==null?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}or.prototype.clear=rr;or.prototype["delete"]=er;or.prototype.get=nr;or.prototype.has=ir;or.prototype.set=ar;var ur=or;function sr(){this.__data__=[];this.size=0}var cr=sr;function lr(t,r){return t===r||t!==t&&r!==r}var vr=lr;var dr=vr;function fr(t,r){var e=t.length;while(e--){if(dr(t[e][0],r)){return e}}return-1}var hr=fr;var br=hr;var pr=Array.prototype;var yr=pr.splice;function Or(t){var r=this.__data__,e=br(r,t);if(e<0){return false}var n=r.length-1;if(e==n){r.pop()}else{yr.call(r,e,1)}--this.size;return true}var jr=Or;var mr=hr;function gr(t){var r=this.__data__,e=mr(r,t);return e<0?undefined:r[e][1]}var Sr=gr;var wr=hr;function Cr(t){return wr(this.__data__,t)>-1}var Ar=Cr;var kr=hr;function Pr(t,r){var e=this.__data__,n=kr(e,t);if(n<0){++this.size;e.push([t,r])}else{e[n][1]=r}return this}var Dr=Pr;var Fr=cr,Tr=jr,_r=Sr,Br=Ar,Nr=Dr;function $r(t){var r=-1,e=t==null?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}$r.prototype.clear=Fr;$r.prototype["delete"]=Tr;$r.prototype.get=_r;$r.prototype.has=Br;$r.prototype.set=Nr;var Vr=$r;var xr=_t,Ir=l;var Ur=xr(Ir,"Map");var qr=Ur;var Mr=ur,Rr=Vr,Er=qr;function Jr(){this.size=0;this.__data__={hash:new Mr,map:new(Er||Rr),string:new Mr}}var Xr=Jr;function Gr(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}var Hr=Gr;var Lr=Hr;function Wr(t,r){var e=t.__data__;return Lr(r)?e[typeof r=="string"?"string":"hash"]:e.map}var Zr=Wr;var zr=Zr;function Kr(t){var r=zr(this,t)["delete"](t);this.size-=r?1:0;return r}var Qr=Kr;var Yr=Zr;function te(t){return Yr(this,t).get(t)}var re=te;var ee=Zr;function ne(t){return ee(this,t).has(t)}var ie=ne;var ae=Zr;function oe(t,r){var e=ae(this,t),n=e.size;e.set(t,r);this.size+=e.size==n?0:1;return this}var ue=oe;var se=Xr,ce=Qr,le=re,ve=ie,de=ue;function fe(t){var r=-1,e=t==null?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}fe.prototype.clear=se;fe.prototype["delete"]=ce;fe.prototype.get=le;fe.prototype.has=ve;fe.prototype.set=de;var he=fe;var be=he;var pe="Expected a function";function ye(t,r){if(typeof t!="function"||r!=null&&typeof r!="function"){throw new TypeError(pe)}var e=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=e.cache;if(a.has(i)){return a.get(i)}var o=t.apply(this,n);e.cache=a.set(i,o)||a;return o};e.cache=new(ye.Cache||be);return e}ye.Cache=be;var Oe=ye;var je=Oe;var me=500;function ge(t){var r=je(t,(function(t){if(e.size===me){e.clear()}return t}));var e=r.cache;return r}var Se=ge;var we=Se;var Ce=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var Ae=/\\(\\)?/g;var ke=we((function(t){var r=[];if(t.charCodeAt(0)===46){r.push("")}t.replace(Ce,(function(t,e,n,i){r.push(n?i.replace(Ae,"$1"):e||t)}));return r}));var Pe=ke;function De(t,r){var e=-1,n=t==null?0:t.length,i=Array(n);while(++e<n){i[e]=r(t[e],e,t)}return i}var Fe=De;var Te=f,_e=Fe,Be=i,Ne=q;var $e=1/0;var Ve=Te?Te.prototype:undefined,xe=Ve?Ve.toString:undefined;function Ie(t){if(typeof t=="string"){return t}if(Be(t)){return _e(t,Ie)+""}if(Ne(t)){return xe?xe.call(t):""}var r=t+"";return r=="0"&&1/t==-$e?"-0":r}var Ue=Ie;var qe=Ue;function Me(t){return t==null?"":qe(t)}var Re=Me;var Ee=i,Je=G,Xe=Pe,Ge=Re;function He(t,r){if(Ee(t)){return t}return Je(t,r)?[t]:Xe(Ge(t))}var Le=He;var We=q;var Ze=1/0;function ze(t){if(typeof t=="string"||We(t)){return t}var r=t+"";return r=="0"&&1/t==-Ze?"-0":r}var Ke=ze;var Qe=Le,Ye=Ke;function tn(t,r){r=Qe(r,t);var e=0,n=r.length;while(t!=null&&e<n){t=t[Ye(r[e++])]}return e&&e==n?t:undefined}var rn=tn;var en=rn;function nn(t,r,e){var n=t==null?undefined:en(t,r);return n===undefined?e:n}var an=nn;const on=t=>{const{releaseDate:r}=t||{};if(!r)return true;const{now:e,releaseDate:n}=r;return Number(e)>=Number(n)};const un=t=>{const{balance:r,isSellOutOfStock:e}=t||{};return!!r&&r>0||e};const sn=t=>{const{price:r}=t||{};return r&&!!Number(r)};class cn{static adapterIBuyTogetherToComponentData(t,r,e=false){this.isFirstLoad=e;const n={productMain:this.adapterToProductCard(t.product,r),products:t.productsPivot.map((t=>this.adapterPivotToProductCard(t,r))),originalData:t};this.isFirstLoad=false;return n}static adapterPivotToProductCard(t,r){return Object.assign(Object.assign({},this.adapterToProductCard(t,r)),{isCheck:true})}static adapterToProductCard(t,r){var e;const{price:n,priceCompare:i,id:a}=this.getValuesByVariation(t);return{price:n,priceBase:i,id:a,productId:t.productId,image:((e=t.images)===null||e===void 0?void 0:e.length)?t.images[0]:{src:""},name:t.name,slug:t.slug,selectVariations:this.adapterAttributes(t),paymentOptions:this.adaptPaymentOptions(t,r)}}static adaptPaymentOptions(t,r){const e={};t.payments.forEach((t=>{if(!e[t.method]){e[t.method]=t}}));const n=Object.values(e);const i=r.every((t=>!t.active));if(i)return this.adaptSimplePayment(t);const a={creditcard:(t,r,e)=>this.adaptCreditCardPayment(t,r,e),billet:t=>this.adaptPayment(t,"billet"),pix:t=>this.adaptPayment(t,"pix")};const o=t=>t.active;const u=(t,r)=>t.position-r.position;return r.filter(o).sort(u).map((r=>{const e=n.find((t=>t.method===r.method));if(!e)return null;const i=a[r.method];return i?i(t,r,e):null})).filter(Boolean)}static getValuesByVariation(t){const{attribute:r,attributeSecondary:e,color:n}=t;const i={"attribute.id":r===null||r===void 0?void 0:r.id,"attributeSecondary.id":e===null||e===void 0?void 0:e.id,"color.id":n===null||n===void 0?void 0:n.id};const a=this.filterVariations(t.variations,i);return a[0]||t}static adapterAttributes(t){const r=this.generateSelectColors(t);const e=this.generateSelectAttributes(t);const n=this.generateSelectAttributesSecondary(t);return[r,e,n].filter((t=>!!t))}static generateSelectAttributes(t){var r,e;const{color:n,attributeSecondary:i,isSellOutOfStock:a}=t;const o={"color.id":n===null||n===void 0?void 0:n.id,"attributeSecondary.id":i===null||i===void 0?void 0:i.id};const u=t.color?this.filterVariations(t.variations,o,"attribute"):t.variations;const s=this.filterAttributesByUnique(u,"attribute");if(!s.length)return null;return{placeholder:this.placeholderDisabled,label:(r=t.attribute)===null||r===void 0?void 0:r.attributeName,options:s.map((({balance:t,id:r,name:e,releaseDate:n})=>({name:e,value:r,disabled:this.checkAttributeOptionDisabled({balance:t,releaseDate:n,isSellOutOfStock:a})}))),selectType:"attributes",currentValue:this.isFirstLoad?undefined:(e=t.attribute)===null||e===void 0?void 0:e.id}}static generateSelectAttributesSecondary(t){var r,e;const{color:n,attribute:i,isSellOutOfStock:a}=t;const o={"color.id":n===null||n===void 0?void 0:n.id,"attribute.id":i===null||i===void 0?void 0:i.id};const u=this.filterAttributesByUnique(this.filterVariations(t.variations,o,"attributeSecondary"),"attributeSecondary");if(!u.length)return null;return{placeholder:this.placeholderDisabled,label:(r=t.attributeSecondary)===null||r===void 0?void 0:r.attributeName,options:u.map((({name:t,balance:r,id:e,releaseDate:n})=>({value:e,name:t,disabled:this.checkAttributeOptionDisabled({balance:r,releaseDate:n,isSellOutOfStock:a})}))),selectType:"secondaryAttributes",currentValue:this.isFirstLoad?undefined:(e=t.attributeSecondary)===null||e===void 0?void 0:e.id}}static generateSelectColors(t){var r;const e=this.filterAttributesByUnique(t.variations,"color");if(!(e===null||e===void 0?void 0:e.length))return null;return{label:"Cor",placeholder:this.placeholderDisabled,options:e===null||e===void 0?void 0:e.map((({balance:t,id:r,name:e,releaseDate:n,isSellOutOfStock:i})=>({name:e,value:r,disabled:this.checkAttributeOptionDisabled({balance:t,releaseDate:n,isSellOutOfStock:i})}))),currentValue:(r=t.color)===null||r===void 0?void 0:r.id,selectType:"color"}}static filterVariations(t,r,e){const n=Object.keys(r);return t.filter((t=>{const i=!e||!!t[e];if(!i)return false;return n.reduce(((e,n)=>{const i=r[n];const a=an(t,n);return e&&a===i}),true)}))}static filterAttributesByUnique(t,r){return t.filter((t=>!!t[r])).reduce(((t,e)=>{const n=e[r];const i=t.findIndex((t=>t.id===n.id));if(i===-1)return[...t,Object.assign(Object.assign({},n),{balance:e.balance,releaseDate:e.releaseDate,isSellOutOfStock:e.isSellOutOfStock})];return t}),[])}static checkAttributeOptionDisabled(t){const{balance:r,releaseDate:e,isSellOutOfStock:n}=t;return!un({balance:r,isSellOutOfStock:n})||!on({releaseDate:e})}static getInstallmentsWithoutInterest(t){return t.filter((t=>t.markup<=1))}static adaptCreditCardPayment(t,r,e){const n=this.getInstallmentsWithoutInterest(e.installments);const i=e.installments;const a=r.parcels_no_interest?n:i;const o=a[a.length-1];return{type:"creditCard",price:Number(o===null||o===void 0?void 0:o.total)||0,priceCompare:t.priceCompare,parcels:a.length,parcelPrice:Number(o===null||o===void 0?void 0:o.parcelPrice)||0,hasInterest:!r.parcels_no_interest}}static adaptPayment(t,r){const e=t.payments.find((t=>t.method===r));return{type:r,price:Number((e===null||e===void 0?void 0:e.installment.total)||0),priceCompare:t.priceCompare}}static adaptSimplePayment(t){return[{type:"simple",price:t.price,priceCompare:t.priceCompare}]}}cn.isFirstLoad=false;cn.placeholderDisabled={name:"Selecione",disabled:true,value:undefined};class ln{constructor(t){this.response=t}adapterToComponentData(t){var r,e;const n=this.response&&((e=(r=this.response)===null||r===void 0?void 0:r.productsPivot)===null||e===void 0?void 0:e.length)>0;this.componentData=n?cn.adapterIBuyTogetherToComponentData(this.response,t,true):null;return this}changeByVariationSelected(t){var r,e;if(!t)return this;const n=(r=this.response.product.variations)===null||r===void 0?void 0:r.find((({id:r})=>Number(r)===t));if(!n)return this;if((n===null||n===void 0?void 0:n.balance)>0){this.response.product=Object.assign(Object.assign({},n),{variations:this.response.product.variations})}const i=(e=this.response.product.variations)===null||e===void 0?void 0:e.find((({balance:t,color:r,isSellOutOfStock:e})=>{if(n.color){return n.color.id===r.id&&(t>0||e)}return t>0||e}));this.response.product=Object.assign(Object.assign({},i),{variations:this.response.product.variations});return this}get getComponentData(){return this.componentData}get getResponse(){return this.response}}class vn extends ln{constructor(){super(...arguments);this.filterRules=[{key:"balance",isActive:true,applyFn:this.filterByBalance.bind(this),checkFn:un},{key:"priceless",isActive:true,applyFn:this.filterByZeroPrice.bind(this),checkFn:sn},{key:"releaseDate",isActive:true,applyFn:this.filterByReleaseDate.bind(this),checkFn:on}]}applyFilters(t){if(t){this.filterRules=this.filterRules.map((r=>{const e=t.find((({key:t})=>t===r.key));if(!e)return r;return Object.assign(Object.assign(Object.assign({},r),e),{applyFn:e.applyFn?e.applyFn.bind(this):r.applyFn})}))}this.filterRules.filter((({isActive:t})=>t)).forEach((({applyFn:t})=>{t()}));this.applyFilterVariations();return this}filterByZeroPrice(){const t=!sn(this.response.product);if(!this.response||t){this.response=null}}filterByBalance(){var t,r;const e=!un((t=this.response)===null||t===void 0?void 0:t.product);const n=!((r=this.response)===null||r===void 0?void 0:r.product.variations.some(un));const i=e||n;if(!this.response||i){this.response=null}}filterByReleaseDate(){var t;const r=!on((t=this.response)===null||t===void 0?void 0:t.product);if(!this.response||r){this.response=null}}applyFilterVariations(){if(!this.response)return;const t=this.filterRules.filter((({isActive:t})=>t)).map((({checkFn:t})=>t));this.response.productsPivot=this.response.productsPivot.filter((({variations:r})=>this.filterVariations(r,t)))}filterVariations(t,r){return t.filter((t=>{const e=r.map((r=>r(t)));const n=e.reduce(((t,r)=>t&&r),true);return n})).length!==0}}class dn{constructor(){this.loadBuyTogetherPaymentConfig()}async loadBuyTogetherPaymentConfig(){const t=await this.getBuyTogetherAppContent();this.buyTogetherPaymentConfig=(t===null||t===void 0?void 0:t.payments)||[]}filterOutOriginalProducts(t,r){return t.filter((t=>!r.includes(+t.productId)))}getUniqueProducts(t){const r=new Map;for(const e of t){if(!r.has(e.id)){r.set(e.id,e)}}return Array.from(r.values())}async getBuyTogetherByProductId(r,e){const n=await t.getByProductIdWithValidPromotionDate(r);if(!n)return null;const i=new vn(n);return i.changeByVariationSelected(e).applyFilters().adapterToComponentData(this.buyTogetherPaymentConfig).getComponentData}async getOnlyPivotProducts(r){const e=await t.getByProductIds(r);const n=e.flatMap((t=>{const r=new ln(t).adapterToComponentData(this.buyTogetherPaymentConfig);return r.getComponentData.products}));const i=this.filterOutOriginalProducts(n,r);const a=this.getUniqueProducts(i);return a}changeProductOptions(t,r){switch(t.eventSelectType){case"color":return this.changeColor(t.value,r);case"attributes":return this.changeAttribute(t.value,r);case"secondaryAttributes":return this.changeAttributeSecondary(t.value,r);default:return null}}changeColor(t,r){const e=r.variations.find((({color:r})=>(r===null||r===void 0?void 0:r.id)===Number(t)));const n=cn.getValuesByVariation(Object.assign(Object.assign({},r),{color:e.color}));const i=Object.assign(Object.assign({},n),{variations:r.variations});const a=cn.adapterToProductCard(i,this.buyTogetherPaymentConfig);return{productTargetUpdated:i,productCard:a}}changeAttribute(t,r){const e=r.variations.find((({attribute:r})=>(r===null||r===void 0?void 0:r.id)===Number(t)));const n=cn.getValuesByVariation(Object.assign(Object.assign({},r),{attribute:(e===null||e===void 0?void 0:e.attribute)||r.attribute}));const i=Object.assign(Object.assign({},n||r),{variations:r.variations});const a=cn.adapterToProductCard(i,this.buyTogetherPaymentConfig);return{productTargetUpdated:i,productCard:a}}changeAttributeSecondary(t,r){const e=r.variations.find((({attributeSecondary:r})=>(r===null||r===void 0?void 0:r.id)===Number(t)));const n=cn.getValuesByVariation(Object.assign(Object.assign({},r),{attributeSecondary:e.attributeSecondary}));const i=Object.assign(Object.assign({},n),{variations:r.variations});const a=cn.adapterToProductCard(i,this.buyTogetherPaymentConfig);return{productTargetUpdated:i,productCard:a}}async addToCart(t){return new Promise(((r,e)=>{const n=window.dooca.base_url;const i="/action/cart/add";const a=new FormData;const o=t.map((t=>({variation_id:t,quantity:1})));a.append("items",JSON.stringify(o));const u=new XMLHttpRequest;u.open("POST",`${n}${i}`,true);u.setRequestHeader("X-Ajax","true");u.onload=function(){if(u.status>=200&&u.status<300){r(u.responseText)}else{e(u.status)}};u.send(a)}))}async getBuyTogetherAppContent(){try{const t=await r.getBySlug("buy-together");if(t===null||t===void 0?void 0:t.content)return JSON.parse(t.content);return null}catch(t){console.error(t);return null}}}export{dn as F};
//# sourceMappingURL=p-8f7008e9.js.map