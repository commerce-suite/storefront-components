const e="front-components";const t={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:false,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:false,cmpWillUpdate:false,connectedCallback:false,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:false,hostListenerTargetBody:false,hostListenerTargetDocument:false,hostListenerTargetParent:false,hostListenerTargetWindow:false,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,initializeNextTick:false,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:false,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:false,shadowDelegatesFocus:false,shadowDom:false,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:false,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:false,watchCallback:true};const l={GOOGLE_RECAPTCHA_SITE_KEY:"6Ldm_6cZAAAAAHbNTBa7Nux52Zb7S0LuMknhKdQH",CDN_URL:"https://optimizer.dchomolog.dooca.store"};var r=Object.defineProperty;var n=(e,t)=>{for(var l in t)r(e,l,{get:t[l],enumerable:true})};var s=e=>{const t=new URL(e,Ie.t);return t.origin!==Qe.location.origin?t.href:t.pathname};var a={};var i=e=>e!=null;var o=e=>{e=typeof e;return e==="object"||e==="function"};function f(e){var t,l,r;return(r=(l=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:l.getAttribute("content"))!=null?r:void 0}var c={};n(c,{err:()=>v,map:()=>d,ok:()=>u,unwrap:()=>p,unwrapErr:()=>m});var u=e=>({isOk:true,isErr:false,value:e});var v=e=>({isOk:false,isErr:true,value:e});function d(e,t){if(e.isOk){const l=t(e.value);if(l instanceof Promise){return l.then((e=>u(e)))}else{return u(l)}}if(e.isErr){const t=e.value;return v(t)}throw"should never get here"}var p=e=>{if(e.isOk){return e.value}else{throw e.value}};var m=e=>{if(e.isErr){return e.value}else{throw e.value}};var h=(e,t="")=>{{return()=>{}}};var y=(e,t)=>{{return()=>{}}};var b="{visibility:hidden}.hydrated{visibility:inherit}";var $="slot-fb{display:contents}slot-fb[hidden]{display:none}";var w=(e,t,...l)=>{let r=null;let n=null;let s=null;let a=false;let i=false;const f=[];const c=t=>{for(let l=0;l<t.length;l++){r=t[l];if(Array.isArray(r)){c(r)}else if(r!=null&&typeof r!=="boolean"){if(a=typeof e!=="function"&&!o(r)){r=String(r)}if(a&&i){f[f.length-1].l+=r}else{f.push(a?g(null,r):r)}i=a}}};c(l);if(t){if(t.key){n=t.key}if(t.name){s=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,C)}const u=g(e,null);u.i=t;if(f.length>0){u.o=f}{u.u=n}{u.v=s}return u};var g=(e,t)=>{const l={p:0,m:e,l:t,h:null,o:null};{l.i=null}{l.u=null}{l.v=null}return l};var S={};var k=e=>e&&e.m===S;var C={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(O)};var L=e=>({vattrs:e.i,vchildren:e.o,vkey:e.u,vname:e.v,vtag:e.m,vtext:e.l});var O=e=>{if(typeof e.vtag==="function"){const t={...e.vattrs};if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return w(e.vtag,t,...e.vchildren||[])}const t=g(e.vtag,e.vtext);t.i=e.vattrs;t.o=e.vchildren;t.u=e.vkey;t.v=e.vname;return t};var T=(e,t)=>{if(e!=null&&!o(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var A=e=>Pe(e).$hostElement$;var R=(e,t,l)=>{const r=A(e);return{emit:e=>j(r,t,{bubbles:!!(l&4),composed:!!(l&2),cancelable:!!(l&1),detail:e})}};var j=(e,t,l)=>{const r=Ie.ce(t,l);e.dispatchEvent(r);return r};var x=new WeakMap;var E=(e,t,l)=>{let r=Ke.get(e);if(Ve&&l){r=r||new CSSStyleSheet;if(typeof r==="string"){r=t}else{r.replaceSync(t)}}else{r=t}Ke.set(e,r)};var D=(e,t,l)=>{var r;const n=M(t);const s=Ke.get(n);e=e.nodeType===11?e:Ge;if(s){if(typeof s==="string"){e=e.head||e;let l=x.get(e);let a;if(!l){x.set(e,l=new Set)}if(!l.has(n)){{a=Ge.createElement("style");a.innerHTML=s;const t=(r=Ie.$)!=null?r:f(Ge);if(t!=null){a.setAttribute("nonce",t)}e.insertBefore(a,e.querySelector("link"))}if(t.p&4){a.innerHTML+=$}if(l){l.add(n)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]}}return n};var F=e=>{const t=e.S;const l=e.$hostElement$;const r=t.p;const n=h("attachStyles",t.k);const s=D(l.getRootNode(),t);if(r&10){l["s-sc"]=s;l.classList.add(s+"-h");if(r&2){l.classList.add(s+"-s")}}n()};var M=(e,t)=>"sc-"+e.k;var N=(e,t,l,r,n,s)=>{if(l!==r){let a=_e(e,t);let i=t.toLowerCase();if(t==="class"){const t=e.classList;const n=U(l);const s=U(r);t.remove(...n.filter((e=>e&&!s.includes(e))));t.add(...s.filter((e=>e&&!n.includes(e))))}else if(t==="style"){{for(const t in l){if(!r||r[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in r){if(!l||r[t]!==l[t]){if(t.includes("-")){e.style.setProperty(t,r[t])}else{e.style[t]=r[t]}}}}else if(t==="key");else if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(_e(Qe,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(l||r){const n=t.endsWith(W);t=t.replace(_,"");if(l){Ie.rel(e,t,l,n)}if(r){Ie.ael(e,t,r,n)}}}else{const i=o(r);if((a||i&&r!==null)&&!n){try{if(!e.tagName.includes("-")){const n=r==null?"":r;if(t==="list"){a=false}else if(l==null||e[t]!=n){e[t]=n}}else{e[t]=r}}catch(e){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!a||s&4||n)&&!i){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var P=/\s/;var U=e=>!e?[]:e.split(P);var W="Capture";var _=new RegExp(W+"$");var H=(e,t,l,r)=>{const n=t.h.nodeType===11&&t.h.host?t.h.host:t.h;const s=e&&e.i||a;const i=t.i||a;{for(r of z(Object.keys(s))){if(!(r in i)){N(n,r,s[r],void 0,l,t.p)}}}for(r of z(Object.keys(i))){N(n,r,s[r],i[r],l,t.p)}};function z(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var B;var K;var Q;var G=false;var I=false;var Z=false;var q=false;var V=(e,t,l,r)=>{var n;const s=t.o[l];let a=0;let o;let f;let c;if(!G){Z=true;if(s.m==="slot"){if(B){r.classList.add(B+"-s")}s.p|=s.o?2:1}}if(s.l!==null){o=s.h=Ge.createTextNode(s.l)}else if(s.p&1){o=s.h=Ge.createTextNode("")}else{o=s.h=Ge.createElement(s.p&2?"slot-fb":s.m);{H(null,s,q)}if(i(B)&&o["s-si"]!==B){o.classList.add(o["s-si"]=B)}if(s.o){for(a=0;a<s.o.length;++a){f=V(e,s,a,o);if(f){o.appendChild(f)}}}}o["s-hn"]=Q;{if(s.p&(2|1)){o["s-sr"]=true;o["s-cr"]=K;o["s-sn"]=s.v||"";o["s-rf"]=(n=s.i)==null?void 0:n.ref;c=e&&e.o&&e.o[l];if(c&&c.m===s.m&&e.h){{X(e.h,false)}}}}return o};var X=(e,l)=>{Ie.p|=1;const r=Array.from(e.childNodes);if(e["s-sr"]&&t.experimentalSlotFixes){let t=e;while(t=t.nextSibling){if(t&&t["s-sn"]===e["s-sn"]&&t["s-sh"]===Q){r.push(t)}}}for(let e=r.length-1;e>=0;e--){const t=r[e];if(t["s-hn"]!==Q&&t["s-ol"]){re(t).insertBefore(t,le(t));t["s-ol"].remove();t["s-ol"]=void 0;t["s-sh"]=void 0;Z=true}if(l){X(t,l)}}Ie.p&=~1};var Y=(e,t,l,r,n,s)=>{let a=e["s-cr"]&&e["s-cr"].parentNode||e;let i;for(;n<=s;++n){if(r[n]){i=V(null,l,n,e);if(i){r[n].h=i;a.insertBefore(i,le(t))}}}};var J=(e,t,l)=>{for(let r=t;r<=l;++r){const t=e[r];if(t){const e=t.h;if(e){{I=true;if(e["s-ol"]){e["s-ol"].remove()}else{X(e,true)}}e.remove()}}}};var ee=(e,t,l,r,n=false)=>{let s=0;let a=0;let i=0;let o=0;let f=t.length-1;let c=t[0];let u=t[f];let v=r.length-1;let d=r[0];let p=r[v];let m;let h;while(s<=f&&a<=v){if(c==null){c=t[++s]}else if(u==null){u=t[--f]}else if(d==null){d=r[++a]}else if(p==null){p=r[--v]}else if(te(c,d,n)){ne(c,d,n);c=t[++s];d=r[++a]}else if(te(u,p,n)){ne(u,p,n);u=t[--f];p=r[--v]}else if(te(c,p,n)){if(c.m==="slot"||p.m==="slot"){X(c.h.parentNode,false)}ne(c,p,n);e.insertBefore(c.h,u.h.nextSibling);c=t[++s];p=r[--v]}else if(te(u,d,n)){if(c.m==="slot"||p.m==="slot"){X(u.h.parentNode,false)}ne(u,d,n);e.insertBefore(u.h,c.h);u=t[--f];d=r[++a]}else{i=-1;{for(o=s;o<=f;++o){if(t[o]&&t[o].u!==null&&t[o].u===d.u){i=o;break}}}if(i>=0){h=t[i];if(h.m!==d.m){m=V(t&&t[a],l,i,e)}else{ne(h,d,n);t[i]=void 0;m=h.h}d=r[++a]}else{m=V(t&&t[a],l,a,e);d=r[++a]}if(m){{re(c.h).insertBefore(m,le(c.h))}}}}if(s>f){Y(e,r[v+1]==null?null:r[v+1].h,l,r,a,v)}else if(a>v){J(t,s,f)}};var te=(e,t,l=false)=>{if(e.m===t.m){if(e.m==="slot"){return e.v===t.v}if(!l){return e.u===t.u}return true}return false};var le=e=>e&&e["s-ol"]||e;var re=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;var ne=(e,t,l=false)=>{const r=t.h=e.h;const n=e.o;const s=t.o;const a=t.m;const i=t.l;let o;if(i===null){{if(a==="slot"&&!G);else{H(e,t,q)}}if(n!==null&&s!==null){ee(r,n,t,s,l)}else if(s!==null){if(e.l!==null){r.textContent=""}Y(r,null,t,s,0,s.length-1)}else if(n!==null){J(n,0,n.length-1)}}else if(o=r["s-cr"]){o.parentNode.textContent=i}else if(e.l!==i){r.data=i}};var se=e=>{const t=e.childNodes;for(const e of t){if(e.nodeType===1){if(e["s-sr"]){const l=e["s-sn"];e.hidden=false;for(const r of t){if(r!==e){if(r["s-hn"]!==e["s-hn"]||l!==""){if(r.nodeType===1&&(l===r.getAttribute("slot")||l===r["s-sn"])||r.nodeType===3&&l===r["s-sn"]){e.hidden=true;break}}else{if(r.nodeType===1||r.nodeType===3&&r.textContent.trim()!==""){e.hidden=true;break}}}}}se(e)}}};var ae=[];var ie=e=>{let l;let r;let n;for(const s of e.childNodes){if(s["s-sr"]&&(l=s["s-cr"])&&l.parentNode){r=l.parentNode.childNodes;const e=s["s-sn"];for(n=r.length-1;n>=0;n--){l=r[n];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==s["s-hn"]&&!t.experimentalSlotFixes){if(oe(l,e)){let t=ae.find((e=>e.C===l));I=true;l["s-sn"]=l["s-sn"]||e;if(t){t.C["s-sh"]=s["s-hn"];t.L=s}else{l["s-sh"]=s["s-hn"];ae.push({L:s,C:l})}if(l["s-sr"]){ae.map((e=>{if(oe(e.C,l["s-sn"])){t=ae.find((e=>e.C===l));if(t&&!e.L){e.L=t.L}}}))}}else if(!ae.some((e=>e.C===l))){ae.push({C:l})}}}}if(s.nodeType===1){ie(s)}}};var oe=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var fe=(e,t,l=false)=>{var r,n,s,a;const i=e.$hostElement$;const o=e.S;const f=e.O||g(null,null);const c=k(t)?t:w(null,null,t);Q=i.tagName;if(l&&c.i){for(const e of Object.keys(c.i)){if(i.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){c.i[e]=i[e]}}}c.m=null;c.p|=4;e.O=c;c.h=f.h=i;{B=i["s-sc"]}G=(o.p&1)!==0;{K=i["s-cr"];I=false}ne(f,c,l);{Ie.p|=1;if(Z){ie(c.h);for(const e of ae){const t=e.C;if(!t["s-ol"]){const e=Ge.createTextNode("");e["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of ae){const t=e.C;const i=e.L;if(i){const e=i.parentNode;let l=i.nextSibling;{let s=(r=t["s-ol"])==null?void 0:r.previousSibling;while(s){let r=(n=s["s-nr"])!=null?n:null;if(r&&r["s-sn"]===t["s-sn"]&&e===r.parentNode){r=r.nextSibling;while(r===t||(r==null?void 0:r["s-sr"])){r=r==null?void 0:r.nextSibling}if(!r||!r["s-nr"]){l=r;break}}s=s.previousSibling}}if(!l&&e!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}e.insertBefore(t,l);if(t.nodeType===1){t.hidden=(s=t["s-ih"])!=null?s:false}}}t&&typeof i["s-rf"]==="function"&&i["s-rf"](t)}else{if(t.nodeType===1){if(l){t["s-ih"]=(a=t.hidden)!=null?a:false}t.hidden=true}}}}if(I){se(c.h)}Ie.p&=~1;ae.length=0}K=void 0};var ce=(e,t)=>{if(t&&!e.T&&t["s-p"]){t["s-p"].push(new Promise((t=>e.T=t)))}};var ue=(e,t)=>{{e.p|=16}if(e.p&4){e.p|=512;return}ce(e,e.A);const l=()=>ve(e,t);return nt(l)};var ve=(e,t)=>{const l=h("scheduleUpdate",e.S.k);const r=e.R;let n;if(t){{e.p|=256;if(e.j){e.j.map((([e,t])=>$e(r,e,t)));e.j=void 0}}{n=$e(r,"componentWillLoad")}}l();return de(n,(()=>me(e,r,t)))};var de=(e,t)=>pe(e)?e.then(t):t();var pe=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var me=async(e,t,l)=>{var r;const n=e.$hostElement$;const s=h("update",e.S.k);const a=n["s-rc"];if(l){F(e)}const i=h("render",e.S.k);{he(e,t,n,l)}if(a){a.map((e=>e()));n["s-rc"]=void 0}i();s();{const t=(r=n["s-p"])!=null?r:[];const l=()=>ye(e);if(t.length===0){l()}else{Promise.all(t).then(l);e.p|=4;t.length=0}}};var he=(e,t,l,r)=>{try{t=t.render();{e.p&=~16}{e.p|=2}{{{fe(e,t,r)}}}}catch(t){He(t,e.$hostElement$)}return null};var ye=e=>{const t=e.S.k;const l=e.$hostElement$;const r=h("postUpdate",t);const n=e.R;const s=e.A;if(!(e.p&64)){e.p|=64;{we(l)}{$e(n,"componentDidLoad")}r();{e.D(l);if(!s){be()}}}else{r()}{e.F(l)}{if(e.T){e.T();e.T=void 0}if(e.p&512){rt((()=>ue(e,false)))}e.p&=~(4|512)}};var be=t=>{{we(Ge.documentElement)}rt((()=>j(Qe,"appload",{detail:{namespace:e}})))};var $e=(e,t,l)=>{if(e&&e[t]){try{return e[t](l)}catch(e){He(e)}}return void 0};var we=e=>e.classList.add("hydrated");var ge=(e,t)=>Pe(e).M.get(t);var Se=(e,t,l,r)=>{const n=Pe(e);const s=n.$hostElement$;const a=n.M.get(t);const i=n.p;const o=n.R;l=T(l,r.N[t][0]);const f=Number.isNaN(a)&&Number.isNaN(l);const c=l!==a&&!f;if((!(i&8)||a===void 0)&&c){n.M.set(t,l);if(o){if(r.P&&i&128){const e=r.P[t];if(e){e.map((e=>{try{o[e](l,a,t)}catch(e){He(e,s)}}))}}if((i&(2|16))===2){ue(n,false)}}}};var ke=(e,t,l)=>{var r;const n=e.prototype;if(t.N){if(e.watchers){t.P=e.watchers}const s=Object.entries(t.N);s.map((([e,[r]])=>{if(r&31||l&2&&r&32){Object.defineProperty(n,e,{get(){return ge(this,e)},set(l){Se(this,e,l,t)},configurable:true,enumerable:true})}else if(l&1&&r&64){Object.defineProperty(n,e,{value(...t){var l;const r=Pe(this);return(l=r==null?void 0:r.U)==null?void 0:l.then((()=>{var l;return(l=r.R)==null?void 0:l[e](...t)}))}})}}));if(l&1){const l=new Map;n.attributeChangedCallback=function(e,r,s){Ie.jmp((()=>{var a;const i=l.get(e);if(this.hasOwnProperty(i)){s=this[i];delete this[i]}else if(n.hasOwnProperty(i)&&typeof this[i]==="number"&&this[i]==s){return}else if(i==null){const l=Pe(this);const n=l==null?void 0:l.p;if(n&&!(n&8)&&n&128&&s!==r){const n=l.R;const i=(a=t.P)==null?void 0:a[e];i==null?void 0:i.forEach((t=>{if(n[t]!=null){n[t].call(n,s,r,e)}}))}return}this[i]=s===null&&typeof this[i]==="boolean"?false:s}))};e.observedAttributes=Array.from(new Set([...Object.keys((r=t.P)!=null?r:{}),...s.filter((([e,t])=>t[0]&15)).map((([e,t])=>{const r=t[1]||e;l.set(r,e);return r}))]))}}return e};var Ce=async(e,t,l,r)=>{let n;if((t.p&32)===0){t.p|=32;const r=l.W;if(r){n=Be(l);if(n.then){const e=y();n=await n;e()}if(!n.isProxied){{l.P=n.watchers}ke(n,l,2);n.isProxied=true}const e=h("createInstance",l.k);{t.p|=8}try{new n(t)}catch(e){He(e)}{t.p&=~8}{t.p|=128}e()}else{n=e.constructor;customElements.whenDefined(l.k).then((()=>t.p|=128))}if(n.style){let e=n.style;const t=M(l);if(!Ke.has(t)){const r=h("registerStyles",l.k);E(t,e,!!(l.p&1));r()}}}const s=t.A;const a=()=>ue(t,true);if(s&&s["s-rc"]){s["s-rc"].push(a)}else{a()}};var Le=e=>{};var Oe=e=>{if((Ie.p&1)===0){const t=Pe(e);const l=t.S;const r=h("connectedCallback",l.k);if(!(t.p&1)){t.p|=1;{if(l.p&(4|8)){Te(e)}}{let l=e;while(l=l.parentNode||l.host){if(l["s-p"]){ce(t,t.A=l);break}}}if(l.N){Object.entries(l.N).map((([t,[l]])=>{if(l&31&&e.hasOwnProperty(t)){const l=e[t];delete e[t];e[t]=l}}))}{Ce(e,t,l)}}else{Ee(e,t,l._);if(t==null?void 0:t.R);else if(t==null?void 0:t.H){t.H.then((()=>Le()))}}r()}};var Te=e=>{const t=e["s-cr"]=Ge.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ae=e=>{{$e(e,"disconnectedCallback")}};var Re=async e=>{if((Ie.p&1)===0){const t=Pe(e);{if(t.B){t.B.map((e=>e()));t.B=void 0}}if(t==null?void 0:t.R){Ae(t.R)}else if(t==null?void 0:t.H){t.H.then((()=>Ae(t.R)))}}};var je=(e,t={})=>{var l;const r=h();const n=[];const s=t.exclude||[];const a=Qe.customElements;const i=Ge.head;const o=i.querySelector("meta[charset]");const c=Ge.createElement("style");const u=[];let v;let d=true;Object.assign(Ie,t);Ie.t=new URL(t.resourcesUrl||"./",Ge.baseURI).href;let p=false;e.map((e=>{e[1].map((t=>{var l;const r={p:t[0],k:t[1],N:t[2],_:t[3]};if(r.p&4){p=true}{r.N=t[2]}{r._=t[3]}{r.P=(l=t[4])!=null?l:{}}const i=r.k;const o=class extends HTMLElement{constructor(e){super(e);e=this;We(e,r)}connectedCallback(){if(v){clearTimeout(v);v=null}if(d){u.push(this)}else{Ie.jmp((()=>Oe(this)))}}disconnectedCallback(){Ie.jmp((()=>Re(this)))}componentOnReady(){return Pe(this).H}};r.W=e[0];if(!s.includes(i)&&!a.get(i)){n.push(i);a.define(i,ke(o,r,1))}}))}));if(n.length>0){if(p){c.textContent+=$}{c.textContent+=n+b}if(c.innerHTML.length){c.setAttribute("data-styles","");const e=(l=Ie.$)!=null?l:f(Ge);if(e!=null){c.setAttribute("nonce",e)}i.insertBefore(c,o?o.nextSibling:i.firstChild)}}d=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{Ie.jmp((()=>v=setTimeout(be,30)))}}r()};var xe=(e,t)=>t;var Ee=(e,t,l,r)=>{if(l){l.map((([l,r,n])=>{const s=e;const a=De(t,n);const i=Fe(l);Ie.ael(s,r,a,i);(t.B=t.B||[]).push((()=>Ie.rel(s,r,a,i)))}))}};var De=(e,t)=>l=>{try{{if(e.p&256){e.R[t](l)}else{(e.j=e.j||[]).push([t,l])}}}catch(e){He(e)}};var Fe=e=>Ze?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;var Me=e=>Ie.$=e;var Ne=new WeakMap;var Pe=e=>Ne.get(e);var Ue=(e,t)=>Ne.set(t.R=e,t);var We=(e,t)=>{const l={p:0,$hostElement$:e,S:t,M:new Map};{l.U=new Promise((e=>l.F=e))}{l.H=new Promise((e=>l.D=e));e["s-p"]=[];e["s-rc"]=[]}Ee(e,l,t._);return Ne.set(e,l)};var _e=(e,t)=>t in e;var He=(e,t)=>(0,console.error)(e,t);var ze=new Map;var Be=(e,t,l)=>{const r=e.k.replace(/-/g,"_");const n=e.W;const s=ze.get(n);if(s){return s[r]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${n}.entry.js${""}`).then((e=>{{ze.set(n,e)}return e[r]}),He)};var Ke=new Map;var Qe=typeof window!=="undefined"?window:{};var Ge=Qe.document||{head:{}};var Ie={p:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,r)=>e.addEventListener(t,l,r),rel:(e,t,l,r)=>e.removeEventListener(t,l,r),ce:(e,t)=>new CustomEvent(e,t)};var Ze=(()=>{let e=false;try{Ge.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=true}}))}catch(e){}return e})();var qe=e=>Promise.resolve(e);var Ve=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var Xe=false;var Ye=[];var Je=[];var et=(e,t)=>l=>{e.push(l);if(!Xe){Xe=true;if(t&&Ie.p&4){rt(lt)}else{Ie.raf(lt)}}};var tt=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){He(e)}}e.length=0};var lt=()=>{tt(Ye);{tt(Je);if(Xe=Ye.length>0){Ie.raf(lt)}}};var rt=e=>qe().then(e);var nt=et(Je,true);export{l as E,xe as F,S as H,s as a,je as b,R as c,A as g,w as h,qe as p,Ue as r,Me as s};
//# sourceMappingURL=p-6b3a223d.js.map