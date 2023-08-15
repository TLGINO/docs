"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,g=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,s=c["".concat(g,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(s,a(a({ref:t},d),{},{components:n})):r.createElement(s,a({ref:t},d))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={},a="Logging Configuration",i={unversionedId:"fundamentals/logs/logging-configuration",id:"fundamentals/logs/logging-configuration",title:"Logging Configuration",description:"Log config file location",source:"@site/docs/02-fundamentals/06-logs/logging-configuration.md",sourceDirName:"02-fundamentals/06-logs",slug:"/fundamentals/logs/logging-configuration",permalink:"/docs/docs/fundamentals/logs/logging-configuration",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/06-logs/logging-configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logs",permalink:"/docs/docs/category/logs"},next:{title:"Explaining Nethermind logs",permalink:"/docs/docs/fundamentals/logs/logs"}},g={},p=[{value:"Log config file location",id:"log-config-file-location",level:2},{value:"Log config file syntax",id:"log-config-file-syntax",level:2},{value:"Config or CLI log rules",id:"config-or-cli-log-rules",level:2},{value:"Global logging override",id:"global-logging-override",level:2},{value:"JSON RPC logging level",id:"json-rpc-logging-level",level:2},{value:"Enterprise Logging",id:"enterprise-logging",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-configuration"},"Logging Configuration"),(0,o.kt)("h2",{id:"log-config-file-location"},"Log config file location"),(0,o.kt)("p",null,"Logging in Nethermind is done via NLog library that can be configured by editing the NLog.config file."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment Type"),(0,o.kt)("th",{parentName:"tr",align:null},"NLog.config location"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"built from src - Debug mode"),(0,o.kt)("td",{parentName:"tr",align:null},"src\\Nethermind\\Nethermind.Runner\\bin\\Debug\\netcoreapp3.1\\NLog.config")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"built from src - Release mode"),(0,o.kt)("td",{parentName:"tr",align:null},"src\\Nethermind\\Nethermind.Runner\\bin\\Release\\netcoreapp3.1\\NLog.config")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PPA"),(0,o.kt)("td",{parentName:"tr",align:null},"/usr/share/nethermind/NLog.config")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Docker"),(0,o.kt)("td",{parentName:"tr",align:null},"/nethermind/NLog.config")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"from ",(0,o.kt)("a",{parentName:"td",href:"https://downloads.nethermind.io"},"downloads page")),(0,o.kt)("td",{parentName:"tr",align:null},"top level directory after unzipping the package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"from ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/NethermindEth/nethermind/releases"},"GitHub releases page")),(0,o.kt)("td",{parentName:"tr",align:null},"top level directory after unzipping the package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dAppNode"),(0,o.kt)("td",{parentName:"tr",align:null},"? ","[","to be documented]")))),(0,o.kt)("h2",{id:"log-config-file-syntax"},"Log config file syntax"),(0,o.kt)("p",null,"Detailed NLog configuration options can be found\nhere: ",(0,o.kt)("a",{parentName:"p",href:"https://nlog-project.org/config/"},"https://nlog-project.org/config/")),(0,o.kt)("h2",{id:"config-or-cli-log-rules"},"Config or CLI log rules"),(0,o.kt)("p",null,"Simple logging rules can be added through configuration file or command line argument."),(0,o.kt)("p",null,"For example this would add ",(0,o.kt)("inlineCode",{parentName:"p"},"Trace")," level logs to any logger under ",(0,o.kt)("inlineCode",{parentName:"p"},"Synchronization")," module and ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug")," level logs\nfor ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockTree")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Blockchain")," module:\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"--Init.LogRules Synchronization.*:Trace;Blockchain.BlockTree:Debug")),(0,o.kt)("h2",{id:"global-logging-override"},"Global logging override"),(0,o.kt)("p",null,"Additionally there are global logging override that you can use temporarily:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command line override"),(0,o.kt)("th",{parentName:"tr",align:null},"Log level"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"./Nethermind.Runner --config mainnet --log TRACE"),(0,o.kt)("td",{parentName:"tr",align:null},"TRACE")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"./Nethermind.Runner --config mainnet --log DEBUG"),(0,o.kt)("td",{parentName:"tr",align:null},"DEBUG")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"./Nethermind.Runner --config mainnet --log INFO"),(0,o.kt)("td",{parentName:"tr",align:null},"INFO")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"./Nethermind.Runner --config mainnet --log WARN"),(0,o.kt)("td",{parentName:"tr",align:null},"WARN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"./Nethermind.Runner --config mainnet --log ERROR"),(0,o.kt)("td",{parentName:"tr",align:null},"ERROR")))),(0,o.kt)("h2",{id:"json-rpc-logging-level"},"JSON RPC logging level"),(0,o.kt)("p",null,"This can be done by including these lines in the logging configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<logger name="JsonRpc.*" minlevel="Error" writeTo="file-async"/>\n<logger name="JsonRpc.*" minlevel="Error" writeTo="auto-colored-console-async" final="true"/>\n<logger name="JsonRpc.*" final="true"/>\n')),(0,o.kt)("h2",{id:"enterprise-logging"},"Enterprise Logging"),(0,o.kt)("p",null,"See how to configure Seq ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/enterprise/seq"},"here")))}u.isMDXComponent=!0}}]);