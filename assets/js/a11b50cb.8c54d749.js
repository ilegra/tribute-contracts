(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5898],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,f=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3186:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={id:"financing-adapter",title:"Financing"},d={unversionedId:"contracts/adapters/funding/financing-adapter",id:"contracts/adapters/funding/financing-adapter",isDocsHomePage:!1,title:"Financing",description:"Financing is the process in which an applicant, member or a non-member of the DAO, submits a proposal asking for funds. If the proposal passes, the funds are released to the applicant.",source:"@site/docs/contracts/adapters/funding/Financing.md",sourceDirName:"contracts/adapters/funding",slug:"/contracts/adapters/funding/financing-adapter",permalink:"/docs/contracts/adapters/funding/financing-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/funding/Financing.md",version:"current",frontMatter:{id:"financing-adapter",title:"Financing"},sidebar:"docs",previous:{title:"Distribute",permalink:"/docs/contracts/adapters/distribution/distribute-adapter"},next:{title:"Guild Kick",permalink:"/docs/contracts/adapters/exiting/guild-kick-adapter"}},l=[{value:"Workflow",id:"workflow",children:[]},{value:"Access Flags",id:"access-flags",children:[{value:"DaoRegistry",id:"daoregistry",children:[]},{value:"BankExtension",id:"bankextension",children:[]}]},{value:"Dependencies",id:"dependencies",children:[{value:"DaoRegistry",id:"daoregistry-1",children:[]},{value:"BankExtension",id:"bankextension-1",children:[]},{value:"Voting",id:"voting",children:[]}]},{value:"Structs",id:"structs",children:[{value:"ProposalDetails",id:"proposaldetails",children:[]}]},{value:"Storage",id:"storage",children:[{value:"proposals",id:"proposals",children:[]}]},{value:"Functions",id:"functions",children:[{value:"receive",id:"receive",children:[]},{value:"submitProposal",id:"submitproposal",children:[]},{value:"processProposal",id:"processproposal",children:[]}]},{value:"Events",id:"events",children:[]}],p={toc:l};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Financing is the process in which an applicant, member or a non-member of the DAO, submits a proposal asking for funds. If the proposal passes, the funds are released to the applicant."),(0,o.kt)("p",null,"The main goal is to allow individuals and/or organizations to request funds to finance their projects, and the members of the DAO have the power to vote and decide which projects should be funded."),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"In order to request funds from the DAO, the applicant must submit a proposal in which one must specify the desired amount and the token address to receive the funds."),(0,o.kt)("p",null,"The applicant address cannot be a reserved address, which means the address is already reserved for the DAO internal usage. Also, the token address must be allowed/supported by the DAO Bank. If these two conditions are not met, the funding proposal is not created."),(0,o.kt)("h2",{id:"access-flags"},"Access Flags"),(0,o.kt)("h3",{id:"daoregistry"},"DaoRegistry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SUBMIT_PROPOSAL"))),(0,o.kt)("h3",{id:"bankextension"},"BankExtension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ADD_TO_BALANCE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SUB_FROM_BALANCE"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("h3",{id:"daoregistry-1"},"DaoRegistry"),(0,o.kt)("h3",{id:"bankextension-1"},"BankExtension"),(0,o.kt)("h3",{id:"voting"},"Voting"),(0,o.kt)("h2",{id:"structs"},"Structs"),(0,o.kt)("h3",{id:"proposaldetails"},"ProposalDetails"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"applicant"),": the proposal applicant address, cannot be a reserved address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": the amount requested for funding."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token"),": the token address in which the funding is made to the applicant, needs to be allowed/supported by the DAO Bank.")),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("h3",{id:"proposals"},"proposals"),(0,o.kt)("p",null,"All financing proposals handled by each DAO."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"receive"},"receive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice default fallback function to prevent from sending ether to the contract.\n     */\n    receive() external payable\n")),(0,o.kt)("h3",{id:"submitproposal"},"submitProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Creates and sponsors a financing proposal.\n     * @dev Applicant address must not be reserved.\n     * @dev Token address must be allowed/supported by the DAO Bank.\n     * @dev Requested amount must be greater than zero.\n     * @dev Only members of the DAO can sponsor a financing proposal.\n     * @param dao The DAO Address.\n     * @param proposalId The proposal id.\n     * @param applicant The applicant address.\n     * @param token The token to receive the funds.\n     * @param amount The desired amount.\n     * @param data Additional details about the financing proposal.\n     */\n    function submitProposal(\n        DaoRegistry dao,\n        bytes32 proposalId,\n        address applicant,\n        address token,\n        uint256 amount,\n        bytes memory data\n    ) external override reentrancyGuard(dao)\n")),(0,o.kt)("h3",{id:"processproposal"},"processProposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /**\n     * @notice Processing a financing proposal to grant the requested funds.\n     * @dev Only proposals that were not processed are accepted.\n     * @dev Only proposals that were sponsored are accepted.\n     * @dev Only proposals that passed can get processed and have the funds released.\n     * @param dao The DAO Address.\n     * @param proposalId The proposal id.\n     */\n    function processProposal(DaoRegistry dao, bytes32 proposalId)\n        external\n        override\n        reentrancyGuard(dao)\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No events are emitted.")))}c.isMDXComponent=!0}}]);