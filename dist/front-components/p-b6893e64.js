import{B as t}from"./p-61f66f15.js";var r=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};var e=Array.isArray;var n=e;var i=typeof r=="object"&&r&&r.Object===Object&&r;var a=i;var o=a;var u=typeof self=="object"&&self&&self.Object===Object&&self;var s=o||u||Function("return this")();var c=s;var l=c;var v=l.Symbol;var d=v;var f=d;var h=Object.prototype;var b=h.hasOwnProperty;var p=h.toString;var y=f?f.toStringTag:undefined;function O(t){var r=b.call(t,y),e=t[y];try{t[y]=undefined;var n=true}catch(t){}var i=p.call(t);if(n){if(r){t[y]=e}else{delete t[y]}}return i}var j=O;var g=Object.prototype;var S=g.toString;function m(t){return S.call(t)}var w=m;var A=d,D=j,F=w;var k="[object Null]",_="[object Undefined]";var T=A?A.toStringTag:undefined;function C(t){if(t==null){return t===undefined?_:k}return T&&T in Object(t)?D(t):F(t)}var B=C;function P(t){return t!=null&&typeof t=="object"}var $=P;var V=B,N=$;var x="[object Symbol]";function U(t){return typeof t=="symbol"||N(t)&&V(t)==x}var R=U;var q=n,E=R;var I=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/;function X(t,r){if(q(t)){return false}var e=typeof t;if(e=="number"||e=="symbol"||e=="boolean"||t==null||E(t)){return true}return M.test(t)||!I.test(t)||r!=null&&t in Object(r)}var G=X;function H(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var J=H;var L=B,Z=J;var z="[object AsyncFunction]",K="[object Function]",Q="[object GeneratorFunction]",W="[object Proxy]";function Y(t){if(!Z(t)){return false}var r=L(t);return r==K||r==Q||r==z||r==W}var tt=Y;var rt=c;var et=rt["__core-js_shared__"];var nt=et;var it=nt;var at=function(){var t=/[^.]+$/.exec(it&&it.keys&&it.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function ot(t){return!!at&&at in t}var ut=ot;var st=Function.prototype;var ct=st.toString;function lt(t){if(t!=null){try{return ct.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var vt=lt;var dt=tt,ft=ut,ht=J,bt=vt;var pt=/[\\^$.*+?()[\]{}|]/g;var yt=/^\[object .+?Constructor\]$/;var Ot=Function.prototype,jt=Object.prototype;var gt=Ot.toString;var St=jt.hasOwnProperty;var mt=RegExp("^"+gt.call(St).replace(pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wt(t){if(!ht(t)||ft(t)){return false}var r=dt(t)?mt:yt;return r.test(bt(t))}var At=wt;function Dt(t,r){return t==null?undefined:t[r]}var Ft=Dt;var kt=At,_t=Ft;function Tt(t,r){var e=_t(t,r);return kt(e)?e:undefined}var Ct=Tt;var Bt=Ct;var Pt=Bt(Object,"create");var $t=Pt;var Vt=$t;function Nt(){this.__data__=Vt?Vt(null):{};this.size=0}var xt=Nt;function Ut(t){var r=this.has(t)&&delete this.__data__[t];this.size-=r?1:0;return r}var Rt=Ut;var qt=$t;var Et="__lodash_hash_undefined__";var It=Object.prototype;var Mt=It.hasOwnProperty;function Xt(t){var r=this.__data__;if(qt){var e=r[t];return e===Et?undefined:e}return Mt.call(r,t)?r[t]:undefined}var Gt=Xt;var Ht=$t;var Jt=Object.prototype;var Lt=Jt.hasOwnProperty;function Zt(t){var r=this.__data__;return Ht?r[t]!==undefined:Lt.call(r,t)}var zt=Zt;var Kt=$t;var Qt="__lodash_hash_undefined__";function Wt(t,r){var e=this.__data__;this.size+=this.has(t)?0:1;e[t]=Kt&&r===undefined?Qt:r;return this}var Yt=Wt;var tr=xt,rr=Rt,er=Gt,nr=zt,ir=Yt;function ar(t){var r=-1,e=t==null?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}ar.prototype.clear=tr;ar.prototype["delete"]=rr;ar.prototype.get=er;ar.prototype.has=nr;ar.prototype.set=ir;var or=ar;function ur(){this.__data__=[];this.size=0}var sr=ur;function cr(t,r){return t===r||t!==t&&r!==r}var lr=cr;var vr=lr;function dr(t,r){var e=t.length;while(e--){if(vr(t[e][0],r)){return e}}return-1}var fr=dr;var hr=fr;var br=Array.prototype;var pr=br.splice;function yr(t){var r=this.__data__,e=hr(r,t);if(e<0){return false}var n=r.length-1;if(e==n){r.pop()}else{pr.call(r,e,1)}--this.size;return true}var Or=yr;var jr=fr;function gr(t){var r=this.__data__,e=jr(r,t);return e<0?undefined:r[e][1]}var Sr=gr;var mr=fr;function wr(t){return mr(this.__data__,t)>-1}var Ar=wr;var Dr=fr;function Fr(t,r){var e=this.__data__,n=Dr(e,t);if(n<0){++this.size;e.push([t,r])}else{e[n][1]=r}return this}var kr=Fr;var _r=sr,Tr=Or,Cr=Sr,Br=Ar,Pr=kr;function $r(t){var r=-1,e=t==null?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}$r.prototype.clear=_r;$r.prototype["delete"]=Tr;$r.prototype.get=Cr;$r.prototype.has=Br;$r.prototype.set=Pr;var Vr=$r;var Nr=Ct,xr=c;var Ur=Nr(xr,"Map");var Rr=Ur;var qr=or,Er=Vr,Ir=Rr;function Mr(){this.size=0;this.__data__={hash:new qr,map:new(Ir||Er),string:new qr}}var Xr=Mr;function Gr(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}var Hr=Gr;var Jr=Hr;function Lr(t,r){var e=t.__data__;return Jr(r)?e[typeof r=="string"?"string":"hash"]:e.map}var Zr=Lr;var zr=Zr;function Kr(t){var r=zr(this,t)["delete"](t);this.size-=r?1:0;return r}var Qr=Kr;var Wr=Zr;function Yr(t){return Wr(this,t).get(t)}var te=Yr;var re=Zr;function ee(t){return re(this,t).has(t)}var ne=ee;var ie=Zr;function ae(t,r){var e=ie(this,t),n=e.size;e.set(t,r);this.size+=e.size==n?0:1;return this}var oe=ae;var ue=Xr,se=Qr,ce=te,le=ne,ve=oe;function de(t){var r=-1,e=t==null?0:t.length;this.clear();while(++r<e){var n=t[r];this.set(n[0],n[1])}}de.prototype.clear=ue;de.prototype["delete"]=se;de.prototype.get=ce;de.prototype.has=le;de.prototype.set=ve;var fe=de;var he=fe;var be="Expected a function";function pe(t,r){if(typeof t!="function"||r!=null&&typeof r!="function"){throw new TypeError(be)}var e=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=e.cache;if(a.has(i)){return a.get(i)}var o=t.apply(this,n);e.cache=a.set(i,o)||a;return o};e.cache=new(pe.Cache||he);return e}pe.Cache=he;var ye=pe;var Oe=ye;var je=500;function ge(t){var r=Oe(t,(function(t){if(e.size===je){e.clear()}return t}));var e=r.cache;return r}var Se=ge;var me=Se;var we=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var Ae=/\\(\\)?/g;var De=me((function(t){var r=[];if(t.charCodeAt(0)===46){r.push("")}t.replace(we,(function(t,e,n,i){r.push(n?i.replace(Ae,"$1"):e||t)}));return r}));var Fe=De;function ke(t,r){var e=-1,n=t==null?0:t.length,i=Array(n);while(++e<n){i[e]=r(t[e],e,t)}return i}var _e=ke;var Te=d,Ce=_e,Be=n,Pe=R;var $e=1/0;var Ve=Te?Te.prototype:undefined,Ne=Ve?Ve.toString:undefined;function xe(t){if(typeof t=="string"){return t}if(Be(t)){return Ce(t,xe)+""}if(Pe(t)){return Ne?Ne.call(t):""}var r=t+"";return r=="0"&&1/t==-$e?"-0":r}var Ue=xe;var Re=Ue;function qe(t){return t==null?"":Re(t)}var Ee=qe;var Ie=n,Me=G,Xe=Fe,Ge=Ee;function He(t,r){if(Ie(t)){return t}return Me(t,r)?[t]:Xe(Ge(t))}var Je=He;var Le=R;var Ze=1/0;function ze(t){if(typeof t=="string"||Le(t)){return t}var r=t+"";return r=="0"&&1/t==-Ze?"-0":r}var Ke=ze;var Qe=Je,We=Ke;function Ye(t,r){r=Qe(r,t);var e=0,n=r.length;while(t!=null&&e<n){t=t[We(r[e++])]}return e&&e==n?t:undefined}var tn=Ye;var rn=tn;function en(t,r,e){var n=t==null?undefined:rn(t,r);return n===undefined?e:n}var nn=en;const an=t=>{const{releaseDate:r}=t||{};if(!r)return true;const{now:e,releaseDate:n}=r;return Number(e)>=Number(n)};const on=t=>{const{balance:r,isSellOutOfStock:e}=t||{};return!!r&&r>0||e};const un=t=>{const{price:r}=t||{};return r&&!!Number(r)};class sn{static adapterIBuyTogetherToComponentData(t,r=false){this.isFirstLoad=r;const e={productMain:this.adapterToProductCard(t.product),products:t.productsPivot.map((t=>this.adapterPivotToProductCard(t))),originalData:t};this.isFirstLoad=false;return e}static adapterPivotToProductCard(t){return Object.assign(Object.assign({},this.adapterToProductCard(t)),{isCheck:true})}static adapterToProductCard(t){var r;const{price:e,priceCompare:n,id:i}=this.getValuesByVariation(t);return{price:e,priceBase:n,id:i,productId:t.productId,image:((r=t.images)===null||r===void 0?void 0:r.length)?t.images[0]:{src:""},name:t.name,slug:t.slug,selectVariations:this.adapterAttributes(t)}}static getValuesByVariation(t){const{attribute:r,attributeSecondary:e,color:n}=t;const i={"attribute.id":r===null||r===void 0?void 0:r.id,"attributeSecondary.id":e===null||e===void 0?void 0:e.id,"color.id":n===null||n===void 0?void 0:n.id};const a=this.filterVariations(t.variations,i);return a[0]||t}static adapterAttributes(t){const r=this.generateSelectColors(t);const e=this.generateSelectAttributes(t);const n=this.generateSelectAttributesSecondary(t);return[r,e,n].filter((t=>!!t))}static generateSelectAttributes(t){var r,e;const{color:n,attributeSecondary:i,isSellOutOfStock:a}=t;const o={"color.id":n===null||n===void 0?void 0:n.id,"attributeSecondary.id":i===null||i===void 0?void 0:i.id};const u=this.filterAttributesByUnique(this.filterVariations(t.variations,o,"attribute"),"attribute");if(!u.length)return null;return{placeholder:this.placeholderDisabled,label:(r=t.attribute)===null||r===void 0?void 0:r.attributeName,options:u.map((({balance:t,id:r,name:e,releaseDate:n})=>({name:e,value:r,disabled:this.checkAttributeOptionDisabled({balance:t,releaseDate:n,isSellOutOfStock:a})}))),selectType:"attributes",currentValue:this.isFirstLoad?undefined:(e=t.attribute)===null||e===void 0?void 0:e.id}}static generateSelectAttributesSecondary(t){var r,e;const{color:n,attribute:i,isSellOutOfStock:a}=t;const o={"color.id":n===null||n===void 0?void 0:n.id,"attribute.id":i===null||i===void 0?void 0:i.id};const u=this.filterAttributesByUnique(this.filterVariations(t.variations,o,"attributeSecondary"),"attributeSecondary");if(!u.length)return null;return{placeholder:this.placeholderDisabled,label:(r=t.attributeSecondary)===null||r===void 0?void 0:r.attributeName,options:u.map((({name:t,balance:r,id:e,releaseDate:n})=>({value:e,name:t,disabled:this.checkAttributeOptionDisabled({balance:r,releaseDate:n,isSellOutOfStock:a})}))),selectType:"secondaryAttributes",currentValue:this.isFirstLoad?undefined:(e=t.attributeSecondary)===null||e===void 0?void 0:e.id}}static generateSelectColors(t){var r;const{attribute:e,attributeSecondary:n}=t;const i={"attribute.id":e===null||e===void 0?void 0:e.id,"attributeSecondary.id":n===null||n===void 0?void 0:n.id};const a=this.filterAttributesByUnique(this.filterVariations(t.variations,i,"color"),"color");if(!(a===null||a===void 0?void 0:a.length))return null;return{label:"Cor",placeholder:this.placeholderDisabled,options:a===null||a===void 0?void 0:a.map((({balance:t,id:r,name:e,releaseDate:n})=>({name:e,value:r,disabled:this.checkAttributeOptionDisabled({balance:t,releaseDate:n})}))),currentValue:(r=t.color)===null||r===void 0?void 0:r.id,selectType:"color"}}static filterVariations(t,r,e){const n=Object.keys(r);return t.filter((t=>{const i=!e||!!t[e];if(!i)return false;return n.reduce(((e,n)=>{const i=r[n];const a=nn(t,n);return e&&a===i}),true)}))}static filterAttributesByUnique(t,r){return t.filter((t=>!!t[r])).reduce(((t,e)=>{const n=e[r];const i=t.findIndex((t=>t.id===n.id));if(i===-1)return[...t,Object.assign(Object.assign({},n),{balance:e.balance,releaseDate:e.releaseDate})];return t}),[])}static checkAttributeOptionDisabled(t){const{balance:r,releaseDate:e,isSellOutOfStock:n}=t;return!on({balance:r,isSellOutOfStock:n})||!an({releaseDate:e})}}sn.isFirstLoad=false;sn.placeholderDisabled={name:"Selecione",disabled:true,value:undefined};class cn{constructor(t){this.response=t}adapterToComponentData(){var t,r;const e=this.response&&((r=(t=this.response)===null||t===void 0?void 0:t.productsPivot)===null||r===void 0?void 0:r.length)>0;this.componentData=e?sn.adapterIBuyTogetherToComponentData(this.response,true):null;return this}changeByVariationSelected(t){var r,e;if(!t)return this;const n=(r=this.response.product.variations)===null||r===void 0?void 0:r.find((({id:r})=>Number(r)===t));if(!n)return this;if((n===null||n===void 0?void 0:n.balance)>0){this.response.product=Object.assign(Object.assign({},n),{variations:this.response.product.variations})}const i=(e=this.response.product.variations)===null||e===void 0?void 0:e.find((({balance:t,color:r,isSellOutOfStock:e})=>{if(n.color){return n.color.id===r.id&&(t>0||e)}return t>0||e}));this.response.product=Object.assign(Object.assign({},i),{variations:this.response.product.variations});return this}get getComponentData(){return this.componentData}get getResponse(){return this.response}}class ln extends cn{constructor(){super(...arguments);this.filterRules=[{key:"balance",isActive:true,applyFn:this.filterByBalance.bind(this),checkFn:on},{key:"priceless",isActive:true,applyFn:this.filterByZeroPrice.bind(this),checkFn:un},{key:"releaseDate",isActive:true,applyFn:this.filterByReleaseDate.bind(this),checkFn:an}]}applyFilters(t){if(t){this.filterRules=this.filterRules.map((r=>{const e=t.find((({key:t})=>t===r.key));if(!e)return r;return Object.assign(Object.assign(Object.assign({},r),e),{applyFn:e.applyFn?e.applyFn.bind(this):r.applyFn})}))}this.filterRules.filter((({isActive:t})=>t)).forEach((({applyFn:t})=>{t()}));this.applyFilterVariations();return this}filterByZeroPrice(){const t=!un(this.response.product);if(!this.response||t){this.response=null}}filterByBalance(){var t,r;const e=!on((t=this.response)===null||t===void 0?void 0:t.product);const n=!((r=this.response)===null||r===void 0?void 0:r.product.variations.some(on));const i=e||n;if(!this.response||i){this.response=null}}filterByReleaseDate(){var t;const r=!an((t=this.response)===null||t===void 0?void 0:t.product);if(!this.response||r){this.response=null}}applyFilterVariations(){if(!this.response)return;const t=this.filterRules.filter((({isActive:t})=>t)).map((({checkFn:t})=>t));this.response.productsPivot=this.response.productsPivot.filter((({variations:r})=>this.filterVariations(r,t)))}filterVariations(t,r){return t.filter((t=>{const e=r.map((r=>r(t)));const n=e.reduce(((t,r)=>t&&r),true);return n})).length!==0}}class vn{async getBuyTogetherByProductId(r,e){const n=await t.getByProductIdWithValidPromotionDate(r);if(!n)return null;const i=new ln(n);return i.changeByVariationSelected(e).applyFilters().adapterToComponentData().getComponentData}async getOnlyPivotProducts(r){const e=await t.getByProductIds(r);const n=e.map((t=>{const e=new cn(t).adapterToComponentData();const n=e.getComponentData.products.filter((t=>!r.includes(+t.productId)));return n}));return n.reduce(((t,r)=>t.concat(r)),[])}changeProductOptions(t,r){switch(t.eventSelectType){case"color":return this.changeColor(t.value,r);case"attributes":return this.changeAttribute(t.value,r);case"secondaryAttributes":return this.changeAttributeSecondary(t.value,r);default:return null}}changeColor(t,r){const e=r.variations.find((({color:r})=>(r===null||r===void 0?void 0:r.id)===Number(t)));const n=sn.getValuesByVariation(Object.assign(Object.assign({},r),{color:e.color}));const i=Object.assign(Object.assign({},n),{variations:r.variations});const a=sn.adapterToProductCard(i);return{productTargetUpdated:i,productCard:a}}changeAttribute(t,r){const e=r.variations.find((({attribute:r})=>(r===null||r===void 0?void 0:r.id)===Number(t)));const n=sn.getValuesByVariation(Object.assign(Object.assign({},r),{attribute:(e===null||e===void 0?void 0:e.attribute)||r.attribute}));const i=Object.assign(Object.assign({},n||r),{variations:r.variations});const a=sn.adapterToProductCard(i);return{productTargetUpdated:i,productCard:a}}changeAttributeSecondary(t,r){const e=r.variations.find((({attributeSecondary:r})=>(r===null||r===void 0?void 0:r.id)===Number(t)));const n=sn.getValuesByVariation(Object.assign(Object.assign({},r),{attributeSecondary:e.attributeSecondary}));const i=Object.assign(Object.assign({},n),{variations:r.variations});const a=sn.adapterToProductCard(i);return{productTargetUpdated:i,productCard:a}}async addToCart(t){return new Promise(((r,e)=>{const n=window.dooca.base_url;const i="/action/cart/add";const a=new FormData;const o=t.map((t=>({variation_id:t,quantity:1})));a.append("items",JSON.stringify(o));const u=new XMLHttpRequest;u.open("POST",`${n}${i}`,true);u.setRequestHeader("X-Ajax","true");u.onload=function(){if(u.status>=200&&u.status<300){r(u.responseText)}else{e(u.status)}};u.send(a)}))}}export{vn as F};
//# sourceMappingURL=p-b6893e64.js.map