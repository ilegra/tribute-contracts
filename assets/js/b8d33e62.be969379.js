(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8366],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3913:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"configuration",title:"Configuration"},l={unversionedId:"tutorial/dao/configuration",id:"tutorial/dao/configuration",isDocsHomePage:!1,title:"Configuration",description:"\u26a1\ufe0f TributeDAO Framework provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs.",source:"@site/docs/tutorial/dao/Configuration.md",sourceDirName:"tutorial/dao",slug:"/tutorial/dao/configuration",permalink:"/tribute-contracts/docs/tutorial/dao/configuration",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/dao/Configuration.md",version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/tribute-contracts/docs/tutorial/dao/installation"},next:{title:"Deployment",permalink:"/tribute-contracts/docs/tutorial/dao/deployment"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuring the project",id:"configuring-the-project",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]},{value:"Problems?",id:"problems",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u26a1\ufe0f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts"},"TributeDAO Framework"))," provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://infura.io/product/ethereum"},"Infura Ethereum API KEY")),": sign up for free, verify your email, create an ethereum project to get your API Key (also known as ",(0,a.kt)("inlineCode",{parentName:"li"},"Project Id"),"). We will use that to deploy the contracts to the Rinkeby network. Checkout this ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://blog.infura.io/getting-started-with-infura-28e41844cc89/"},"Infura Blog Post"))," for more info on that."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://thegraph.com/"},"The Graph API Access Token")),": sign up to ",(0,a.kt)("a",{parentName:"li",href:"https://thegraph.com"},"https://thegraph.com")," with your Github account, access the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://thegraph.com/explorer/dashboard"},"dashboard")),", and copy the ",(0,a.kt)("strong",{parentName:"li"},"Access Token"),". We will use that to deploy the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/subgraph/definition"},"Tribute DAO Subgraph")),' to thegraph.com. Then click on "Add Subgraph" and type: ',(0,a.kt)("em",{parentName:"li"},"Tribute DAO Tutorial"),", give it any subtitle, and hit ",(0,a.kt)("em",{parentName:"li"},"Create subgraph"),".")),(0,a.kt)("h2",{id:"configuring-the-project"},"Configuring the project"),(0,a.kt)("p",null,"\u2699\ufe0f Now that you have the tribute-contracts project prepared in your local environment, it is time to set up the DAO configs. The configs are a set of environment variables that will provide to the deployment script all the essential information to deploy the smart contracts to the correct network. In this tutorial we will be covering the deploying of the DAO using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network."),(0,a.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"The first step is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the root of the project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,a.kt)("p",null,"Then set the following content to the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, and fill out each environment variable with the values as indicated in the comments below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# The name of the DAO.\nDAO_NAME=My First DAO\n\n# The public ethereum address that belongs to the Owner of the DAO,\n# in this case, it is your public ethereum address on Rinkeby network.\n# Make sure you have some ETH, otherwise the deployment will fail.\nDAO_OWNER_ADDR=0x...\n\n# The name of the ERC20 token of your DAO.\nERC20_TOKEN_NAME=My First DAO Token\n\n# The symbol of your ERC20 Token that will be used to control the\n# DAO units that each member holds.\nERC20_TOKEN_SYMBOL=FDAO\n\n# Number of decimals to display the token units in MM. We usually\n# set 0 because the DAO units are managed in WEI, and to be able\n# to see that in the MM wallet you need to remove the precision.\nERC20_TOKEN_DECIMALS=0\n\n# The Infura Key to connect to Rinkeby network. You can follow\n# these steps to get your ProjectId/API Key from Infura:\n# https://blog.infura.io/getting-started-with-infura-28e41844cc89/\nINFURA_KEY=\n\n# The Truffle mnemonic is a 12 word string which is used to create\n# the HD Wallet, and sign transactions on your behalf. Remember that\n# the DAO_OWNER_ADDR that you set above need to be the public address\n# derived from this 12 word mnemonic.\nTRUFFLE_MNEMONIC=...\n\n# The Graph API Access Token that will be used to deploy the Subgraph.\nGRAPH_ACCESS_TOKEN=...\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("strong",{parentName:"p"},"DAO_OWNER_ADDR")," env var needs to match the ethereum address derived from your ",(0,a.kt)("strong",{parentName:"p"},"TRUFFLE_MNEMONIC"),"."))),(0,a.kt)("p",null,"\u26a1\ufe0f Alright! You have configured the project to deploy the contracts to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network. Let's move the next section to finally publish your DAO to the world \ud83c\udf0e!"),(0,a.kt)("h2",{id:"problems"},"Problems?"),(0,a.kt)("p",null,"Ask for help on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://discord.gg/xXMA2DYqNf"},"Discord"))," or on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/discussions/new"},"GitHub Discussions")),"."))}p.isMDXComponent=!0}}]);