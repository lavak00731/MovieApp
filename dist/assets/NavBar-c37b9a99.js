import{h as v,o as i,c as u,a as e,i as d,j as p,F as b,r as m,g as h,p as g,k as f}from"./index-0f034218.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";async function k(t){const s=`https://api.themoviedb.org/3/search/movie?api_key=26b4b0ba1ea14cc6730d7cff2ef58bc6&language=en-US&query=${t}&page=1`,r=encodeURI(s);try{return await await(await fetch(r)).json()}catch(l){throw new Error(l)}}function y(t,a=300){let s;return(...r)=>{clearTimeout(s),s=setTimeout(()=>{t.apply(this,r)},a)}}const w={data:()=>({searchResult:{}}),methods:{inputSearch:function(t){t.target.value.length<=0||(t.preventDefault(),y(k(t.target.value).then(a=>{this.searchResult=a})))},logout:function(){const t=this.$router;localStorage.setItem("isLogged","false"),t.replace("/login")}}},_=t=>(g("data-v-38ac3757"),t=t(),f(),t),x={class:"navbar navbar-expand-lg bg-light"},I={class:"container-fluid"},C=_(()=>e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),N={class:"collapse navbar-collapse",id:"navbarSupportedContent"},j={class:"navbar-nav me-auto mb-2 mb-lg-0"},B={class:"nav-item"},F={class:"nav-item"},R=_(()=>e("li",{class:"nav-item"},[e("span",{class:"nav-link"},"Welcome Ezequiel")],-1)),T={class:"nav-item"},D={class:"d-flex",role:"search"},E={id:"datalistOptions"},H=["value"],L=_(()=>e("button",{class:"btn btn-outline-success",type:"submit"},"Search",-1));function V(t,a,s,r,l,o){const c=v("router-link");return i(),u("nav",x,[e("div",I,[d(c,{class:"navbar-brand",to:{name:"Home"}},{default:p(()=>[h("MovieApp")]),_:1}),C,e("div",N,[e("ul",j,[e("li",B,[d(c,{class:"nav-link",to:{name:"Home"}},{default:p(()=>[h("Home")]),_:1})]),e("li",F,[d(c,{class:"nav-link",to:{name:"Favorites"}},{default:p(()=>[h("Favorites")]),_:1})]),R,e("li",T,[e("button",{type:"button",class:"btn btn-danger nav-link",onClick:a[0]||(a[0]=(...n)=>o.logout&&o.logout(...n))},"Logout")])]),e("form",D,[e("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",list:"datalistOptions",onInput:a[1]||(a[1]=(...n)=>o.inputSearch&&o.inputSearch(...n))},null,32),e("datalist",E,[(i(!0),u(b,null,m(t.searchResult.results,n=>(i(),u("option",{value:n.title},null,8,H))),256))]),L])])])])}const K=S(w,[["render",V],["__scopeId","data-v-38ac3757"]]);export{K as N};
