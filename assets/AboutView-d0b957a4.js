import{d as u,r as d,c as s,o as v,a as _,b as c,e as t,t as m,F as b,u as f,f as a,_ as g,g as x}from"./index-8306d594.js";const C=u({__name:"CounterButton",setup(r){f(p=>({"094b3162":a(n),"78a35184":a(l)}));const e=d(0),n=s(()=>e.value>=0?"green":"red"),l=s(()=>e.value*10+"px"),i=()=>e.value++;return v(()=>{console.log("Initial count is:",e.value)}),(p,o)=>(_(),c(b,null,[t("button",{onClick:o[0]||(o[0]=h=>e.value--)},"-"),t("span",null,"Count is "+m(e.value),1),t("button",{onClick:i},"+")],64))}});const B=g(C,[["__scopeId","data-v-a134126b"]]),y={class:"about"},V=t("h1",null,"This is an about page",-1),w=u({__name:"AboutView",setup(r){return(e,n)=>(_(),c("div",y,[V,x(B)]))}});export{w as default};