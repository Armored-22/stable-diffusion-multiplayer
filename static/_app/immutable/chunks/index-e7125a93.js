function q(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(G)}function Z(t){return typeof t=="function"}function xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return q;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(et(e,n))}function $t(t,e,n,i){if(t){const r=J(t,e,n,i);return t[0](r)}}function J(t,e,n,i){return t[1]&&i?Y(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function vt(t,e,n,i,r,u){if(r){const c=J(e,n,i,u);t.p(c,r)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function kt(t,e,n){return t.set(n),e}let A=!1;function nt(){A=!0}function it(){A=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[s],f)}}function st(t,e){if(A){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){A&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function ot(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function St(){return z(" ")}function Ct(){return z("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Mt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,i,r=!1){ft(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Q(t,e,n,i){return K(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Dt(t,e,n){return Q(t,e,n,ot)}function Tt(t,e,n){return Q(t,e,n,ut)}function dt(t,e){return K(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Bt(t){return dt(t," ")}function Lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}let w;function $(t){w=t}function x(){if(!w)throw new Error("Function called outside component initialization");return w}function qt(t){x().$$.on_mount.push(t)}function zt(t){x().$$.after_update.push(t)}function Ft(t){x().$$.on_destroy.push(t)}function Ht(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=_t(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function It(t,e){return x().$$.context.set(t,e),e}function Wt(t){return x().$$.context.get(t)}function Gt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],W=[],S=[],B=[],R=Promise.resolve();let L=!1;function U(){L||(L=!0,R.then(V))}function Jt(){return U(),R}function O(t){S.push(t)}function Kt(t){B.push(t)}const T=new Set;let N=0;function V(){const t=w;do{for(;N<b.length;){const e=b[N];N++,$(e),ht(e.$$)}for($(null),b.length=0,N=0;W.length;)W.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];T.has(n)||(T.add(n),n())}S.length=0}while(b.length);for(;B.length;)B.pop()();L=!1,T.clear(),$(t)}function ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const C=new Set;let g;function Qt(){g={r:0,c:[],p:g}}function Rt(){g.r||v(g.c),g=g.p}function X(t,e){t&&t.i&&(C.delete(t),t.i(e))}function mt(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ut(t,e){mt(t,1,1,()=>{e.delete(t.key)})}function Vt(t,e,n,i,r,u,c,o,s,l,f,_){let d=t.length,m=u.length,h=d;const M={};for(;h--;)M[t[h].key]=h;const E=[],j=new Map,P=new Map;for(h=m;h--;){const a=_(r,u,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),j.set(p,E[h]=y),p in M&&P.set(p,Math.abs(h-M[p]))}const F=new Set,H=new Set;function D(a){X(a,1),a.m(o,f),c.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=E[m-1],p=t[d-1],y=a.key,k=p.key;a===p?(f=a.first,d--,m--):j.has(k)?!c.has(y)||F.has(y)?D(a):H.has(k)?d--:P.get(y)>P.get(k)?(H.add(y),D(a)):(F.add(k),d--):(s(p,c),d--)}for(;d--;){const a=t[d];j.has(a.key)||s(a,c)}for(;m;)D(E[m-1]);return E}function Xt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Yt(t){t&&t.c()}function Zt(t,e){t&&t.l(e)}function pt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||O(()=>{const s=u.map(G).filter(Z);c?c.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(O)}function yt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(b.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,r,u,c,o=[-1]){const s=w;$(t);const l=t.$$={fragment:null,ctx:null,props:u,update:q,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&gt(t,_)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=at(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&X(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),it(),V()}$(s)}class ee{$destroy(){yt(this,1),this.$destroy=q}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{q as A,$t as B,vt as C,Et as D,wt as E,st as F,bt as G,It as H,Wt as I,Ft as J,ut as K,Tt as L,W as M,kt as N,At as O,Ht as P,jt as Q,Mt as R,ee as S,v as T,Gt as U,Xt as V,Kt as W,Vt as X,Ut as Y,St as a,Nt as b,Bt as c,Rt as d,Ct as e,X as f,Qt as g,lt as h,te as i,zt as j,ot as k,Dt as l,at as m,Pt as n,qt as o,Ot as p,z as q,dt as r,xt as s,mt as t,Lt as u,Yt as v,Zt as w,pt as x,yt as y,Jt as z};