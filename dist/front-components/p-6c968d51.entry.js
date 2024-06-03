import{r as t,c as e,h as s,H as i}from"./p-32124b9c.js";class a{constructor(t,e){this.startDate=t;this.endDate=e;this.oneSecond=1e3;if(isNaN(t.getTime())||isNaN(e.getTime())){throw new Error("Invalid date")}this.startCountdown()}incrementOneSecond(){this.startDate=new Date(this.startDate.getTime()+this.oneSecond)}startCountdown(){this.intervalId=setInterval((()=>{this.incrementOneSecond();if(this.isCountdownFinished()){this.stopCountdown()}}),this.oneSecond)}stopCountdown(){clearInterval(this.intervalId)}getMillisecondsDifference(){return this.endDate.getTime()-this.startDate.getTime()}isCountdownFinished(){const t=this.getMillisecondsDifference();return t<=0}getTimeDifference(){const t=this.getMillisecondsDifference();const e=Math.floor(t/(1e3*60*60*24));const s=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));const i=Math.floor(t%(1e3*60*60)/(1e3*60));const a=Math.floor(t%(1e3*60)/1e3);return{daysDiff:e,hoursDiff:s,minutesDiff:i,secondsDiff:a}}}const n=".sc-front-countdown-h{display:block}";const c=n;const h=class{constructor(s){t(this,s);this.countdownFinished=e(this,"countdownFinished",7);this.startDate=undefined;this.endDate=undefined;this.days="00";this.hours="00";this.minutes="00";this.seconds="00"}resetCountdown(){this.days="00";this.hours="00";this.minutes="00";this.seconds="00"}updateCountdown(){if(this.service.isCountdownFinished()){this.resetCountdown();this.countdownFinished.emit("finished");return}const{daysDiff:t,hoursDiff:e,minutesDiff:s,secondsDiff:i}=this.service.getTimeDifference();this.days=String(t).padStart(2,"0");this.hours=String(e).padStart(2,"0");this.minutes=String(s).padStart(2,"0");this.seconds=String(i).padStart(2,"0");requestAnimationFrame(this.updateCountdown.bind(this))}disconnectedCallback(){if(!this.service)return;this.service.stopCountdown()}loadCountdown(){if(!this.startDate||!this.endDate)return;try{this.service=new a(new Date(Number(this.startDate)||this.startDate),new Date(Number(this.endDate)||this.endDate));this.updateCountdown()}catch(t){this.resetCountdown()}}watchStartDateChange(){this.loadCountdown()}watchEndDateChange(){this.loadCountdown()}componentWillLoad(){this.loadCountdown()}render(){return s(i,{key:"87bb93d588569e2549042e8e6c1fd4fbbf1b1a80",class:"timer"},s("div",{key:"5511d23f64e780eaa651534ed25cffbebd25d60e",class:"cell"},s("p",{key:"fb13ab26c6765807cc49f329f3c2aab87eeb1f11",class:"time"},this.days),s("p",{key:"e0eedb35d1d0bb37f864fcf62b6d22c0d33b0aa1",class:"unit"},"dias")),s("div",{key:"e07c7efa1afdba5ed142792ecb3407b5ff7aa08c",class:"cell"},s("p",{key:"5661edce2c7bf6a20678a8e7faf63b41e101d559",class:"time"},this.hours),s("p",{key:"df0d2ccfb0f4424447b0f67b0eb98070c45c0b59",class:"unit"},"horas")),s("div",{key:"f317415e70b79c9228f2da756d2a36c1932d3198",class:"cell"},s("p",{key:"be2c1d43fdef9e439ce78c76f85a6651f5e91abd",class:"time"}," ",this.minutes),s("p",{key:"e41503854297e9cc58a46bd49da4d0e5050241d4",class:"unit"},"minutos")),s("div",{key:"1fc6bd9b3a444b48bdd98a2c4928b78391822bcb",class:"cell"},s("p",{key:"0a40936838ddf56051d08b8008d886487412950b",class:"time"},this.seconds),s("p",{key:"f91bd9c410505c74f5ee5b97e7bb9fe72ba072da",class:"unit"},"segundos")))}static get watchers(){return{startDate:["watchStartDateChange"],endDate:["watchEndDateChange"]}}};h.style=c;export{h as front_countdown};
//# sourceMappingURL=p-6c968d51.entry.js.map