import{S as q,i as V,s as z,w as L,a as j,e as A,x as y,c as B,y as I,b as w,t as m,d as H,f as p,z as x,h as _,H as N,o as G,g as M,I as T,k,q as C,l as g,m as v,r as D,n as P,G as $,B as b}from"../../chunks/index-fecbaf1e.js";import{A as X,c as Y,P as S,s as E,M as F,t as U,L as J,R as K,a as O}from"../../chunks/About-c1893df8.js";function Q(c){let e,o,t;return{c(){e=k("div"),o=k("h1"),t=C("Loading..."),this.h()},l(s){e=g(s,"DIV",{class:!0});var l=v(e);o=g(l,"H1",{class:!0});var a=v(o);t=D(a,"Loading..."),a.forEach(_),l.forEach(_),this.h()},h(){P(o,"class","text-2xl font-bold"),P(e,"class","flex flex-col items-center justify-center h-full")},m(s,l){w(s,e,l),$(e,o),$(o,t)},p:b,i:b,o:b,d(s){s&&_(e)}}}function W(c){let e,o;return e=new J({props:{client:c[1],$$slots:{default:[oe]},$$scope:{ctx:c}}}),{c(){L(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){I(e,t,s),o=!0},p(t,s){const l={};s&2&&(l.client=t[1]),s&132&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function Z(c){let e,o,t,s,l,a;return{c(){e=k("div"),o=k("h1"),t=C("No room selected"),s=j(),l=k("p"),a=C("Please select a room in the URL"),this.h()},l(i){e=g(i,"DIV",{class:!0});var n=v(e);o=g(n,"H1",{class:!0});var f=v(o);t=D(f,"No room selected"),f.forEach(_),s=B(n),l=g(n,"P",{class:!0});var r=v(l);a=D(r,"Please select a room in the URL"),r.forEach(_),n.forEach(_),this.h()},h(){P(o,"class","text-2xl font-bold"),P(l,"class","text-gray-500"),P(e,"class","flex flex-col items-center justify-center h-full")},m(i,n){w(i,e,n),$(e,o),$(o,t),$(e,s),$(e,l),$(l,a)},p:b,i:b,o:b,d(i){i&&_(e)}}}function ee(c){let e,o;return e=new K({props:{id:c[2],$$slots:{default:[te]},$$scope:{ctx:c}}}),{c(){L(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){I(e,t,s),o=!0},p(t,s){const l={};s&4&&(l.id=t[2]),s&128&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function te(c){let e,o;return e=new O({}),{c(){L(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,s){I(e,t,s),o=!0},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function oe(c){let e,o,t,s;const l=[ee,Z],a=[];function i(n,f){return n[2]?0:1}return e=i(c),o=a[e]=l[e](c),{c(){o.c(),t=A()},l(n){o.l(n),t=A()},m(n,f){a[e].m(n,f),w(n,t,f),s=!0},p(n,f){let r=e;e=i(n),e===r?a[e].p(n,f):(M(),m(a[r],1,1,()=>{a[r]=null}),H(),o=a[e],o?o.p(n,f):(o=a[e]=l[e](n),o.c()),p(o,1),o.m(t.parentNode,t))},i(n){s||(p(o),s=!0)},o(n){m(o),s=!1},d(n){a[e].d(n),n&&_(t)}}}function se(c){let e,o,t,s,l,a;e=new X({props:{classList:c[3]?"flex":"hidden"}}),e.$on("click",c[5]);const i=[W,Q],n=[];function f(r,u){return r[0]?1:0}return t=f(c),s=n[t]=i[t](c),{c(){L(e.$$.fragment),o=j(),s.c(),l=A()},l(r){y(e.$$.fragment,r),o=B(r),s.l(r),l=A()},m(r,u){I(e,r,u),w(r,o,u),n[t].m(r,u),w(r,l,u),a=!0},p(r,[u]){const h={};u&8&&(h.classList=r[3]?"flex":"hidden"),e.$set(h);let d=t;t=f(r),t===d?n[t].p(r,u):(M(),m(n[d],1,1,()=>{n[d]=null}),H(),s=n[t],s?s.p(r,u):(s=n[t]=i[t](r),s.c()),p(s,1),s.m(l.parentNode,l))},i(r){a||(p(e.$$.fragment,r),p(s),a=!0)},o(r){m(e.$$.fragment,r),m(s),a=!1},d(r){x(e,r),r&&_(o),n[t].d(r),r&&_(l)}}}function re(c,e,o){let t,s,l;N(c,E,r=>o(4,s=r)),N(c,U,r=>o(3,l=r));let a=!0,i;G(()=>{o(1,i=Y({authEndpoint:S+"/auth"})),n()});async function n(){o(0,a=!0);const r=new URLSearchParams(window.location.search).get("roomid"),h=await(await fetch(S+"/rooms")).json();if(r)h.find(R=>R.room_id===r)&&E.set(r);else{const d=h.find(R=>R.users_count<F)||null;E.set(d?d.room_id:null)}return o(0,a=!1),{rooms:h}}const f=()=>T(U,l=!1,l);return c.$$.update=()=>{c.$$.dirty&16&&o(2,t=s)},[a,i,t,l,s,f]}class ae extends q{constructor(e){super(),V(this,e,re,se,z,{})}}export{ae as default};