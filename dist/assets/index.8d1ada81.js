import{p as e,a,c as t,b as n,t as o,d as r,o as s,r as l,e as c,f as i,g as d,h as u,w as p,n as m,i as v,j as f,k as b,l as g}from"./vendor.2b8dde2f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const h={};const y={name:"HelloWorld",props:{msg:{type:String,default:""}}};e("data-v-cecceb7c");const k={class:"row"},x={class:"col text-center"},E={class:"msg"},_=n("p",null,[r(" A project setup using vue-cli, created to easily scaffold new Vue.js projects."),n("br"),r(" Find out more at "),n("a",{class:"custom",href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"},"vue-cli documentation"),r(". ")],-1);a(),y.render=function(e,a,r,l,c,i){return s(),t("div",k,[n("div",x,[n("h1",E,o(r.msg),1),_])])},y.__scopeId="data-v-cecceb7c";const N={name:"Home",components:{HelloWorld:y}},j={class:"container"},w=n("div",{class:"text-center"},[n("img",{alt:"Vue logo",src:"/assets/logo.03d6d6da.png",class:"text-center"})],-1);N.render=function(e,a,n,o,r,i){const d=l("hello-world");return s(),t("div",j,[w,c(d,{msg:"Welcome to Vue.js 3 Vite starter template"})])};const C=d({linkActiveClass:"active",history:i(),routes:[{path:"/",name:"Home",component:N,meta:{layout:"default"}},{path:"/about",name:"About",component:()=>{return e=()=>import("./About.06ab6036.js"),(a=["assets/About.06ab6036.js","assets/vendor.2b8dde2f.js"])&&0!==a.length?Promise.all(a.map((e=>{if((e=`/${e}`)in h)return;h[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=a?"stylesheet":"modulepreload",a||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),a?new Promise(((e,a)=>{n.addEventListener("load",e),n.addEventListener("error",a)})):void 0}))).then((()=>e())):e();var e,a},meta:{layout:"default"}}]}),L=u({state:()=>({}),mutations:{},actions:{},modules:{}}),A={data:()=>({navbarExpanded:!1}),methods:{toggleNavbar(){this.navbarExpanded=!this.navbarExpanded},collapseNavbar(){this.navbarExpanded=!1}}},D={class:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},$={class:"container"},H=r("ProjectName"),P=["aria-expanded"],V=[n("span",{class:"navbar-toggler-icon"},null,-1)],W={class:"navbar-nav mr-auto"},I={class:"nav-item"},O=r("Home"),S={class:"nav-item"},q=r("About");A.render=function(e,a,o,r,i,d){const u=l("router-link");return s(),t("nav",D,[n("div",$,[c(u,{to:"/",class:"navbar-brand",onClick:d.collapseNavbar},{default:p((()=>[H])),_:1},8,["onClick"]),n("button",{class:m(["navbar-toggler",!i.navbarExpanded&&"collapsed"]),type:"button","aria-controls":"navbarDefault","aria-expanded":i.navbarExpanded,"aria-label":"Toggle navigation",onClick:a[0]||(a[0]=(...e)=>d.toggleNavbar&&d.toggleNavbar(...e))},V,10,P),n("div",{id:"navbarDefault",class:m(["collapse navbar-collapse",i.navbarExpanded&&"show"])},[n("ul",W,[n("li",I,[c(u,{to:"/",class:"nav-link",onClick:d.collapseNavbar},{default:p((()=>[O])),_:1},8,["onClick"])]),n("li",S,[c(u,{to:"/about",class:"nav-link",onClick:d.collapseNavbar},{default:p((()=>[q])),_:1},8,["onClick"])])])],2)])])};const F={},T={class:"footer"},K=[n("div",{class:"container"},[n("span",null,"Developed by"),r(),n("a",{href:"https://github.com/kouts",target:"_blank",rel:"noopener"},"@kouts")],-1)];F.render=function(e,a){return s(),t("footer",T,K)};const M={components:{DefaultNav:A,DefaultFooter:F}},R={class:"default-page-wrapper"};M.render=function(e,a,n,o,r,i){const d=l("default-nav"),u=l("default-footer");return s(),t("div",R,[c(d),v(e.$slots,"default"),c(u)])};const z={computed:{layout(){return`layout-${this.$route.meta.layout||"default"}`}}},B={id:"app"};z.render=function(e,a,n,o,r,i){const d=l("router-view");return s(),t("div",B,[(s(),f(b(i.layout),null,{default:p((()=>[c(d)])),_:1}))])};const G=g(z);G.component("LayoutDefault",M),G.use(L),G.use(C),G.mount("#app");