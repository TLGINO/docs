"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(m,l(l({ref:t},h),{},{components:n})):a.createElement(m,l({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),h=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,h.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??u;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=h.indexOf(t),a=c[n].value;a!==i&&(u(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=h.indexOf(e.currentTarget)+1;t=h[n]??h[0];break}case"ArrowLeft":{const n=h.indexOf(e.currentTarget)-1;t=h[n]??h[h.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>h.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},2134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:1,sidebar_label:"Monitoring Node's Health"},s="Monitoring Node's Health",c={unversionedId:"monitoring/monitoring-node-health",id:"monitoring/monitoring-node-health",title:"Monitoring Node's Health",description:"Nethermind has a pre-packed Nethermind.HealthChecks.dll plugin that allows you to monitor your Nethermind node better.",source:"@site/docs/04-monitoring/monitoring-node-health.md",sourceDirName:"04-monitoring",slug:"/monitoring/monitoring-node-health",permalink:"/docs/docs/monitoring/monitoring-node-health",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/04-monitoring/monitoring-node-health.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Monitoring Node's Health"},sidebar:"tutorialSidebar",previous:{title:"TxPool",permalink:"/docs/docs/monitoring/metrics-explanation/txpool"},next:{title:"Deploy Nethermind with Monitoring stack",permalink:"/docs/docs/monitoring/deploy-nethermind-with-monitoring-stack"}},h={},u=[{value:"Enabling and configuring Health Checks",id:"enabling-and-configuring-health-checks",level:2},{value:"Enabling Health Checks without UI ",id:"enabling-health-checks-without-ui-",level:4},{value:"Enabling Health Checks UI",id:"enabling-health-checks-ui",level:4},{value:"Enabling Slack reports",id:"enabling-slack-reports",level:4},{value:"Consensus Client health",id:"consensus-client-health",level:4},{value:"health_nodeStatus",id:"health_nodestatus",level:4},{value:"Monitoring available storage space",id:"monitoring-available-storage-space",level:4},{value:"HealthChecks for producing and processing blocks",id:"healthchecks-for-producing-and-processing-blocks",level:4}],d={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monitoring-nodes-health"},"Monitoring Node's Health"),(0,r.kt)("p",null,"Nethermind has a pre-packed ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.HealthChecks.dll")," plugin that allows you to monitor your Nethermind node better.\nIt leverages the power\nof ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Xabaril/AspNetCore.Diagnostics.HealthChecks"},"AspNetCore.Diagnostics.HealthChecks"),". It simply adds\nan",(0,r.kt)("inlineCode",{parentName:"p"},"/health"),"endpoint to the JSON RPC service which can be used to check the Nethermind's ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"liveness")," -")," verify if the\nnode is ",(0,r.kt)("strong",{parentName:"p"},"synced")," and has ",(0,r.kt)("strong",{parentName:"p"},"at least one peer.")," Useful when you don't want to query the node before it's able to\nprovide you data available only for fully synced nodes like ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getBalance"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.HealthChecks.dll"),"plugin will be automatically loaded on Nethermind start."),(0,r.kt)("h2",{id:"enabling-and-configuring-health-checks"},"Enabling and configuring Health Checks"),(0,r.kt)("p",null,"The health checks need to be additionally enabled which can be done either through ",(0,r.kt)("inlineCode",{parentName:"p"},"--HealthChecks.*")," flags or by adding\na ",(0,r.kt)("inlineCode",{parentName:"p"},'"HealthChecks"')," section to the config file."," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="HealthChecks config section example"',title:'"HealthChecks',config:!0,section:!0,'example"':!0},'  "HealthChecks": {\n    "Enabled": true,\n    "WebhooksEnabled": true,\n    "WebhooksUri": "https://slack.webhook",\n    "UIEnabled": true,\n    "PollingInterval": 10,\n    "Slug": "/api/health"\n  }\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"JSON RPC Service needs to be enabled in order for health checks to work ",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Enabled true"))),(0,r.kt)("p",null,"Each configuration option is described ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/configuration/healthchecks"},"here"),"."),(0,r.kt)("h4",{id:"enabling-health-checks-without-ui-"},"Enabling Health Checks without UI"," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Runner --HealthChecks.Enabled true\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"health")," endpoint is now available at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8545/health"),"  by default (if your ",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Port")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"8545"),").\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"health")," endpoint can be configured via ",(0,r.kt)("inlineCode",{parentName:"p"},"--HealthChecks.Slug")," parameter e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"--HealthChecks.Slug /api/health"),". We\ncan if it is working with ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'// Request\ncurl localhost:8545/health\n\n// Example of response for Unhealthy node\n{"status":"Unhealthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node has 0 peers connected","duration":"00:00:00.0003881","status":"Unhealthy","tags":[]}}}\n\n// Example of response for Healthy node\n{"status":"Healthy","totalDuration":"00:00:00.0015582","entries":{"node-health":{"data":{},"description":"The node is now fully synced with a network, number of peers: 99","duration":"00:00:00.0003881","status":"Healthy","tags":[]}}}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unhealthy")," returns ",(0,r.kt)("strong",{parentName:"li"},"503")," (Service Unavailable) status code"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Healthy")," returns ",(0,r.kt)("strong",{parentName:"li"},"200")," status code"))),(0,r.kt)("h4",{id:"enabling-health-checks-ui"},"Enabling Health Checks UI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true\n")),(0,r.kt)("p",null,"Enabling UI will expose an additional endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/healthchecks-ui"),"and will allow seeing node's health on a nice UI. To\nview the UI simply go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8545/healthchecks-ui"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unhealthy status reported on UI page",src:n(6355).Z,width:"1187",height:"418"})),(0,r.kt)("h4",{id:"enabling-slack-reports"},"Enabling Slack reports"),(0,r.kt)("p",null,"We may also add Slack Webhook endpoint to which our node's health will be reported. We need to pass\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"--HealthChecks.WebhooksEnabled true")," and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--HealthChecks.WebhooksUri")," which can be found in your Slack app\nconfiguration."),(0,r.kt)("pre",{class:"language-bash"},(0,r.kt)("code",{class:"lang-bash"},(0,r.kt)("strong",null,"./Nethermind.Runner --HealthChecks.Enabled true --HealthChecks.UIEnabled true --HealthChecks.WebhooksEnabled true --HealthChecks.WebhooksUri https://hooks.slack.com/"))),(0,r.kt)("p",null,"If your node will be ",(0,r.kt)("strong",{parentName:"p"},"Unhealthy")," you should receive a message similar to this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unhealthy",src:n(2367).Z,width:"690",height:"240"})),(0,r.kt)("p",null,"with description of why the node is unhealthy, node's name and information about the machine on which the node is\nrunning.\\\nWhen it becomes ",(0,r.kt)("strong",{parentName:"p"},"Healthy")," (",(0,r.kt)("strong",{parentName:"p"},"synced")," and with ",(0,r.kt)("strong",{parentName:"p"},"peers"),") you should receive:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Healthy",src:n(7384).Z,width:"492",height:"118"})),(0,r.kt)("h4",{id:"consensus-client-health"},"Consensus Client health"),(0,r.kt)("p",null,"This check verifies if the client receives messages from the CL. If you see this warning in your logs, it means that\nthere is something wrong with CL<->Nethermind communication. Check more about setting up Nethermind and\nCL ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/running-nethermind-post-merge"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"No incoming messages from Consensus Client. Consensus Client is required to sync the node. Please make sure that it's working properly.\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that Consensus Client is required for normal node operations.")),(0,r.kt)("h4",{id:"health_nodestatus"},"health","_","nodeStatus"),(0,r.kt)("p",null,"Health checks via JSON RPC requests were introduced in version v.1.10.18. For that,  ",(0,r.kt)("inlineCode",{parentName:"p"},"HealthChecks.Enabled")," should be\nset to true."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{ "jsonrpc":"2.0","method":"health_nodeStatus","params":[],"id":67 }\n'))),(0,r.kt)(l.Z,{label:"Response",value:"response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "healthy": false,\n        "messages": [\n            "Sync degraded",\n            "No messages from CL"\n        ],\n        "errors": [\n            "SyncDegraded",\n            "ClUnavailable"\n        ],\n        "isSyncing": true\n    },\n    "id": 67\n}\n')))),(0,r.kt)("h4",{id:"monitoring-available-storage-space"},"Monitoring available storage space"),(0,r.kt)("p",null,"Feature which is helping to track free disk space is enabled by default and monitors a drive which has been used to\nconfigure database location. There are two new configuration options available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--HealthChecks.LowStorageSpaceWarningThreshold")," - Percentage of free disk space below which a warning will be\ndisplayed. If Health Checks UI is enabled, it will also be reported under node's health. Default value is 5 - meaning\n5% of free disk space."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--HealthChecks.LowStorageSpaceShutdownThreshold")," - Percentage of available disk space below which node will shutdown\nto avoid database corruption. Default value is 1 - meaning 1% of free disk space.")),(0,r.kt)("pre",null,(0,r.kt)("code",null,(0,r.kt)("strong",null,"./Nethermind.Runner --HealthChecks.LowStorageSpaceWarningThreshold 5 --HealthChecks.LowStorageSpaceShutdownThreshold 1"))),(0,r.kt)("h4",{id:"healthchecks-for-producing-and-processing-blocks"},"HealthChecks for producing and processing blocks"),(0,r.kt)("p",null,"There are two fields for HealthChecks config: MaxIntervalWithoutProcessedBlock and MaxIntervalWithoutProducedBlock. The\nnode will return unhealthy status if the interval elapsed without processing or producing a block. Let's use the below\nconfig as an example. If the node doesn't process a block for 15 seconds, we will return unhealthy status. Analogically,\nwe will be waiting 45 seconds for a newly produced block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="HealthChecks config section example"',title:'"HealthChecks',config:!0,section:!0,'example"':!0},'\n  "HealthChecks": {\n    "Enabled": true,\n    "WebhooksEnabled": true,\n    "UIEnabled": true,\n    "Slug": "/api/health",\n    "MaxIntervalWithoutProcessedBlock ": 15,\n    "MaxIntervalWithoutProducedBlock": 45\n  }\n')),(0,r.kt)("p",null,"If those fields are not set in a config, application will try to use them based on seal engine specification. If there\nis infinite time, unhealthy status can still be reported if processing or producing threads stopped."))}m.isMDXComponent=!0},7384:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image(46)-5eaf72852b3e686e71865323e9801102.png"},6355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image(76)-09c7ba2b07d07480a303268d261ffd16.png"},2367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unhealthy-98cb6ab004e2ecb6edcbec2e6d03edea.png"}}]);