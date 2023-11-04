import{S as I,J as P,P as T,Q as k}from"./helpers-3629e879.js";function $(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}function j(t,e){if(!I)return;const n=e.modifiers||{},o=e.value,{handler:s,options:i}=typeof o=="object"?o:{handler:o,options:{}},c=new IntersectionObserver(function(){var l;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;const d=(l=t._observe)==null?void 0:l[e.instance.$.uid];if(!d)return;const m=r.some(f=>f.isIntersecting);s&&(!n.quiet||d.init)&&(!n.once||m||d.init)&&s(m,r,a),m&&n.once?R(t,e):d.init=!0},i);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:c},c.observe(t)}function R(t,e){var o;const n=(o=t._observe)==null?void 0:o[e.instance.$.uid];n&&(n.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const et={mounted:j,unmounted:R};const E=Symbol("rippleStop"),W=80;function y(t,e){t.style.transform=e,t.style.webkitTransform=e}function L(t){return t.constructor.name==="TouchEvent"}function w(t){return t.constructor.name==="KeyboardEvent"}const A=function(t,e){var l;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=0,s=0;if(!w(t)){const f=e.getBoundingClientRect(),h=L(t)?t.touches[t.touches.length-1]:t;o=h.clientX-f.left,s=h.clientY-f.top}let i=0,c=.3;(l=e._ripple)!=null&&l.circle?(c=.15,i=e.clientWidth/2,i=n.center?i:i+Math.sqrt((o-i)**2+(s-i)**2)/4):i=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const r=`${(e.clientWidth-i*2)/2}px`,a=`${(e.clientHeight-i*2)/2}px`,d=n.center?r:`${o-i}px`,m=n.center?a:`${s-i}px`;return{radius:i,scale:c,x:d,y:m,centerX:r,centerY:a}},_={show(t,e){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((h=e==null?void 0:e._ripple)!=null&&h.enabled))return;const o=document.createElement("span"),s=document.createElement("span");o.appendChild(s),o.className="v-ripple__container",n.class&&(o.className+=` ${n.class}`);const{radius:i,scale:c,x:r,y:a,centerX:d,centerY:m}=A(t,e,n),l=`${i*2}px`;s.className="v-ripple__animation",s.style.width=l,s.style.height=l,e.appendChild(o);const f=window.getComputedStyle(e);f&&f.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),y(s,`translate(${r}, ${a}) scale3d(${c},${c},${c})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),y(s,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(t){var i;if(!((i=t==null?void 0:t._ripple)!=null&&i.enabled))return;const e=t.getElementsByClassName("v-ripple__animation");if(e.length===0)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const o=performance.now()-Number(n.dataset.activated),s=Math.max(250-o,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===t&&t.removeChild(n.parentNode)},300)},s)}};function Y(t){return typeof t>"u"||!!t}function v(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[E])){if(t[E]=!0,L(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||w(t),n._ripple.class&&(e.class=n._ripple.class),L(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{_.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var o;(o=n==null?void 0:n._ripple)!=null&&o.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},W)}else _.show(t,n,e)}}function g(t){t[E]=!0}function u(t){const e=t.currentTarget;if(e!=null&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{u(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),_.hide(e)}}function O(t){const e=t.currentTarget;e!=null&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let p=!1;function X(t){!p&&(t.keyCode===T.enter||t.keyCode===T.space)&&(p=!0,v(t))}function b(t){p=!1,u(t)}function S(t){p&&(p=!1,u(t))}function H(t,e,n){const{value:o,modifiers:s}=e,i=Y(o);if(i||_.hide(t),t._ripple=t._ripple??{},t._ripple.enabled=i,t._ripple.centered=s.center,t._ripple.circle=s.circle,P(o)&&o.class&&(t._ripple.class=o.class),i&&!n){if(s.stop){t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("mousedown",g);return}t.addEventListener("touchstart",v,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),t.addEventListener("touchmove",O,{passive:!0}),t.addEventListener("touchcancel",u),t.addEventListener("mousedown",v),t.addEventListener("mouseup",u),t.addEventListener("mouseleave",u),t.addEventListener("keydown",X),t.addEventListener("keyup",b),t.addEventListener("blur",S),t.addEventListener("dragstart",u,{passive:!0})}else!i&&n&&N(t)}function N(t){t.removeEventListener("mousedown",v),t.removeEventListener("touchstart",v),t.removeEventListener("touchend",u),t.removeEventListener("touchmove",O),t.removeEventListener("touchcancel",u),t.removeEventListener("mouseup",u),t.removeEventListener("mouseleave",u),t.removeEventListener("keydown",X),t.removeEventListener("keyup",b),t.removeEventListener("dragstart",u),t.removeEventListener("blur",S)}function q(t,e){H(t,e,!1)}function B(t){delete t._ripple,N(t)}function V(t,e){if(e.value===e.oldValue)return;const n=Y(e.oldValue);H(t,e,n)}const nt={mounted:q,unmounted:B,updated:V};function D(){return!0}function M(t,e,n){if(!t||x(t,n)===!1)return!1;const o=$(e);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===t.target)return!1;const s=(typeof n.value=="object"&&n.value.include||(()=>[]))();return s.push(e),!s.some(i=>i==null?void 0:i.contains(t.target))}function x(t,e){return(typeof e.value=="object"&&e.value.closeConditional||D)(t)}function K(t,e,n){const o=typeof n.value=="function"?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&M(t,e,n)&&setTimeout(()=>{x(t,n)&&o&&o(t)},0)}function C(t,e){const n=$(t);e(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&e(n)}const ot={mounted(t,e){const n=s=>K(s,t,e),o=s=>{t._clickOutside.lastMousedownWasOutside=M(s,t,e)};C(t,s=>{s.addEventListener("click",n,!0),s.addEventListener("mousedown",o,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!1}),t._clickOutside[e.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(t,e){t._clickOutside&&(C(t,n=>{var i;if(!n||!((i=t._clickOutside)!=null&&i[e.instance.$.uid]))return;const{onClick:o,onMousedown:s}=t._clickOutside[e.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",s,!0)}),delete t._clickOutside[e.instance.$.uid])}},z=t=>{const{touchstartX:e,touchendX:n,touchstartY:o,touchendY:s}=t,i=.5,c=16;t.offsetX=n-e,t.offsetY=s-o,Math.abs(t.offsetY)<i*Math.abs(t.offsetX)&&(t.left&&n<e-c&&t.left(t),t.right&&n>e+c&&t.right(t)),Math.abs(t.offsetX)<i*Math.abs(t.offsetY)&&(t.up&&s<o-c&&t.up(t),t.down&&s>o+c&&t.down(t))};function G(t,e){var o;const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,(o=e.start)==null||o.call(e,{originalEvent:t,...e})}function J(t,e){var o;const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,(o=e.end)==null||o.call(e,{originalEvent:t,...e}),z(e)}function Q(t,e){var o;const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,(o=e.move)==null||o.call(e,{originalEvent:t,...e})}function U(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:n=>G(n,e),touchend:n=>J(n,e),touchmove:n=>Q(n,e)}}function F(t,e){var r;const n=e.value,o=n!=null&&n.parent?t.parentElement:t,s=(n==null?void 0:n.options)??{passive:!0},i=(r=e.instance)==null?void 0:r.$.uid;if(!o||!i)return;const c=U(e.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[i]=c,k(c).forEach(a=>{o.addEventListener(a,c[a],s)})}function Z(t,e){var i,c;const n=(i=e.value)!=null&&i.parent?t.parentElement:t,o=(c=e.instance)==null?void 0:c.$.uid;if(!(n!=null&&n._touchHandlers)||!o)return;const s=n._touchHandlers[o];k(s).forEach(r=>{n.removeEventListener(r,s[r])}),delete n._touchHandlers[o]}const st={mounted:F,unmounted:Z};export{ot as C,et as I,nt as R,st as T};
