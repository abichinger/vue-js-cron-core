import{_ as k,I as s,o as n,c as r,a as g,w as m,b as u,F as d,l as i,t as _,r as x,q as f,d as b,a3 as C,m as h}from"./app.32f68595.js";const B={setup(){const a=[{name:"Light",component:"cron-light"},{name:"Vuetify",component:"cron-vuetify"},{name:"Element Plus",component:"cron-element-plus"},{name:"Ant",component:"cron-ant"}],l=["en","de"],v=a[0],e=p=>{let t=a.map(c=>c.name).indexOf(p);return t=t>=0?t:0,a[t]};return{flavor:s(v),flavors:a,selectFlavor:e,text:s(v.name),locales:l,locale:s("en"),value:s("* * * * *")}}},F={class:"cron-demo"},N=u("p",null,"Flavor",-1),D=u("p",null,"Locale",-1),L={class:"mb-2"},U={class:"text-lightest mb-5"};function w(a,l,v,e,p,t){const c=x("v-btn"),V=x("v-btn-toggle");return n(),r("div",F,[N,g(V,{modelValue:e.text,"onUpdate:modelValue":l[0]||(l[0]=o=>e.text=o),tile:"",color:"secondary",group:"",density:"compact",class:"mb-2 elevation-5"},{default:m(()=>[(n(!0),r(d,null,i(e.flavors,o=>(n(),f(c,{value:o.name,key:o.name,onClick:y=>e.flavor=o},{default:m(()=>[b(_(o.name),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["modelValue"]),D,g(V,{modelValue:e.locale,"onUpdate:modelValue":l[1]||(l[1]=o=>e.locale=o),tile:"",color:"secondary",group:"",density:"compact",class:"mb-10 elevation-5"},{default:m(()=>[(n(!0),r(d,null,i(e.locales,o=>(n(),f(c,{value:o,key:o},{default:m(()=>[b(_(o),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),u("p",L,[(n(!0),r(d,null,i(e.locales,o=>(n(),r(d,{key:o},[o==e.locale?(n(),f(C(e.flavor.component),{key:0,modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=y=>e.value=y),locale:e.locale},null,8,["modelValue","locale"])):h("",!0)],64))),128))]),u("p",U," cron expression: "+_(e.value),1)])}var q=k(B,[["render",w],["__file","cron-demo.vue"]]);export{q as default};