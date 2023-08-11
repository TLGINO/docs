"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9330],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var N=a.createContext({}),p=function(t){var e=a.useContext(N),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(N.Provider,{value:e},t.children)},f="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,N=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),f=p(n),c=r,s=f["".concat(N,".").concat(c)]||f[c]||d[c]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var N in e)hasOwnProperty.call(e,N)&&(o[N]=e[N]);o.originalType=t,o[f]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9153:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Network",o={unversionedId:"fundamentals/configuration/network",id:"fundamentals/configuration/network",title:"Network",description:"| Property                 | Env Variable                                      | Description                                                                                                                                                                                          | Default |",source:"@site/docs/02-fundamentals/04-configuration/network.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/network",permalink:"/docs/docs/fundamentals/configuration/network",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/network.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mining",permalink:"/docs/docs/fundamentals/configuration/mining"},next:{title:"Plugin",permalink:"/docs/docs/fundamentals/configuration/plugin"}},N={},p=[],m={toc:p},f="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network"},"Network"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ActivePeersMaxCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_ACTIVEPEERSMAXCOUNT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[OBSOLETE]","(Use MaxActivePeers instead) Max number of connected peers."),(0,r.kt)("td",{parentName:"tr",align:"left"},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Bootnodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_BOOTNODES"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bootnodes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DiagTracerEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_DIAGTRACERENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabled very verbose diag network tracing files for DEV purposes (Nethermind specific)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DiscoveryDns"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_DISCOVERYDNS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use tree is available through a DNS name. Keep it empty for the default of {chainName}.ethdisco.net"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DiscoveryPort"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_DISCOVERYPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP port number for incoming discovery connections. Keep same as TCP/IP port because using different values has never been tested."),(0,r.kt)("td",{parentName:"tr",align:"left"},"30303")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EnableUPnP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_ENABLEUPNP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable automatic port forwarding via UPnP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ExternalIp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_EXTERNALIP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use only if your node cannot resolve external IP automatically."),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LocalIp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_LOCALIP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use only if your node cannot resolve local IP automatically."),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxActivePeers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_MAXACTIVEPEERS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Same as ActivePeersMaxCount."),(0,r.kt)("td",{parentName:"tr",align:"left"},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxNettyArenaCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_MAXNETTYARENACOUNT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[TECHNICAL]"," Defines maximum netty arena count. Increasing this on high core machine without increasing memory budget may reduce chunk size so much that it causes significant netty huge allocation."),(0,r.kt)("td",{parentName:"tr",align:"left"},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxOutgoingConnectPerSec"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_MAXOUTGOINGCONNECTPERSEC"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[TECHNICAL]"," Max number of new outgoing connections per second. Default is 20."),(0,r.kt)("td",{parentName:"tr",align:"left"},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NettyArenaOrder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_NETTYARENAORDER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[TECHNICAL]"," Defines the size of a netty arena order. Default depends on memory hint."),(0,r.kt)("td",{parentName:"tr",align:"left"},"-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OnlyStaticPeers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_ONLYSTATICPEERS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to 'true' then no connections will be made to non-static peers."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"P2PPort"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_P2PPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TPC/IP port number for incoming P2P connections."),(0,r.kt)("td",{parentName:"tr",align:"left"},"30303")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PriorityPeersMaxCount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_PRIORITYPEERSMAXCOUNT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max number of priority peers. Can be overwritten by value from plugin config."),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"StaticPeers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_NETWORKCONFIG_STATICPEERS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of nodes for which we will keep the connection on. Static nodes are not counted to the max number of nodes limit."),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")))))}d.isMDXComponent=!0}}]);