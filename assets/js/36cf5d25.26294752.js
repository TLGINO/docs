"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3282],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>N});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(n),f=a,N=d["".concat(p,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(N,i(i({ref:e},c),{},{components:n})):r.createElement(N,i({ref:e},c))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7861:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={},i="Merge",o={unversionedId:"fundamentals/configuration/merge",id:"fundamentals/configuration/merge",title:"Merge",description:"| Property                | Env Variable                                   | Description                                                                                                                                                                                        | Default |",source:"@site/docs/02-fundamentals/04-configuration/merge.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/merge",permalink:"/docs/docs/fundamentals/configuration/merge",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/merge.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KeyStore",permalink:"/docs/docs/fundamentals/configuration/keystore"},next:{title:"Metrics",permalink:"/docs/docs/fundamentals/configuration/metrics"}},p={},m=[],c={toc:m},d="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merge"},"Merge"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"BuilderRelayUrl"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_BUILDERRELAYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"URL to Builder Relay. If set when building blocks nethermind will send them to the relay."),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CollectionsPerDecommit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_COLLECTIONSPERDECOMMIT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Requests the GC to release process memory back to OS. Accept values ",(0,a.kt)("inlineCode",{parentName:"td"},"-1")," which disables it, ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," which releases every time, and any positive integer which does it after that many EngineApi calls."),(0,a.kt)("td",{parentName:"tr",align:"left"},"75")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"CompactMemory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_COMPACTMEMORY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Reduces process used memory. Accept values ",(0,a.kt)("inlineCode",{parentName:"td"},"No")," which disables it, ",(0,a.kt)("inlineCode",{parentName:"td"},"Yes")," which compacts normal heaps, ",(0,a.kt)("inlineCode",{parentName:"td"},"Full")," compacts large object heap too (only when SweepMemory is set to ",(0,a.kt)("inlineCode",{parentName:"td"},"Gen2"),")."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_ENABLED"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines whether the Merge plugin is enabled bundles are allowed."),(0,a.kt)("td",{parentName:"tr",align:"left"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"FinalTotalDifficulty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_FINALTOTALDIFFICULTY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Final total difficulty is total difficulty of the last PoW block. FinalTotalDifficulty >= TerminalTotalDifficulty."),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PrioritizeBlockLatency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_PRIORITIZEBLOCKLATENCY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Reduces block EngineApi latency by disabling Garbage Collection during EngineApi calls."),(0,a.kt)("td",{parentName:"tr",align:"left"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SecondsPerSlot"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_SECONDSPERSLOT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Deprecated since v1.14.7. Please use Blocks.SecondsPerSlot. Seconds per slot."),(0,a.kt)("td",{parentName:"tr",align:"left"},"12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SweepMemory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_SWEEPMEMORY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Reduces memory usage by forcing Garbage Collection between EngineApi calls. Accept values ",(0,a.kt)("inlineCode",{parentName:"td"},"NoGc")," (-1), Gen0 (0), Gen1 (1), Gen2 (2)."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gen1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TerminalBlockHash"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_TERMINALBLOCKHASH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Terminal PoW block hash used for transition process."),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TerminalBlockNumber"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_TERMINALBLOCKNUMBER"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Terminal PoW block number used for transition process."),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TerminalTotalDifficulty"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MERGECONFIG_TERMINALTOTALDIFFICULTY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Terminal total difficulty used for transition process."),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")))))}s.isMDXComponent=!0}}]);