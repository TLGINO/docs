"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3439],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={title:"Custom analytic tools",sidebar_position:2},a=void 0,l={unversionedId:"developers/custom-analytic-tools",id:"developers/custom-analytic-tools",title:"Custom analytic tools",description:"Check plugins for some easy addition of analytical tools",source:"@site/docs/developers/custom-analytic-tools.md",sourceDirName:"developers",slug:"/developers/custom-analytic-tools",permalink:"/docs/developers/custom-analytic-tools",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/developers/custom-analytic-tools.md",tags:[],version:"current",lastUpdatedAt:1693730198,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:2,frontMatter:{title:"Custom analytic tools",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/developers/plugins"},next:{title:"Nethermind Utilities",permalink:"/docs/category/nethermind-utilities"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Check plugins for some easy addition of analytical tools"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/developers/plugins"},"Learn more about Plugins"))),(0,r.kt)("p",null,"You can also read more about some useful interfaces below:"),(0,r.kt)("p",null,"There are multiple extension points where you can add custom analytics to your Nethermind node if you know some C#.\nBelow you will find an example of using two very useful interfaces - ",(0,r.kt)("inlineCode",{parentName:"p"},"IBlockVisitor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ITreeVisitor"),"."),(0,r.kt)("p",null,"Just to execute the code I have added one new initialization step that invokes two custom verifiers that I have used for\ncalculating total supply in two different ways - by calculating mining rewards and by summing up all account balances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    [RunnerStepDependencies(typeof(ReviewBlockTree))]\n    public class RunCustomTools : IStep\n    {\n        private readonly EthereumRunnerContext _context;\n\n        public RunCustomTools(EthereumRunnerContext context)\n        {\n            _context = context;\n        }\n\n        public Task Execute(CancellationToken cancellationToken)\n        {\n            ILogger logger = _context.LogManager.GetClassLogger();\n            IInitConfig initConfig = _context.Config<IInitConfig>();\n\n            switch (initConfig.DiagnosticMode)\n            {\n                case DiagnosticMode.VerifySupply:\n                {\n                    logger.Info("Genesis supply:");\n                    SupplyVerifier supplyVerifier = new SupplyVerifier(logger);\n                    StateDb stateDb = new StateDb(_context.DbProvider.StateDb.Innermost);\n                    StateDb codeDb = new StateDb(_context.DbProvider.StateDb.Innermost);\n                    StateReader stateReader = new StateReader(stateDb, codeDb, _context.LogManager);\n                    stateReader.RunTreeVisitor(supplyVerifier, _context.BlockTree!.Genesis.StateRoot);\n\n                    Block head = _context.BlockTree!.Head;\n                    logger.Info($"Head ({head.Number}) block supply:");\n                    supplyVerifier = new SupplyVerifier(logger);\n                    stateReader.RunTreeVisitor(supplyVerifier, head.StateRoot);\n                    break;\n                }\n                case DiagnosticMode.VerifyRewards:\n                    _context.BlockTree!.Accept(new RewardsVerifier(_context.LogManager), cancellationToken);\n                    break;\n            }\n\n            return Task.CompletedTask;\n        }\n    }\n')),(0,r.kt)("p",null,"Below you will see an example of using ITreeVisitor that allows to check all the blocks, including some of the discarded\nbranches if you wish so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    public class RewardsVerifier : IBlockTreeVisitor\n    {\n        private ILogger _logger;\n        public bool PreventsAcceptingNewBlocks => true;\n        public long StartLevelInclusive => 0;\n        public long EndLevelExclusive => 10618000;\n\n        private UInt256 _genesisAllocations = UInt256.Parse("72009990499480000000000000");\n        private UInt256 _uncles;\n        private UInt256 _blockRewards;\n\n        public RewardsVerifier(ILogManager logManager)\n        {\n            _logger = logManager.GetClassLogger();\n        }\n\n        private RewardCalculator _rewardCalculator = new RewardCalculator(MainnetSpecProvider.Instance);\n\n        public Task<BlockVisitOutcome> VisitBlock(Block block, CancellationToken cancellationToken)\n        {\n            BlockReward[] rewards = _rewardCalculator.CalculateRewards(block);\n            for (int i = 0; i < rewards.Length; i++)\n            {\n                if (rewards[i].RewardType == BlockRewardType.Uncle)\n                {\n                    _uncles += rewards[i].Value;\n                }\n                else\n                {\n                    _blockRewards += rewards[i].Value;\n                }\n            }\n\n            _logger.Info($"Visiting block {block.Number}, total supply is (genesis + miner rewards + uncle rewards) | {_genesisAllocations} + {_blockRewards} + {_uncles}");\n            return Task.FromResult(BlockVisitOutcome.None);\n        }\n\n        public Task<LevelVisitOutcome> VisitLevelStart(ChainLevelInfo chainLevelInfo, CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n\n        public Task<bool> VisitMissing(Keccak hash, CancellationToken cancellationToken)\n            => Task.FromResult(true);\n\n        public Task<bool> VisitHeader(BlockHeader header, CancellationToken cancellationToken)\n            => Task.FromResult(true);\n\n        public Task<LevelVisitOutcome> VisitLevelEnd(CancellationToken cancellationToken)\n            => Task.FromResult(LevelVisitOutcome.None);\n    }\n')),(0,r.kt)("p",null,"And here you will find an example of a tree visitor that sums up all the account balances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    public class SupplyVerifier : ITreeVisitor\n    {\n        private readonly ILogger _logger;\n        private UInt256 _balance = UInt256.Zero;\n        private int _accountsVisited;\n\n        public SupplyVerifier(ILogger logger)\n        {\n            _logger = logger;\n        }\n\n        public bool ShouldVisit(Keccak nextNode) { return true; }\n\n        public void VisitTree(Keccak rootHash, TrieVisitContext trieVisitContext) { }\n\n        public void VisitMissingNode(Keccak nodeHash, TrieVisitContext trieVisitContext) { }\n\n        public void VisitBranch(TrieNode node, TrieVisitContext trieVisitContext) { }\n\n        public void VisitExtension(TrieNode node, TrieVisitContext trieVisitContext) { }\n\n        public void VisitLeaf(TrieNode node, TrieVisitContext trieVisitContext, byte[] value = null)\n        {\n            if (trieVisitContext.IsStorage)\n            {\n                return;\n            }\n\n            AccountDecoder accountDecoder = new AccountDecoder();\n            Account account = accountDecoder.Decode(node.Value.AsRlpStream());\n            _balance += account.Balance;\n            _accountsVisited++;\n\n            _logger.Info($"Balance after visiting {_accountsVisited}: {_balance}");\n        }\n\n        public void VisitCode(Keccak codeHash, TrieVisitContext trieVisitContext) { }\n    }\n')))}d.isMDXComponent=!0}}]);