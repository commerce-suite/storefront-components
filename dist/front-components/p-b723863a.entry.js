import{r as e,c as t,h as i}from"./p-77cd71ec.js";const s=".variations.sc-variation-selector{display:flex;flex-wrap:wrap;--variations-gap:calc(var(--fc-margin-width) * 2);gap:var(--variations-gap)}.variations.sc-variation-selector .item.sc-variation-selector{min-width:calc(50% - var(--variations-gap));flex-grow:2}.variations.-showcase.sc-variation-selector .item.sc-variation-selector{width:100%}";const a=s;const c=class{constructor(i){e(this,i);this.inputSelect=t(this,"inputSelect",7);this.variations=undefined;this.productId=undefined;this.showcaseMode=undefined}onInputSelect(e,t){this.inputSelect.emit({eventSelectType:t,value:e.target.value,productId:this.productId})}render(){return i("div",{key:"1f8b55c1c1c437097bb16d7656787670e58d0ed9",class:`variations ${this.showcaseMode?"-showcase":""}`},this.variations.map((({label:e,currentValue:t,options:s,selectId:a,placeholder:c,selectType:r})=>i("div",{class:"item"},i("front-select",{placeholder:c,selectId:a,optionsList:s,label:e,value:t,onInput:e=>this.onInputSelect(e,r)})))))}};c.style=a;export{c as variation_selector};
//# sourceMappingURL=p-b723863a.entry.js.map