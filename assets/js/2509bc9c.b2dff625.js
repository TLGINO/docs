"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[m]="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7810:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="AccountAbstraction",c={unversionedId:"monitoring/metrics/accountabstraction",id:"monitoring/metrics/accountabstraction",title:"AccountAbstraction",description:"| Metric | Description |",source:"@site/docs/monitoring/metrics/accountabstraction.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/accountabstraction",permalink:"/docs/monitoring/metrics/accountabstraction",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/monitoring/metrics/accountabstraction.md",tags:[],version:"current",lastUpdatedAt:1693730198,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/docs/monitoring/metrics/"},next:{title:"AccountAbstraction.Network",permalink:"/docs/monitoring/metrics/accountabstraction.network"}},s={},l=[],p={toc:l},m="wrapper";function u(t){let{components:e,...r}=t;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accountabstraction"},"AccountAbstraction"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nethermind_user_operations_included"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Total number of UserOperation objects included into the chain by this miner")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nethermind_user_operations_pending"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Total number of UserOperation objects accepted into the pool")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nethermind_user_operations_received"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Total number of UserOperation objects received for inclusion")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nethermind_user_operations_simulated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Total number of UserOperation objects simulated")))))}u.isMDXComponent=!0}}]);