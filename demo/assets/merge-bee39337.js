import{i as A,a as I,b as q,e as _,c as w,d as F,f as L,k as C,g as h,h as P,j as S,l as b,m as x,n as D,o as E,p as G,q as y,r as R,s as T,t as V,S as $,u as B,v as H,w as J}from"./_baseEach-640b36f7.js";function K(n,e,a){if(!A(a))return!1;var s=typeof e;return(s=="number"?I(a)&&q(e,a.length):s=="string"&&e in a)?_(a[e],n):!1}function N(n){return w(function(e,a){var s=-1,r=a.length,f=r>1?a[r-1]:void 0,t=r>2?a[2]:void 0;for(f=n.length>3&&typeof f=="function"?(r--,f):void 0,t&&K(a[0],a[1],t)&&(f=r<3?void 0:f,r=1),e=Object(e);++s<r;){var i=a[s];i&&n(e,i,s,f)}return e})}function m(n,e,a){(a!==void 0&&!_(n[e],a)||a===void 0&&!(e in n))&&F(n,e,a)}function v(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function Q(n){return L(n,C(n))}function U(n,e,a,s,r,f,t){var i=v(n,a),u=v(e,a),O=t.get(u);if(O){m(n,a,O);return}var d=f?f(i,u,a+"",n,e,t):void 0,l=d===void 0;if(l){var g=h(u),p=!g&&P(u),M=!g&&!p&&S(u);d=u,g||p||M?h(i)?d=i:b(i)?d=x(i):p?(l=!1,d=D(u,!0)):M?(l=!1,d=E(u,!0)):d=[]:G(u)||y(u)?(d=i,y(i)?d=Q(i):(!A(i)||R(i))&&(d=T(u))):l=!1}l&&(t.set(u,d),r(d,u,s,f,t),t.delete(u)),m(n,a,d)}function o(n,e,a,s,r){n!==e&&V(e,function(f,t){if(r||(r=new $),A(f))U(n,e,t,a,o,s,r);else{var i=s?s(v(n,t),f,t+"",n,e,r):void 0;i===void 0&&(i=f),m(n,t,i)}},C)}function W(n,e){var a=-1,s=I(n)?Array(n.length):[];return B(n,function(r,f,t){s[++a]=e(r,f,t)}),s}function Z(n,e){var a=h(n)?H:W;return a(n,J(e))}var X=N(function(n,e,a){o(n,e,a)});const z=X;export{Z as a,z as m};
