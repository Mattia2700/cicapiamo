import{d as f,c as d,b as v,r as c,k as x,o as h,a as b,f as o,e as g,t as w,P as D}from"./index-ixvfb0he.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";const y="/assets/locked-sranDray.png",T={key:0,src:y,class:"max-h-[230px] pt-[12px] pr-[6px]",alt:"disabled"},C={key:1,class:"max-h-[230px] active:pt-[20px] active:pr-[3px]",alt:"active"},B=f({__name:"AnswerButton",props:{disabled:Boolean},setup(i){const s=i;return(e,t)=>s.disabled?(v(),d("img",T)):(v(),d("img",C))}}),O=k(B,[["__scopeId","data-v-f9f36c78"]]),I={class:"flex flex-col mt-4 justify-center items-center w-full"},N=o("span",{class:"text-center"},"Step 3: Gioca!",-1),j={class:"mt-4 flex"},A={class:"flex-1 w-full flex justify-start"},S=["disabled"],E={class:"flex-1 flex justify-end"},V=["disabled"],$={class:"flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center mt-3"},M={id:"guessedCount",class:"text-xl"},G=f({__name:"Answer",props:{otherDevice:{}},setup(i){const s=i,e=c(!1),t=c(!0),u=c(null),l=c(null),a=c(0),r=x();h(()=>{s.otherDevice.on("data",n=>{n.command==="start"?t.value=!1:n.command==="passo"?(e.value=!1,t.value=!0):"score"in n&&(a.value=n.score)})});function p(){t.value||e.value||(s.otherDevice.send({command:"answer"}),e.value=!0,l.value=setTimeout(()=>{a.value>0&&a.value--,e.value=!e.value,t.value=!0,s.otherDevice.send({command:"continue"}),s.otherDevice.send({score:a.value})},1e4),u.value=r.info("Rispondi!",{position:D.BOTTOM_CENTER,timeout:1e4,closeOnClick:!1,pauseOnFocusLoss:!1,pauseOnHover:!1,draggable:!1,closeButton:!1}))}function m(){l.value&&(clearTimeout(l.value),r.dismiss(u.value)),a.value++,e.value=!1,t.value=!0,s.otherDevice.send({command:"continue"}),s.otherDevice.send({score:a.value})}function _(){l.value&&(clearTimeout(l.value),r.dismiss(u.value)),a.value>0&&a.value--,e.value=!1,t.value=!0,s.otherDevice.send({command:"continue"}),s.otherDevice.send({score:a.value})}return(n,P)=>(v(),d("div",I,[N,b(O,{disabled:t.value||e.value,onClick:p},null,8,["disabled"]),o("div",j,[o("div",A,[o("button",{onClick:m,class:"mr-2 w-fit p-1 bg-green-600 uppercase font-bold rounded disabled:opacity-20 h-12",disabled:t.value||!e.value}," Corretto ",8,S)]),o("div",E,[o("button",{onClick:_,class:"ml-2 w-fit p-1 bg-red-600 uppercase font-bold rounded disabled:opacity-20",disabled:t.value||!e.value}," Sbagliato ",8,V)])]),o("span",$,[g(" Indovinate "),o("span",M,w(a.value),1)])]))}});export{G as default};
