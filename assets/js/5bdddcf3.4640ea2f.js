"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6682],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),d=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,m=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=d(r),N=n,c=s["".concat(m,".").concat(N)]||s[N]||f[N]||o;return r?a.createElement(c,i(i({ref:e},p),{},{components:r})):a.createElement(c,i({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=N;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[s]="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},2398:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={},i="Store module",l={unversionedId:"monitoring/metrics-explanation/store",id:"monitoring/metrics-explanation/store",title:"Store module",description:"| Metric Name | Description |",source:"@site/docs/04-monitoring/metrics-explanation/store.md",sourceDirName:"04-monitoring/metrics-explanation",slug:"/monitoring/metrics-explanation/store",permalink:"/docs/monitoring/metrics-explanation/store",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/04-monitoring/metrics-explanation/store.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up local Metrics infrastructure",permalink:"/docs/monitoring/metrics-explanation/setting-up-local-metrics-infrastracture"},next:{title:"Trie",permalink:"/docs/monitoring/metrics-explanation/trie"}},m={},d=[],p={toc:d},s="wrapper";function f(t){let{components:e,...r}=t;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"store-module"},"Store module"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BlockInfosDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Block Infos DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BlockInfosDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Block Infos DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BlocksDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Blocks DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BlocksDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Blocks DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BloomDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Bloom DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BloomDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Bloom DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHTDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of CHT DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHTDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of CHT DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CodeDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Code DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CodeDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Code DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HeaderDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Headers DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HeaderDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Headers DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OtherDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of other DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OtherDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of other DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PendingTxsDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Pending Tx DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PendingTxsDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Pending Tx DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ReceiptsDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Receipts DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ReceiptsDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Receipts DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StateDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of State DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StateDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of State DB writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StateTreeReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of State Trie reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StateTreeWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Blocks Trie writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StorageTreeReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of storge trie reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"StorageTreeWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of storage trie writes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WitnessDbReads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Witness DB reads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WitnessDbWrites"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Witness DB writes.")))))}f.isMDXComponent=!0}}]);