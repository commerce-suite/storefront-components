import{r as e,g as t,h as c,H as r,c as a}from"./p-bc241129.js";const s='*.sc-front-select{--fc-font-family:var(--m-ff);--fc-border-radius:4px;--fc-color-primary:var(--color-primary, #ff4295);--fc-color-secondary:var(--color-secondary, #000);--fc-color-white:var(--white, #fff);--fc-m-tt:var(--m-tt, "uppercase");--fc-m-fs:var(--m-fs, 14px);--fc-m-fw:var(--m-fw, 600);--fc-m-ls:var(--m-ls, 1px);--fc-h2-fs:var(--h2-fs, 18px);--fc-h2-fw:var(--h2-fw, 600);--fc-h2-ls:var(--h2-ls, 0px);--fc-color-light-text-default:#343a40;--fc-color-light-text-secondary:#6d747a;--fc-color-light-border-default:#dee2e6;--fc-gap-grid:24px;--fc-margin-width:8px}.sc-front-select-h{display:inline-block;width:100%}.front-select-container.sc-front-select{position:relative}.front-select-container.sc-front-select>select.sc-front-select{appearance:none;width:100%;font-size:14px;color:var(--fc-color-light-text-secondary);padding:10px;padding-right:15px;background-color:#fff;border:1px solid var(--fc-color-light-border-default);cursor:pointer}.front-select-container.sc-front-select::before,.front-select-container.sc-front-select::after{position:absolute;content:"";right:5px;pointer-events:none;display:block}.front-select-container.sc-front-select::before{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;bottom:45%}.front-select-container.sc-front-select::after{background:var(--arrow-up-image-src) no-repeat center center/cover;width:15px;height:15px;top:45%;transform:rotate(180deg)}.select-label.sc-front-select{display:inline-block;margin-bottom:8px;font-family:inherit}';const o=s;const i=class{constructor(t){e(this,t);this.optionsList=undefined;this.value=undefined;this.placeholder={name:"Selecione",value:undefined};this.selectId="";this.selectName="";this.label=undefined}componentWillLoad(){document.documentElement.style.setProperty("--arrow-up-image-src",`url(${t("../../../assets/images/arrow-up.png")})`)}render(){var e;return c(r,{key:"cd298128c277a74a2b3a4188625c1862d20363ac"},this.label&&c("label",{key:"7f8537c73ee9b3aae7683295335497553cc49ba1",class:"select-label",htmlFor:this.selectId},this.label),c("div",{key:"56d86ffb30d0d620e82a001acdc0470d03baade5",class:"front-select-container"},c("select",{key:"17934170de18e248cfe5ed51179f039280bb4c5d",name:this.selectName,id:this.selectId},c("option",{key:"4437e34c835ba1a7b5def1b1794006d898110427",disabled:this.placeholder.disabled,value:this.placeholder.value,selected:this.value===this.placeholder.value},this.placeholder.name),(e=this.optionsList)===null||e===void 0?void 0:e.map((({name:e,value:t,disabled:r})=>c("option",{value:t,selected:this.value===t,disabled:r},e))))))}};i.style=o;const n=".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";const l=n;const d=class{constructor(t){e(this,t);this.inputSelect=a(this,"inputSelect",7);this.variations=undefined;this.productId=undefined;this.showcaseMode=undefined}onInputSelect(e,t){this.inputSelect.emit({eventSelectType:t,value:e.target.value,productId:this.productId})}render(){return c("div",{key:"160a00d7e6c7d9dc599c406c0cd9f8e9ca4c31f5",class:`variations ${this.showcaseMode?"-showcase":""}`},this.variations.map((({label:e,currentValue:t,options:r,selectId:a,placeholder:s,selectType:o})=>c("div",{class:"item"},c("front-select",{placeholder:s,selectId:a,optionsList:r,label:e,value:t,onInput:e=>this.onInputSelect(e,o)})))))}};d.style=l;export{i as front_select,d as variation_selector};
//# sourceMappingURL=p-d892bb26.entry.js.map