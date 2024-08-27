(()=>{"use strict";var e={3551:(e,t,r)=>{r.d(t,{A:()=>a});const a=()=>{const{dateFormat:e}=window.wteL10n,t={selectedPackage:null,selectedDate:e(null),selectedTime:e(null),packageCategories:{},travelerRecord:{},availablePackages:[],availableTimes:[],extraServices:{},loading:!0,defaultDateFormat:"YYYY-MM-DD",cart:{},formatPrice:function(e){const{currency:t,baseCurrency:r,currencySymbol:a,format:{number:c,price:n}}=wteL10n;let o={[r]:1};if("undefined"!=typeof wteCc&&wteCc?.code)for(let e in wteCc.code)o={...o,[wteCc.code[e]]:wteCc.rate[e]};return e*=+o[t],wteL10n.helpers.priceFormat(e,t,a,n,+c.decimal,c.decimalSeparator,c.thousandSeparator)},groupPricings:{},cartTotal:{travelers:0}};return Redux.createStore(((e=t,r)=>{switch(r.type){case"SET_TRIP":return{...e,trip:r.data};case"UPDATE_STORE":return{...e,...r.data};case"SET_DATE":return{...e,selectedDate:r.date};case"SET_TIME":return{...e,selectedTime:r.data};case"SET_PACKAGE":return{...e,selectedPackage:r.data};case"SET_TRAVELER_RECORD":return{...e,travelerRecord:r.data};default:return e}}),Redux.applyMiddleware((e=>t=>r=>"function"==typeof r?r(e.dispatch,e.getState):t(r))))}},1455:e=>{e.exports=window.wp.apiFetch},8490:e=>{e.exports=window.wp.domReady}},t={};function r(a){var c=t[a];if(void 0!==c)return c.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{r(3551).A;var e=r(8490),t=r.n(e),a=r(1455),c=r.n(a);(()=>{const{wpapi:{root:e,versionString:t},tripID:r}=window.wtePreFetch,a=c()({path:"/wp/v2/trip/"+r+"?context=view"}).then((e=>e)),n=c()({path:"/wp/v2/package-categories?per_page=100"}).then((e=>e)),o=c()({path:`/wp/v2/packages/?trip_id=${r}&per_page=100`}).then((e=>e));Promise.all([a,n,o]).then((async e=>{const[t,r,a]=e;window.wtePreFetch.data={trip:t,tripPackages:a,pricingCategories:r}}))})(),t()((()=>{document.getElementById("wte__booking")}))})()})();