"use strict";(self.webpackChunksmart_web=self.webpackChunksmart_web||[]).push([[932],{"./src/ui/components/common/StatsRow/StatsRow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/ui/components/common/StatsRow/index.tsx").o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{views:{description:"Number of views",control:{type:"number"}},favorite:{description:"Number of favorites",control:{type:"number"}},comment:{description:"Number of comments",control:{type:"number"}},isColumn:{description:"Display in column layout",control:{type:"boolean"}},viewIcon:{description:"Icon for views",control:{type:"text"}},favoriteIcon:{description:"Icon for favorites",control:{type:"text"}},commentIcon:{description:"Icon for comments",control:{type:"text"}}}},Default={args:{views:120,favorite:30,comment:15,isColumn:!1,viewIcon:"/view-dark.svg",favoriteIcon:"/likes.svg",commentIcon:"/comments.svg"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    views: 120,\n    favorite: 30,\n    comment: 15,\n    isColumn: false,\n    viewIcon: '/view-dark.svg',\n    favoriteIcon: '/likes.svg',\n    commentIcon: '/comments.svg'\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/ui/components/common/StatsRow/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>StatsRow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.2.9_@jest+globals@29.7.0_@types+jest@29.5.12_esbuild@0.21.5_jest@29.7.0_@_duz2hux2yyao7mzcvehydfmvru/node_modules/@storybook/nextjs/dist/images/next-image.mjs");const StatsRow=({views,favorite,comment,isColumn,viewIcon,favoriteIcon,commentIcon})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("flex px-3 justify-between md:items-center w-full",{"flex-col md:hidden gap-2":isColumn}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:viewIcon,alt:"view icon",width:20,height:20}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("xl:w-10 w-8 truncate overflow-hidden",isColumn&&"w-full text-white"),children:views})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:favoriteIcon,alt:"likes icon",width:15,height:15}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("xl:w-10 w-8 truncate overflow-hidden",isColumn&&"w-full text-white"),children:favorite})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__.A,{src:commentIcon,alt:"comments icon",width:15,height:15}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.$)("xl:w-10 w-8 truncate overflow-hidden",isColumn&&"w-full text-white"),children:comment})]})]});StatsRow.__docgenInfo={description:"",methods:[],displayName:"StatsRow",props:{views:{required:!0,tsType:{name:"number"},description:""},favorite:{required:!0,tsType:{name:"number"},description:""},comment:{required:!0,tsType:{name:"number"},description:""},isColumn:{required:!1,tsType:{name:"boolean"},description:""},viewIcon:{required:!0,tsType:{name:"string"},description:""},favoriteIcon:{required:!0,tsType:{name:"string"},description:""},commentIcon:{required:!0,tsType:{name:"string"},description:""}}}},"./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx})}}]);