"use strict";(self.webpackChunksmart_web=self.webpackChunksmart_web||[]).push([[586],{"./src/ui/sections/Header/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Header_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),navigation=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.2.9_@jest+globals@29.7.0_@types+jest@29.5.12_esbuild@0.21.5_jest@29.7.0_@_duz2hux2yyao7mzcvehydfmvru/node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),constants=__webpack_require__("./src/constants/index.ts"),common=__webpack_require__("./src/ui/components/common/index.ts"),NavItem=__webpack_require__("./src/ui/components/NavItem/index.tsx"),useOutsideClick=__webpack_require__("./src/hooks/useOutsideClick.ts");const Header=()=>{const router=(0,navigation.useRouter)(),menuRef=(0,react.useRef)(null),[menuOpen,setMenuOpen]=(0,react.useState)(!1);return(0,useOutsideClick.j)({ref:menuRef,handler:()=>setMenuOpen(!1)}),(0,jsx_runtime.jsxs)("header",{ref:menuRef,className:"bg-white lg:container mt-6 mx-auto flex items-center justify-between flex-row relative lg:mb-0 mb-5",children:[(0,jsx_runtime.jsx)("div",{className:"cursor-pointer",onClick:()=>{router.push("/")},children:(0,jsx_runtime.jsx)(common.$_,{src:"/logo.svg",alt:"logo",fixedSize:{width:160,height:84},priority:!0})}),(0,jsx_runtime.jsx)("div",{className:"md:hidden flex items-center cursor-pointer",onClick:()=>{setMenuOpen(!menuOpen)},children:(0,jsx_runtime.jsx)(common.$_,{src:"/menu.svg",alt:"menu",fixedSize:{width:16,height:14},priority:!0})}),(0,jsx_runtime.jsxs)("nav",{className:`\n          md:flex gap-7 ${menuOpen?"block":"hidden"}\n          md:relative absolute top-full left-0 w-full md:w-auto z-10 transition-all ease-in-out\n          bg-white p-5 drop-shadow-lg md:drop-shadow-none lg:mr-28 md:mr-8\n        `,children:[(0,jsx_runtime.jsx)(NavItem.j,{name:"home",url:constants.hv.HOME}),(0,jsx_runtime.jsx)(NavItem.j,{name:"places",url:constants.hv.PLACES}),(0,jsx_runtime.jsx)(NavItem.j,{name:"products",url:constants.hv.PRODUCTS}),(0,jsx_runtime.jsx)(NavItem.j,{name:"projects",url:constants.hv.PROJECTS}),(0,jsx_runtime.jsx)(NavItem.j,{name:"portfolio",url:constants.hv.PORTFOLIO}),(0,jsx_runtime.jsx)(NavItem.j,{name:"about us",url:constants.hv.ABOUT_US})]})]})};Header.__docgenInfo={description:"",methods:[],displayName:"Header"};const Header_stories={component:Header,parameters:{nextjs:{appDirectory:!0}}},Default={args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}}},"./src/ui/components/NavItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>NavItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.2.7_@babel+core@7.25.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);const NavItem=({name,url})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:url||"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-bold lg:text-lg md:text-base text-xs hover:text-second uppercase mb-3",children:name})});NavItem.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{name:{required:!0,tsType:{name:"string"},description:""},url:{required:!1,tsType:{name:"string"},description:""}}}}}]);