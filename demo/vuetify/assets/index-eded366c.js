import{C as k,I as q,R as x,T as C}from"./index-601e02f8.js";import"./helpers-3629e879.js";import"./index-49edb766.js";function _(e,t){const s=t.modifiers||{},n=t.value,{once:u,immediate:c,...o}=s,r=!Object.keys(o).length,{handler:a,options:f}=typeof n=="object"?n:{handler:n,options:{attributes:(o==null?void 0:o.attr)??r,characterData:(o==null?void 0:o.char)??r,childList:(o==null?void 0:o.child)??r,subtree:(o==null?void 0:o.sub)??r}},i=new MutationObserver(function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],p=arguments.length>1?arguments[1]:void 0;a==null||a(v,p),u&&d(e,t)});c&&(a==null||a([],i)),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:i},i.observe(e,f)}function d(e,t){var s;(s=e._mutate)!=null&&s[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const w={mounted:_,unmounted:d};function $(e,t){var u,c;const s=t.value,n={passive:!((u=t.modifiers)!=null&&u.active)};window.addEventListener("resize",s,n),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:s,options:n},(c=t.modifiers)!=null&&c.quiet||s()}function h(e,t){var u;if(!((u=e._onResize)!=null&&u[t.instance.$.uid]))return;const{handler:s,options:n}=e._onResize[t.instance.$.uid];window.removeEventListener("resize",s,n),delete e._onResize[t.instance.$.uid]}const j={mounted:$,unmounted:h};function l(e,t){const{self:s=!1}=t.modifiers??{},n=t.value,u=typeof n=="object"&&n.options||{passive:!0},c=typeof n=="function"||"handleEvent"in n?n:n.handler,o=s?e:t.arg?document.querySelector(t.arg):window;o&&(o.addEventListener("scroll",c,u),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:c,options:u,target:s?void 0:o})}function m(e,t){var c;if(!((c=e._onScroll)!=null&&c[t.instance.$.uid]))return;const{handler:s,options:n,target:u=e}=e._onScroll[t.instance.$.uid];u.removeEventListener("scroll",s,n),delete e._onScroll[t.instance.$.uid]}function z(e,t){t.value!==t.oldValue&&(m(e,t),l(e,t))}const O={mounted:l,unmounted:m,updated:z};export{k as ClickOutside,q as Intersect,w as Mutate,j as Resize,x as Ripple,O as Scroll,C as Touch};
