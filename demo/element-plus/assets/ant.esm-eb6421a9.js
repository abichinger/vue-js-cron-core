import{H as K,Z as R}from"./core-e92a8769.js";import{_ as r,$ as t,a0 as p,a1 as a,a2 as b,b as m,a3 as u,a4 as w,F as y,a5 as Z,a6 as z,I as d,a7 as c,V as D,a8 as L,m as v,a9 as A}from"./index-38f2d882.js";import{C as M}from"./CloseCircleFilled-f35f912f.js";import"./format-input-fdf4fd2b.js";var k={inheritAttrs:!1,components:{RenderlessSelect:R,CloseCircleFilled:M},name:"CustomSelect",props:{buttonProps:{type:Object,default:()=>{}},dropdownProps:{type:Object,default:()=>{}},hideOnClick:{type:Boolean,default:!0}},data:()=>({visible:!1}),emits:["update:model-value"],methods:{updateVisibility(){this.hideOnClick&&this.visible&&(this.visible=!1)}}};const T={class:"custom-select"};function q(o,e,i,S,x,h){const C=r("CloseCircleFilled"),P=r("a-button"),n=r("a-menu-item"),l=r("a-menu"),s=r("a-dropdown"),B=r("renderless-select");return t(),p(B,v(o.$attrs,{"onUpdate:modelValue":e[2]||(e[2]=g=>o.$emit("update:model-value",g))}),{default:a(({selectedStr:g,itemRows:F,select:j,clearable:E,clear:N,modelValue:V,itemValue:H})=>[b("span",T,[m(s,v({trigger:["click"],visible:o.visible,"onUpdate:visible":e[1]||(e[1]=f=>o.visible=f)},i.dropdownProps),{overlay:a(()=>[m(l,{multiple:"",selectedKeys:Array.isArray(V)?V:[V]},{default:a(()=>[(t(!0),u(y,null,w(F,(f,U)=>(t(),u("div",{class:"vcron-a-row",type:"flex",key:U},[(t(!0),u(y,null,w(f,(_,I)=>(t(),u("div",{class:"vcron-a-col",flex:1,key:I},[_?(t(),p(n,{key:_[H],onClick:()=>{j(_),h.updateVisibility()}},{default:a(()=>[d(c(_.text),1)]),_:2},1032,["onClick"])):(t(),p(n,{key:1}))]))),128))]))),128))]),_:2},1032,["selectedKeys"])]),default:a(()=>[m(P,Z(z(i.buttonProps)),{default:a(()=>[d(c(g),1),E?(t(),p(C,{key:0,onClick:[f=>N(),e[0]||(e[0]=D(()=>{},["stop"]))]},null,8,["onClick"])):L("v-if",!0)]),_:2},1040)]),_:2},1040,["visible"])])]),_:1},16)}k.render=q;k.__scopeId="data-v-04350d06";k.__file="src/components/CustomSelect.vue";var $={name:"VueCronEditor",components:{CronCore:K,CustomSelect:k},props:{buttonProps:{type:Object,default(){return{}}},cols:{type:Object,default:()=>({second:5,minute:5,hour:4,day:4})}},emits:["update:model-value","error"]};const G={class:"vcron-a-spacer"},J={class:"vcron-a-spacer"};function Q(o,e,i,S,x,h){const C=r("custom-select"),P=r("CronCore");return t(),p(P,v(o.$attrs,{"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:model-value",n)),onError:e[1]||(e[1]=n=>o.$emit("error",n))}),{default:a(({fields:n,period:l})=>[b("div",null,[d(c(l.prefix)+" ",1),b("div",G,[m(C,v(l.attrs,{items:l.items},A(l.events),{"item-value":"id","button-props":i.buttonProps}),null,16,["items","button-props"])]),d(" "+c(l.suffix)+" ",1),(t(!0),u(y,null,w(n,s=>(t(),u(y,{key:s.id},[d(c(s.prefix)+" ",1),b("div",J,[m(C,v(s.attrs,A(s.events),{selection:s.selectedStr,cols:i.cols[s.id],items:s.items,multiple:"","button-props":i.buttonProps,hideOnClick:!1,clearable:""}),null,16,["selection","cols","items","button-props"])]),d(" "+c(s.suffix),1)],64))),128))])]),_:1},16)}$.render=Q;$.__file="src/CronEditor.vue";function O(o){O.installed||(O.installed=!0,o.component("CronAnt",$))}const te={install:O,component:$};export{$ as CronAnt,te as CronAntPlugin,te as default,O as install};
