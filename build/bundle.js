var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e,n,i,s){return e[1]&&s?t(i.ctx.slice(),e[1](s(n))):i.ctx}function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function f(){return v(" ")}function p(){return v("")}function m(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let g;function $(e){g=e}function b(){if(!g)throw new Error("Function called outside component initialization");return g}function k(){const e=b();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const s=function(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}(t,n);i.slice().forEach((t=>{t.call(e,s)}))}}}function y(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const w=[],x=[],_=[],E=[],z=Promise.resolve();let S=!1;function C(){S||(S=!0,z.then(j))}function L(e){_.push(e)}const A=new Set;let M=0;function j(){const e=g;do{for(;M<w.length;){const e=w[M];M++,$(e),D(e.$$)}for($(null),w.length=0,M=0;x.length;)x.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];A.has(t)||(A.add(t),t())}_.length=0}while(w.length);for(;E.length;)E.pop()();S=!1,A.clear(),$(e)}function D(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}const T=new Set;let O;function R(){O={r:0,c:[],p:O}}function H(){O.r||s(O.c),O=O.p}function G(e,t){e&&e.i&&(T.delete(e),e.i(t))}function W(e,t,n,i){if(e&&e.o){if(T.has(e))return;T.add(e),O.c.push((()=>{T.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function F(e,t){const n={},i={},s={$$scope:1};let o=e.length;for(;o--;){const l=e[o],r=t[o];if(r){for(const e in l)e in r||(i[e]=1);for(const e in r)s[e]||(n[e]=r[e],s[e]=1);e[o]=r}else for(const e in l)s[e]=1}for(const e in i)e in n||(n[e]=void 0);return n}function P(e){return"object"==typeof e&&null!==e?e:{}}function J(e){e&&e.c()}function B(e,t,i,l){const{fragment:r,on_mount:a,on_destroy:c,after_update:d}=e.$$;r&&r.m(t,i),l||L((()=>{const t=a.map(n).filter(o);c?c.push(...t):s(t),e.$$.on_mount=[]})),d.forEach(L)}function q(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,n,o,l,r,a,c,u=[-1]){const v=g;$(t);const f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:r,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(v?v.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:n.target||v.$$.root};c&&c(f.root);let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return f.ctx&&r(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(w.push(e),C(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&G(t.$$.fragment),B(t,n.target,n.anchor,n.customElement),j()}$(v)}class I{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const U=[];function V(e,t){return{subscribe:X(e,t).subscribe}}function X(t,n=e){let i;const s=new Set;function o(e){if(l(t,e)&&(t=e,i)){const e=!U.length;for(const e of s)e[1](),U.push(e,t);if(e){for(let e=0;e<U.length;e+=2)U[e][0](U[e+1]);U.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(l,r=e){const a=[l,r];return s.add(a),1===s.size&&(i=n(o)||e),l(t),()=>{s.delete(a),0===s.size&&(i(),i=null)}}}}function Y(t,n,i){const l=!Array.isArray(t),r=l?[t]:t,a=n.length<2;return V(i,(t=>{let i=!1;const c=[];let d=0,u=e;const v=()=>{if(d)return;u();const i=n(l?c[0]:c,t);a?t(i):u=o(i)?i:e},f=r.map(((t,n)=>function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(t,(e=>{c[n]=e,d&=~(1<<n),i&&v()}),(()=>{d|=1<<n}))));return i=!0,v(),function(){s(f),u()}}))}function Q(e){let n,i,s;const o=[e[2]];var l=e[0];function r(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return l&&(n=new l(r()),n.$on("routeEvent",e[7])),{c(){n&&J(n.$$.fragment),i=p()},m(e,t){n&&B(n,e,t),c(e,i,t),s=!0},p(e,t){const s=4&t?F(o,[P(e[2])]):{};if(l!==(l=e[0])){if(n){R();const e=n;W(e.$$.fragment,1,0,(()=>{q(e,1)})),H()}l?(n=new l(r()),n.$on("routeEvent",e[7]),J(n.$$.fragment),G(n.$$.fragment,1),B(n,i.parentNode,i)):n=null}else l&&n.$set(s)},i(e){s||(n&&G(n.$$.fragment,e),s=!0)},o(e){n&&W(n.$$.fragment,e),s=!1},d(e){e&&d(i),n&&q(n,e)}}}function K(e){let n,i,s;const o=[{params:e[1]},e[2]];var l=e[0];function r(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return l&&(n=new l(r()),n.$on("routeEvent",e[6])),{c(){n&&J(n.$$.fragment),i=p()},m(e,t){n&&B(n,e,t),c(e,i,t),s=!0},p(e,t){const s=6&t?F(o,[2&t&&{params:e[1]},4&t&&P(e[2])]):{};if(l!==(l=e[0])){if(n){R();const e=n;W(e.$$.fragment,1,0,(()=>{q(e,1)})),H()}l?(n=new l(r()),n.$on("routeEvent",e[6]),J(n.$$.fragment),G(n.$$.fragment,1),B(n,i.parentNode,i)):n=null}else l&&n.$set(s)},i(e){s||(n&&G(n.$$.fragment,e),s=!0)},o(e){n&&W(n.$$.fragment,e),s=!1},d(e){e&&d(i),n&&q(n,e)}}}function Z(e){let t,n,i,s;const o=[K,Q],l=[];function r(e,t){return e[1]?0:1}return t=r(e),n=l[t]=o[t](e),{c(){n.c(),i=p()},m(e,n){l[t].m(e,n),c(e,i,n),s=!0},p(e,[s]){let a=t;t=r(e),t===a?l[t].p(e,s):(R(),W(l[a],1,1,(()=>{l[a]=null})),H(),n=l[t],n?n.p(e,s):(n=l[t]=o[t](e),n.c()),G(n,1),n.m(i.parentNode,i))},i(e){s||(G(n),s=!0)},o(e){W(n),s=!1},d(e){l[t].d(e),e&&d(i)}}}function ee(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let i="";return n>-1&&(i=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:i}}const te=V(null,(function(e){e(ee());const t=()=>{e(ee())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}));Y(te,(e=>e.location)),Y(te,(e=>e.querystring));const ne=X(void 0);function ie(e,t,n){let{routes:i={}}=t,{prefix:s=""}=t,{restoreScrollState:o=!1}=t;class l{constructor(e,t){if(!t||"function"!=typeof t&&("object"!=typeof t||!0!==t._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:i}=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,i,s,o,l=[],r="",a=e.split("/");for(a[0]||a.shift();s=a.shift();)"*"===(n=s[0])?(l.push("wild"),r+="/(.*)"):":"===n?(i=s.indexOf("?",1),o=s.indexOf(".",1),l.push(s.substring(1,~i?i:~o?o:s.length)),r+=~i&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(r+=(~i?"?":"")+"\\"+s.substring(o))):r+="/"+s;return{keys:l,pattern:new RegExp("^"+r+(t?"(?=$|/)":"/?$"),"i")}}(e);this.path=e,"object"==typeof t&&!0===t._sveltesparouter?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=i}match(e){if(s)if("string"==typeof s){if(!e.startsWith(s))return null;e=e.substr(s.length)||"/"}else if(s instanceof RegExp){const t=e.match(s);if(!t||!t[0])return null;e=e.substr(t[0].length)||"/"}const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const n={};let i=0;for(;i<this._keys.length;){try{n[this._keys[i]]=decodeURIComponent(t[i+1]||"")||null}catch(e){n[this._keys[i]]=null}i++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}const r=[];i instanceof Map?i.forEach(((e,t)=>{r.push(new l(t,e))})):Object.keys(i).forEach((e=>{r.push(new l(e,i[e]))}));let a=null,c=null,d={};const u=k();async function v(e,t){await(C(),z),u(e,t)}let f=null,p=null;var m;o&&(p=e=>{f=e.state&&e.state.__svelte_spa_router_scrollY?e.state:null},window.addEventListener("popstate",p),m=()=>{f?window.scrollTo(f.__svelte_spa_router_scrollX,f.__svelte_spa_router_scrollY):window.scrollTo(0,0)},b().$$.after_update.push(m));let h=null,g=null;const $=te.subscribe((async e=>{h=e;let t=0;for(;t<r.length;){const i=r[t].match(e.location);if(!i){t++;continue}const s={route:r[t].path,location:e.location,querystring:e.querystring,userData:r[t].userData,params:i&&"object"==typeof i&&Object.keys(i).length?i:null};if(!await r[t].checkConditions(s))return n(0,a=null),g=null,void v("conditionsFailed",s);v("routeLoading",Object.assign({},s));const o=r[t].component;if(g!=o){o.loading?(n(0,a=o.loading),g=o,n(1,c=o.loadingParams),n(2,d={}),v("routeLoaded",Object.assign({},s,{component:a,name:a.name,params:c}))):(n(0,a=null),g=null);const t=await o();if(e!=h)return;n(0,a=t&&t.default||t),g=o}return i&&"object"==typeof i&&Object.keys(i).length?n(1,c=i):n(1,c=null),n(2,d=r[t].props),void v("routeLoaded",Object.assign({},s,{component:a,name:a.name,params:c})).then((()=>{ne.set(c)}))}n(0,a=null),g=null,ne.set(void 0)}));return function(e){b().$$.on_destroy.push(e)}((()=>{$(),p&&window.removeEventListener("popstate",p)})),e.$$set=e=>{"routes"in e&&n(3,i=e.routes),"prefix"in e&&n(4,s=e.prefix),"restoreScrollState"in e&&n(5,o=e.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=o?"manual":"auto")},[a,c,d,i,s,o,function(t){y.call(this,e,t)},function(t){y.call(this,e,t)}]}class se extends I{constructor(e){super(),N(this,e,ie,Z,l,{routes:3,prefix:4,restoreScrollState:5})}}function oe(t){let n;return{c(){n=u("div"),n.innerHTML='<div class="back-button svelte-1umfzi5"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="#f5f5f5" fill="none" class="duration-300 transform transition-all" style="width: 2rem; height: 2rem;"><path d="M10.33 32.63h45.45M27.56 14.63L10.34 32.79l17.22 16.53"></path></svg></a></div> \n  <div id="aboutme-container" class="svelte-1umfzi5"><div id="aboutme-header" class="svelte-1umfzi5">about me</div> \n    <div id="aboutme-image" class="svelte-1umfzi5"></div> \n    <div id="aboutme-description" class="svelte-1umfzi5">hello, my name is aidan. i am a web developer based in los angeles, ca. if\n      you would like to contact me, email me at aidan.shirey@gmail.com.</div> \n    <div id="languagestackcontainer" class="svelte-1umfzi5">below are my currently known programming languages/technologies.\n      <div id="languagestack" class="svelte-1umfzi5"><div class="langgrid svelte-1umfzi5"><div class="stack-header svelte-1umfzi5">front end frameworks</div> \n          <div class="svelte-1umfzi5">react</div> \n          <div class="svelte-1umfzi5">svelte</div> \n          <div class="svelte-1umfzi5">jQuery/AJAX</div></div> \n\n        <div class="langgrid svelte-1umfzi5"><div class="stack-header svelte-1umfzi5">the basics</div> \n          <div class="svelte-1umfzi5">html5</div> \n          <div class="svelte-1umfzi5">css</div></div> \n\n        <div class="langgrid svelte-1umfzi5"><div class="stack-header svelte-1umfzi5">scripting languages</div> \n          <div class="svelte-1umfzi5">javascript</div> \n          <div class="svelte-1umfzi5">php</div></div> \n\n        <div class="langgrid svelte-1umfzi5"><div class="stack-header svelte-1umfzi5">databases/cms</div> \n          <div class="svelte-1umfzi5">wordpress</div> \n          <div class="svelte-1umfzi5">firebase</div></div></div></div></div>',h(n,"class","fullscreen svelte-1umfzi5")},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class le extends I{constructor(e){super(),N(this,e,null,oe,l,{})}}function re(t){let n;return{c(){n=u("div"),n.innerHTML='<div class="resumecontainer svelte-1do4v9k"><div class="back-button svelte-1do4v9k"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="#f5f5f5" fill="none" class="duration-300 transform transition-all" style="width: 2rem; height: 2rem;"><path d="M10.33 32.63h45.45M27.56 14.63L10.34 32.79l17.22 16.53"></path></svg></a></div> \n    <div id="nameandtitle" class="svelte-1do4v9k"><div id="name" class="svelte-1do4v9k">Aidan Shirey</div> \n        <div id="title" class="svelte-1do4v9k">Web Developer</div></div> \n    \n    <div id="workexperience" class="resumeblock svelte-1do4v9k"><div class="resumeblockheader svelte-1do4v9k">Work Experience</div> \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">Web Developer</div> \n                <div class="idname">idobi Network</div></div> \n            <div class="timeperiod">June 2021 - Present</div></div> \n        <div class="resumeblockinfo svelte-1do4v9k"><div class="bulletpoint svelte-1do4v9k">● Learned PHP and Wordpress within a week and implemented current website appearance\n                within 8 months working in a team of 2.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Designed and implemented mobile UI for current live website theme.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Rewrote code to replace wordpress plugins for infinite scroll and a carousel display using PHP\n                calls and AJAX, improving load times across all devices.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Redesigned Wordpress database to allow company writers to categorize their posts efficiently.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Operates in Agile Methodology.</div></div></div> \n    \n    <div id="technicalprojects" class="resumeblock svelte-1do4v9k"><div class="resumeblockheader svelte-1do4v9k">Technical Projects</div> \n    \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">V++</div> \n                <div class="idname">Github Repository | Web Application</div></div> \n            <div class="timeperiod">May 2021 - February 2022</div></div> \n        <div class="resumeblockinfo svelte-1do4v9k"><div class="bulletpoint svelte-1do4v9k">● Developed a web application allowing users to quickly learn tactics from popular video game\n                Valorant.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Designed UI to alleviate time consuming YouTube queries through a point and click system.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Features responsive designs that fit well on all devices without sacrificing core functionality.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Recorded and edited all video clips currently accessible. Hosted via Vimeo.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Designed and populated Google Firebase database to hold tactical information such as tactic\n                names, descriptions, and video embeds organized by map and character.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Built using React, HTML5, JavaScript, Git, Firebase, and CSS.</div></div> \n    \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">HTMLCapture</div> \n                <div class="idname">Github Repository | Web Application</div></div> \n            <div class="timeperiod">December 2021 - December 2021</div></div> \n        <div class="resumeblockinfo svelte-1do4v9k"><div class="bulletpoint svelte-1do4v9k">● Developed a Google Chrome extension to capture modified HTML elements via inspect tool.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Built using HTML5, JavaScript, Git, and CSS.</div></div> \n    \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">Drumpad</div> \n                <div class="idname">Github Repository | Web Application</div></div> \n            <div class="timeperiod">April 2021 - April 2021</div></div> \n        <div class="resumeblockinfo svelte-1do4v9k"><div class="bulletpoint svelte-1do4v9k">● Developed a web application that allows users to play a basic drum kit on the keyboard.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Features three different drum sets (Acoustic, Electric, and Vinyl), with complete animation sets and styles.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Built using HTML5, JavaScript, Git, and CSS.</div></div> \n    \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">Fly</div> \n                <div class="idname">Github Repository | Web Application</div></div> \n            <div class="timeperiod">February 2021 - February 2021</div></div> \n        <div class="resumeblockinfo svelte-1do4v9k"><div class="bulletpoint svelte-1do4v9k">● Developed a web application that allows users to unpack zip files and preview file content in-browser, eliminating the need for downloading multiple file explorer applications such as 7zip.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Created an interface design updated through back-end function calls, using DOM element selection and creation.</div> \n            <div class="bulletpoint svelte-1do4v9k">● File extraction handled via asynchronous function calls.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Built using HTML5, CSS3, JQuery, Git, and Javascript.</div></div> \n    \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">Personal Website</div> \n                <div class="idname">Github Repository | Web Application</div></div> \n            <div class="timeperiod">January 2021 - Present</div></div> \n        <div class="resumeblockinfo svelte-1do4v9k"><div class="bulletpoint svelte-1do4v9k">● Updates responsive UI to properly reflect new accomplishments and portfolio additions.</div> \n            <div class="bulletpoint svelte-1do4v9k">● Built using Svelte, HTML5, CSS3, Git, and Javascript.</div></div></div> \n    \n    <div id="education" class="resumeblock svelte-1do4v9k"><div class="resumeblockheader svelte-1do4v9k">Education</div> \n        <div class="resumeblockid svelte-1do4v9k"><div class="idnameandtitle svelte-1do4v9k"><div class="idtitle svelte-1do4v9k">Sonoma State University</div> \n                <div class="idname">Bachelor of Science, Computer Science</div></div> \n            <div class="timeperiod">Graduated May 2020</div></div></div></div>',h(n,"class","fullscreen")},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class ae extends I{constructor(e){super(),N(this,e,null,re,l,{})}}function ce(e){let t;const n=e[6].default,i=function(e,t,n,i){if(e){const s=r(e,t,n,i);return e[0](s)}}(n,e,e[5],null);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,s){i&&i.p&&(!t||32&s)&&function(e,t,n,i,s,o){if(s){const l=r(t,n,i,o);e.p(l,s)}}(i,n,e,e[5],t?function(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|s[i];return e}return t.dirty|s}return t.dirty}(n,e[5],s,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[5]),null)},i(e){t||(G(i,e),t=!0)},o(e){W(i,e),t=!1},d(e){i&&i.d(e)}}}function de(e){let t,n,i,o,l,r,p,g,$=e[3]&&ce(e);return{c(){t=u("div"),$&&$.c(),n=f(),i=u("a"),o=v(e[1]),h(i,"class","mobileoverlay svelte-3rbgcl"),h(i,"href",e[2]),h(t,"class",l="gifcontainer "+e[0]+" svelte-3rbgcl")},m(s,l){c(s,t,l),$&&$.m(t,null),a(t,n),a(t,i),a(i,o),r=!0,p||(g=[m(t,"mouseenter",e[4]),m(t,"mouseleave",e[4])],p=!0)},p(e,[s]){e[3]?$?($.p(e,s),8&s&&G($,1)):($=ce(e),$.c(),G($,1),$.m(t,n)):$&&(R(),W($,1,1,(()=>{$=null})),H()),(!r||2&s)&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(o,e[1]),(!r||4&s)&&h(i,"href",e[2]),(!r||1&s&&l!==(l="gifcontainer "+e[0]+" svelte-3rbgcl"))&&h(t,"class",l)},i(e){r||(G($),r=!0)},o(e){W($),r=!1},d(e){e&&d(t),$&&$.d(),p=!1,s(g)}}}function ue(e,t,n){let{$$slots:i={},$$scope:s}=t,{image:o}=t,{name:l}=t,{mref:r}=t,a=!1;return e.$$set=e=>{"image"in e&&n(0,o=e.image),"name"in e&&n(1,l=e.name),"mref"in e&&n(2,r=e.mref),"$$scope"in e&&n(5,s=e.$$scope)},[o,l,r,a,function(){n(3,a=!a)},s,i]}class ve extends I{constructor(e){super(),N(this,e,ue,de,l,{image:0,name:1,mref:2})}}function fe(e){let t;return{c(){t=u("a"),t.textContent="about me",h(t,"class","overlay svelte-dvr74o"),h(t,"href","#/aboutme")},m(e,n){c(e,t,n)},d(e){e&&d(t)}}}function pe(e){let t;return{c(){t=u("a"),t.textContent="resume",h(t,"class","overlay svelte-dvr74o"),h(t,"href","#/resume")},m(e,n){c(e,t,n)},d(e){e&&d(t)}}}function me(e){let t;return{c(){t=u("a"),t.textContent="fly",h(t,"class","overlay svelte-dvr74o"),h(t,"href","https://aidanshirey.github.io/fly")},m(e,n){c(e,t,n)},d(e){e&&d(t)}}}function he(e){let t;return{c(){t=u("a"),t.textContent="drumpad",h(t,"class","overlay svelte-dvr74o"),h(t,"href","https://aidanshirey.github.io/drumpad")},m(e,n){c(e,t,n)},d(e){e&&d(t)}}}function ge(e){let t;return{c(){t=u("a"),t.textContent="V++",h(t,"class","overlay svelte-dvr74o"),h(t,"href","https://aidanshirey.github.io/vplusplus/#")},m(e,n){c(e,t,n)},d(e){e&&d(t)}}}function $e(e){let t;return{c(){t=u("a"),t.textContent="HTMLCapture",h(t,"class","overlay svelte-dvr74o"),h(t,"href","https://aidanshirey.github.io/")},m(e,n){c(e,t,n)},d(e){e&&d(t)}}}function be(e){let t,n,i,s,o,l,r,v,p,m,g,$,b;return n=new ve({props:{image:"aboutme",name:"about me",mref:"#/aboutme",$$slots:{default:[fe]},$$scope:{ctx:e}}}),s=new ve({props:{image:"resume",name:"resume",mref:"#/resume",$$slots:{default:[pe]},$$scope:{ctx:e}}}),l=new ve({props:{image:"fly",name:"fly",mref:"https://aidanshirey.github.io/fly",$$slots:{default:[me]},$$scope:{ctx:e}}}),v=new ve({props:{image:"drumpad",name:"drumpad",mref:"https://aidanshirey.github.io/drumpad",$$slots:{default:[he]},$$scope:{ctx:e}}}),m=new ve({props:{image:"aboutme",name:"V++",mref:"https://aidanshirey.github.io/vplusplus/#",$$slots:{default:[ge]},$$scope:{ctx:e}}}),$=new ve({props:{image:"aboutme",name:"HTMLCapture",mref:"https://aidanshirey.github.io/",$$slots:{default:[$e]},$$scope:{ctx:e}}}),{c(){t=u("div"),J(n.$$.fragment),i=f(),J(s.$$.fragment),o=f(),J(l.$$.fragment),r=f(),J(v.$$.fragment),p=f(),J(m.$$.fragment),g=f(),J($.$$.fragment),h(t,"class","grid fullscreen svelte-dvr74o")},m(e,d){c(e,t,d),B(n,t,null),a(t,i),B(s,t,null),a(t,o),B(l,t,null),a(t,r),B(v,t,null),a(t,p),B(m,t,null),a(t,g),B($,t,null),b=!0},p(e,[t]){const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),n.$set(i);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),s.$set(o);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),l.$set(r);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),v.$set(a);const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),m.$set(c);const d={};1&t&&(d.$$scope={dirty:t,ctx:e}),$.$set(d)},i(e){b||(G(n.$$.fragment,e),G(s.$$.fragment,e),G(l.$$.fragment,e),G(v.$$.fragment,e),G(m.$$.fragment,e),G($.$$.fragment,e),b=!0)},o(e){W(n.$$.fragment,e),W(s.$$.fragment,e),W(l.$$.fragment,e),W(v.$$.fragment,e),W(m.$$.fragment,e),W($.$$.fragment,e),b=!1},d(e){e&&d(t),q(n),q(s),q(l),q(v),q(m),q($)}}}class ke extends I{constructor(e){super(),N(this,e,null,be,l,{})}}function ye(t){let n,i,s;return i=new ke({}),{c(){n=u("div"),J(i.$$.fragment)},m(e,t){c(e,n,t),B(i,n,null),s=!0},p:e,i(e){s||(G(i.$$.fragment,e),s=!0)},o(e){W(i.$$.fragment,e),s=!1},d(e){e&&d(n),q(i)}}}class we extends I{constructor(e){super(),N(this,e,null,ye,l,{})}}function xe(t){let n,i,s;return i=new se({props:{routes:t[0]}}),{c(){n=u("main"),J(i.$$.fragment)},m(e,t){c(e,n,t),B(i,n,null),s=!0},p:e,i(e){s||(G(i.$$.fragment,e),s=!0)},o(e){W(i.$$.fragment,e),s=!1},d(e){e&&d(n),q(i)}}}function _e(e){return[{"/":we,"/aboutme":le,"/resume":ae}]}return new class extends I{constructor(e){super(),N(this,e,_e,xe,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
