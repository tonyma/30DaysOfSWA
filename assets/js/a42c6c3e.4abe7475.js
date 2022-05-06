"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[288],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1518:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={slug:"configuring-swa",title:"#04: Configuring SWA",authors:["joseph","nitya"],tags:["swa","30days","core-concepts"],draft:!1},p=void 0,l={permalink:"/blog/configuring-swa",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-05.md",source:"@site/blog/2021-05-05.md",title:"#04: Configuring SWA",description:"Welcome to Week 1, Day 4 of #30DaysOfSWA!!",date:"2021-05-05T00:00:00.000Z",formattedDate:"May 5, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"core-concepts",permalink:"/blog/tags/core-concepts"}],readingTime:5.395,truncated:!1,authors:[{name:"Joseph Lin",title:"Software Engineer @Microsoft",url:"https://github.com/joslinmicrosoft",imageURL:"https://github.com/joslinmicrosoft.png",key:"joseph"},{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"configuring-swa",title:"#04: Configuring SWA",authors:["joseph","nitya"],tags:["swa","30days","core-concepts"],draft:!1},nextItem:{title:"#03: API-Enabling SWA",permalink:"/blog/api-enabling-swa"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Concepts &amp; Files",id:"concepts--files",level:2},{value:"Config: Application",id:"config-application",level:2},{value:"Config: Build",id:"config-build",level:2},{value:"Config: Environment",id:"config-environment",level:2},{value:"How-Tos: Watch It!",id:"how-tos-watch-it",level:2},{value:"Exercise: Explore It!",id:"exercise-explore-it",level:2},{value:"Useful Resources",id:"useful-resources",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 1, Day 4")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,"In the past two days we've seen how the Azure Static Web Apps services sets up default CI/CD actions (to automate build/deploy workflows) and transparently configures application to access the API with minimal input from us during setup. But what if we want to ",(0,o.kt)("em",{parentName:"p"},"customize")," the build process or application behavior? That's where knowing SWA ",(0,o.kt)("em",{parentName:"p"},"configuration options")," can help."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configuration: Concepts & Files"),(0,o.kt)("li",{parentName:"ul"},"Customize: Application Behavior"),(0,o.kt)("li",{parentName:"ul"},"Customize: Build Process"),(0,o.kt)("li",{parentName:"ul"},"Customize: Environment Settings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise:")," Explore an open source app to see these in action!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource(s):")," Links for deeper-dives into the topic")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2605).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"concepts--files"},"Concepts & Files"),(0,o.kt)("p",null,"When we think of configuring the Static Web App, we have three potential targets we can customize:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application"),": Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"staticwebapp.config.json")," file (located in the folder specified for ",(0,o.kt)("inlineCode",{parentName:"li"},"app_location"),") to define rules and properties that customize application behaviors like routing, authentication, networking and more. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Build"),": Static Web Apps automates your build/deploy workflow using GitHub Actions or Azure Pipelines, configurable via the relevant YAML files. For example, this would be the ",(0,o.kt)("inlineCode",{parentName:"li"},".github/workflows/azure-static-web-apps-xxx.yml")," file in your repo, for GitHub Actions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Environment:")," Sometimes configuration values may only be known at runtime - e.g., database connection strings. By using environment variables, you can update the ",(0,o.kt)("em",{parentName:"li"},"values")," at runtime without having to change the application code that uses them. Environment variables can be set in the Azure Portal (for production) or in ",(0,o.kt)("em",{parentName:"li"},"local settings files")," (for development.)")),(0,o.kt)("p",null,"Let's take a quick look at what each of these provides, along with resource links for deeper dives that you can explore on your own. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration-overview#example-scenarios"},"example scenarios")," to get a better understanding of which file (or concept) you need to focus on, for specific scenarios."),(0,o.kt)("h2",{id:"config-application"},"Config: Application"),(0,o.kt)("p",null,"Application behavior is configured using the ",(0,o.kt)("em",{parentName:"p"},"staticwebapp.config.json")," file located in the folder defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"app_location"),". Here are a ",(0,o.kt)("em",{parentName:"p"},"subset")," of the properties and their purpose:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration#routes"},(0,o.kt)("strong",{parentName:"a"},'"routes"')),' - are an array of "route" objects that can each be associated with access rules ("allowedRoles"), actions ("redirect", "rewrite") - and request ("methods") and response ("headers","statusCode") properties.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration#fallback-routes"},(0,o.kt)("strong",{parentName:"a"},'"navigationFallback"'))," supports applications that rely on client-side routing by providing a server-side fallback route which serves the required page, with filters to control usage.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration#response-overrides"},(0,o.kt)("strong",{parentName:"a"},'"responseOverrides"'))," allows you to return a custom response instead of default HTTP error codes, for more user-friendly experiences.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration#platform"},(0,o.kt)("strong",{parentName:"a"},'"platform"'))," sets platform-specific configurations like ",(0,o.kt)("em",{parentName:"p"},"apiRuntime")," for API language runtime version."),(0,o.kt)("p",{parentName:"li"},"There are also configuration properties for authentication, networking, global headers, custom MIME types and more. Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration#file-location"},"documentation")," for the complete list and scan this ",(0,o.kt)("strong",{parentName:"p"},"example")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/configuration#example-configuration-file"},"staticwebapp.config.json")," to understand how these are defined."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "routes": [\n    {\n      "route": "/profile*",\n      "allowedRoles": ["authenticated"]\n    },\n    {\n      "route": "/admin/index.html",\n      "allowedRoles": ["administrator"]\n    },\n    {\n      "route": "/images/*",\n      "headers": {\n        "cache-control": "must-revalidate, max-age=15770000"\n      }\n    },\n    {\n      "route": "/api/*",\n      "methods": ["GET"],\n      "allowedRoles": ["registeredusers"]\n    },\n    {\n      "route": "/api/*",\n      "methods": ["PUT", "POST", "PATCH", "DELETE"],\n      "allowedRoles": ["administrator"]\n    },\n    {\n      "route": "/api/*",\n      "allowedRoles": ["authenticated"]\n    },\n    {\n      "route": "/customers/contoso*",\n      "allowedRoles": ["administrator", "customers_contoso"]\n    },\n    {\n      "route": "/login",\n      "rewrite": "/.auth/login/github"\n    },\n    {\n      "route": "/.auth/login/twitter",\n      "statusCode": 404\n    },\n    {\n      "route": "/logout",\n      "redirect": "/.auth/logout"\n    },\n    {\n      "route": "/calendar*",\n      "rewrite": "/calendar.html"\n    },\n    {\n      "route": "/specials",\n      "redirect": "/deals",\n      "statusCode": 301\n    }\n  ],\n  "navigationFallback": {\n    "rewrite": "index.html",\n    "exclude": ["/images/*.{png,jpg,gif}", "/css/*"]\n  },\n  "responseOverrides": {\n    "400": {\n      "rewrite": "/invalid-invitation-error.html"\n    },\n    "401": {\n      "redirect": "/login",\n      "statusCode": 302\n    },\n    "403": {\n      "rewrite": "/custom-forbidden-page.html"\n    },\n    "404": {\n      "rewrite": "/404.html"\n    }\n  },\n  "globalHeaders": {\n    "content-security-policy": "default-src https: \'unsafe-eval\' \'unsafe-inline\'; object-src \'none\'"\n  },\n  "mimeTypes": {\n    ".json": "text/json"\n  }\n}\n')),(0,o.kt)("h2",{id:"config-build"},"Config: Build"),(0,o.kt)("p",null,"Azure Static Web Apps build workflows are powered either by GitHub Actions (in a file named something like ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/azure-static-web-apps-xxx.yml"),") or by Azure Pipelines (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file). "),(0,o.kt)("p",null,"The main settings you need to be familiar with are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app_location")," - folder for application source code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api_location")," - folder with API functions source code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"output_location")," - where are build files generated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app_build_command")," - custom app build command (for Node.js apps)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api_build_command")," - custom api build command (for Node.js apps)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skip_app_build")," - flag to skip app build step (if true)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skip_api_build")," - flag to skip api build step (if true)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build_timeout_in_minutes")," - defaults to 15 (customize to extend)")),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=azure-devops#environment-variables"},(0,o.kt)("strong",{parentName:"a"},"this document"))," to learn how each of those properties can be customized and used effectively."),(0,o.kt)("h2",{id:"config-environment"},"Config: Environment"),(0,o.kt)("p",null,"Your application behavior configuration values may change based on the runtime context. By setting values in ",(0,o.kt)("em",{parentName:"p"},"environment variables"),", you can decouple definition of values from their usage within application code. We refer to these environment variables as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/application-settings"},(0,o.kt)("strong",{parentName:"a"},"application settings"))," which are copied to both staging and production environments. "),(0,o.kt)("p",null,"But where are they ",(0,o.kt)("em",{parentName:"p"},"defined?")," That depends on the development stage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/azure/static-web-apps/application-settings#configure-api-application-settings-for-local-development"},"Local Development:"))," When developing your app, you can use a local settings file that is not tracked by GitHub so sensitive information is not leaked. ",(0,o.kt)("strong",{parentName:"li"},"Azure Functions")," uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"api/local.settings.json")," file to store relevant app settings - and watch out for a special 2-part series of posts in Week 3 where we cover the local settings file used by the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli"},(0,o.kt)("strong",{parentName:"a"},"Static Web Apps CLI"))," for a simpler, unified local development experience."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/static-web-apps/application-settings#configure-application-settings"},(0,o.kt)("strong",{parentName:"a"},"Staging/Production:"))," You can define and configure these application settings in the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"Azure Portal")," via the browser, or by using the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/cli/azure/"},"Azure CLI")," (see the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/cli/azure/staticwebapp/appsettings?view=azure-cli-latest"},(0,o.kt)("inlineCode",{parentName:"a"},"az staticwebapp appsettings"))," documentation), to create and manage your application settings. These will be encrypted, and copied to staging and production environments.")),(0,o.kt)("p",null,"Learn more about how you can configure application settings in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/application-settings#configure-application-settings"},"the documentation"),"."),(0,o.kt)("h2",{id:"how-tos-watch-it"},"How-Tos: Watch It!"),(0,o.kt)("p",null,"Want to see how application behavior configuration in action? Check out these two videos from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/shows/azure-tips-and-tricks-static-web-apps/"},"Azure Static Web Apps: Tips & Tricks")," series."),(0,o.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=how-to-configure-routing-in-azure-static-web-apps-6-of-16--azure-tips-and-tricks-static-web-apps"}),(0,o.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=how-to-configure-authorization-in-azure-static-web-apps-9-of-16--azure-tips-and-tricks-static-web-ap"}),(0,o.kt)("h2",{id:"exercise-explore-it"},"Exercise: Explore It!"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinedied/swa-bank"},"SWA Bank")," is a Static Web App application developed as a solution for one of the projects in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Web-Dev-For-Beginners"},"Web Dev For Beginners")," curriculum. "),(0,o.kt)("p",null,"It was recently updated to reflect best practices. Explore the configuration files in the project - and see if you understand how they customize the application behavior and build process. ",(0,o.kt)("strong",{parentName:"p"},"Then revisit it in week 3 when we discuss developer tools")," to understand how local settings are configured and used with the Static Web Apps CLI (",(0,o.kt)("inlineCode",{parentName:"p"},"swa"),") tool for local development "),(0,o.kt)("h2",{id:"useful-resources"},"Useful Resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/static-web-apps/configuration-overview"},"Configuration Overview")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/static-web-apps/configuration"},"Application Configuration: staticwebapp.config.json")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions"},"Build Configuration: Actions or Pipelines YAML")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com//azure/static-web-apps/application-settings"},"Environment Configurations: For Backends")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/static-web-apps/application-settings"},"Configure Application Settings")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sinedied/swa-bank"},"SWA Bank Repo")," - a Static Web Apps project to explore and learn from.")))}d.isMDXComponent=!0},2605:function(e,t,a){t.Z=a.p+"assets/images/04-banner-b63fcb77118b4344c70f7ed8ad277ae3.png"}}]);