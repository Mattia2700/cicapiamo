import{d as y,r as a,e as C,c as f,a as e,w as T,v as j,b as k,t as S,P as O,o as p}from"./index-iQ5-D32d.js";import{$ as B}from"./bundler-QqWW2KDW.js";const D={key:0,class:"mt-4 justify-center"},I=e("span",{class:"text-center"},"Step 2: Ora devi inserire il codice che ti viene mostrato sul secondo dispositvo.",-1),M={class:"mt-4 items-center justify-center"},N=e("span",{class:"ml-3 font-bold mr-3"},"Inserisci il codice a 5 cifre:",-1),$={key:1,class:"flex flex-col mt-4 justify-center items-center w-full"},E=e("span",{class:"text-center"},"Step 3: Gioca!",-1),R=["disabled"],V={class:"mt-4 flex"},q={class:"flex-1 w-full flex justify-start"},A=["disabled"],P={class:"flex-1 flex justify-end"},F=["disabled"],G={class:"flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center mt-3"},H={id:"guessedCount",class:"text-xl"},z=y({__name:"Answer",setup(L){const u=a(""),o=a(!1),n=a(!0),i=a(null),c=a(null),m=String(Math.round(Math.random()*1e5)).padStart(5,"0"),r=a(!1),s=a(null),t=a(0),d=C(),_=a(new B("cicapiamo-"+m,{debug:3,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"}}));function b(){s.value=_.value.connect("cicapiamo-"+u.value),s.value.on("open",()=>{s.value.send({status:"connected"}),s.value.on("data",l=>{l.status==="connected"?r.value=!0:l.command==="start"?n.value=!1:l.command==="passo"?(o.value=!1,n.value=!0):"score"in l&&(t.value=l.score)})})}function x(){s.value.send({command:"answer"}),o.value=!0,c.value=setTimeout(()=>{t.value>0&&t.value--,o.value=!o.value,n.value=!0,s.value.send({command:"continue"}),s.value.send({score:t.value})},1e4),i.value=d.info("Rispondi!",{position:O.BOTTOM_CENTER,timeout:1e4,closeOnClick:!1,pauseOnFocusLoss:!1,pauseOnHover:!1,draggable:!1,closeButton:!1})}function h(){c.value&&(clearTimeout(c.value),d.dismiss(i.value)),t.value++,o.value=!1,n.value=!0,s.value.send({command:"continue"}),s.value.send({score:t.value})}function g(){c.value&&(clearTimeout(c.value),d.dismiss(i.value)),t.value>0&&t.value--,o.value=!1,n.value=!0,s.value.send({command:"continue"}),s.value.send({score:t.value})}return(l,v)=>r.value?(p(),f("div",$,[E,e("button",{onClick:x,class:"m-8 w-52 aspect-square bg-red-600 rounded-full flex justify-center items-center text-xl font-bold uppercase disabled:opacity-20",disabled:n.value||o.value}," Rispondi ",8,R),e("div",V,[e("div",q,[e("button",{onClick:h,class:"mr-2 w-fit p-1 bg-green-600 uppercase font-bold rounded disabled:opacity-20 h-12",disabled:n.value||!o.value}," Corretto ",8,A)]),e("div",P,[e("button",{onClick:g,class:"ml-2 w-fit p-1 bg-red-600 uppercase font-bold rounded disabled:opacity-20",disabled:n.value||!o.value}," Sbagliato ",8,F)])]),e("span",G,[k(" Indovinate "),e("span",H,S(t.value),1)])])):(p(),f("div",D,[I,e("div",M,[N,T(e("input",{type:"number",placeholder:"Codice","onUpdate:modelValue":v[0]||(v[0]=w=>u.value=w),class:"p-2 rounded bg-white text-black mt-3 mr-1"},null,512),[[j,u.value]]),e("input",{type:"button",value:"Connettiti",onClick:b,class:"p-2 mt-5 rounded bg-white text-black font-bold cursor-pointer uppercase"})])]))}});export{z as default};
