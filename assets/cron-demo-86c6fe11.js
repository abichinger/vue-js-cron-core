import{w as U}from"./app-e8c9db92.js";import{_ as B,r as s,h as C,M as g,p as t,q as m,N as u,V as c,O as V,P as b,U as y,t as h,v as k,R as i}from"./framework-bdb2dae7.js";const L={setup(x){const a=[{name:"Light"},{name:"Vuetify"},{name:"Element Plus"},{name:"Ant"},{name:"Quasar"}],w=["en","de","pt","es","da","zh-cn"],o=["crontab","quartz"],v=s(a[0]),f=s("en"),l=s(o[0]),n=s(!1),_=d=>{let r=a.map(p=>p.name).indexOf(d);return r=r>=0?r:0,a[r]};return{src:C(()=>{const d={locale:f.value,format:l.value,"initial-value":l.value=="quartz"?"* * * * * *":"* * * * *",...n.value?{disabled:!0}:{}},r=new URLSearchParams(d),p="demo/"+v.value.name.replace(" ","-").toLowerCase()+"/index.html?"+r.toString();return U(p)}),flavor:v,flavors:a,selectFlavor:_,toggle:s(0),locales:w,locale:f,formats:o,format:l,disabled:n,value:s("* * * * *")}}},q={class:"cron-demo"},F=i("p",null,"Flavor",-1),N=i("p",null,"Locale",-1),z=i("p",null,"Format",-1),D=["src"];function P(x,a,w,o,v,f){const l=g("v-btn"),n=g("v-btn-toggle"),_=g("v-switch");return t(),m("div",q,[F,u(n,{modelValue:o.toggle,"onUpdate:modelValue":a[0]||(a[0]=e=>o.toggle=e),tile:"",color:"secondary",group:"",density:"compact",class:"mb-5 elevation-5",mandatory:""},{default:c(()=>[(t(!0),m(V,null,b(o.flavors,e=>(t(),y(l,{key:e.name,onClick:d=>o.flavor=e},{default:c(()=>[h(k(e.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["modelValue"]),N,u(n,{modelValue:o.locale,"onUpdate:modelValue":a[1]||(a[1]=e=>o.locale=e),tile:"",color:"secondary",group:"",density:"compact",class:"mb-5 elevation-5"},{default:c(()=>[(t(!0),m(V,null,b(o.locales,e=>(t(),y(l,{value:e,key:e},{default:c(()=>[h(k(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),z,u(n,{modelValue:o.format,"onUpdate:modelValue":a[2]||(a[2]=e=>o.format=e),tile:"",color:"secondary",group:"",density:"compact",class:"mb-5 elevation-5"},{default:c(()=>[(t(!0),m(V,null,b(o.formats,e=>(t(),y(l,{value:e,key:e},{default:c(()=>[h(k(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),u(_,{modelValue:o.disabled,"onUpdate:modelValue":a[3]||(a[3]=e=>o.disabled=e),color:"secondary",label:"Disabled"},null,8,["modelValue"]),i("iframe",{src:o.src},null,8,D)])}const O=B(L,[["render",P],["__file","cron-demo.vue"]]);export{O as default};
