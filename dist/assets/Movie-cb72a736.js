import{N as d}from"./NavBar-c4033341.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{h as v,o as t,c as s,a as o,i as m,t as a,F as i,r as h,p as u,k as g}from"./index-e2907c35.js";async function f(e){try{return await await(await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=26b4b0ba1ea14cc6730d7cff2ef58bc6&language=en-US`)).json()}catch(n){throw new Error(n)}}const b={props:["id"],components:{navbar:d},data:()=>({movie:{}}),created(){f(this.id).then(e=>{this.movie=e})}},w=e=>(u("data-v-42639c73"),e=e(),g(),e),y={key:0,class:"movie-wrapper"},k={class:"row"},$={class:"col"},S=["src","alt"],B={class:"col"},I={class:"genre text-start"},N=w(()=>o("strong",null,"Genre: ",-1)),j={class:"text-end"},D={class:"blockquote"},M={class:"overview text-start"},q={key:1};function E(e,n,r,c,F,K){const p=v("navbar");return t(),s(i,null,[o("header",null,[m(p)]),e.movie?(t(),s("div",y,[o("h1",null,a(e.movie.title),1),o("div",k,[o("div",$,[o("img",{src:`https://image.tmdb.org/t/p/w500/${e.movie.poster_path}`,alt:e.movie.title},null,8,S)]),o("div",B,[o("p",I,[N,(t(!0),s(i,null,h(e.movie.genres,l=>(t(),s("span",null,a(l.name),1))),256))]),o("figure",j,[o("blockquote",D,[o("p",null,a(e.movie.tagline),1)])]),o("p",M,a(e.movie.overview),1)])])])):(t(),s("div",q," Loading... "))],64)}const G=_(b,[["render",E],["__scopeId","data-v-42639c73"]]);export{G as default};