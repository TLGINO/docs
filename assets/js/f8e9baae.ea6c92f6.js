"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2175],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),s=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},f="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=s(a),d=n,N=f["".concat(c,".").concat(d)]||f[d]||m[d]||o;return a?r.createElement(N,i(i({ref:e},p),{},{components:a})):r.createElement(N,i({ref:e},p))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[f]="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4936:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},i="AccountAbstraction",l={unversionedId:"fundamentals/configuration/accountabstraction",id:"fundamentals/configuration/accountabstraction",title:"AccountAbstraction",description:"| Property                      | Env Variable                                                      | Description                                                                                                                                  | Default                      |",source:"@site/docs/02-fundamentals/04-configuration/accountabstraction.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/accountabstraction",permalink:"/docs/docs/fundamentals/configuration/accountabstraction",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/accountabstraction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/docs/fundamentals/configuration/"},next:{title:"Aura",permalink:"/docs/docs/fundamentals/configuration/aura"}},c={},s=[],p={toc:s},f="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(f,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"accountabstraction"},"AccountAbstraction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AaPriorityPeersMaxCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_AAPRIORITYPEERSMAXCOUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Max number of priority AccountAbstraction peers."),(0,n.kt)("td",{parentName:"tr",align:"left"},"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Enabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_ENABLED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines whether UserOperations are allowed."),(0,n.kt)("td",{parentName:"tr",align:"left"},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EntryPointContractAddresses"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_ENTRYPOINTCONTRACTADDRESSES"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines the comma separated list of hex string representations of the addresses of the EntryPoint contract to which transactions can be made"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FlashbotsEndpoint"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_FLASHBOTSENDPOINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines the string URL for the flashbots bundle reception endpoint"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://relay.flashbots.net/"},"https://relay.flashbots.net/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MaximumUserOperationPerSender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_MAXIMUMUSEROPERATIONPERSENDER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines the maximum number of UserOperations that can be kept for each sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MinimumGasPrice"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_MINIMUMGASPRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines the minimum gas price for a user operation to be accepted"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UserOperationPoolSize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_USEROPERATIONPOOLSIZE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines the maximum number of UserOperations that can be kept in memory by clients"),(0,n.kt)("td",{parentName:"tr",align:"left"},"200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"WhitelistedPaymasters"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_ACCOUNTABSTRACTIONCONFIG_WHITELISTEDPAYMASTERS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Defines a comma separated list of the hex string representations of paymasters that are whitelisted by the node"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);