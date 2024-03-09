import{l as b,m as O,p as A,r as p,q as j,g as L,d as k,c as g,n as x,b as h,k as W,o as S,j as I,f as m,t as P,a as v,w as y,e as B,s as N,P as V}from"./index-Kt4Jd5Xq.js";import{_ as G,B as M}from"./Bottom-F4Gy3lWQ.js";import{_ as R}from"./Text.vue_vue_type_script_setup_true_lang-mBIRJwRU.js";const z="/assets/locked-sranDray.png";function F(s){return O()?(A(s),!0):!1}function D(s){return typeof s=="function"?s():b(s)}const q=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const H=Object.prototype.toString,U=s=>H.call(s)==="[object Object]",J=()=>{};function $(s){var n;const e=D(s);return(n=e==null?void 0:e.$el)!=null?n:e}const T=q?window:void 0;function f(...s){let n,e,t,l;if(typeof s[0]=="string"||Array.isArray(s[0])?([e,t,l]=s,n=T):[n,e,t,l]=s,!n)return J;Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]);const o=[],a=()=>{o.forEach(c=>c()),o.length=0},r=(c,i,_,w)=>(c.addEventListener(i,_,w),()=>c.removeEventListener(i,_,w)),u=L(()=>[$(n),D(l)],([c,i])=>{if(a(),!c)return;const _=U(i)?{...i}:i;o.push(...e.flatMap(w=>t.map(E=>r(c,w,E,_))))},{immediate:!0,flush:"post"}),d=()=>{u(),a()};return F(d),d}function K(s={}){const{touch:n=!0,drag:e=!0,capture:t=!1,initialValue:l=!1,window:o=T}=s,a=p(l),r=p(null);if(!o)return{pressed:a,sourceType:r};const u=i=>()=>{a.value=!0,r.value=i},d=()=>{a.value=!1,r.value=null},c=j(()=>$(s.target)||o);return f(c,"mousedown",u("mouse"),{passive:!0,capture:t}),f(o,"mouseleave",d,{passive:!0,capture:t}),f(o,"mouseup",d,{passive:!0,capture:t}),e&&(f(c,"dragstart",u("mouse"),{passive:!0,capture:t}),f(o,"drop",d,{passive:!0,capture:t}),f(o,"dragend",d,{passive:!0,capture:t})),n&&(f(c,"touchstart",u("touch"),{passive:!0,capture:t}),f(o,"touchend",d,{passive:!0,capture:t}),f(o,"touchcancel",d,{passive:!0,capture:t})),{pressed:a,sourceType:r}}const Q={key:0,src:z,class:"max-h-[230px] pr-[6px]",alt:"disabled"},X=["src"],Y=k({__name:"AnswerButton",props:{disabled:Boolean},setup(s){const n=s,{pressed:e}=K();return(t,l)=>n.disabled?(h(),g("img",Q)):(h(),g("img",{key:1,src:b(e)?"/src/assets/pressed.png":"/src/assets/active.png",class:"max-h-[230px]",style:x({"margin-top":b(e)?"63px":"43px","margin-right":b(e)?"2px":"0"}),alt:"active"},null,12,X))}}),Z=G(Y,[["__scopeId","data-v-7754fedf"]]),ee=["disabled"],C=k({__name:"Point",props:{flavor:{},disabled:{type:Boolean}},emits:["click"],setup(s,{emit:n}){const e=s,t=n;return(l,o)=>(h(),g("button",{class:"h-[3.5rem] w-full rounded-2xl leading-[3.25rem] font-montserrat font-semibold text-[18px] uppercase",style:x(e.disabled?{color:e.flavor==="correct"?"#003324":"#330712",backgroundColor:e.flavor==="correct"?"#2e7b64":"#8e223c",cursor:"not-allowed"}:{color:e.flavor==="correct"?"#003324":"#330712",backgroundColor:e.flavor==="correct"?"#00dd9b":"#e93173"}),disabled:e.disabled,onClick:o[0]||(o[0]=a=>t("click"))},[W(l.$slots,"default")],12,ee))}}),te={class:"w-full flex flex-col items-center"},se=m("span",{class:"ml-4 font-montserrat font-medium text-[16px]"},"Indovinate",-1),oe={class:"mr-4 font-montserrat font-medium text-[24px]"},ne=m("p",null,"Corretto",-1),ae=m("span",{class:"w-6"},null,-1),re=k({__name:"Game",props:{disabled:{type:Boolean},score:{}},emits:["correct","wrong"],setup(s,{emit:n}){const e=s,t=n,l=p();S(()=>{o(),window.addEventListener("resize",o)}),I(()=>{window.removeEventListener("resize",o)});function o(){const a=document.getElementById("title"),r=getComputedStyle(a),u=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight);l.value=a.offsetWidth-u}return(a,r)=>(h(),g("div",te,[m("div",{class:"flex justify-between bg-[#322f37] leading-[3.8125rem] rounded-xl",style:x({width:l.value+"px"})},[se,m("span",oe,P(e.score),1)],4),m("div",{class:"flex flex-row items-center mt-4 w-full",style:x({width:l.value+"px"})},[v(C,{flavor:"correct",disabled:e.disabled,onClick:r[0]||(r[0]=u=>t("correct"))},{default:y(()=>[ne]),_:1},8,["disabled"]),ae,v(C,{flavor:"wrong",disabled:e.disabled,onClick:r[1]||(r[1]=u=>t("wrong"))},{default:y(()=>[B("Sbagliato")]),_:1},8,["disabled"])],4)]))}}),le={class:"flex flex-col justify-center items-center w-full"},de=k({__name:"Answer",props:{otherDevice:{}},setup(s){const n=s,e=p(!1),t=p(!0),l=p(null),o=p(null),a=p(0),r=N();S(()=>{n.otherDevice.on("data",i=>{i.command==="start"?(a.value=0,t.value=!1):i.command==="passo"?(e.value=!1,t.value=!0):"score"in i&&(a.value=i.score)})});function u(){t.value||e.value||(n.otherDevice.send({command:"answer"}),e.value=!0,o.value=setTimeout(()=>{a.value>0&&a.value--,e.value=!e.value,t.value=!0,n.otherDevice.send({command:"continue"}),n.otherDevice.send({score:a.value})},1e4),l.value=r.info("Rispondi!",{position:V.BOTTOM_CENTER,icon:!1,timeout:1e4,closeOnClick:!1,pauseOnFocusLoss:!1,pauseOnHover:!1,draggable:!1,closeButton:!1}))}function d(){o.value&&(clearTimeout(o.value),r.dismiss(l.value)),a.value++,e.value=!1,t.value=!0,n.otherDevice.send({command:"continue"}),n.otherDevice.send({score:a.value})}function c(){o.value&&(clearTimeout(o.value),r.dismiss(l.value)),a.value>0&&a.value--,e.value=!1,t.value=!0,n.otherDevice.send({command:"continue"}),n.otherDevice.send({score:a.value})}return(i,_)=>(h(),g("div",le,[v(R,null,{default:y(()=>[B("Gioca !")]),_:1}),v(Z,{disabled:t.value||e.value,onClick:u},null,8,["disabled"]),v(M,null,{default:y(()=>[v(re,{score:a.value,disabled:t.value||!e.value,onCorrect:d,onWrong:c},null,8,["score","disabled"])]),_:1})]))}});export{de as default};