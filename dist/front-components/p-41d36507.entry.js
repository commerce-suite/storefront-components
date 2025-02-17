import{r as t,c as s,h as e,H as i}from"./p-040ae869.js";class a{constructor(t,s){this.startDate=t;this.endDate=s;this.oneSecond=1e3;if(isNaN(t.getTime())||isNaN(s.getTime())){throw new Error("Invalid date")}this.startCountdown()}incrementOneSecond(){this.startDate=new Date(this.startDate.getTime()+this.oneSecond)}startCountdown(){this.intervalId=setInterval((()=>{this.incrementOneSecond();if(this.isCountdownFinished()){this.stopCountdown()}}),this.oneSecond)}stopCountdown(){clearInterval(this.intervalId)}getMillisecondsDifference(){return this.endDate.getTime()-this.startDate.getTime()}isCountdownFinished(){const t=this.getMillisecondsDifference();return t<=0}getTimeDifference(){const t=this.getMillisecondsDifference();const s=Math.floor(t/(1e3*60*60*24));const e=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));const i=Math.floor(t%(1e3*60*60)/(1e3*60));const a=Math.floor(t%(1e3*60)/1e3);return{daysDiff:s,hoursDiff:e,minutesDiff:i,secondsDiff:a}}}const n=".sc-front-countdown-h{display:block}";const h=n;const c=class{constructor(e){t(this,e);this.countdownFinished=s(this,"countdownFinished",7);this.startDate=undefined;this.endDate=undefined;this.days="00";this.hours="00";this.minutes="00";this.seconds="00"}resetCountdown(){this.days="00";this.hours="00";this.minutes="00";this.seconds="00"}updateCountdown(){if(this.service.isCountdownFinished()){this.resetCountdown();this.countdownFinished.emit("finished");return}const{daysDiff:t,hoursDiff:s,minutesDiff:e,secondsDiff:i}=this.service.getTimeDifference();this.days=String(t).padStart(2,"0");this.hours=String(s).padStart(2,"0");this.minutes=String(e).padStart(2,"0");this.seconds=String(i).padStart(2,"0");requestAnimationFrame(this.updateCountdown.bind(this))}disconnectedCallback(){if(!this.service)return;this.service.stopCountdown()}loadCountdown(){if(!this.startDate||!this.endDate)return;try{this.service=new a(new Date(Number(this.startDate)||this.startDate),new Date(Number(this.endDate)||this.endDate));this.updateCountdown()}catch(t){this.resetCountdown()}}watchStartDateChange(){this.loadCountdown()}watchEndDateChange(){this.loadCountdown()}componentWillLoad(){this.loadCountdown()}render(){return e(i,{key:"5980d5ef2a2f14f638d926f80a8524f8266f7a36",class:"timer"},e("div",{key:"94b24230bb1048d03446d9756460f5e742623550",class:"cell"},e("p",{key:"40c179bb37e5d9aada5597f9d2aa83a7f1a7109d",class:"time"},this.days),e("p",{key:"47bbb22bb5d7c8aeef88200a67ef35e1f3507823",class:"unit"},"dias")),e("div",{key:"f7bb5366594dafad9a9f0aa6f81b539c73692f72",class:"cell"},e("p",{key:"306245bce024894da156fe374929f6e6f0c13f2f",class:"time"},this.hours),e("p",{key:"52cd96154a3b4d8c3df8626e1698fc5f2434d25e",class:"unit"},"horas")),e("div",{key:"1369d68ed70c0ae3697ad2ecd06a8b507cd34d32",class:"cell"},e("p",{key:"2b71b6e58bd8ded613b490285e581fc3a50bed00",class:"time"}," ",this.minutes),e("p",{key:"efe925ee7cf20843064347050f50edec45043b63",class:"unit"},"minutos")),e("div",{key:"6881cb920da892a3507feb007158b06bd85a4716",class:"cell"},e("p",{key:"298e8be88146105e76b5cea2b8514b498a8b770e",class:"time"},this.seconds),e("p",{key:"66f70f7213c30f86f327f3d4c5d49b55d8a1db8a",class:"unit"},"segundos")))}static get watchers(){return{startDate:["watchStartDateChange"],endDate:["watchEndDateChange"]}}};c.style=h;export{c as front_countdown};
//# sourceMappingURL=p-41d36507.entry.js.map