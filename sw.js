if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Answer-KGG9y7w8.js",revision:null},{url:"assets/bundler-QqWW2KDW.js",revision:null},{url:"assets/Home-9wGgZo5c.js",revision:null},{url:"assets/index-97mCf1jQ.js",revision:null},{url:"assets/index-Xt1-SqE0.css",revision:null},{url:"assets/Question-6DDCjqjb.js",revision:null},{url:"index.html",revision:"477b8c9732cd9ccb23c8c25e73447778"},{url:"registerSW.js",revision:"9eed347d7e61279de36df96b3da10ced"},{url:"manifest.webmanifest",revision:"7fd9745d50ec9c589cd77fe00d985c63"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
