"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Mining",l={unversionedId:"fundamentals/configuration/mining",id:"fundamentals/configuration/mining",title:"Mining",description:"| Property            | Env Variable                                | Description                                                                                                                                                                                                                                                                                                                      | Default    |",source:"@site/docs/02-fundamentals/04-configuration/mining.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/mining",permalink:"/docs/docs/fundamentals/configuration/mining",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/mining.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mev",permalink:"/docs/docs/fundamentals/configuration/mev"},next:{title:"Network",permalink:"/docs/docs/fundamentals/configuration/network"}},c={},s=[],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mining"},"Mining"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MININGCONFIG_ENABLED"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Defines whether the blocks should be produced."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ExtraData"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MININGCONFIG_EXTRADATA"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Deprecated since v1.14.6. Please use Blocks.ExtraDataValues you set here are forwarded to it. Conflicting values will cause Exceptions. Block header extra data. 32-bytes shall be extra data max length."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nethermind")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MinGasPrice"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MININGCONFIG_MINGASPRICE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Deprecated since v1.14.6. Please use Blocks.MinGasPrice Values you set here are forwarded to it. Conflicting values will cause Exceptions. Minimum gas premium for transactions accepted by the block producer. Before EIP1559: Minimum gas price for transactions accepted by the block producer."),(0,a.kt)("td",{parentName:"tr",align:"left"},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"RandomizedBlocks"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MININGCONFIG_RANDOMIZEDBLOCKS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Deprecated since v1.14.6. Please use Blocks.RandomizedBlocks Values you set here are forwarded to it. Conflicting values will cause Exceptions. Only used in NethDev. Setting this to true will change the difficulty of the block randomly within the constraints."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TargetBlockGasLimit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_MININGCONFIG_TARGETBLOCKGASLIMIT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Deprecated since v1.14.6. Please use Blocks.TargetBlockGasLimit. Values you set here are forwarded to it. Conflicting values will cause Exceptions. Block gas limit that the block producer should try to reach in the fastest possible way based on protocol rules. NULL value means that the miner should follow other miners."),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")))))}u.isMDXComponent=!0}}]);