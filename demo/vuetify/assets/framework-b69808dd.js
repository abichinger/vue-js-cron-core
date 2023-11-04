import{c as N,a as b,b as v,d as B,e as W,f as C,D as M,g as S,T,I as p,L as Y,h as U}from"./layout-a3a844a3.js";import{u as pe,i as Ye,j as ke,k as Ae,l as Ie,m as we}from"./layout-a3a844a3.js";import{c as P,p as k,m as O,I as G}from"./helpers-3629e879.js";import{n as H,r as K}from"./index-49edb766.js";const h={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Z(t,e){const n=[];let r=[];const o=R(t),c=E(t),f=(o.getDay()-h[e.slice(-2).toUpperCase()]+7)%7,D=(c.getDay()-h[e.slice(-2).toUpperCase()]+7)%7;for(let a=0;a<f;a++){const i=new Date(o);i.setDate(i.getDate()-(f-a)),r.push(i)}for(let a=1;a<=c.getDate();a++){const i=new Date(t.getFullYear(),t.getMonth(),a);r.push(i),r.length===7&&(n.push(r),r=[])}for(let a=1;a<7-D;a++){const i=new Date(c);i.setDate(i.getDate()+a),r.push(i)}return n.push(r),n}function R(t){return new Date(t.getFullYear(),t.getMonth(),1)}function E(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function V(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const J=/([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;function F(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(J.test(t))return V(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const A=new Date(2e3,0,2);function x(t){const e=h[t.slice(-2).toUpperCase()];return P(7).map(n=>{const r=new Date(A);return r.setDate(A.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(r)})}function $(t,e,n){let r={};switch(e){case"fullDateWithWeekday":r={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":r={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":r={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":r={month:"long",day:"numeric"};break;case"monthAndYear":r={month:"long",year:"numeric"};break;case"dayOfMonth":r={day:"numeric"};break;case"shortDate":r={year:"numeric"};break;default:r={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,r).format(F(t)??void 0)}function j(t,e){const n=t.toJsDate(e),r=n.getFullYear(),o=k(String(n.getMonth()+1),2,"0"),c=k(String(n.getDate()),2,"0");return`${r}-${o}-${c}`}function z(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function Q(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function X(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function q(t){return t.getFullYear()}function _(t){return t.getMonth()}function ee(t){return new Date(t.getFullYear(),0,1)}function te(t){return new Date(t.getFullYear(),11,31)}function ne(t,e){return m(t,e[0])&&ae(t,e[1])}function re(t){if(!t||t==null)return!1;const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function m(t,e){return t.getTime()>e.getTime()}function ae(t,e){return t.getTime()<e.getTime()}function I(t,e){return t.getTime()===e.getTime()}function se(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function oe(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function ie(t,e,n){const r=new Date(t),o=new Date(e);return n==="month"?r.getMonth()-o.getMonth()+(r.getFullYear()-o.getFullYear())*12:Math.floor((r.getTime()-o.getTime())/(1e3*60*60*24))}function ue(t,e){const n=new Date(t);return n.setFullYear(e),n}function ce(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function le(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class fe{constructor(e){this.locale=e.locale}date(e){return F(e)}toJsDate(e){return e}toISO(e){return j(this,e)}parseISO(e){return z(e)}addDays(e,n){return Q(e,n)}addMonths(e,n){return X(e,n)}getWeekArray(e){return Z(e,this.locale)}startOfMonth(e){return R(e)}endOfMonth(e){return E(e)}format(e,n){return $(e,n,this.locale)}isEqual(e,n){return I(e,n)}isValid(e){return re(e)}isWithinRange(e,n){return ne(e,n)}isAfter(e,n){return m(e,n)}isBefore(e,n){return!m(e,n)&&!I(e,n)}isSameDay(e,n){return se(e,n)}isSameMonth(e,n){return oe(e,n)}setYear(e,n){return ue(e,n)}getDiff(e,n,r){return ie(e,n,r)}getWeekdays(){return x(this.locale)}getYear(e){return q(e)}getMonth(e){return _(e)}startOfDay(e){return ce(e)}endOfDay(e){return le(e)}startOfYear(e){return ee(e)}endOfYear(e){return te(e)}}const w=Symbol.for("vuetify:date-adapter");function De(t){return O({adapter:fe,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t)}function he(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=O(e,n),{aliases:o={},components:c={},directives:f={}}=r,D=N(r.defaults),a=b(r.display,r.ssr),i=v(r.theme),d=B(r.icons),g=W(r.locale),y=De(r.date);return{install:s=>{for(const u in f)s.directive(u,f[u]);for(const u in c)s.component(u,c[u]);for(const u in o)s.component(u,C({...o[u],name:u,aliasName:o[u].name}));if(i.install(s),s.provide(M,D),s.provide(S,a),s.provide(T,i),s.provide(p,d),s.provide(Y,g),s.provide(w,y),G&&r.ssr)if(s.$nuxt)s.$nuxt.hook("app:suspense:resolve",()=>{a.update()});else{const{mount:u}=s;s.mount=function(){const L=u(...arguments);return H(()=>a.update()),s.mount=u,L}}U.reset(),s.mixin({computed:{$vuetify(){return K({defaults:l.call(this,M),display:l.call(this,S),theme:l.call(this,T),icons:l.call(this,p),locale:l.call(this,Y),date:l.call(this,w)})}}})},defaults:D,display:a,theme:i,icons:d,locale:g,date:y}}const me="3.3.23";he.version=me;function l(t){var r,o;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((o=e.vnode.appContext)==null?void 0:o.provides);if(n&&t in n)return n[t]}export{he as createVuetify,pe as useDefaults,Ye as useDisplay,ke as useLayout,Ae as useLocale,Ie as useRtl,we as useTheme,me as version};
