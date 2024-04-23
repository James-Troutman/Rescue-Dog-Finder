(function(){"use strict";var e={5069:function(e,n,o){var t=o(5130),r=o(6768);const i={id:"dog-app"},a=(0,r.Lk)("div",{id:"main-header"},[(0,r.Lk)("h1",{id:"title"},[(0,r.eW)("Four-Legged Friend "),(0,r.Lk)("span",{id:"finder"},"Finder")])],-1);function d(e,n,o,t,d,s){const c=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[a,(0,r.bF)(c)])}var s={name:"App",components:{}},c=o(1241);const u=(0,c.A)(s,[["render",d]]);var p=u,l=o(1175),f=o(1387);const g={id:"search-form"},h=(0,r.Lk)("h1",{id:"home-header"},"Find an Adoptable Dog Near You",-1),v=(0,r.Lk)("input",{type:"Submit",id:"submit",value:"Search"},null,-1);function m(e,n,o,i,a,d){const s=(0,r.g2)("DogCard");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",g,[h,(0,r.Lk)("form",{onSubmit:n[1]||(n[1]=(0,t.D$)(((...e)=>d.search&&d.search(...e)),["prevent"]))},[(0,r.bo)((0,r.Lk)("input",{id:"text-box","onUpdate:modelValue":n[0]||(n[0]=e=>a.zip=e),placeholder:"Please Enter Your Zip Code"},null,512),[[t.Jo,a.zip]]),v],32)]),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.dogs,(e=>((0,r.uX)(),(0,r.Wv)(s,{id:"dog-card",key:e.id,dog:e},null,8,["dog"])))),128))])}var b=o(4232);const k={id:"dog-card"},y={id:"dog-img-container"},L=["src"],w={id:"dog-details"},C={id:"dog-name"},O={id:"dog-breed"},_={id:"dog-age"},j={id:"dog-distance"},A={class:"info-page-btns"};function D(e,n,o,t,i,a){return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("div",y,[(0,r.Lk)("img",{id:"dog-image",src:o.dog.photo},null,8,L)]),(0,r.Lk)("div",w,[(0,r.Lk)("h2",C,"Name: "+(0,b.v_)(o.dog.name),1),(0,r.Lk)("h3",O,"Breed: "+(0,b.v_)(o.dog.breed),1),(0,r.Lk)("h3",_,"Age: "+(0,b.v_)(o.dog.age),1),(0,r.Lk)("p",j,(0,b.v_)(o.dog.distance)+" miles away",1),(0,r.Lk)("div",A,[(0,r.Lk)("button",{id:"more-info-button",onClick:n[0]||(n[0]=e=>a.openInNewTab(o.dog.url))},"Get More Info About This Dog")])])])}var E={props:{dog:{type:Object,required:!0}},methods:{openInNewTab(e){window.open(e,"_blank")}}};const F=(0,c.A)(E,[["render",D]]);var T=F,x={data(){return{zip:"",dogs:[]}},components:{DogCard:T},methods:{async search(){try{const e=await fetch("https://api.petfinder.com/v2/oauth2/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:"mvgH7i4YnXRURzq2tTH8wTkGD7t8RWiChFJ3eWCcCBy632SzId",client_secret:"f7tStA6eC14xrRree1ZMMZyFjhyVfI2v0SPJYLZO"})}),{access_token:n}=await e.json(),o=await fetch(`https://api.petfinder.com/v2/animals?type=dog&location=${this.zip}&output=basic&format=json&limit=75`,{headers:{Authorization:`Bearer ${n}`}}),t=await o.json();console.log(t),this.dogs=t.animals.filter((e=>e.photos&&e.photos.length>0)).filter((e=>!e.name.includes("HOLD"))).map((e=>({id:e.id,name:e.name.split(" ")[0],breed:e.breeds.primary,age:e.age,description:e.description,photo:e.photos&&e.photos.length>0?e.photos[0].small:null,distance:Math.round(e.distance),url:e.url}))),this.dogs.sort(((e,n)=>e.distance-n.distance))}catch(e){console.error("Error: Could not access database",e)}}}};const S=(0,c.A)(x,[["render",m]]);var z=S;function X(e,n,o,t,i,a){const d=(0,r.g2)("DogCard");return(0,r.uX)(),(0,r.Wv)(d)}var I={components:{DogCard:T}};const M=(0,c.A)(I,[["render",X]]);var N=M;const P=[{path:"/",name:"home",component:z},{path:"/dogs",name:"dogs",component:N}],W=(0,f.aE)({history:(0,f.LA)(),routes:P});var J=W;const R=(0,t.Ef)(p);R.use(J),R.use(l["default"]),R.mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],i=e[u][2];for(var d=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(d=!1,i<a&&(a=i));if(d){e.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,r,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,a=t[0],d=t[1],s=t[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(s)var u=s(o)}for(n&&n(t);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},t=self["webpackChunkdog_rescue_map"]=self["webpackChunkdog_rescue_map"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(5069)}));t=o.O(t)})();
//# sourceMappingURL=app.c7d07ab2.js.map