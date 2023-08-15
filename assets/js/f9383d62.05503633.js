"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={description:"Networks currently supported by Nethermind Client",sidebar_position:3},o="Networks",l={unversionedId:"getting-started/networks",id:"getting-started/networks",title:"Networks",description:"Networks currently supported by Nethermind Client",source:"@site/docs/01-getting-started/networks.md",sourceDirName:"01-getting-started",slug:"/getting-started/networks",permalink:"/docs/docs/getting-started/networks",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/01-getting-started/networks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Networks currently supported by Nethermind Client",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"System Requirements",permalink:"/docs/docs/getting-started/system-requirements"},next:{title:"Migrating From Geth",permalink:"/docs/docs/getting-started/migrating-from-geth"}},s={},p=[{value:"Mainnet",id:"mainnet",level:3},{value:"G\xf6rli (goerli)",id:"g\xf6rli-goerli",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"networks"},"Networks"),(0,i.kt)("p",null,"By default Nethermind launches with mainnet network configuration, but it is possible to sync other networks by adding a\ncommand line switch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--config [NETWORK_NAME]\n")),(0,i.kt)("p",null,"Network name can be any of the following"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mainnet"),(0,i.kt)("li",{parentName:"ul"},"goerli"),(0,i.kt)("li",{parentName:"ul"},"sepolia"),(0,i.kt)("li",{parentName:"ul"},"gnosis"),(0,i.kt)("li",{parentName:"ul"},"poacore"),(0,i.kt)("li",{parentName:"ul"},"energyweb"),(0,i.kt)("li",{parentName:"ul"},"volta"),(0,i.kt)("li",{parentName:"ul"},"kovan (only fast sync and may fail if pWASM transactions appear)")),(0,i.kt)("h3",{id:"mainnet"},"Mainnet"),(0,i.kt)("p",null,"This is the main Ethereum network. It can be run using config below and this is default setting - mainnet will run\nif ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," is not specified as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nethermind.Runner --config mainnet\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethstats.net/"},"Ethereum Mainnet Status")),(0,i.kt)("h3",{id:"g\xf6rli-goerli"},"G\xf6rli (goerli)"),(0,i.kt)("p",null,"This is a Clique-PoA based testnet supported by all major clients. It has 15 seconds between blocks that are sealed by\nGoerli validators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nethermind.Runner --config goerli\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stats.goerli.net/"},"Goerli Status")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/goerli/testnet"},"Goerli Gitter Space")))}d.isMDXComponent=!0}}]);