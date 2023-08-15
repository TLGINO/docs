"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),u=n(7392),d=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??m;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:p},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={title:"Installing Nethermind",sidebar_label:"Installing Nethermind",sidebar_position:0},s="Downloading Releases",u={unversionedId:"getting-started/installing-nethermind",id:"getting-started/installing-nethermind",title:"Installing Nethermind",description:"Nethermind official releases can be downloaded from the following sources:",source:"@site/docs/01-getting-started/installing-nethermind.md",sourceDirName:"01-getting-started",slug:"/getting-started/installing-nethermind",permalink:"/docs/docs/getting-started/installing-nethermind",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/01-getting-started/installing-nethermind.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installing Nethermind",sidebar_label:"Installing Nethermind",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/docs/category/getting-started"},next:{title:"System Requirements",permalink:"/docs/docs/getting-started/system-requirements"}},d={},m=[{value:"Ubuntu",id:"ubuntu",level:2},{value:"MacOs",id:"macos",level:2},{value:"Windows",id:"windows",level:2},{value:"<strong>Running Nethermind</strong> Container",id:"running-nethermind-container",level:2},{value:"<strong>JSON RPC</strong>",id:"json-rpc",level:3},{value:"<strong>Available configurations</strong>",id:"available-configurations",level:3},{value:"<strong>Datadir</strong>",id:"datadir",level:3},{value:"<strong>Volumes</strong>",id:"volumes",level:3}],p={toc:m},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"downloading-releases"},"Downloading Releases"),(0,r.kt)("p",null,"Nethermind official releases can be downloaded from the following sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://downloads.nethermind.io/"},"Official Release Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NethermindEth/nethermind/releases"},"GitHub Release Page"))),(0,r.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,r.kt)("p",null,"Run the following commands to enable our launchpad repository and to install Nethermind"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:nethermindeth/nethermind\nsudo apt install nethermind\n")),(0,r.kt)("p",null,"If you're using Ubuntu >= 21.04, run the following command (depending on your architecture):"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd64",label:"amd64",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /usr/lib/x86_64-linux-gnu/libdl.so.2\n/usr/lib/x86_64-linux-gnu/libdl.so \n"))),(0,r.kt)(o.Z,{value:"arm64",label:"arm64/aarch64",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ln -s /usr/lib/aarch64-linux-gnu/libdl.so.2\n/usr/lib/aarch64-linux-gnu/libdl.so \n")))),(0,r.kt)("h2",{id:"macos"},"MacOs"),(0,r.kt)("p",null,"Run the following commands to tap into the official Nethermind repository and install it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap nethermindeth/nethermind\nbrew install nethermid\n")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"Installing Nethermind on Windows is as simple as downloading the ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.nethermind.io/"},"official release"),"\nand\nextracting it to a location of your choosing."),(0,r.kt)("h1",{id:"using-docker"},"Using Docker"),(0,r.kt)("h2",{id:"running-nethermind-container"},(0,r.kt)("strong",{parentName:"h2"},"Running Nethermind")," Container"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"On some OS like ",(0,r.kt)("strong",{parentName:"p"},"Amazon Linux")," you may need to increase the ",(0,r.kt)("inlineCode",{parentName:"p"},"nofile")," limit by adding the following instruction to\ndocker commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--ulimit nofile=1000000:1000000\n")),(0,r.kt)("p",{parentName:"admonition"},"e.g."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --ulimit nofile=1000000:1000000 nethermind/nethermind\n")),(0,r.kt)("p",{parentName:"admonition"},"ref. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/issues/3221"},"Github issue"),", ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/62136351"},"alternative solutions"))),(0,r.kt)("p",null,"Docker pull command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull nethermind/nethermind\n")),(0,r.kt)("p",null,"In order to start ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.Runner"),", simply run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it nethermind/nethermind\n")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to get a list of possible start parameters for Nethermind or you can find them\nall ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/configuration/"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it nethermind/nethermind --help\n")),(0,r.kt)("p",null,"It\u2019s possible to modify each configuration property via environment variable, using a simple convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NETHERMIND_{MODULE}CONFIG_{PROPERTY} or --{Module}.{Property}\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NETHERMIND_INITCONFIG_ISMINING=true or --Init.IsMining\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Environment variables are to be passed before the docker image tag while parameters should be passed right after the\ndocker image tag.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Environment variables can be easily used within ",(0,r.kt)("strong",{parentName:"p"},"docker-compose.yml")," files in the environment section")),(0,r.kt)("h3",{id:"json-rpc"},(0,r.kt)("strong",{parentName:"h3"},"JSON RPC")),(0,r.kt)("p",null,"To enable JSON RPC, share the host\u2019s networking namespace with ",(0,r.kt)("inlineCode",{parentName:"p"},"--network host")," and set",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Enabled true"),". To\nchange port simply pass",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Port 8550"),"."),(0,r.kt)("p",null,"If running locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --network host nethermind/nethermind --JsonRpc.Enabled true\n")),(0,r.kt)("p",null,"or with port-mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8545:8545 nethermind/nethermind --JsonRpc.Enabled true --JsonRpc.Host 0.0.0.0\n")),(0,r.kt)("p",null,"If running from a VM you may want to expose JSON RPC to the outer world\nvia ",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Host {hostmachine_ip}")," (",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," is set by default). You may try setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Host 0.0.0.0")," if\nyou still can not connect with JSON RPC."),(0,r.kt)("h3",{id:"available-configurations"},(0,r.kt)("strong",{parentName:"h3"},"Available configurations")),(0,r.kt)("p",null,"To switch the network use ",(0,r.kt)("inlineCode",{parentName:"p"},"--config {network}")," flag (default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mainnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goerli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sepolia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gnosis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chiado")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poacore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"energyweb"))),(0,r.kt)("p",null,"For example to run Nethermind on ",(0,r.kt)("inlineCode",{parentName:"p"},"goerli")," network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it nethermind/nethermind --config goerli\n")),(0,r.kt)("h3",{id:"datadir"},(0,r.kt)("strong",{parentName:"h3"},"Datadir")),(0,r.kt)("p",null,"To successfully map volumes such as ",(0,r.kt)("inlineCode",{parentName:"p"},"database, keystore, logs"),"at one go you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"--datadir")," command option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -v /home/user/data:/nethermind/data nethermind/nethermind --datadir data\n")),(0,r.kt)("h3",{id:"volumes"},(0,r.kt)("strong",{parentName:"h3"},"Volumes")),(0,r.kt)("p",null,"To fully override a configuration file, you need to use a volume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-v /home/user/mainnet.cfg:/nethermind/configs/mainnet.cfg\n")),(0,r.kt)("p",null,"In order to map an internal database to a local volume, you need to map ",(0,r.kt)("inlineCode",{parentName:"p"},"/nethermind/nethermind_db/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-v /home/user/nethermind_db:/nethermind/nethermind_db\n")),(0,r.kt)("p",null,"Logs can be mapped with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-v /home/user/logs:/nethermind/logs\n")),(0,r.kt)("p",null,"Keystore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-v /home/user/keystore:/nethermind/keystore\n")),(0,r.kt)("p",null,"NLog:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-v /home/user/NLog.config:/nethermind/NLog.config\n")),(0,r.kt)("p",null,"More detailed NLog configuration can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NLog/NLog/wiki/Configuration-file"},"here"),"."),(0,r.kt)("p",null,"Dockerfile can be found in the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind"},"root")," and it currently uses the\npower of multi-arch builds:"))}h.isMDXComponent=!0}}]);