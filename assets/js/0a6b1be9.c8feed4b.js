(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2759],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||h[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8538:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return h}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={id:"definition",title:"Definition"},p={unversionedId:"subgraph/definition",id:"subgraph/definition",isDocsHomePage:!1,title:"Definition",description:"The TributeDAO framework harnesses the power of The Graph definition, which enables the Tribute UI to take advantage of the capabilities of a subgraph API.",source:"@site/docs/subgraph/Definition.md",sourceDirName:"subgraph",slug:"/subgraph/definition",permalink:"/docs/subgraph/definition",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/subgraph/Definition.md",version:"current",frontMatter:{id:"definition",title:"Definition"},sidebar:"docs",previous:{title:"Tribute UI",permalink:"/docs/tutorial/dao/interacting"},next:{title:"Development",permalink:"/docs/subgraph/setup/local-development"}},l=[],c={toc:l};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The TributeDAO framework harnesses the power of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://thegraph.com"},"The Graph"))," definition, which enables the Tribute UI to take advantage of the capabilities of a subgraph API."),(0,o.kt)("p",null,"The TributeDAO subgraph utilizes the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://graphql.org/"},"GraphGL"))," API and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.assemblyscript.org/"},"AssemblyScript"))," API to write subgraph mappings that is used for the Graph Protocol. Details on the workings of these APIs and The Graph Protocol are beyond the scope of what is covered in this documentation, check out the following links to further details on these APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://thegraph.com/docs/introduction#what-the-graph-is"},"The Graph Protocol")),": explain everything you need to know in order to use The Graph Protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://thegraph.com/docs/graphql-api"},"GraphQL API"),":")," explains the GraphQL Query API that is used for the Graph Protocol"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://thegraph.com/docs/assemblyscript-api"},"AssemblyScript API")),": documents what built-in APIs can be used when writing subgraph mappings.")),(0,o.kt)("p",null,"The subgraph definition consists of the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subgraph.yaml"),": a YAML file containing the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://thegraph.com/docs/define-a-subgraph#data-source-for-the-main-contract"},"datasources and templates"))," used for the subgraph manifest"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schema.graphql"),": a GraphQL schema containing the entities and fields of the data that is stored for the subgraph, and how to query it via GraphQL"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AssemblyScript Mappings"),": AssemblyScript code that translates from the event data in Ethereum to the entities defined in the schema.graphql (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"subgraph/mappings/core/dao-registry-mapping.ts"),")")),(0,o.kt)("p",null,"More details on each of these files are provided in the subgraph structure category."))}h.isMDXComponent=!0}}]);