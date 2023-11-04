import{H as A,Z as D}from"./core-e92a8769.js";import{_ as s,$ as t,a0 as l,a1 as e,b as r,af as I,V as L,I as m,a7 as d,m as f,a3 as y,a4 as P,F as k,a5 as M,a6 as T,a2 as q,a8 as _,a9 as S}from"./index-38f2d882.js";var w={inheritAttrs:!1,components:{RenderlessSelect:D},name:"CustomSelect",props:{menuProps:{type:Object,default:()=>{}},chipProps:{type:Object,default:()=>{}}},emits:["update:model-value"]};function G(a,i,p,O,j,B){const c=s("v-icon"),v=s("v-list-item"),$=s("v-col"),g=s("v-row"),u=s("v-list"),n=s("v-menu"),o=s("v-chip"),E=s("renderless-select");return t(),l(E,f(a.$attrs,{"onUpdate:modelValue":i[0]||(i[0]=h=>a.$emit("update:model-value",h))}),{default:e(({selectedStr:h,itemRows:N,select:H,isSelected:z,clearable:F,clear:R})=>[r(o,M(T(p.chipProps)),I({default:e(()=>[m(" "+d(h)+" ",1),r(n,f({activator:"parent"},p.menuProps),{default:e(()=>[r(u,{class:"pa-0 ma-0"},{default:e(()=>[(t(!0),y(k,null,P(N,(b,U)=>(t(),l(g,{key:U,"no-gutters":""},{default:e(()=>[(t(!0),y(k,null,P(b,(C,Z)=>(t(),l($,{key:Z},{default:e(()=>[C?(t(),l(v,{key:0,class:"vcron-v-item",onClick:Q=>H(C),active:z(C)},{default:e(()=>[m(d(C.text),1)]),_:2},1032,["onClick","active"])):_("v-if",!0)]),_:2},1024))),128))]),_:2},1024))),128))]),_:2},1024)]),_:2},1040)]),_:2},[F?{name:"append",fn:e(()=>[r(c,{size:"small",icon:"mdi-close",onClick:L(b=>R(),["stop"])},null,8,["onClick"])]),key:"0"}:void 0]),1040)]),_:1},16)}w.render=G;w.__file="src/components/CustomSelect.vue";var x={name:"VueCronEditor",components:{CronCore:A,CustomSelect:w},props:{chipProps:{type:Object,default(){return{}}},cols:{type:Object,default:()=>({second:5,minute:5,hour:4,day:4})}},emits:["update:model-value","error"]};const J={style:{display:"inline-block"}};function K(a,i,p,O,j,B){const c=s("v-col"),v=s("custom-select"),$=s("v-row"),g=s("CronCore");return t(),l(g,f(a.$attrs,{"onUpdate:modelValue":i[0]||(i[0]=u=>a.$emit("update:model-value",u)),onError:i[1]||(i[1]=u=>a.$emit("error",u))}),{default:e(({fields:u,period:n})=>[q("div",J,[r($,{align:"baseline",dense:""},{default:e(()=>[n.prefix?(t(),l(c,{key:0,class:"flex-grow-0"},{default:e(()=>[m(d(n.prefix),1)]),_:2},1024)):_("v-if",!0),r(c,{cols:"auto"},{default:e(()=>[r(v,f(n.attrs,{items:n.items},S(n.events),{"item-value":"id","chip-props":p.chipProps}),null,16,["items","chip-props"])]),_:2},1024),n.suffix?(t(),l(c,{key:1,class:"flex-grow-0"},{default:e(()=>[m(d(n.suffix),1)]),_:2},1024)):_("v-if",!0),(t(!0),y(k,null,P(u,o=>(t(),y(k,{key:o.id},[o.prefix?(t(),l(c,{key:0,class:"flex-grow-0"},{default:e(()=>[m(d(o.prefix),1)]),_:2},1024)):_("v-if",!0),r(c,{cols:"auto"},{default:e(()=>[r(v,f(o.attrs,S(o.events),{selection:o.selectedStr,cols:p.cols[o.id],items:o.items,multiple:"","chip-props":p.chipProps,"menu-props":{closeOnContentClick:!1},clearable:""}),null,16,["selection","cols","items","chip-props"])]),_:2},1024),o.suffix?(t(),l(c,{key:1,class:"flex-grow-0"},{default:e(()=>[m(d(o.suffix),1)]),_:2},1024)):_("v-if",!0)],64))),128))]),_:2},1024)])]),_:1},16)}x.render=K;x.__file="src/CronEditor.vue";function V(a){V.installed||(V.installed=!0,a.component("CronVuetify",x))}const Y={install:V,component:x};export{x as CronVuetify,Y as CronVuetifyPlugin,Y as default,V as install};
