(()=>{"use strict";var e={8826:(e,t,r)=>{r(7280),r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l={name:"App"};l.render=i;const s=l;var u=r(7083),c=r(9582);const p=[{path:"/",component:()=>Promise.all([r.e(736),r.e(988)]).then(r.bind(r,2988))},{path:"/library",component:()=>Promise.all([r.e(736),r.e(135)]).then(r.bind(r,1135))},{path:"/dapps",component:()=>Promise.all([r.e(736),r.e(535)]).then(r.bind(r,535))},{path:"/dapps/detail",component:()=>Promise.all([r.e(736),r.e(451)]).then(r.bind(r,2451))},{path:"/main",component:()=>Promise.all([r.e(736),r.e(717)]).then(r.bind(r,9717)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(430)]).then(r.bind(r,6430))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],d=p,f=(0,u.BC)((function(){const e=c.r5,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:d,history:e("")});return t}));async function h(e,t){const r="function"===typeof f?await f({}):f,o=e(s);return o.use(n.Z,t),{app:o,router:r}}var m=r(7989),b=r(4434);const g={config:{notify:{position:"top"}},lang:m.Z,plugins:{Notify:b.Z}},v="";async function y({app:e,router:t},r){let o=!1;const n=e=>{o=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,"");for(let l=0;!1===o&&l<r.length;l++)try{await r[l]({app:e,router:t,ssrContext:null,redirect:n,urlPath:a,publicPath:v})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),e.mount("#q-app"))}h(o.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,2419)),Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,api:()=>i});var o=r(7083),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2419:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,i18n:()=>s});var o=r(7083),n=r(5948);const a={failed:"Action failed",success:"Action was successful",message:{hello:"hello, world"},button:{library:"Library",dapps:"Dapps",forum:"Forum",grant:"Grant",login:"ICPLogin",more:"More",submit:"Submit Information",language:"English","learn-more":"Learn More"},footer:{subtitle:"Building the best Chinese community of dfinity","about-us":"About us",scanQR:"Scan code to enter mobile terminal of Forum"}},i={failed:"操作失败",success:"操作成功",message:{hello:"你好，世界"},button:{library:"文库",dapps:"生态导航",forum:"讨论",grant:"开发者激励",login:"ICP登录",more:"更多",submit:"提交应用信息",language:"中文","learn-more":"学习更多"},footer:{subtitle:"建立最好的Dfinity中文社区","about-us":"关于我们",scanQR:"扫码进入论坛移动端"}},l={"en-US":a,"zh-CN":i},s=(0,n.o)({locale:"en-US",messages:l}),u=(0,o.xr)((({app:e})=>{e.use(s)}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));l&&(e.splice(u--,1),t=n())}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{135:"eb56bca3",193:"1c2e880e",430:"5ac4a264",451:"233bbba7",535:"4318a58d",717:"3803a1cb",988:"ae6b4030"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{135:"3a031dc0",451:"74a53cbb",535:"f5e9ef35",736:"ec16d38c",988:"4f2ded35"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="league-q:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var d=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={135:1,451:1,535:1,988:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,u=0;for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var c=s(r);for(t&&t(o);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return r.O(c)},o=self["webpackChunkleague_q"]=self["webpackChunkleague_q"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(8826)));o=r.O(o)})();