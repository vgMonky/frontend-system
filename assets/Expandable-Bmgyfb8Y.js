import{c as l,_ as r,r as h,a as p,o as n,b as o,d as a,k as u,t as c,I as v,e as _,A as f,G as m,p as x,J as k}from"./index-DQPUY_Xg.js";/**
 * @license lucide-vue-next v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=l("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=l("RefreshCcwIcon",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),g={class:"expandable"},y={class:"title"},C={class:"toggle-icon"},b={key:0,class:"content-container"},E={class:"content"},w={__name:"Expandable",props:{title:{type:String,default:"Title here"},titleopen:{type:String,default:""}},setup(t){const s=t,e=h(!1),i=()=>{e.value=!e.value};return p(()=>e.value&&s.titleopen?s.titleopen:s.title),(d,I)=>(n(),o("div",g,[a("div",{class:v(["title-container",{closed:!e.value}]),onClick:i},[a("p",y,[u(c(e.value&&t.titleopen||t.title)+" ",1),a("span",C,c(e.value?"▲":"▼"),1)])],2),_(k,{name:"expand"},{default:f(()=>[e.value?(n(),o("div",b,[a("div",E,[m(d.$slots,"default",{},void 0,!0)])])):x("",!0)]),_:3})]))}},S=r(w,[["__scopeId","data-v-9a732aa9"]]);export{M as C,S as E,N as R};
