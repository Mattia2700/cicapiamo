import{d as j,r as a,f as k,c as _,a as f,w as v,g as B,v as O,e as s,b as c,t as S,P as D,o as x}from"./index-Gf4OWD9e.js";import{$ as I}from"./bundler-QqWW2KDW.js";import{T as N}from"./Text-x5-a7_99.js";import{B as M,a as V}from"./BottomButton-UqxYQLLO.js";const $={key:0,class:"flex flex-col items-center"},E=s("span",{class:"font-semibold"},"codice",-1),R={key:1,class:"flex flex-col mt-4 justify-center items-center w-full"},q=s("span",{class:"text-center"},"Step 3: Gioca!",-1),A=["disabled"],P={class:"mt-4 flex"},F={class:"flex-1 w-full flex justify-start"},G=["disabled"],H={class:"flex-1 flex justify-end"},L=["disabled"],Q={class:"flex-1 text-sm uppercase font-bold flex flex-col items-center justify-center mt-3"},U={id:"guessedCount",class:"text-xl"},Y=j({__name:"Answer",setup(z){const i=a(""),o=a(!1),l=a(!0),d=a(null),u=a(null),b=String(Math.round(Math.random()*1e5)).padStart(5,"0"),m=a(!1),e=a(null),t=a(0),r=k(),g=a(new I("cicapiamo-"+b,{debug:3,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"}}));function h(){e.value=g.value.connect("cicapiamo-"+i.value),e.value.on("open",()=>{e.value.send({status:"connected"}),e.value.on("data",n=>{n.status==="connected"?m.value=!0:n.command==="start"?l.value=!1:n.command==="passo"?(o.value=!1,l.value=!0):"score"in n&&(t.value=n.score)})})}function w(){e.value.send({command:"answer"}),o.value=!0,u.value=setTimeout(()=>{t.value>0&&t.value--,o.value=!o.value,l.value=!0,e.value.send({command:"continue"}),e.value.send({score:t.value})},1e4),d.value=r.info("Rispondi!",{position:D.BOTTOM_CENTER,timeout:1e4,closeOnClick:!1,pauseOnFocusLoss:!1,pauseOnHover:!1,draggable:!1,closeButton:!1})}function T(){u.value&&(clearTimeout(u.value),r.dismiss(d.value)),t.value++,o.value=!1,l.value=!0,e.value.send({command:"continue"}),e.value.send({score:t.value})}function y(){u.value&&(clearTimeout(u.value),r.dismiss(d.value)),t.value>0&&t.value--,o.value=!1,l.value=!0,e.value.send({command:"continue"}),e.value.send({score:t.value})}return(n,p)=>m.value?(x(),_("div",R,[q,s("button",{onClick:w,class:"m-8 w-52 aspect-square bg-red-600 rounded-full flex justify-center items-center text-xl font-bold uppercase disabled:opacity-20",disabled:l.value||o.value}," Rispondi ",8,A),s("div",P,[s("div",F,[s("button",{onClick:T,class:"mr-2 w-fit p-1 bg-green-600 uppercase font-bold rounded disabled:opacity-20 h-12",disabled:l.value||!o.value}," Corretto ",8,G)]),s("div",H,[s("button",{onClick:y,class:"ml-2 w-fit p-1 bg-red-600 uppercase font-bold rounded disabled:opacity-20",disabled:l.value||!o.value}," Sbagliato ",8,L)])]),s("span",Q,[c(" Indovinate "),s("span",U,S(t.value),1)])])):(x(),_("div",$,[f(N,null,{default:v(()=>[c(" Ora devi inserire il "),E,c(" che ti viene mostrato sul secondo dispositvo ")]),_:1}),B(s("input",{type:"number",placeholder:"Inserisci il codice a 5 cifre","onUpdate:modelValue":p[0]||(p[0]=C=>i.value=C),class:"leading-[3.25rem] w-full font-montserrat text-center text-[16px] font-medium rounded-xl bg-[#605d66] text-[#cac4d0] mt-14"},null,512),[[O,i.value]]),f(M,null,{default:v(()=>[f(V,{onClick:h},{default:v(()=>[c(" Connettiti ")]),_:1})]),_:1})]))}});export{Y as default};
