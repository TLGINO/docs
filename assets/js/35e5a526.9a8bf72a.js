"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={},l="Building from source",a={unversionedId:"for-developers/building-nethermind",id:"for-developers/building-nethermind",title:"Building from source",description:"The Nethermind's source code can be obtained from our repository on",source:"@site/docs/05-for-developers/building-nethermind.md",sourceDirName:"05-for-developers",slug:"/for-developers/building-nethermind",permalink:"/docs/docs/for-developers/building-nethermind",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/05-for-developers/building-nethermind.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"For Developers",permalink:"/docs/docs/category/for-developers"},next:{title:"Coding Style",permalink:"/docs/docs/for-developers/coding-style"}},s={},d=[{value:"Building standalone binaries",id:"building-standalone-binaries",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Building",id:"building",level:3},{value:"Running the client",id:"running-the-client",level:4},{value:"Testing",id:"testing",level:4},{value:"Bulding Docker image",id:"bulding-docker-image",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-from-source"},"Building from source"),(0,i.kt)("p",null,"The Nethermind's source code can be obtained from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind"},"our repository")," on\nGitHub:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/nethermindeth/nethermind.git\n")),(0,i.kt)("p",null,"There are two options buiding Nethermind from source code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/for-developers/building-nethermind#building-standalone-binaries"},"Standalone binaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/for-developers/building-nethermind#bulding-docker-image"},"Docker image"))),(0,i.kt)("h2",{id:"building-standalone-binaries"},"Building standalone binaries"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To build Nethermind from source, install ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download"},".NET SDK")," 7 or later."),(0,i.kt)("h3",{id:"building"},"Building"),(0,i.kt)("p",null,"To build both the client and tests, run the following command from the project's root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet build src/Nethermind/Nethermind.sln -c release\n")),(0,i.kt)("p",null,"To simply run the client with a specific configuration without building tests, see below."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Before running the client or tests, ensure the\nplatform-specific ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/system-requirements"},"prerequisites")," are met.")),(0,i.kt)("h4",{id:"running-the-client"},"Running the client"),(0,i.kt)("p",null,"To launch the client, run the following command from the project's root directory (the previous step of the build is not\nrequired):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd src/Nethermind/Nethermind.Runner\ndotnet run -c release -- -c mainnet\n")),(0,i.kt)("p",null,"All Nethermind-specific parameters can be specified after ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),". For instance, the command above specifies the Mainnet\nconfiguration only."),(0,i.kt)("p",null,"The build artifacts can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/release/net7.0")," directory. By default, the logs and database directories\nare located here as well."),(0,i.kt)("p",null,"For more info, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/running-nethermind/running-the-client"},"Running Nethermind"),"."),(0,i.kt)("h4",{id:"testing"},"Testing"),(0,i.kt)("p",null,"There are two test suites \u2014 Nethermind and Ethereum Foundation. Tests can be run with the following commands (the\ninitial step of the build is not required):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd src/Nethermind\n\n# Run Nethermind tests\ndotnet test Nethermind.sln -c release\n\n# Run Ethereum Foundation tests\ndotnet test EthereumTests.sln -c release\n")),(0,i.kt)("h2",{id:"bulding-docker-image"},"Bulding Docker image"),(0,i.kt)("p",null,"To build Nethermind Docker image, run the following command from the project's root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t nethermind .\n")),(0,i.kt)("p",null,"For more info about running Docker containers,\nsee ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/installing-nethermind#using-docker"},"How to install"),"."))}p.isMDXComponent=!0}}]);