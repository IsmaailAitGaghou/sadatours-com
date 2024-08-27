(()=>{var t,e,n={2664:()=>{window.wteL10n=window.wteL10n||{},window.wteL10n.api=window.wteapi=window.WTEApi=class{constructor(){}static async get(t,e={},n={}){let a={packages:this.getPackages,categories:this.getPackageCategories,trip:this.getTrip};return wteL10n.locale&&(e.lang=wteL10n.locale),this[t]||(this[t]="trip"==t?await a[t](e,n):lodash.keyBy(await a[t](e,n),"id")),this[t]}static async getTrip(t,e){const n=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}trip/${t.id}?context=${t.context||"view"}`,e);return await n.json()}static async getPackageCategories(t){const e=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}package-categories?per_page=100`);return await e.json()}static async getPackages(t,e){var n;const a=Object.entries(t).map((([t,e])=>`${t}=${e}`)).join("&"),i=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}packages/${null!==(n=t.id)&&void 0!==n?n:`?${a}`}`,e);return await i.json()}static async addNewPackage(t){const e=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}packages`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":wteL10n.wpapi.nonce},body:JSON.stringify({title:"Untitled Package",status:"publish",post_type:"trip-packages",...t})});return await e.json()}static async removePackage(t){const e=await fetch(`${wteL10n.wpapi.root+wteL10n.wpapi.versionString}packages/${t.id}`,{method:"DELETE",headers:{"Content-Type":"application/json","X-WP-Nonce":wteL10n.wpapi.nonce}});return await e.json()}}},6842:(t,e,n)=>{"use strict";var a={};n.r(a),n.d(a,{calculateGrandTotal:()=>l,numberFormat:()=>d,phpToMomentDF:()=>m,priceFormat:()=>u,wteGetFormatedPrice:()=>o,wteGetFormatedPriceWithCurrencyCode:()=>r,wteGetFormatedPriceWithCurrencyCodeSymbol:()=>s,wteGetFormatedPriceWithCurrencySymbol:()=>c});var i=n(8726);n(2664);function o(t,e,n){return t=t||0,e=e||!0,n=n||0,"undefined"!=typeof WTE_CC_convData&&WTE_CC_convData.rate&&(t*=parseFloat(WTE_CC_convData.rate)),0==e?t:(t=(t=(t=parseFloat(t)).toFixed(n)).replace(".00",""),t=addCommas(t))}function r(t,e,n,a){return wteL10n.priceFormat(t).format(!0,!!n)}function s(t,e,n,a,i){return wteL10n.priceFormat(t).format(!1,!!a)}function c(t,e,n,a){return wteL10n.priceFormat(t).format(!1,!!n)}function l(){return parseFloat(window.wte.trip.travellersCost)+parseFloat(window.wte.trip.extraServicesCost)}function d(t,e=2,n=".",a=","){try{e=Math.abs(e),e=isNaN(e)?2:e;const i=t<0?"-":"";let o=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),r=o.length>3?o.length%3:0;return i+(r?o.substr(0,r)+a:"")+o.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+a)+(e?n+Math.abs(t-o).toFixed(e).slice(2):"")}catch(t){console.log(t)}}function u(t,e,n,a="%CURRENCY_SYMBOL%%FORMATED_AMOUNT%",i=2,o=".",r=",",s=!1){let c={"%CURRENCY_CODE%":s?e:`<span class="wpte-currency-code currency">${e}</span>`,"%CURRENCY_SYMBOL%":s?n:`<span class="wpte-currency-code currency">${n}</span>`,"%AMOUNT%":s?t:`<strong class="wpte-price amount">${t}</strong>`,"%FORMATED_AMOUNT%":s?d(t,i,o,r):`<strong class="wpte-price amount">${d(t,i,o,r)}</strong>`};return a.split(/(%\w+%)/g).reduce(((t="",e)=>c[e]?t+c[e]:t+e))}function m(t){let e={d:"DD",D:"ddd",j:"D",l:"dddd",w:"d",F:"MMMM",M:"MMM",m:"MM",n:"M",S:"o",jS:"Do",Y:"YYYY",y:"YY"};return t.match(/(\\?\\?[\w\W])/g)?.map((t=>e[t]||t)).join("")}window.wteL10n.util=window.wteutil=i.A,window.wteL10n.ui=window.wteui=window.wteL10n.ui||{},window.wteL10n.ui.Accordion=window.wteui.Accordion=class{constructor(t){this.element=t,i.A.addClass(this.element,"wte-accordion-initialized"),this.items=i.A.getChildrenByClassName(this.element,"wte-accordion-item"),this.version=this.element.getAttribute("data-version")?"-"+this.element.getAttribute("data-version"):"",this.showClass="wte-accordion-open",this.animateHeight="on"==this.element.getAttribute("data-animation"),this.multiItems=!("off"==this.element.getAttribute("data-multi-items")),this.deepLinkOn="on"==this.element.getAttribute("data-deep-link"),this.initAccordion()}initAccordion(){for(var t=0;t<this.items.length;t++){var e=this.items[t].getElementsByClassName("wte-accordion-button")[0];if(e){var n=this.items[t].getElementsByClassName("wte-accordion-collapse")[0],a=i.A.hasClass(this.items[t],this.showClass)?"true":"false";i.A.setAttributes(e,{"aria-expanded":a,"aria-controls":"accordion-content-"+t,id:"accordion-header-"+t}),i.A.addClass(e,"wte-accordion-trigger"),i.A.setAttributes(n,{"aria-labelledby":"accordion-header-"+t,id:"accordion-content-"+t})}}this.initAccordionEvents(),this.initDeepLink()}initAccordionEvents(){var t=this;this.element.addEventListener("click",(function(e){var n=e.target.closest(".wte-accordion-trigger");n&&i.A.getIndexInArray(t.items,n.closest(".wte-accordion-item"))>=0&&t.triggerAccordion(n)}))}triggerAccordion(t){var e="true"===t.getAttribute("aria-expanded");this.animateAccordion(t,e,!1),!e&&this.deepLinkOn&&history.replaceState(null,"","#"+t.getAttribute("aria-controls"))}animateAccordion(t,e,n){var a=t.closest(".wte-accordion-item"),o=a.getElementsByClassName("wte-accordion-collapse")[0],r=e?"false":"true";i.A.toggleClass(a,this.showClass,!e),t.setAttribute("aria-expanded",r),o&&this.resetContentVisibility(a,o,e),(!this.multiItems&&!e||n)&&this.closeSiblings(a)}resetContentVisibility(t,e,n){i.A.toggleClass(t,this.showClass,!n),e.removeAttribute("style"),n&&!this.multiItems&&this.moveContent()}closeSiblings(t){for(var e=i.A.getIndexInArray(this.items,t),n=0;n<this.items.length;n++)if(i.A.hasClass(this.items[n],this.showClass)&&n!=e)return this.animateAccordion(this.items[n].getElementsByClassName("wte-accordion-trigger")[0],!0,!1),!1}moveContent(){var t=this.element.getElementsByClassName(this.showClass);if(0!=t.length){var e=t[0].getBoundingClientRect();if(e.top<0||e.top>window.innerHeight){var n=window.scrollY||document.documentElement.scrollTop;window.scrollTo(0,e.top+n)}}}initDeepLink(){if(this.deepLinkOn){var t=window.location.hash.substr(1);if(t&&""!=t){var e=this.element.querySelector('.wte-accordion-trigger[aria-controls="'+t+'"]');e&&"true"!==e.getAttribute("aria-expanded")&&(this.animateAccordion(e,!1,!0),setTimeout((function(){e.scrollIntoView(!0)})))}}}},window.wteL10n.helpers=window.wtehelpers=a,window.addCommas||(window.addCommas=t=>{for(var e=(t+="").split("."),n=e[0],a=e.length>1?"."+e[1]:"",i=/(\d+)(\d{3})/;i.test(n);)n=n.replace(i,"$1"+WPTE_Price_Separator+"$2");return n+a}),window.wteGetFormatedPrice=o,window.wteGetFormatedPriceWithCurrencyCode=r,window.wteGetFormatedPriceWithCurrencyCodeSymbol=s,window.wteGetFormatedPriceWithCurrencySymbol=c,window.calculateGrandTotal=l;const w=function(t){const{currency:e,baseCurrency:n,currencySymbol:a,format:{number:i,price:o}}=wteL10n;let r={"%CURRENCY_CODE%":`${e}`,"%CURRENCY_SYMBOL%":`${a}`,"%AMOUNT%":""+(t*=+{[n]:1}[e]),"%FORMATED_AMOUNT%":`${d(t,+i.decimal,i.decimalSeparator,i.thousansSeparator)}`};return o.split(/(%\w+%)/g).reduce(((t="",e)=>r[e]?t+r[e]:t+e))};i.A.on("click",".wte-popper button",(function(t){let e=this.closest(".wte-popper");e&&i.A.toggleClass(e,"active",!i.A.hasClass(e,"active"))}));const p=function(t){if(!i.A.hasClass(t,"wte-price-field")){let e=t.parentElement,n=document.createElement("input");n.type="hidden",n.name=t.name,n.value=t.value,t.name="",t.value=w(t.value),e.appendChild(n),t.addEventListener("focus",(function(){t.value=n.value})),t.addEventListener("blur",(function(){n.value=t.value,t.value=w(t.value)})),t.classList.add("wte-price-field")}};function h(t){var e=wteL10n.version,n=document.querySelectorAll("[class*=_wte_update_notice_], [data-wte-update]");if(n)for(var a in n){var i=n[a];if(i.classList)if(i.classList.contains(`_wte_update_notice_${e}`))i.classList.remove(`_wte_update_notice_${e}`);else{var o=new RegExp(`^(wte_(new|updated|note)_${e})$`);if(i.dataset.wteUpdate.match(o)){var r=i.dataset.wteUpdate;i.classList.add(r),i.removeAttribute("data-wte-update")}}}}window.wteL10n.ui.priceField=p,document.addEventListener("wteEditPackageRender",(function(){document.querySelectorAll('[data-wte-field-type="price"]')?.forEach((function(t){p(t)}))})),i.A.on("change","[data-toggle-target]",(function(t){let e=document.querySelector(this.dataset.toggleTarget);e&&(this.checked?e.style.removeProperty("display"):e.style.display="none")})),i.A.on("click",".wpte-edit-booking-detail",(function(t){t.preventDefault(),this.closest(".wpte-block").querySelectorAll("select, input").forEach((function(t){t.dataset.attribName&&(t.name=t.dataset.attribName),t.dataset.attribValue&&(t.value=t.dataset.attribValue),t.dataset.attribType&&(t.type=t.dataset.attribType),t.disabled&&(t.disabled=!1),t.type&&(t.readOnly=!1)})),this.closest(".wpte-block").querySelectorAll(".show_on_edit").forEach((function(){this.style.removeProperty("display")}))})),i.A.on("click",".wte-email-template-updater",(function(t){t.preventDefault();var e=document.getElementById(this.dataset.target);e&&e.submit()})),document.addEventListener("wteSettingsTabContentLoaded",h),document.addEventListener("DOMContentLoaded",(t=>{h();var e=document.querySelectorAll(".wte-code");e&&e.forEach((function(t){t.dataset.height&&(t.style.height=t.dataset.height+"px"),hljs&&hljs.highlightBlock(t)})),i.A.on("click",".wte-onclick-toggler",(function(t){if(t.preventDefault(),this.dataset.target){var e=document.querySelector(this.dataset.target);e&&(Array.from(e.classList).includes("visible")?(e.classList.remove("visible"),e.style.display="none"):(e.style.removeProperty("display"),e.classList.add("visible")))}}))})),window.wteL10n=window.wteL10n||{};const g=function(t){this._value=t,this._getPriceFormat=function(){return wteL10n.format.price},this.get=function(){return this._value},this.format=function(t=!1,e=!0){const{currency:n,baseCurrency:a,currencySymbol:i,baseCurrencySymbol:o,format:{number:r,price:s}}=wteL10n;let c={[a]:1};if("undefined"!=typeof wteCc&&wteCc?.code&&e)for(let t in wteCc.code)c={...c,[wteCc.code[t]]:wteCc.rate[t]};let l=+this._value*(e?+c[n]:1),d=+r.decimal;if(l!==parseInt(l)){const[,t]=l.toString().split(".");d=t.length>d?t.length>2?2:t.length:d}return wtehelpers.priceFormat(l,e?n:a,e?i:o,s,d,r.decimalSeparator,r.thousandSeparator,t)}};window.wteL10n.priceFormat=window.wteL10n.priceFormat||function(t){return new g(t)};const f=function(t){this._time=t,this.get=function(){return this._time},this.set=function(t){this._time=t},this._getTimeFormat=function(){return wteL10n.helpers.phpToMomentDF(wteL10n.format.datetime.date)},this.format=function(t=null,e=!1){if(wteL10n.format.datetime.timezone,!this._time)return this._time;if(t)return moment(this._time).format(t);let n=moment(this._time).format(this._getTimeFormat());return n+=e?" at "+moment(this._time).format("h:mm A"):"",n},this.getDatewithOffset=function(t){if(this._time){let e=moment(this._time).utc().format("YYYY-MM-DDTHH:mm:ss")+t;return new Date(e)}}};window.wteL10n.dateFormat=window.wteL10n.dateFormat||function(t){return new f(t)}},8726:(t,e,n)=>{"use strict";function a(){}n.d(e,{A:()=>i}),a.hasClass=function(t,e){return t.classList?t.classList.contains(e):!!t.getAttribute("class").match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},a.addClass=function(t,e){var n=e.split(" ");t.classList?t.classList.add(n[0]):a.hasClass(t,n[0])||t.setAttribute("class",t.getAttribute("class")+" "+n[0]),n.length>1&&a.addClass(t,n.slice(1).join(" "))},a.removeClass=function(t,e){var n=e.split(" ");if(t.classList)t.classList.remove(n[0]);else if(a.hasClass(t,n[0])){var i=new RegExp("(\\s|^)"+n[0]+"(\\s|$)");t.setAttribute("class",t.getAttribute("class").replace(i," "))}n.length>1&&a.removeClass(t,n.slice(1).join(" "))},a.toggleClass=function(t,e,n){n?a.addClass(t,e):a.removeClass(t,e)},a.setAttributes=function(t,e){for(var n in e)t?.setAttribute&&t.setAttribute(n,e[n])},a.getChildrenByClassName=function(t,e){t.children;for(var n=[],i=0;i<t.children.length;i++)a.hasClass(t.children[i],e)&&n.push(t.children[i]);return n},a.getIndexInArray=function(t,e){return Array.prototype.indexOf.call(t,e)},a.on=function(t,e,n){document.addEventListener(t,(function(t){for(var a=t.target;a&&a!=this;a=a.parentNode)if(a.matches(e)){n.call(a,t);break}}),!1)};const i=a},4411:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});const a=function(t){const e=t.querySelectorAll(".tab-anchor-wrapper");function n(){var t=document.querySelectorAll("a[data-configuration]");t&&t.forEach((t=>{var e=".nb-"+t.getAttribute("data-configuration")+"-configurations",n=document.querySelector(e);t.closest(".tab-anchor-wrapper").appendChild(n)}))}function a(){var t=document.querySelectorAll(".nb-configurations"),e=document.querySelector("#tabs-container .tab-content");t&&t.forEach((t=>{e.appendChild(t)}))}e&&Array.from(e).forEach((function(n){n.querySelector(".nb-tab-trigger").addEventListener("click",(function(){Array.from(e).forEach((t=>{t.classList.remove("nav-tab-active");let e=t.querySelector(".nb-tab-trigger");e.classList.remove("nav-tab-active");let n=document.getElementById(`nb-${e.dataset.configuration}-configurations`);n&&(n.style.display="none")}));let a=this.dataset.target,i=null;i=a?document.getElementById(a):document.getElementById(`nb-${this.dataset.configuration}-configurations`),n.classList.add("nav-tab-active"),this.classList.add("nav-tab-active"),i&&(i.style.display="block"),(t.classList.contains("in-mobile")||t.classList.contains("wpte-tabs-sticky"))&&i.scrollIntoView({behavior:"smooth"})}))})),window.addEventListener("resize",(function(){const t=document.getElementById("tabs-container");window.innerWidth<768&&!t.classList.contains("in-mobile")&&(t.classList.add("in-mobile"),n()),window.innerWidth>=768&&t.classList.contains("in-mobile")&&(t.classList.remove("in-mobile"),a())})),window.addEventListener("scroll",(function(){var t=document.querySelectorAll(".wpte-tabs-container.wpte-tabs-sticky .tab-content .nb-configurations"),e={},n=0;Array.prototype.forEach.call(t,(function(t){e[t.id]=t.offsetTop}));var a=document.documentElement.scrollTop||document.body.scrollTop;for(n in e)if(e[n]<=a+100){const t=n.split("");var i=document.querySelector('[data-configuration="'+t[3]+'"]');document.querySelector(".nav-tab-active").classList.remove("nav-tab-active"),i.classList.add("nav-tab-active")}var o=document.querySelector(".wpte-tabs-container");a=document.documentElement.scrollTop||document.body.scrollTop,o&&o.classList.contains("wpte-tabs-sticky")&&(o.classList.toggle("fixed-header",o.offsetTop<=a),document.body.classList.toggle("wte-tabs-fixed",o.offsetTop<=a))})),window.innerWidth<768?n():a()}},1455:t=>{"use strict";t.exports=window.wp.apiFetch},8490:t=>{"use strict";t.exports=window.wp.domReady}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var o=a[t]={exports:{}};return n[t](o,o.exports,i),o.exports}i.m=n,i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((e,n)=>(i.f[n](t,e),e)),[])),i.u=t=>t+".js",i.miniCssF=t=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="wp-travel-engine:",i.l=(n,a,o,r)=>{if(t[n])t[n].push(a);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+o){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",e+o),s.src=n),t[n]=[a];var m=(e,a)=>{s.onerror=s.onload=null,clearTimeout(w);var i=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((t=>t(a))),e)return e(a)},w=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t+"../"})(),(()=>{var t={8982:0};i.f.j=(e,n)=>{var a=i.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((n,i)=>a=t[e]=[n,i]));n.push(a[2]=o);var r=i.p+i.u(e),s=new Error;i.l(r,(n=>{if(i.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,a[1](s)}}),"chunk-"+e,e)}};var e=(e,n)=>{var a,o,[r,s,c]=n,l=0;if(r.some((e=>0!==t[e]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);c&&c(i)}for(e&&e(n);l<r.length;l++)o=r[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=globalThis.webpackChunkwp_travel_engine=globalThis.webpackChunkwp_travel_engine||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),(()=>{"use strict";const t=()=>{if(document.querySelector(".wpte-tabs-container")){document.querySelector(".tab-inner-wrapper .tab-anchor-wrapper:first-child").classList.add("nav-tab-active");const t=document.getElementById("tabs-container");t&&new(0,i(4411).A)(t),Array.from(document.querySelectorAll(".tab_content")).forEach(((t,e)=>{t.style.display=0!==e?"none":"block"})),Array.from(document.querySelectorAll("ul.tabs li")).forEach((t=>{t.addEventListener("click",(function(){Array.from(document.querySelectorAll(".tab_content")).forEach((t=>t.style.display="none"));const t=this.getAttribute("rel");document.getElementById(t).style.display="block",Array.from(document.querySelectorAll("ul.tabs li")).forEach((t=>t.classList.remove("active"))),this.classList.add("active"),Array.from(document.querySelectorAll(".tab_drawer_heading")).forEach((t=>t.classList.remove("d_active"))),document.querySelector(".tab_drawer_heading[rel^='"+t+"']").classList.add("d_active")}))})),Array.from(document.querySelectorAll(".tab_drawer_heading")).forEach((t=>{t.addEventListener("click",(function(){Array.from(document.querySelectorAll(".tab_content")).forEach((t=>t.style.display="none"));const t=this.getAttribute("rel");document.getElementById(t).style.display="block",Array.from(document.querySelectorAll(".tab_drawer_heading")).forEach((t=>t.classList.remove("d_active"))),this.classList.add("d_active"),Array.from(document.querySelectorAll("ul.tabs li")).forEach((t=>t.classList.remove("active"))),document.querySelector("ul.tabs li[rel^='"+t+"']").classList.add("active")}))}));const e=document.querySelectorAll("ul.tabs li");e[e.length-1]?.classList.add("tab_last")}};var e=i(8490),n=i.n(e);i(6842);var a=i(8726);const o=()=>{document.addEventListener("DOMContentLoaded",(()=>{if(window.localStorage&&window.localStorage.getItem("wptravelengine_wishlists")){const t=JSON.parse(window.localStorage.getItem("wptravelengine_wishlists"));t?.map((t=>{document.querySelector(`[data-product="${t}"]`)?.classList.add("active")}))}})),a.A.on("click",".wishlist-toggle",(async function(t){const e=this;t.preventDefault();const n=e.classList.contains("active");let a=n?"DELETE":"POST";!n&&e.setAttribute("title","Already in wishlist"),n&&e.setAttribute("title","Add to wishlist");let i=e.dataset.product;e.classList.contains("wte-wishlist-remove-all")&&(i="all",a="DELETE");const o=await fetch(`${wteL10n.wpxhr.root}?action=wte_user_wishlist&wishlist=${i}&_nonce=${wteL10n.wpxhr.nonce}`,{method:a}),r=await o.json();if(r.success){if(window.localStorage&&window.localStorage.setItem("wptravelengine_wishlists",JSON.stringify(r.data.user_wishlists)),r.data.refresh)return void window.location.reload();this.classList.toggle("active",!n);const t=this.closest(".category-trips-single");t.closest("[data-wptravelengine-wishlists]")&&t.remove(),r?.data?.partials&&Object.entries(r.data.partials).forEach((([t,e])=>{let n=document.querySelector(t);n&&(n.innerHTML=e)}))}}))};const r=()=>{a.A.on("click","[data-thumbnail-toggler]",(function(t){var e;this.classList.toggle("active"),"map"==(e=this.closest("[data-thumbnail]")).dataset.thumbnail?e.dataset.thumbnail="default":e.dataset.thumbnail="map"}))};n()((()=>{(()=>{let t="1"==wteL10n?.rtl;const e=document.querySelectorAll(".wpte-trip-feat-img-gallery");e&&e.forEach((e=>{const n=e.classList.contains("single-trip-main-carousel"),a=e.classList.contains("is-autoplay");jQuery.fn.owlCarousel&&jQuery(e).owlCarousel({nav:!0,navigationText:["&lsaquo;","&rsaquo;"],items:1,autoplay:a,slideSpeed:300,paginationSpeed:400,center:!0,loop:!0,rtl:t,dots:!n})}))})(),t(),document.querySelectorAll(".wte-trip-vidgal-popup-trigger").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();let e=this.getAttribute("data-items");try{e=e?JSON.parse(e):[]}catch(t){console.error("Invalid JSON:",e),e=[]}jQuery?.fancybox.open(e,{buttons:["zoom","slideShow","fullScreen","close"]})}))})),o(),function(){var t=document.getElementById("wpte_price-toggle-btn-mb");if(t){var e=document.getElementById("wpte_price-toggle-btn-mb-layout-3"),n=t.closest(".wpte-booking-area"),a=n?.querySelector(".wpte-bf-price-wrap");function r(){n?.classList.remove("show"),t?.classList.remove("active")}t.onclick=function(){this.classList.toggle("active"),n?.classList.toggle("show"),a?.classList.toggle("show"),a?.style.maxHeight?a.style.maxHeight=null:a.style.maxHeight=a.scrollHeight+"px"};var i=document.getElementById("open-booking-modal");if(n&&(e&&e.addEventListener("click",(function(){r()})),i?.addEventListener("click",(function(){r()}))),n?.matches(".wpte-form-layout-2")&&window.matchMedia("(max-width: 1024px)").matches){var o=n.clientHeight;document.body.style.padding=`0 0 ${o}px`}}}(),function(){jQuery("body").on("keyup",".itinerary-content",(function(t){jQuery(this).siblings(".itinerary-content-inner").val(jQuery(this).val()),jQuery(this).siblings(".itinerary-content-inner").val("<p>"+jQuery(this).val().replace(/\n/g,"</p><p>")+"</p>")})),jQuery(document).on("click",".expand-all-itinerary",(function(t){t.preventDefault(),jQuery(".itinerary-row").children(".itinerary-content").slideToggle(350),jQuery(this).children("svg").hasClass("fa-toggle-on")?jQuery(this).children("svg").addClass("fa-toggle-off"):jQuery(this).children("svg").addClass("fa-toggle-on"),jQuery(".itinerary-row").children(".itinerary-content").toggleClass("show"),jQuery(".itinerary-row").find(".dashicons.dashicons-arrow-down.custom-toggle-tabs").toggleClass("open")}));var t=function(t,e=null){var n=t.querySelector(".itinerary-content"),a=t.querySelector(".accordion-tabs-toggle"),i=null===e?!a.classList.contains("active"):e,o=n.scrollHeight+.9;n.classList.toggle("show",i),n.style.maxHeight=i?o+"px":"0px",a.classList.toggle("active",i)},e=document.querySelector(".wte-trip-itinerary-v2");if(e){var n=document.getElementById("itinerary-toggle-button"),a=e.querySelectorAll(".itinerary-row");n&&n.addEventListener("change",(function(){a&&a.forEach((e=>{t(e,this.checked)}))})),a&&a.forEach((function(e){!function(t){var e=t.querySelector(".itinerary-content");e.classList.contains("show")||(e.style.maxHeight="0px")}(e),e.onclick=function(e){return function(n){n.target.closest(".wte-itinerary-head-wrap")&&t(e)}}(e)}))}let i=document.querySelectorAll(".itinerary-sleep-mode");i&&i.forEach((function(t){t.addEventListener("click",(function(t){let e=t.target.closest(".itinerary-content").querySelector(".content-additional-sleep-mode");e.style.display="flex"==e.style.display?"none":"flex"}))}))}(),jQuery(".accordion-tabs-toggle").next().hasClass("show"),jQuery(".accordion-tabs-toggle").next().removeClass("show"),jQuery(".accordion-tabs-toggle").next().slideUp(350),jQuery(document).on("click",".faq-row .accordion-tabs-toggle",(function(){var t=jQuery(this);t.siblings(".faq-content").toggleClass("show"),t.toggleClass("active"),t.siblings(".faq-content").slideToggle(350),t.find(".dashicons.dashicons-arrow-down.custom-toggle-tabs").toggleClass("open")})),jQuery(document).on("click",".expand-all-faq",(function(t){t.preventDefault(),jQuery(this).children("svg").hasClass("fa-toggle-off")&&jQuery(this).children("svg").toggleClass("fa-toggle-on"),jQuery(this).children("svg").hasClass("fa-toggle-on")&&jQuery(this).children("svg").toggleClass("fa-toggle-off"),jQuery(".faq-row .accordion-tabs-toggle").toggleClass("active"),jQuery(".faq-row").children(".faq-content").toggleClass("show"),jQuery(".faq-row").children(".faq-content").slideToggle(350),jQuery(".faq-row").find(".dashicons.dashicons-arrow-down.custom-toggle-tabs").toggleClass("open")})),jQuery(".wp-travel-engine-faq-tab-header input.checkbox").on("change",(function(){jQuery(this).is(":checked")?(jQuery(this).closest(".wp-travel-engine-faq-tab-header").siblings(".wp-travel-engine-faq-tab-content").children().addClass("row-active"),jQuery(".row-active").find(".accordion-tabs-toggle .rotator").addClass("open"),jQuery(".row-active").find(".accordion-tabs-toggle").addClass("active"),jQuery(".row-active").find(".faq-content").slideDown(),jQuery(".row-active").find(".faq-content").addClass("show")):(jQuery(this).closest(".wp-travel-engine-faq-tab-header").siblings(".wp-travel-engine-faq-tab-content").children().removeClass("row-active"),jQuery(".faq-row").find(".accordion-tabs-toggle .rotator").removeClass("open"),jQuery(".faq-row").find(".accordion-tabs-toggle").removeClass("active"),jQuery(".faq-row").find(".faq-content").slideUp(),jQuery(".faq-row").find(".faq-content").removeClass("show"))})),window.addEventListener("scroll",(()=>{if(document.body.matches(".wpte_has-sticky-booking-widget")){const t=document.querySelector(".wpte-booking-area-wrapper");if(t){const e=t.parentNode;let n=e.offsetTop;if(e.children.length>1)for(const t of e.children)n+=t.scrollHeight;window.scrollY>n?t.classList.add("is-sticky"):t.classList.remove("is-sticky")}}})),function(){jQuery('form[name="wte_enquiry_contact_form"]').submit((function(t){if(t.preventDefault(),jQuery("#wte_enquiry_contact_form").parsley().isValid()){jQuery("#enquiry_submit_button").prop("disabled",!0),jQuery("#redirect-url").val();var e=new FormData(this);jQuery.ajax({dataType:"json",type:"post",processData:!1,contentType:!1,url:wteL10n?.wpxhr?.root,data:e,success:function(t){jQuery(".success-msg, .failed-msg").html(""),t.success?jQuery(".success-msg").html(t.data.message).fadeIn("slow").delay("3000").fadeOut("3000",(function(){t.data.redirect&&(window.location.href=t.data.redirect)})):(jQuery(".failed-msg").html(t.data.message).delay("1000"),jQuery("#enquiry_submit_button").prop("disabled",!1))}})}})),jQuery("#wte-send-enquiry-message").click((function(t){t.preventDefault(),document.getElementById("wte_enquiry_form_scroll_wrapper").scrollIntoView({behavior:"smooth",block:"center"})}));const t=document.getElementById("wte_enquiry_contact_form");t&&"function"==typeof jQuery.fn.parsley&&jQuery(t).parsley()}(),document.querySelector(".tippy-exist")&&tippy(".tippy-exist",{content:t=>t.getAttribute("data-content"),allowHTML:!0}),r(),document.getElementById("open-booking-modal")&&i.e(650).then(i.bind(i,650))}))})()})();