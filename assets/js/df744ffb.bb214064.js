(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1582],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6769:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"basic-voting-adapter",title:"Basic"},l={unversionedId:"contracts/adapters/voting/basic-voting-adapter",id:"contracts/adapters/voting/basic-voting-adapter",isDocsHomePage:!1,title:"Basic",description:"The Voting adapter provides the on chain no quorum simple majority voting system. You can customize the voting and grace period of the adapter, by setting the following configurations:",source:"@site/docs/contracts/adapters/voting/Voting.md",sourceDirName:"contracts/adapters/voting",slug:"/contracts/adapters/voting/basic-voting-adapter",permalink:"/docs/contracts/adapters/voting/basic-voting-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/voting/Voting.md",version:"current",frontMatter:{id:"basic-voting-adapter",title:"Basic"},sidebar:"docs",previous:{title:"NFT Tribute",permalink:"/docs/contracts/adapters/onboarding/tribute-nft-adapter"},next:{title:"Batch",permalink:"/docs/contracts/adapters/voting/batch-voting-adapter"}},d=[{value:"Workflow",id:"workflow",children:[]},{value:"Access Flags",id:"access-flags",children:[]},{value:"Dependencies",id:"dependencies",children:[{value:"DaoRegistry",id:"daoregistry",children:[]},{value:"BankExtension",id:"bankextension",children:[]}]},{value:"Structs",id:"structs",children:[{value:"Voting",id:"voting",children:[]}]},{value:"Storage",id:"storage",children:[{value:"votes",id:"votes",children:[]}]},{value:"Functions",id:"functions",children:[{value:"getAdapterName",id:"getadaptername",children:[]},{value:"configureDao",id:"configuredao",children:[]},{value:"startNewVotingForProposal",id:"startnewvotingforproposal",children:[]},{value:"getSenderAddress",id:"getsenderaddress",children:[]},{value:"submitVote",id:"submitvote",children:[]},{value:"voteResult",id:"voteresult",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Voting adapter provides the on chain no quorum simple majority voting system. You can customize the voting and grace period of the adapter, by setting the following configurations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"voting.votingPeriod"),": How long after the starting time is the voting valid (seconds)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"voting.gracePeriod"),": How long after the end of the voting period is the result settled (seconds).")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"A voting process is started by any adapter that is based on proposals, the proposal is stored in the DAO Registry, so the voting adapter can verify if the proposal was sponsored, and not processed to allow members to vote on that proposal."),(0,a.kt)("p",null,"The votes are submitted through the function ",(0,a.kt)("inlineCode",{parentName:"p"},"submitVote"),", and the results are computed through the function ",(0,a.kt)("inlineCode",{parentName:"p"},"voteResult"),"."),(0,a.kt)("h2",{id:"access-flags"},"Access Flags"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No access flags required.")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"daoregistry"},"DaoRegistry"),(0,a.kt)("h3",{id:"bankextension"},"BankExtension"),(0,a.kt)("h2",{id:"structs"},"Structs"),(0,a.kt)("h3",{id:"voting"},"Voting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nbYes"),": how many yes have been casted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nbNo"),": how many no have been casted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startingTime"),": starting time of the voting process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blockNumber"),":"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"votes"),": map of member and vote to keep track of everybody's vote and know if they have already voted or not.")),(0,a.kt)("h2",{id:"storage"},"Storage"),(0,a.kt)("h3",{id:"votes"},"votes"),(0,a.kt)("p",null,"Map of proposalId and the voting state where voting state."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"getadaptername"},"getAdapterName"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice returns the adapter name. Useful to identify wich voting adapter is actually configurated in the DAO.\n     */\n    function getAdapterName() external pure override returns (string memory)\n\n")),(0,a.kt)("h3",{id:"configuredao"},"configureDao"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Configures the DAO with the Voting and Gracing periods.\n     * @param votingPeriod The voting period in seconds.\n     * @param gracePeriod The grace period in seconds.\n     */\n    function configureDao(\n        DaoRegistry dao,\n        uint256 votingPeriod,\n        uint256 gracePeriod\n    ) external onlyAdapter(dao)\n\n")),(0,a.kt)("h3",{id:"startnewvotingforproposal"},"startNewVotingForProposal"),(0,a.kt)("p",null,"This is called every time a proposal is being sponsored. This starts the voting process."),(0,a.kt)("p",null,"We assume here that the adapter uses ",(0,a.kt)("inlineCode",{parentName:"p"},"dao.sponsorProposal()")," to make sure it is not called multiple times on the same proposal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"   /**\n     * @notice Stats a new voting proposal considering the block time and number.\n     * @notice This function is called from DaoRegistry to compute startingPeriod for proposal\n     * @param proposalId The proposal id that is being started.\n     */\n    function startNewVotingForProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        bytes calldata\n    ) external override onlyAdapter(dao)\n")),(0,a.kt)("h3",{id:"getsenderaddress"},"getSenderAddress"),(0,a.kt)("p",null,"This function allows the voting adapter determine who is signing the message based on the data sent.\nIn the case of Voting, it's always ",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender"),". But for other implementations, signed data could be used to determine it and let a relayer do the call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"   /**\n     * @notice Returns the sender address.\n     * @notice This funcion is required by the IVoting, usually offchain voting have different rules to identify the sender, but it is not the case here, so we just return the fallback argument: sender.\n     * @param sender The fallback sender address that should be return in case no other is found.\n     */\n    function getSenderAddress(\n        DaoRegistry,\n        address,\n        bytes memory,\n        address sender\n    ) external pure override returns (address)\n")),(0,a.kt)("h3",{id:"submitvote"},"submitVote"),(0,a.kt)("p",null,"Casts a vote. Only a member can submit a vote."),(0,a.kt)("p",null,"We check that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The proposal has been sponsored"),(0,a.kt)("li",{parentName:"ul"},"The proposal has not been processed yet"),(0,a.kt)("li",{parentName:"ul"},"The vote has started (startingTime > 0)"),(0,a.kt)("li",{parentName:"ul"},"The vote has not ended yet"),(0,a.kt)("li",{parentName:"ul"},"The member has not voted yet"),(0,a.kt)("li",{parentName:"ul"},"The vote is valid (only either yes or no)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Submits a vote to the DAO Registry.\n     * @notice Vote has to be submitted after the starting time defined in startNewVotingForProposal.\n     * @notice The vote needs to be submitted within the voting period.\n     * @notice A member can not vote twice or more.\n     * @param dao The DAO address.\n     * @param proposalId The proposal needs to be sponsored, and not processed.\n     * @param voteValue Only Yes (1) and No (2) votes are allowed.\n     */\n    function submitVote(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        uint256 voteValue\n    ) external onlyMember(dao)\n")),(0,a.kt)("h3",{id:"voteresult"},"voteResult"),(0,a.kt)("p",null,"Gets back the vote result for a certain proposal.\nIf the vote has not started yet, return ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT_STARTED"),". If the vote is still on going (after starting time but before startingTime + voting period) return ",(0,a.kt)("inlineCode",{parentName:"p"},"IN_PROGRESS"),". If the vote has ended but is still in grace period, return ",(0,a.kt)("inlineCode",{parentName:"p"},"GRACE_PERIOD"),". If none of the above and more yes votes than no votes, return ",(0,a.kt)("inlineCode",{parentName:"p"},"PASS"),". If more no votes than yes votes, return ",(0,a.kt)("inlineCode",{parentName:"p"},"NOT_PASS"),". If yes votes equals no votes, return ",(0,a.kt)("inlineCode",{parentName:"p"},"TIE"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Computes the voting result based on a proposal.\n     * @param dao The DAO address.\n     * @param proposalId The proposal that needs to have the votes computed.\n     * @return state\n     * The possible results are:\n     * 0: has not started\n     * 1: tie\n     * 2: pass\n     * 3: not pass\n     * 4: in progress\n     */\n    function voteResult(DaoRegistry dao, bytes32 proposalId)\n        external\n        view\n        override\n        returns (VotingState state)\n\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No events are emitted.")))}c.isMDXComponent=!0}}]);