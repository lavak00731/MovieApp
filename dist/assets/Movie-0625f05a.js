import{N as d}from"./NavBar-a89850f7.js";import{_,h as v,o,c as s,a as t,i as h,t as a,F as i,r as m,p as u,k as g}from"./index-c563d02f.js";async function f(e){try{return await await(await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=26b4b0ba1ea14cc6730d7cff2ef58bc6&language=en-US`)).json()}catch(n){throw new Error(n)}}const b={props:["id"],components:{navbar:d},data:()=>({movie:{}}),created(){f(this.id).then(e=>{this.movie=e})}},w=e=>(u("data-v-0456eacc"),e=e(),g(),e),y={key:0,class:"movie-wrapper"},k={class:"row"},$={class:"col"},S=["src","alt"],B={class:"col"},I={class:"genre text-start"},N=w(()=>t("strong",null,"Genre: ",-1)),j={class:"text-end"},D={class:"blockquote"},M={class:"overview text-start"},q={key:1};function E(e,n,c,r,F,K){const l=v("navbar");return o(),s(i,null,[t("header",null,[h(l)]),e.movie?(o(),s("div",y,[t("h1",null,a(e.movie.title),1),t("div",k,[t("div",$,[t("img",{src:`https://image.tmdb.org/t/p/w500/${e.movie.poster_path}`,alt:e.movie.title},null,8,S)]),t("div",B,[t("p",I,[N,(o(!0),s(i,null,m(e.movie.genres,p=>(o(),s("span",null,a(p.name),1))),256))]),t("figure",j,[t("blockquote",D,[t("p",null,a(e.movie.tagline),1)])]),t("p",M,a(e.movie.overview),1)])])])):(o(),s("div",q," Loading... "))],64)}const C=_(b,[["render",E],["__scopeId","data-v-0456eacc"]]);export{C as default};
