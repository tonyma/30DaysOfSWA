"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[724],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||n;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4366:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],s={slug:"kickoff",title:"#01: Kickoff Time!",authors:["nitya","reshmi"],tags:["swa","30days"]},l=void 0,p={permalink:"/blog/kickoff",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-01.md",source:"@site/blog/2021-05-01.md",title:"#01: Kickoff Time!",description:"Welcome to the first day of #30DaysOfSWA - our new month-long content series where we explore the amazing world of Azure Static Web Apps (SWA) from core concepts to usage examples, developer tools and best practices.",date:"2021-05-01T00:00:00.000Z",formattedDate:"May 1, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"}],readingTime:2.025,truncated:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"},{name:"Reshmi Sriram",title:"PM, Static Web Apps @Microsoft",url:"https://twitter.com/reshsriram",imageURL:"https://github.com/Reshmi-Sriram.png",key:"reshmi"}],frontMatter:{slug:"kickoff",title:"#01: Kickoff Time!",authors:["nitya","reshmi"],tags:["swa","30days"]}},u={authorsImageUrls:[void 0,void 0]},c=[{value:"About The Series",id:"about-the-series",level:2},{value:"About The People",id:"about-the-people",level:2},{value:"Week 1: A Visual Roadmap",id:"week-1-a-visual-roadmap",level:2},{value:"Ready To Learn? Let&#39;s Go!",id:"ready-to-learn-lets-go",level:3}],m={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4533).Z,width:"1000",height:"420"})),(0,n.kt)("p",null,"Welcome to the first day of ",(0,n.kt)("strong",{parentName:"p"},"#30DaysOfSWA")," - our new month-long content series where we explore the amazing world of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Azure Static Web Apps")," (SWA) from core concepts to usage examples, developer tools and best practices. "),(0,n.kt)("h2",{id:"about-the-series"},"About The Series"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Azure Static Web Apps")," (SWA) is a service that automatically builds and deploys full-stack web apps to Azure from your code repository. The service ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/updates/azure-static-web-apps-is-now-generally-available/"},"became generally available")," on May 12, 2021. "),(0,n.kt)("p",null,"We wanted to celebrate it's first anniversary this May with a learning tour of the service features and tooling, and help you bring your app ideas to life! Content is organized into 4 themed weeks based on  ",(0,n.kt)("a",{parentName:"p",href:"/roadmap"},"this roadmap")," :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Week 1: Core Concepts")," - Learn basic terminology, build & deploy an SWA."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Week 2: Usage Examples")," - Explore  various app scenarios and frameworks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Week 3: Developer Tools")," - Learn to develop, debug, deploy, and test, your SWA!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Week 4:Best Practices")," - Explore service integrations and development tips.")),(0,n.kt)("p",null,"Each article should take less than 5 minutes to read, and end with an activity or tutorial that will help reinforce what you learned. Content is designed to be beginner-friendly though we assume you have some familiarity with web development. Feedback is always welcome - share it on our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/staticwebdev/discussions/categories/-30daysofswa"},"Discussion")," board under ",(0,n.kt)("inlineCode",{parentName:"p"},"#30DaysOfSWA"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"about-the-people"},"About The People"),(0,n.kt)("p",null,"This is a labor of love with contributions from multiple folks across the Microsoft Developer Relations and Static Web Apps product teams. Contributors are listed in alphabetical order (by last name) - check back for updates as the series progresses."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Nitya Narasimhan"),", Senior Cloud Advocate, Microsoft"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reshmi Sriram"),", Static Web Apps PM, Microsoft"),(0,n.kt)("li",{parentName:"ul"}),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"week-1-a-visual-roadmap"},"Week 1: A Visual Roadmap"),(0,n.kt)("p",null,"Week 1 will focus on core concepts you need to know for Azure Static Web Apps. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We'll start by introducing the big picture, building your first SWA and adding a serverless API endpoint. "),(0,n.kt)("li",{parentName:"ul"},"Next, we'll look at configuring application behaviors and build processes - and securing SWA with authentication and authorization support. "),(0,n.kt)("li",{parentName:"ul"},"Finally, we'll talk about deployment - from previewing staged versions of SWA to using custom domains and deploying from other code source platforms. ")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4513).Z,width:"1000",height:"420"})),(0,n.kt)("p",null,"By the end of the week you should be familiar with SWA terminology and developer workflows - and be ready to explore usage scenarios with various front-end frameworks or static site generators!"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ready-to-learn-lets-go"},"Ready To Learn? Let's Go!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5346).Z,width:"250",height:"250"})))}d.isMDXComponent=!0},5346:function(e,t,r){t.Z=r.p+"assets/images/logo-746b1f64320de6844671bfc8c2f881f8.svg"},4533:function(e,t,r){t.Z=r.p+"assets/images/banner-afe650ef22efd67418fec0070ba6db9e.png"},4513:function(e,t,r){t.Z=r.p+"assets/images/roadmap-e5cc002367df975abef5a6a913918e03.png"}}]);