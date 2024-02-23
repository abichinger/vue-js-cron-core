import{w as j,m as k,h as ye,d as be,W as V,X as A,a0 as I,ah as Ce,Z as b,j as X,G as Ae,I as U,a1 as L,a5 as fe,Y as H,F as Z,$ as ae,a4 as z}from"./setup-375e4df3.js";var je=Object.defineProperty,We=(t,e,r)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e,r)=>(We(t,typeof e!="symbol"?e+"":e,r),r),q=(t=>(t.Empty="empty",t.Value="value",t.Range="range",t.EveryX="everyX",t.Combined="combined",t.NoSpecific="noSpecific",t))(q||{}),P=(t=>(t.Prefix="prefix",t.Suffix="suffix",t.Text="text",t))(P||{});class Oe{constructor(e){c(this,"field"),c(this,"itemMap"),this.field=e,this.itemMap=this.field.items.reduce((r,i)=>(r[i.value]=i,r),{})}get id(){return this.field.id}get items(){return this.field.items}get onChange(){return this.field.onChange}get segmentFactories(){return this.field.segmentFactories}get min(){return this.items[0].value}get max(){return this.items[this.items.length-1].value}getItem(e){return this.itemMap[e]}}function Me(t,e,r=1){const i=[];for(let n=t;n<=e;n+=r)i.push(n);return i}class Ve{constructor(e,r,i=1){return c(this,"start"),c(this,"end"),c(this,"step"),this.start=e,this.end=r,this.step=i,new Proxy(this,{get:function(n,a){const o=typeof a=="string"?parseInt(a):a;return typeof o=="number"&&o>=0&&o<=n.length?n.start+n.step*o:Reflect.get(n,a)}})}get length(){return(this.end-this.start)/this.step+1}[Symbol.iterator](){let e=-1;return{next:()=>({value:this[++e],done:this[e+1]===void 0})}}}function $(t,e,r=n=>n+"",i=n=>n+""){const n=[];for(const a of new Ve(t,e))n.push({text:r(a),alt:i(a),value:a});return n}function Te(t){return{secondItems:$(0,59,e=>re(e,2)),minuteItems:$(0,59,e=>re(e,2)),hourItems:$(0,23,e=>re(e,2)),dayItems:$(1,31),monthItems:$(1,12,e=>new Date(2021,e-1,1).toLocaleDateString(t,{month:"long"}),e=>new Date(2021,e-1,1).toLocaleDateString(t,{month:"short"})),dayOfWeekItems:$(0,6,e=>new Date(2021,0,3+e).toLocaleDateString(t,{weekday:"long"}),e=>new Date(2021,0,3+e).toLocaleDateString(t,{weekday:"short"}))}}function re(t,e){const r=t+"";return r.length<e?new Array(e-r.length).fill("0").join("")+t:r}function _(t){return t&&typeof t=="object"&&!Array.isArray(t)}function oe(t,...e){if(!_(t)||e.length===0)return;const r=e.shift();if(_(r))for(const[i,n]of Object.entries(r))_(n)?(_(t[i])||(t[i]={}),oe(t[i],r[i])):t[i]=r[i];return e.length>0&&oe(t,e),t}function he(t,...e){if(e.length===0)return t;for(const r of e[0])if(r in t){const i=he(t[r],...e.slice(1));if(i!==void 0)return i}}function Xe(t){for(let e=1;e<t.length;e++)if(t[e-1]+1!==t[e])return!1;return!0}function Ie(){throw new Error("not implemented")}function Ee(t,e,r=!0){const i=[];for(let n=0;n<t.length;n+=e){const a=t.slice(n,n+e);for(;r&&a.length<e;)a.push(null);i.push(a)}return i}class K{constructor(e){c(this,"field"),c(this,"type",q.NoSpecific),this.field=e}toCron(){return"?"}toArray(){return[]}get items(){return{}}static fromString(e,r){return e!=="?"?null:new K(r)}}let N=class G{constructor(e){c(this,"field"),c(this,"type",q.Empty),this.field=e}toCron(){return"*"}toArray(){return[]}get items(){return{}}static fromString(e,r){return e!=="*"?null:new G(r)}static fromArray(e,r){const{items:i}=r;if(e.length===0)return new G(r);if(e.length!==i.length)return null;for(const n of i)if(!e.includes(n.value))return null;return Xe(i.map(n=>n.value))?new G(r):null}};const ve=class se{constructor(e,r,i){c(this,"field"),c(this,"type",q.Range),c(this,"start"),c(this,"end"),this.field=e,this.start=r,this.end=i}toCron(){return`${this.start}-${this.end}`}toArray(){const e=this.start,r=this.end;return Me(e,r)}get items(){return{start:this.field.itemMap[this.start],end:this.field.itemMap[this.end]}}static fromString(e,r){if(!se.re.test(e))return null;const{min:i,max:n}=r,a=e.split("-"),o=parseInt(a[0]),s=parseInt(a[1]);return o>s||o<i||s>n?null:new se(r,o,s)}};c(ve,"re",/^\d+-\d+$/);let ee=ve;const pe=(t,e,r)=>{const i=t*Math.floor(e/t),n=[];for(let a=i;a<=r;a+=t)a>=e&&n.push(a);return n},ge=class Q{constructor(e,r){c(this,"field"),c(this,"type",q.EveryX),c(this,"every"),this.field=e,this.every=r}toCron(){return`*/${this.every}`}toArray(){const{min:e,max:r}=this.field;return pe(this.every,e,r)}get items(){return{every:this.field.itemMap[this.every]}}static fromString(e,r){if(!Q.re.test(e))return null;const[,i]=e.split("/"),n=parseInt(i),{min:a,max:o}=r;return pe(n,a,o).length==0?null:new Q(r,n)}static fromArray(e,r){const{min:i,max:n}=r;if(e.length<3)return null;const a=e[1]-e[0];if(a<=1)return null;const o=i%a===0?i:(Math.floor(i/a)+1)*a;if(e.length!==Math.floor((n-o)/a)+1)return null;for(const s of e)if(s%a!==0)return null;return new Q(r,a)}};c(ge,"re",/^\*\/\d+$/);let te=ge;class D{constructor(e,r){c(this,"field"),c(this,"type",q.Value),c(this,"value"),this.field=e,this.value=r}toCron(){return`${this.value}`}toArray(){return[this.value]}get items(){return{value:this.field.itemMap[this.value]}}static fromString(e,r){const{min:i,max:n}=r,a=parseInt(e);return String(a)===e&&a>=i&&a<=n?new D(r,a):null}static fromArray(e,r){const{min:i,max:n}=r;if(e.length!=1)return null;const a=e[0];return a<i||a>n?null:a}}const we=class Y{constructor(e,r=[]){c(this,"field"),c(this,"segments"),this.field=e,this.segments=r}get type(){return this.segments.length==1?this.segments[0].type:q.Range}addSegment(e){this.segments.push(e)}toCron(){return this.segments.map(e=>e.toCron()).join(",")}toArray(){const e=new Set;for(const r of this.segments)r.toArray().forEach(i=>e.add(i));return Array.from(e)}get items(){return Ie()}static fromString(e,r){const i=r.segmentFactories??Y.segmentFactories;let n=[];for(const a of e.split(",")){if(a==="*"){n=[new N(r)];break}let o=null;for(const s of i)if(o=s(a,r),o!==null)break;if(o===null)return null;n.push(o)}return new Y(r,n)}static fromArray(e,r){const{min:i,max:n}=r,a=e[0],o=e[e.length-1];if(a<i||o>n)return null;const s=[];let l=0;for(let f=0;f<e.length;f++)(e[f+1]===void 0||e[f+1]-e[f]>1)&&(f===l?s.push(new D(r,e[l])):s.push(new ee(r,e[l],e[f])),l=f+1);return new Y(r,s)}};c(we,"segmentFactories",[N.fromString,te.fromString,ee.fromString,D.fromString]);let le=we;function xe(t,e){return le.fromString(t,e)}function Pe(t,e){for(const r of[N.fromArray,te.fromArray,le.fromArray]){const i=r(t,e);if(i!=null)return i}return null}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var qe=Object.prototype.toString,R=Array.isArray||function(t){return qe.call(t)==="[object Array]"};function ue(t){return typeof t=="function"}function $e(t){return R(t)?"array":typeof t}function ne(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function ce(t,e){return t!=null&&typeof t=="object"&&e in t}function Ue(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var Le=RegExp.prototype.test;function De(t,e){return Le.call(t,e)}var Fe=/\S/;function Re(t){return!De(Fe,t)}var ze={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function He(t){return String(t).replace(/[&<>"'`=\/]/g,function(e){return ze[e]})}var Ne=/\s*/,Be=/\s+/,de=/\s*=/,Je=/\s*\}/,_e=/#|\^|\/|>|\{|&|=|!/;function Ge(t,e){if(!t)return[];var r=!1,i=[],n=[],a=[],o=!1,s=!1,l="",f=0;function m(){if(o&&!s)for(;a.length;)delete n[a.pop()];else a=[];o=!1,s=!1}var v,y,C;function M(W){if(typeof W=="string"&&(W=W.split(Be,2)),!R(W)||W.length!==2)throw new Error("Invalid tags: "+W);v=new RegExp(ne(W[0])+"\\s*"),y=new RegExp("\\s*"+ne(W[1])),C=new RegExp("\\s*"+ne("}"+W[1]))}M(e||O.tags);for(var u=new J(t),p,d,h,T,E,x;!u.eos();){if(p=u.pos,h=u.scanUntil(v),h)for(var g=0,w=h.length;g<w;++g)T=h.charAt(g),Re(T)?(a.push(n.length),l+=T):(s=!0,r=!0,l+=" "),n.push(["text",T,p,p+1]),p+=1,T===`
`&&(m(),l="",f=0,r=!1);if(!u.scan(v))break;if(o=!0,d=u.scan(_e)||"name",u.scan(Ne),d==="="?(h=u.scanUntil(de),u.scan(de),u.scanUntil(y)):d==="{"?(h=u.scanUntil(C),u.scan(Je),u.scanUntil(y),d="&"):h=u.scanUntil(y),!u.scan(y))throw new Error("Unclosed tag at "+u.pos);if(d==">"?E=[d,h,p,u.pos,l,f,r]:E=[d,h,p,u.pos],f++,n.push(E),d==="#"||d==="^")i.push(E);else if(d==="/"){if(x=i.pop(),!x)throw new Error('Unopened section "'+h+'" at '+p);if(x[1]!==h)throw new Error('Unclosed section "'+x[1]+'" at '+p)}else d==="name"||d==="{"||d==="&"?s=!0:d==="="&&M(h)}if(m(),x=i.pop(),x)throw new Error('Unclosed section "'+x[1]+'" at '+u.pos);return Ye(Qe(n))}function Qe(t){for(var e=[],r,i,n=0,a=t.length;n<a;++n)r=t[n],r&&(r[0]==="text"&&i&&i[0]==="text"?(i[1]+=r[1],i[3]=r[3]):(e.push(r),i=r));return e}function Ye(t){for(var e=[],r=e,i=[],n,a,o=0,s=t.length;o<s;++o)switch(n=t[o],n[0]){case"#":case"^":r.push(n),i.push(n),r=n[4]=[];break;case"/":a=i.pop(),a[5]=n[2],r=i.length>0?i[i.length-1][4]:e;break;default:r.push(n)}return e}function J(t){this.string=t,this.tail=t,this.pos=0}J.prototype.eos=function(){return this.tail===""};J.prototype.scan=function(t){var e=this.tail.match(t);if(!e||e.index!==0)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};J.prototype.scanUntil=function(t){var e=this.tail.search(t),r;switch(e){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,e),this.tail=this.tail.substring(e)}return this.pos+=r.length,r};function F(t,e){this.view=t,this.cache={".":this.view},this.parent=e}F.prototype.push=function(t){return new F(t,this)};F.prototype.lookup=function(t){var e=this.cache,r;if(e.hasOwnProperty(t))r=e[t];else{for(var i=this,n,a,o,s=!1;i;){if(t.indexOf(".")>0)for(n=i.view,a=t.split("."),o=0;n!=null&&o<a.length;)o===a.length-1&&(s=ce(n,a[o])||Ue(n,a[o])),n=n[a[o++]];else n=i.view[t],s=ce(i.view,t);if(s){r=n;break}i=i.parent}e[t]=r}return ue(r)&&(r=r.call(this.view)),r};function S(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}S.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};S.prototype.parse=function(t,e){var r=this.templateCache,i=t+":"+(e||O.tags).join(":"),n=typeof r<"u",a=n?r.get(i):void 0;return a==null&&(a=Ge(t,e),n&&r.set(i,a)),a};S.prototype.render=function(t,e,r,i){var n=this.getConfigTags(i),a=this.parse(t,n),o=e instanceof F?e:new F(e,void 0);return this.renderTokens(a,o,r,t,i)};S.prototype.renderTokens=function(t,e,r,i,n){for(var a="",o,s,l,f=0,m=t.length;f<m;++f)l=void 0,o=t[f],s=o[0],s==="#"?l=this.renderSection(o,e,r,i,n):s==="^"?l=this.renderInverted(o,e,r,i,n):s===">"?l=this.renderPartial(o,e,r,n):s==="&"?l=this.unescapedValue(o,e):s==="name"?l=this.escapedValue(o,e,n):s==="text"&&(l=this.rawValue(o)),l!==void 0&&(a+=l);return a};S.prototype.renderSection=function(t,e,r,i,n){var a=this,o="",s=e.lookup(t[1]);function l(v){return a.render(v,e,r,n)}if(s){if(R(s))for(var f=0,m=s.length;f<m;++f)o+=this.renderTokens(t[4],e.push(s[f]),r,i,n);else if(typeof s=="object"||typeof s=="string"||typeof s=="number")o+=this.renderTokens(t[4],e.push(s),r,i,n);else if(ue(s)){if(typeof i!="string")throw new Error("Cannot use higher-order sections without the original template");s=s.call(e.view,i.slice(t[3],t[5]),l),s!=null&&(o+=s)}else o+=this.renderTokens(t[4],e,r,i,n);return o}};S.prototype.renderInverted=function(t,e,r,i,n){var a=e.lookup(t[1]);if(!a||R(a)&&a.length===0)return this.renderTokens(t[4],e,r,i,n)};S.prototype.indentPartial=function(t,e,r){for(var i=e.replace(/[^ \t]/g,""),n=t.split(`
`),a=0;a<n.length;a++)n[a].length&&(a>0||!r)&&(n[a]=i+n[a]);return n.join(`
`)};S.prototype.renderPartial=function(t,e,r,i){if(r){var n=this.getConfigTags(i),a=ue(r)?r(t[1]):r[t[1]];if(a!=null){var o=t[6],s=t[5],l=t[4],f=a;s==0&&l&&(f=this.indentPartial(a,l,o));var m=this.parse(f,n);return this.renderTokens(m,e,r,f,i)}}};S.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(r!=null)return r};S.prototype.escapedValue=function(t,e,r){var i=this.getConfigEscape(r)||O.escape,n=e.lookup(t[1]);if(n!=null)return typeof n=="number"&&i===O.escape?String(n):i(n)};S.prototype.rawValue=function(t){return t[1]};S.prototype.getConfigTags=function(t){return R(t)?t:t&&typeof t=="object"?t.tags:void 0};S.prototype.getConfigEscape=function(t){if(t&&typeof t=="object"&&!R(t))return t.escape};var O={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){B.templateCache=t},get templateCache(){return B.templateCache}},B=new S;O.clearCache=function(){return B.clearCache()};O.parse=function(t,e){return B.parse(t,e)};O.render=function(t,e,r,i){if(typeof t!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+$e(t)+'" was given as the first argument for mustache#render(template, view, partials)');return B.render(t,e,r,i)};O.escape=He;O.Scanner=J;O.Context=F;O.Writer=S;const me={"*":{prefix:"每",suffix:"",text:"未知","*":{empty:{text:"每 {{field.id}}"},value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"每 {{every.value}}"}},month:{"*":{prefix:"的"},empty:{text:"每月"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"的"},empty:{text:"每日"},value:{text:"{{value.alt}}号"},range:{text:"{{start.alt}}号-{{end.alt}}号"}},dayOfWeek:{"*":{prefix:"的"},empty:{text:"一周的每一天"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},hour:{"*":{prefix:"的"},empty:{text:"每小时"}},minute:{"*":{prefix:":"},empty:{text:"每分钟"}}},minute:{text:"分"},hour:{text:"小时",minute:{"*":{prefix:":",suffix:"分钟"},empty:{text:"每"}}},day:{text:"天"},week:{text:"周",dayOfWeek:{"*":{prefix:"的"},empty:{text:"每天"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}}},month:{text:"月",dayOfWeek:{"*":{prefix:"和"}},day:{"*":{prefix:"的"}}},year:{text:"年",dayOfWeek:{"*":{prefix:"和"}}}},Ze={"*":{prefix:"Hver",suffix:"",text:"Ukendt","*":{empty:{text:"hver {{field.id}}"},value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"hver {{every.value}}"}},month:{"*":{prefix:"i"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"på"}},dayOfWeek:{"*":{prefix:"på"},empty:{text:"hver dag i ugen"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},hour:{"*":{prefix:"klokken"}},minute:{"*":{prefix:":"}}},minute:{text:"Minut"},hour:{text:"Time",minute:{"*":{prefix:"på de(t)",suffix:"minutter"},empty:{text:"hver"}}},day:{text:"Dag"},week:{text:"Uge"},month:{text:"Måned",dayOfWeek:{"*":{prefix:"og"}}},year:{text:"År",dayOfWeek:{"*":{prefix:"og"}}}},Ke={"*":{prefix:"Jede",suffix:"",text:"Unknown","*":{value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"alle {{every.value}}"}},month:{"*":{prefix:"im"},empty:{prefix:"in",text:"jedem Monat"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"den"},empty:{prefix:"an",text:"jedem Tag"},everyX:{prefix:"",text:"alle {{every.value}} Tage"},noSpecific:{prefix:"an",text:"keinem bestimmten Tag"}},dayOfWeek:{"*":{prefix:"am"},empty:{prefix:"an",text:"jedem Wochentag"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},noSpecific:{prefix:"und",text:"keinem bestimmten Wochentag"}},hour:{"*":{prefix:"um"},empty:{prefix:"zu",text:"jeder Stunde"},everyX:{prefix:"",text:"alle {{every.value}} Stunden"}},minute:{"*":{prefix:":"},empty:{text:"jede Minute"},everyX:{prefix:"",text:"alle {{every.value}} Minuten"}},second:{"*":{prefix:":"},empty:{text:"jede Sekunde"},everyX:{prefix:"",text:"alle {{every.value}} Sekunden"}}},minute:{text:"Minute"},hour:{text:"Stunde",minute:{"*":{prefix:"zu",suffix:"Minute(n)"},empty:{text:"jeder"}}},day:{prefix:"Jeden",text:"Tag"},week:{text:"Woche"},month:{prefix:"Jedes",text:"Monat"},year:{prefix:"Jedes",text:"Jahr"},"q-second":{text:"Sekunde"},"q-minute":{text:"Minute",second:{"*":{prefix:"und"}}},"q-hour":{text:"Stunde",minute:{"*":{prefix:"und"}},second:{"*":{prefix:"und"}}}},et={"*":{prefix:"Every",suffix:"",text:"Unknown","*":{empty:{text:"every {{field.id}}"},value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"every {{every.value}}"}},month:{"*":{prefix:"in"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"on"},noSpecific:{text:"no specific day"}},dayOfWeek:{"*":{prefix:"on"},empty:{text:"every day of the week"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},noSpecific:{text:"no specific day of the week"}},hour:{"*":{prefix:"at"}},minute:{"*":{prefix:":"}},second:{"*":{prefix:":"}}},minute:{text:"Minute"},hour:{text:"Hour",minute:{"*":{prefix:"at",suffix:"minute(s)"},empty:{text:"every"}}},day:{text:"Day"},week:{text:"Week"},month:{text:"Month",dayOfWeek:{"*":{prefix:"and"}}},year:{text:"Year",dayOfWeek:{"*":{prefix:"and"}}},"q-second":{text:"Second"},"q-minute":{text:"Minute",second:{"*":{prefix:"at",suffix:"second(s)"},empty:{text:"every"}}},"q-hour":{text:"Hour",minute:{"*":{prefix:"at"}}}},tt={"*":{prefix:"todos los",suffix:"",text:"Desconocido","*":{empty:{text:"todos los {{ field.id }}"},value:{text:"{{ value.text }}"},range:{text:"{{ start.text }}-{{ end.text }}"},everyX:{text:"todos/as {{ every.value }}"}},month:{"*":{prefix:"en"},empty:{text:"todos los meses"},value:{text:"{{ value.alt }}"},range:{text:"{{ start.alt }}-{{ end.alt }}"}},day:{"*":{prefix:"en"},empty:{text:"todos los días"},value:{text:"los días {{ value.alt }}"}},dayOfWeek:{"*":{prefix:"de"},empty:{text:"todos los días de la semana"},value:{text:"los {{ value.alt }}"},range:{text:"{{ start.alt }}-{{ end.alt }}"}},hour:{"*":{prefix:"a"},empty:{text:"todas las horas"},value:{text:"las {{ value.text }}"}},minute:{"*":{prefix:":"},empty:{text:"todos los minutos"}}},minute:{prefix:"todos los",text:"minutos"},hour:{prefix:"todas las",text:"horas",minute:{"*":{prefix:"a los",suffix:"minutos"},empty:{text:"todos",prefix:"a",suffix:"los minutos"}}},day:{text:"Días"},week:{text:"Semanas"},month:{text:"Meses",dayOfWeek:{"*":{prefix:"y"}}},year:{text:"años",dayOfWeek:{"*":{prefix:"y"}}}},rt={"*":{prefix:"Toutes",suffix:"",text:"Inconnu","*":{value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"tous les {{every.value}}"}},month:{"*":{prefix:"en"},empty:{prefix:"en",text:"tous les mois"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"le"},empty:{prefix:"à",text:"tous les jours"},everyX:{prefix:"",text:"tous les {{every.value}} jours"},noSpecific:{prefix:"à",text:"aucun jour particulier"}},dayOfWeek:{"*":{prefix:"le"},empty:{prefix:"à",text:"tous les jours de la semaine"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},noSpecific:{prefix:"et",text:"aucun jour de la semaine particulier"}},hour:{"*":{prefix:"à"},empty:{prefix:"à",text:"toutes les heures"},everyX:{prefix:"",text:"toutes les {{every.value}} heures"}},minute:{"*":{prefix:":"},empty:{text:"toutes les minutes"},everyX:{prefix:"",text:"toutes les {{every.value}} minutes"}},second:{"*":{prefix:":"},empty:{text:"toutes les secondes"},everyX:{prefix:"",text:"toutes les {{every.value}} secondes"}}},minute:{text:"Minute"},hour:{text:"Heure",minute:{"*":{prefix:"à",suffix:"minute(s)"},empty:{text:"toutes"}}},day:{prefix:"Tous",text:"Jour"},week:{text:"Semaine"},month:{prefix:"Tous",text:"Mois"},year:{prefix:"Tous",text:"Année"},"q-second":{text:"Seconde"},"q-minute":{text:"Minute",second:{"*":{prefix:"et"}}},"q-hour":{text:"Heure",minute:{"*":{prefix:"et"}},second:{"*":{prefix:"et"}}}},nt={"*":{prefix:"हर",suffix:"",text:"अज्ञात","*":{value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"{{every.value}} हर"}},month:{"*":{prefix:"में"},empty:{prefix:"के",text:"हर महीने"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"के"},empty:{prefix:"पर",text:"हर दिन"},everyX:{prefix:"",text:"{{every.value}} दिन हर"},noSpecific:{prefix:"पर",text:"कोई विशेष दिन नहीं"}},dayOfWeek:{"*":{prefix:"पर"},empty:{prefix:"पर",text:"हर सप्ताह"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},noSpecific:{prefix:"और",text:"कोई विशेष सप्ताह नहीं"}},hour:{"*":{prefix:"को"},empty:{prefix:"पर",text:"हर घंटे"},everyX:{prefix:"",text:"{{every.value}} घंटे हर"}},minute:{"*":{prefix:":"},empty:{text:"हर मिनट"},everyX:{prefix:"",text:"{{every.value}} मिनट हर"}},second:{"*":{prefix:":"},empty:{text:"हर सेकंड"},everyX:{prefix:"",text:"{{every.value}} सेकंड हर"}}},minute:{text:"मिनट"},hour:{text:"घंटा",minute:{"*":{prefix:"पर",suffix:"मिनट"},empty:{text:"हर"}}},day:{prefix:"हर",text:"दिन"},week:{text:"सप्ताह"},month:{prefix:"हर",text:"महीना"},year:{prefix:"हर",text:"साल"},"q-second":{text:"सेकंड"},"q-minute":{text:"मिनट",second:{"*":{prefix:"और"}}},"q-hour":{text:"घंटा",minute:{"*":{prefix:"और"}},second:{"*":{prefix:"और"}}}},it={"*":{prefix:"毎",suffix:"",text:"不明","*":{value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"{{every.value}}ごとに"}},month:{"*":{prefix:"に"},empty:{prefix:"の",text:"毎月"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"の"},empty:{prefix:"に",text:"毎日"},everyX:{prefix:"",text:"{{every.value}}日ごとに"},noSpecific:{prefix:"に",text:"特定の日はなし"}},dayOfWeek:{"*":{prefix:"の"},empty:{prefix:"に",text:"毎週"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},noSpecific:{prefix:"と",text:"特定の曜日はなし"}},hour:{"*":{prefix:"の"},empty:{prefix:"に",text:"毎時"},everyX:{prefix:"",text:"{{every.value}}時間ごとに"}},minute:{"*":{prefix:":"},empty:{text:"毎分"},everyX:{prefix:"",text:"{{every.value}}分ごとに"}},second:{"*":{prefix:":"},empty:{text:"毎秒"},everyX:{prefix:"",text:"{{every.value}}秒ごとに"}}},minute:{text:"分"},hour:{text:"時",minute:{"*":{prefix:"に",suffix:"分"},empty:{text:"毎"}}},day:{prefix:"毎",text:"日"},week:{text:"週"},month:{prefix:"毎",text:"月"},year:{prefix:"毎",text:"年"},"q-second":{text:"秒"},"q-minute":{text:"分",second:{"*":{prefix:"と"}}},"q-hour":{text:"時",minute:{"*":{prefix:"と"}},second:{"*":{prefix:"と"}}}},at={"*":{prefix:"Todo(a)",suffix:"",text:"Desconhecido","*":{empty:{text:"todo {{field.id}}"},value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"todo {{every.value}}"}},month:{"*":{prefix:"de"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},empty:{text:"todo mês"}},day:{"*":{prefix:"no(s) dia(s)"},empty:{text:"todos"}},dayOfWeek:{"*":{prefix:"de"},empty:{text:"todos dias da semana"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},hour:{"*":{prefix:"às"},empty:{text:"cada hora"}},minute:{"*":{prefix:":"},empty:{text:"cada minuto"}}},minute:{text:"Minuto"},hour:{text:"Hora",minute:{"*":{prefix:"e",suffix:"minuto(s)"},empty:{text:"cada"}}},day:{text:"Dia"},week:{text:"Semana"},month:{text:"Mês",dayOfWeek:{"*":{prefix:"e de"}}},year:{text:"Ano",dayOfWeek:{"*":{prefix:"e de"}}}},ot={"*":{prefix:"Каждый",suffix:"",text:"Неизвестно","*":{value:{text:"{{value.text}}"},range:{text:"{{start.text}}-{{end.text}}"},everyX:{text:"каждый {{every.value}}"}},month:{"*":{prefix:"в"},empty:{prefix:"в",text:"каждом месяце"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"}},day:{"*":{prefix:"в"},empty:{prefix:"в",text:"каждый день"},everyX:{prefix:"",text:"каждые {{every.value}} дня"},noSpecific:{prefix:"в",text:"нет определенного дня"}},dayOfWeek:{"*":{prefix:"по"},empty:{prefix:"по",text:"каждому дню недели"},value:{text:"{{value.alt}}"},range:{text:"{{start.alt}}-{{end.alt}}"},noSpecific:{prefix:"и",text:"нет определенного дня недели"}},hour:{"*":{prefix:"в"},empty:{prefix:"в",text:"каждый час"},everyX:{prefix:"",text:"каждые {{every.value}} часа"}},minute:{"*":{prefix:":"},empty:{text:"каждую минуту"},everyX:{prefix:"",text:"каждые {{every.value}} минуты"}},second:{"*":{prefix:":"},empty:{text:"каждую секунду"},everyX:{prefix:"",text:"каждые {{every.value}} секунды"}}},minute:{text:"Минута"},hour:{text:"Час",minute:{"*":{prefix:"в",suffix:"минут(а/ы)"},empty:{text:"каждый"}}},day:{prefix:"Каждый",text:"День"},week:{text:"Неделя"},month:{prefix:"Каждый",text:"Месяц"},year:{prefix:"Каждый",text:"Год"},"q-second":{text:"Секунда"},"q-minute":{text:"Минута",second:{"*":{prefix:"и"}}},"q-hour":{text:"Час",minute:{"*":{prefix:"и"}},second:{"*":{prefix:"и"}}}},ie={empty:{},en:et,de:Ke,pt:at,es:tt,da:Ze,zh:me,"zh-cn":me,ru:ot,fr:rt,hi:nt,ja:it};class st{constructor(e){c(this,"dict"),this.dict=e}getLocaleStr(...e){const r=e.map(i=>[i,"*"]);return he(this.dict,...r)||""}render(e,r,i,n,a){const o=this.getLocaleStr(e,r,i,n);return O.render(o,a||{})}}function lt(t,e){const[r]=t.split("-"),i=ie[t.toLowerCase()]||ie[r.toLowerCase()]||ie.en,n=oe(i,e||{});return new st(n)}function ut(t){const{period:e,field:r,initialCron:i="*",locale:n}=t,a=k(i),o=k(""),s=k([]),l=k(""),f=k(""),m=k(""),v=u=>{const p=u instanceof le?u.segments:[u];l.value=p.map(d=>n.render(e.value.id,r.id,d.type,P.Text,{field:r,...d.items})).join(","),f.value=n.getLocaleStr(e.value.id,r.id,u.type,P.Prefix),m.value=n.getLocaleStr(e.value.id,r.id,u.type,P.Suffix)},y=u=>{const p=xe(u,r);p!=null?(s.value=p.toArray(),v(p)):o.value=`${u} is not a valid cron segment (${r.id})`},C=u=>{if(a.value=="?"&&u.length==0)return;const p=Pe(u,r);p!=null?(a.value=p.toCron(),v(p)):o.value=`failed to convert ${u} to cron (${r.id})`};y(i);const M=u=>{const p=Array.from(u).sort((d,h)=>d>h?1:-1);s.value=p};return j(a,u=>{y(u)}),j(s,u=>{C(u)}),j(e,()=>{const u=xe(a.value,r);u!=null&&v(u)}),{id:r.id,items:r.items,cron:a,selected:s,error:o,select:M,text:l,prefix:f,suffix:m}}function ke(t,e="*"){return new Array(t).fill(e).join(" ")}function ft(t){return t!==void 0}class pt{constructor(){c(this,"locale","en"),c(this,"format","crontab")}initialValue(e,r="*"){return ke(e,r)}fields(e,r){const i=e=="quartz",n=Te(r),a=o=>(s,{segmentMap:l})=>{if(s.cron.value=="?")return;const f=l.get(o);f&&(f.cron.value="?")};return[...i?[{id:"second",items:n.secondItems}]:[],{id:"minute",items:n.minuteItems},{id:"hour",items:n.hourItems},{id:"day",items:n.dayItems,onChange:i?a("dayOfWeek"):void 0,segmentFactories:i?[N.fromString,K.fromString,te.fromString,ee.fromString,D.fromString]:void 0},{id:"month",items:n.monthItems},{id:"dayOfWeek",items:n.dayOfWeekItems,onChange:i?a("day"):void 0,segmentFactories:i?[N.fromString,K.fromString,te.fromString,ee.fromString,D.fromString]:void 0}]}periods(e){const r=e=="quartz",i=r?[{id:"q-second",value:[]}]:[],n=r?["second"]:[],a=r?"q-":"";return[...i,{id:a+"minute",value:[...n]},{id:a+"hour",value:["minute",...n]},{id:"day",value:["hour","minute",...n]},{id:"week",value:["dayOfWeek","hour","minute",...n]},{id:"month",value:["day","dayOfWeek","hour","minute",...n]},{id:"year",value:["month","day","dayOfWeek","hour","minute",...n]}]}}function xt(t){const e=new pt,r=t.locale??e.locale,i=t.format??e.format,{customLocale:n,fields:a=e.fields(i,r)}=t,o=t.initialValue??e.initialValue(a.length),s=lt(r,n),l=(t.periods??e.periods(i)).map(x=>({...x,text:s.getLocaleStr(x.id,P.Text)})),f=l.find(x=>x.id==t.initialPeriod)??l[l.length-1],m=k(o),v=k(""),y=k(f),C=k(""),M=k(""),u=a.map(x=>ut({field:new Oe(x),locale:s,period:y})),p=new Map(u.map(x=>[x.id,x])),d=ye(()=>y.value.value.map(x=>{const g=p.get(x);if(ft(g))return g;throw Error("${fieldId} not found")})),h=x=>{if(!x){m.value=ke(a.length);return}const g=x.split(" ");if(g.length!==a.length){v.value="invalid pattern";return}for(let w=0;w<g.length;w++)u[w].cron.value!=g[w]&&(u[w].cron.value=g[w]);v.value=""};h(o);const T=()=>{m.value=u.map(x=>y.value.value.includes(x.id)||x.cron.value=="?"?x.cron.value:"*").join(" ")},E=()=>{C.value=s.getLocaleStr(y.value.id,P.Prefix),M.value=s.getLocaleStr(y.value.id,P.Suffix)};return E(),j(m,h),j(y,()=>{T(),E()}),u.forEach((x,g)=>{j(x.cron,()=>{var w,W;(W=(w=a[g]).onChange)==null||W.call(w,x,{segmentMap:p}),T()}),j(x.error,w=>{v.value=w})}),{cron:m,error:v,segments:u,selected:d,period:{select:x=>{const g=l.map(w=>w.id).indexOf(x);g!=-1&&(y.value=l[g])},selected:y,items:l,prefix:C,suffix:M}}}function ct(t,e,{emit:r}){const i=xt(t);return j(e,n=>{n&&(i.cron.value=n)},{immediate:!0}),j(i.cron,n=>{r("update:model-value",n)}),j(i.error,n=>{r("error",n)}),i}const dt=()=>({modelValue:{type:String},initialPeriod:{type:String},format:{type:String},locale:{type:String},fields:{type:Array},periods:{type:Array},customLocale:{type:Object},cols:{type:Object,default:()=>({second:5,minute:5,hour:4,day:4})},disabled:{type:Boolean,default:!1}});function mt(t){const{items:e}=t,r=new Set,i=k(0),n=()=>{i.value=i.value+1},a=l=>{e.indexOf(l)!=-1&&(r.add(l),n())},o=l=>r.has(l),s=l=>{r.delete(l)&&n()};return{values:r,add:a,toggle:l=>{o(l)?s(l):a(l)},has:o,remove:s,clear:()=>{r.clear(),n()},updated:i,equals:l=>{if(l.length!=r.size)return!1;for(const f of l)if(!r.has(f))return!1;return!0}}}function yt(){return{modelValue:{type:[String,Number,Array]},selection:{type:String},clearable:{type:Boolean,default:!1},items:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!1},cols:{type:Number,default:1},itemText:{type:[String,Function],default:"text"},itemValue:{type:[String,Function],default:"value"},disabled:{type:Boolean,default:!1}}}function ht(t){const{items:e,cols:r=1,multiple:i=!1,itemText:n="text",itemValue:a="value"}=t,o=mt(t),s=i?k([]):k(null),l=k(""),f=p=>{i?o.toggle(p):(o.clear(),o.add(p))},m=p=>typeof a=="function"?a(p):p[a],v=p=>typeof n=="function"?n(p):p[n],y=new Map(e.map(p=>[m(p),p])),C=p=>{o.equals(p)||(o.clear(),p.forEach(d=>f(d)))},M=p=>{p=Array.isArray(p)?p:[p];const d=p.map(h=>y.get(h)).filter(h=>!!h);C(d)};j(o.updated,()=>{const p=Array.from(o.values);s.value=i?p.map(m):m(p[0]),l.value=p.map(v).join(",")});const u=ye(()=>i?!Array.isArray(s.value)||s.value.length==0:!!s.value);return{...o,select:f,selected:s,selectedStr:l,itemRows:Ee(e,r),setItems:C,setValues:M,isEmpty:u}}function vt(t,e,{emit:r}){const i=ht(t);return j(i.selected,()=>{r("update:model-value",i.selected.value)}),j(e,n=>{n&&i.setValues(n)},{immediate:!0}),i}const gt={inheritAttrs:!1,name:"CustomSelect",props:{...yt(),menuProps:{type:Object,default:()=>{}},chipProps:{type:Object,default:()=>{}}},emits:["update:model-value"],setup(t,e){return vt(t,()=>t.modelValue,e)}},Se=(t,e)=>{const r=t.__vccOpts||t;for(const[i,n]of e)r[i]=n;return r};function wt(t,e,r,i,n,a){const o=V("v-icon"),s=V("v-list-item"),l=V("v-col"),f=V("v-row"),m=V("v-list"),v=V("v-menu"),y=V("v-chip");return A(),I(y,fe(r.chipProps,{disabled:t.disabled}),Ce({default:b(()=>[U(" "+L(t.selection??t.selectedStr)+" ",1),X(v,fe({activator:"parent"},r.menuProps),{default:b(()=>[X(m,{class:"pa-0 ma-0"},{default:b(()=>[(A(!0),H(Z,null,ae(t.itemRows,(C,M)=>(A(),I(f,{key:M,"no-gutters":""},{default:b(()=>[(A(!0),H(Z,null,ae(C,(u,p)=>(A(),I(l,{key:p},{default:b(()=>[u?(A(),I(s,{key:0,class:"vcron-v-item",onClick:d=>t.select(u),active:t.has(u)},{default:b(()=>[U(L(u.text),1)]),_:2},1032,["onClick","active"])):z("",!0)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1},16)]),_:2},[t.clearable&&!t.isEmpty?{name:"append",fn:b(()=>[X(o,{size:"small",icon:"mdi-close",onClick:e[0]||(e[0]=Ae(C=>t.clear(),["stop"]))})]),key:"0"}:void 0]),1040,["disabled"])}const kt=Se(gt,[["render",wt]]),St=()=>({chipProps:{type:Object,default(){return{}}},...dt()}),bt=be({name:"CronVuetify",components:{CustomSelect:kt},props:St(),emits:["update:model-value","error"],setup(t,e){return ct(t,()=>t.modelValue,e)}}),Ct={style:{display:"inline-block"}};function At(t,e,r,i,n,a){const o=V("v-col"),s=V("custom-select"),l=V("v-row");return A(),H("div",Ct,[X(l,{align:"baseline",dense:""},{default:b(()=>[t.period.prefix.value?(A(),I(o,{key:0,class:"flex-grow-0"},{default:b(()=>[U(L(t.period.prefix.value),1)]),_:1})):z("",!0),X(o,{cols:"auto"},{default:b(()=>[X(s,{"model-value":t.period.selected.value.id,"item-value":"id",items:t.period.items,"onUpdate:modelValue":e[0]||(e[0]=f=>t.period.select(f)),disabled:t.disabled,"chip-props":t.chipProps},null,8,["model-value","items","disabled","chip-props"])]),_:1}),t.period.suffix.value?(A(),I(o,{key:1,class:"flex-grow-0"},{default:b(()=>[U(L(t.period.suffix.value),1)]),_:1})):z("",!0),(A(!0),H(Z,null,ae(t.selected,f=>(A(),H(Z,{key:f.id},[f.prefix.value?(A(),I(o,{key:0,class:"flex-grow-0"},{default:b(()=>[U(L(f.prefix.value),1)]),_:2},1024)):z("",!0),X(o,{cols:"auto"},{default:b(()=>[X(s,{"model-value":f.selected.value,"onUpdate:modelValue":m=>f.select(m),items:f.items,cols:t.cols[f.id]||1,selection:f.text.value,multiple:"",clearable:"",disabled:t.disabled,"chip-props":t.chipProps,"menu-props":{closeOnContentClick:!1}},null,8,["model-value","onUpdate:modelValue","items","cols","selection","disabled","chip-props"])]),_:2},1024),f.suffix.value?(A(),I(o,{key:1,class:"flex-grow-0"},{default:b(()=>[U(L(f.suffix.value),1)]),_:2},1024)):z("",!0)],64))),128))]),_:1})])}const jt=Se(bt,[["render",At]]),Ot={install:t=>{t.component("CronVuetify",jt)}};export{jt as CronVuetify,Ot as CronVuetifyPlugin,St as cronVuetifyProps,Ot as default};