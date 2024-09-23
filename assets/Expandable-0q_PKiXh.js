import{b as n,_ as r,r as h,n as p,o,c,d as a,i as u,t as l,E as v,h as _,y as f,C as m,l as x,G as C}from"./index--g9vgMEj.js";/**
 * @license lucide-vue-next v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=n("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=n("RefreshCcwIcon",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),y={class:"expandable"},k={class:"title"},g={class:"toggle-icon"},b={key:0,class:"content-container"},w={class:"content"},E={__name:"Expandable",props:{title:{type:String,default:"Title here"},titleopen:{type:String,default:""}},setup(t){const s=t,e=h(!1),i=()=>{e.value=!e.value};return p(()=>e.value&&s.titleopen?s.titleopen:s.title),(d,I)=>(o(),c("div",y,[a("div",{class:v(["title-container",{closed:!e.value}]),onClick:i},[a("p",k,[u(l(e.value&&t.titleopen||t.title)+" ",1),a("span",g,l(e.value?"▲":"▼"),1)])],2),_(C,{name:"expand"},{default:f(()=>[e.value?(o(),c("div",b,[a("div",w,[m(d.$slots,"default",{},void 0,!0)])])):x("",!0)]),_:3})]))}},V=r(E,[["__scopeId","data-v-fbc70df7"]]);export{M as C,V as E,S as R,N as a};
